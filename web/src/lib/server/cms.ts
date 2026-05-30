import { defaultLandingContent, defaultLegalContent, defaultSiteSettings } from '$lib/data/content';
import type {
	Faq,
	Feature,
	LandingContent,
	LandingSectionContent,
	LegalContent,
	Phase,
	PricingPlan,
	Testimonial
} from '$lib/types/content';
import type PocketBase from 'pocketbase';
import type { RecordModel } from 'pocketbase';
import { createPocketBase, pocketbaseUrl } from './pocketbase';

const published = 'published=true';

const collectionUrl = (collection: string) =>
	`${pocketbaseUrl}/api/collections/${collection}/records`;

const fileUrl = (pb: PocketBase, record: RecordModel, field: string) => {
	const fileName = record[field];
	if (typeof fileName !== 'string' || !fileName) return undefined;
	return pb.files.getURL(record, fileName);
};

const getFullList = async (pb: PocketBase, collection: string, options = {}) =>
	pb.collection(collection).getFullList<RecordModel>({
		sort: 'sort_order',
		filter: published,
		...options
	});

const asSection = (
	section: RecordModel | undefined,
	fallback: LandingSectionContent,
	pb?: PocketBase
): LandingSectionContent => ({
	eyebrow: String(section?.eyebrow || fallback.eyebrow),
	title: String(section?.title || fallback.title),
	body: String(section?.body || fallback.body),
	image: pb && section ? fileUrl(pb, section, 'image_path') || fallback.image : fallback.image
});

const bySlug = (records: RecordModel[]) =>
	new Map(records.map((record) => [String(record.slug), record]));

const useFallbackWhenEmpty = <T>(items: T[], fallback: T[]) =>
	items.length > 0 ? items : fallback;

const groupTextByRelation = (records: RecordModel[], relationField: string) => {
	const groups = new Map<string, string[]>();
	for (const record of records) {
		const parentId = String(record[relationField] || '');
		if (!parentId) continue;
		const group = groups.get(parentId) ?? [];
		group.push(String(record.text || ''));
		groups.set(parentId, group);
	}
	return groups;
};

const dateFormatter = new Intl.DateTimeFormat('en-US', {
	month: 'long',
	day: 'numeric',
	year: 'numeric',
	timeZone: 'UTC'
});

const latestUpdatedDate = (records: RecordModel[], fallback: string) => {
	const latest = records
		.map((record) => new Date(String(record.updated || record.created || '')).getTime())
		.filter((time) => Number.isFinite(time))
		.sort((a, b) => b - a)[0];

	return latest ? dateFormatter.format(new Date(latest)) : fallback;
};

export const loadLandingContent = async (): Promise<LandingContent> => {
	const pb = createPocketBase();

	try {
		const [
			settingsRecord,
			navRecords,
			sectionRecords,
			trustBadgeRecords,
			problemRecords,
			solutionRecords,
			phaseRecords,
			anieHighlightRecords,
			featureRecords,
			featureBenefitRecords,
			pricingPlanRecords,
			pricingPlanFeatureRecords,
			testimonialRecords,
			faqRecords
		] = await Promise.all([
			pb.collection('site_settings').getFirstListItem<RecordModel>(published),
			getFullList(pb, 'navigation_links'),
			getFullList(pb, 'landing_sections'),
			getFullList(pb, 'hero_trust_badges'),
			getFullList(pb, 'about_problems'),
			getFullList(pb, 'about_solutions'),
			getFullList(pb, 'farming_phases'),
			getFullList(pb, 'anie_highlights'),
			getFullList(pb, 'feature_cards'),
			getFullList(pb, 'feature_benefits'),
			getFullList(pb, 'pricing_plans'),
			getFullList(pb, 'pricing_plan_features'),
			getFullList(pb, 'testimonials'),
			getFullList(pb, 'faqs')
		]);

		const sections = bySlug(sectionRecords);
		const featureBenefits = groupTextByRelation(featureBenefitRecords, 'feature');
		const pricingFeatures = groupTextByRelation(pricingPlanFeatureRecords, 'plan');

		const settings = {
			siteName: String(settingsRecord.site_name || defaultSiteSettings.siteName),
			tagline: String(settingsRecord.tagline || defaultSiteSettings.tagline),
			description: String(settingsRecord.description || defaultSiteSettings.description),
			siteUrl: String(settingsRecord.site_url || defaultSiteSettings.siteUrl),
			ogImage: fileUrl(pb, settingsRecord, 'og_image_path') || defaultSiteSettings.ogImage,
			contactEmail: String(settingsRecord.contact_email || defaultSiteSettings.contactEmail),
			appleAppUrl: String(settingsRecord.apple_app_url || defaultSiteSettings.appleAppUrl),
			googlePlayUrl: String(settingsRecord.google_play_url || defaultSiteSettings.googlePlayUrl)
		};

		const features: Feature[] = featureRecords.map((record, index) => {
			const fallback = defaultLandingContent.features[index];
			return {
				title: String(record.title || fallback?.title || ''),
				question: String(record.question || fallback?.question || ''),
				description: String(record.description || fallback?.description || ''),
				label: String(record.label || fallback?.label || ''),
				benefits: featureBenefits.get(record.id) ?? fallback?.benefits ?? [],
				image: fileUrl(pb, record, 'image_path') || fallback?.image
			};
		});

		const pricingPlans: PricingPlan[] = pricingPlanRecords.map((record, index) => {
			const fallback = defaultLandingContent.pricingPlans[index];
			return {
				name: String(record.name || fallback?.name || ''),
				price: String(record.price || fallback?.price || ''),
				annualPrice: String(record.annual_price || ''),
				target: String(record.target || fallback?.target || ''),
				cta: String(record.cta || fallback?.cta || ''),
				recommended: Boolean(record.recommended),
				features: pricingFeatures.get(record.id) ?? fallback?.features ?? []
			};
		});

		return {
			settings,
			navLinks: navRecords.map((record) => ({
				label: String(record.label || ''),
				href: String(record.href || '/')
			})),
			footerLinks: defaultLandingContent.footerLinks,
			hero: asSection(sections.get('hero'), defaultLandingContent.hero, pb),
			trustBadges: useFallbackWhenEmpty(
				trustBadgeRecords.map((record) => String(record.label || '')),
				defaultLandingContent.trustBadges
			),
			about: asSection(sections.get('about'), defaultLandingContent.about),
			problems: useFallbackWhenEmpty(
				problemRecords.map((record) => String(record.text || '')),
				defaultLandingContent.problems
			),
			solutions: useFallbackWhenEmpty(
				solutionRecords.map((record) => String(record.text || '')),
				defaultLandingContent.solutions
			),
			phasesIntro: {
				eyebrow: String(
					sections.get('phases')?.eyebrow || defaultLandingContent.phasesIntro.eyebrow
				),
				title: String(sections.get('phases')?.title || defaultLandingContent.phasesIntro.title)
			},
			phases: useFallbackWhenEmpty(
				phaseRecords.map<Phase>((record, index) => {
					const fallback = defaultLandingContent.phases[index];
					return {
						phase: String(record.phase_label || fallback?.phase || ''),
						title: String(record.title || fallback?.title || ''),
						question: String(record.question || fallback?.question || ''),
						feature: String(record.feature_name || fallback?.feature || ''),
						description: String(record.description || fallback?.description || '')
					};
				}),
				defaultLandingContent.phases
			),
			anie: asSection(sections.get('anie'), defaultLandingContent.anie, pb),
			anieHighlights: useFallbackWhenEmpty(
				anieHighlightRecords.map((record) => String(record.text || '')),
				defaultLandingContent.anieHighlights
			),
			featuresIntro: {
				eyebrow: String(
					sections.get('features')?.eyebrow || defaultLandingContent.featuresIntro.eyebrow
				),
				title: String(sections.get('features')?.title || defaultLandingContent.featuresIntro.title)
			},
			features: useFallbackWhenEmpty(features, defaultLandingContent.features),
			pricingIntro: {
				eyebrow: String(
					sections.get('pricing')?.eyebrow || defaultLandingContent.pricingIntro.eyebrow
				),
				title: String(sections.get('pricing')?.title || defaultLandingContent.pricingIntro.title)
			},
			pricingPlans: useFallbackWhenEmpty(pricingPlans, defaultLandingContent.pricingPlans),
			testimonialsIntro: {
				eyebrow: String(
					sections.get('testimonials')?.eyebrow || defaultLandingContent.testimonialsIntro.eyebrow
				),
				title: String(
					sections.get('testimonials')?.title || defaultLandingContent.testimonialsIntro.title
				)
			},
			testimonials: useFallbackWhenEmpty(
				testimonialRecords.map<Testimonial>((record, index) => {
					const fallback = defaultLandingContent.testimonials[index];
					return {
						quote: String(record.quote || fallback?.quote || ''),
						name: String(record.name || fallback?.name || ''),
						detail: String(record.detail || fallback?.detail || ''),
						image: fileUrl(pb, record, 'image_path') || fallback?.image
					};
				}),
				defaultLandingContent.testimonials
			),
			faqIntro: {
				eyebrow: String(sections.get('faq')?.eyebrow || defaultLandingContent.faqIntro.eyebrow),
				title: String(sections.get('faq')?.title || defaultLandingContent.faqIntro.title)
			},
			faqs: useFallbackWhenEmpty(
				faqRecords.map<Faq>((record, index) => {
					const fallback = defaultLandingContent.faqs[index];
					return {
						question: String(record.question || fallback?.question || ''),
						answer: String(record.answer || fallback?.answer || '')
					};
				}),
				defaultLandingContent.faqs
			),
			download: asSection(sections.get('download'), defaultLandingContent.download)
		};
	} catch (error) {
		console.warn(`CMS landing content unavailable from ${collectionUrl('site_settings')}`, error);
		return defaultLandingContent;
	}
};

export const loadLegalContent = async (
	slug: 'privacy-policy' | 'terms-of-service'
): Promise<LegalContent> => {
	const pb = createPocketBase();
	const collection =
		slug === 'privacy-policy' ? 'privacy_policy_sections' : 'terms_of_service_sections';
	const fallback = defaultLegalContent[slug];

	try {
		const [settingsRecord, records] = await Promise.all([
			pb.collection('site_settings').getFirstListItem<RecordModel>(published),
			getFullList(pb, collection)
		]);
		const contactEmail = String(settingsRecord.contact_email || defaultSiteSettings.contactEmail);

		if (records.length === 0) {
			return {
				...fallback,
				contactEmail
			};
		}

		return {
			...fallback,
			contactEmail,
			updated: latestUpdatedDate(records, fallback.updated),
			sections: records.map((record) => ({
				title: String(record.title || ''),
				body: [record.description, record.body]
					.filter((value): value is string => typeof value === 'string' && value.length > 0)
					.map((value) => value)
			}))
		};
	} catch (error) {
		console.warn(`CMS legal content unavailable from ${collectionUrl(collection)}`, error);
		return {
			...fallback,
			contactEmail: defaultSiteSettings.contactEmail
		};
	}
};
