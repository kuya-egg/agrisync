import type {
	faqs,
	features,
	footerLinks,
	navLinks,
	phases,
	pricingPlans,
	testimonials
} from '$lib/data/landing';
import type { LegalPageContent } from '$lib/data/legal';

export type NavLink = (typeof navLinks)[number];
export type FooterLink = (typeof footerLinks)[number];
export type Phase = (typeof phases)[number];
export type Feature = (typeof features)[number] & { image?: string };
export type PricingPlan = (typeof pricingPlans)[number] & { annualPrice?: string };
export type Testimonial = (typeof testimonials)[number];
export type Faq = (typeof faqs)[number];

export interface SiteSettings {
	siteName: string;
	tagline: string;
	description: string;
	siteUrl: string;
	ogImage: string;
	contactEmail: string;
	appleAppUrl: string;
	googlePlayUrl: string;
}

export interface LandingSectionContent {
	eyebrow: string;
	title: string;
	body: string;
	image?: string;
}

export interface LandingContent {
	settings: SiteSettings;
	navLinks: NavLink[];
	footerLinks: FooterLink[];
	hero: LandingSectionContent;
	trustBadges: string[];
	about: LandingSectionContent;
	problems: string[];
	solutions: string[];
	phasesIntro: Pick<LandingSectionContent, 'eyebrow' | 'title'>;
	phases: Phase[];
	anie: LandingSectionContent;
	anieHighlights: string[];
	featuresIntro: Pick<LandingSectionContent, 'eyebrow' | 'title'>;
	features: Feature[];
	pricingIntro: Pick<LandingSectionContent, 'eyebrow' | 'title'>;
	pricingPlans: PricingPlan[];
	testimonialsIntro: Pick<LandingSectionContent, 'eyebrow' | 'title'>;
	testimonials: Testimonial[];
	faqIntro: Pick<LandingSectionContent, 'eyebrow' | 'title'>;
	faqs: Faq[];
	download: LandingSectionContent;
}

export type LegalContent = LegalPageContent;
