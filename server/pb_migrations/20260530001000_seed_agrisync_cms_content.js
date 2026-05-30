const createRecord = (app, collectionName, data) => {
	const collection = app.findCollectionByNameOrId(collectionName);
	const record = new Record(collection);

	for (const [key, value] of Object.entries(data)) {
		record.set(key, value);
	}

	app.save(record);
};

migrate(
	(app) => {
		createRecord(app, 'site_settings', {
			slug: 'default',
			site_name: 'Agrisync',
			tagline: 'Your Smart Farm Assistant',
			description:
				'Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance.',
			site_url: 'https://agrisync.online',
			og_image_path: '/og-image.png',
			contact_email: 'hello@agrisync.ph',
			app_store_links: {
				apple: 'https://apps.apple.com/',
				google: 'https://play.google.com/store/apps'
			},
			published: true
		});

		for (const [index, link] of [
			{ label: 'Home', href: '#home' },
			{ label: 'Features', href: '#features' },
			{ label: 'Pricing', href: '#pricing' },
			{ label: 'About', href: '#about' },
			{ label: 'FAQ', href: '#faq' },
			{ label: 'Download', href: '#download' }
		].entries()) {
			createRecord(app, 'navigation_links', {
				...link,
				sort_order: index + 1,
				published: true
			});
		}

		for (const [index, section] of [
			{
				slug: 'hero',
				eyebrow: 'Your Smart Farm Assistant',
				title: 'Grow Smarter. Earn Better. Live Better.',
				body: 'Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance.',
				image_path: '/illustrations/agrisync-farm-hero.png',
				content: {
					trustBadges: [
						'Localized for Philippine farming',
						'Department of Agriculture market insights',
						'AI-powered guidance',
						'Smart climate alerts'
					]
				}
			},
			{
				slug: 'about',
				eyebrow: 'Problem to Solution',
				title: 'Less Guesswork. More Guidance.',
				body: 'Agrisync turns scattered advice into a calm farm companion that helps farmers choose, care, prepare, and sell.',
				content: {
					problems: [
						'Unsure what crops to plant this season',
						'Weather changes that disrupt farm work',
						'Selling too low because prices are unclear',
						'Scattered advice that is not local enough',
						'Hard-to-track crop progress and harvest timing',
						'No single assistant for daily farm decisions'
					],
					solutions: [
						'Localized crop recommendations',
						'Growth monitoring and harvest estimates',
						'Personalized tasks and climate reminders',
						'Market price views based on Department of Agriculture data',
						'Community support and expert-backed answers',
						'Downloadable farming activity reports'
					]
				}
			},
			{
				slug: 'phases',
				eyebrow: 'The Four Farming Phases',
				title: 'From first plan to fair price.',
				content: {
					items: [
						{
							phase: 'Phase 1',
							title: 'Crop Planning',
							question: 'What should I plant this season?',
							feature: 'Crop Recommendation',
							description:
								'Agrisync helps farmers decide what to plant based on season, location, farm conditions, and demand.'
						},
						{
							phase: 'Phase 2',
							title: 'Planting Crop',
							question: 'When should I harvest my crop?',
							feature: 'Crop Monitoring',
							description:
								'Planting dates, crop stages, and GDD estimates become simple timelines farmers can follow.'
						},
						{
							phase: 'Phase 3',
							title: 'Monitoring & Maintenance',
							question: 'How do I manage my farm and prepare for disasters?',
							feature: 'Personalized Action Items',
							description:
								'Daily reminders, operational tasks, and climate alerts keep farmers ready before problems grow.'
						},
						{
							phase: 'Phase 4',
							title: 'Harvesting & Selling',
							question: 'How do I price my crops fairly?',
							feature: 'Market Views',
							description:
								'Department of Agriculture-based price views help farmers compare prices and sell with more confidence.'
						}
					]
				}
			},
			{
				slug: 'anie',
				eyebrow: 'Meet Anie',
				title: 'Your virtual farm assistant.',
				body: 'Anie helps guide your farming journey from crop planning to harvesting and selling with simple, friendly answers.',
				image_path: '/illustrations/anie.webp',
				content: {
					highlights: [
						'Answers farming questions conversationally',
						'Recommends crops based on local conditions',
						'Turns data into clear action items',
						'Helps prepare for storms and climate risks',
						'Supports better market decisions'
					]
				}
			},
			{
				slug: 'download',
				eyebrow: 'Download Agrisync',
				title: 'Start Growing Smarter Today',
				body: 'Download Agrisync and get your AI-powered farming assistant for planning, monitoring, alerts, reports, and fairer selling decisions.',
				content: {
					badges: {
						apple: '/logos/app-store-badge.svg',
						google: '/logos/google-play-badge.png'
					}
				}
			}
		].entries()) {
			createRecord(app, 'landing_sections', {
				...section,
				sort_order: index + 1,
				published: true
			});
		}

		for (const [index, feature] of [
			{
				title: 'Crop Recommendation',
				question: 'What should I plant this season?',
				description:
					'Anie asks about location, season, soil type, light, farm size, and purpose, then suggests crops with simple growing guides.',
				label: 'Crop Recommendation Screenshot',
				benefits: ['Localized choices', 'Less guesswork', 'Beginner-friendly guides'],
				image_path: '/illustrations/crop-recommendation.webp'
			},
			{
				title: 'Crop Monitoring',
				question: 'When should I harvest my crop?',
				description:
					'Farmers log crops and planting dates, then Agrisync builds growth progress, estimated harvest windows, and activity timelines.',
				label: 'Crop Monitoring Screenshot',
				benefits: ['Harvest planning', 'Crop progress visibility', 'Smarter schedules'],
				image_path: '/illustrations/crop-monitoring.webp'
			},
			{
				title: 'Personalized Action Items',
				question: 'How do I manage my farm and prepare for disasters?',
				description:
					'Operational reminders, weather warnings, climate alerts, market prompts, and crop care tasks arrive when they matter.',
				label: 'Action Items Screenshot',
				benefits: ['Daily farm tasks', 'Storm preparation', 'Market reminders'],
				image_path: '/illustrations/action-items.webp'
			},
			{
				title: 'Market Views',
				question: 'How do I price my crops fairly?',
				description:
					'Compare crop prices against Department of Agriculture-based market data, including average, highest, lowest, and historical trends.',
				label: 'Market Views Screenshot',
				benefits: ['Avoid underpricing', 'Better profit choices', 'Market awareness'],
				image_path: '/illustrations/market-views.webp'
			},
			{
				title: 'Generated Activity Reports',
				question: 'How do I review my farm activity?',
				description:
					'Create PDF or email-ready reports with managed crops, completed tasks, Anie conversations, timelines, and date ranges.',
				label: 'Reports Screenshot',
				benefits: ['Farm documentation', 'Productivity tracking', 'History review'],
				image_path: '/illustrations/generated-reports.webp'
			},
			{
				title: 'Community Support',
				question: 'Where can I ask and learn with others?',
				description:
					'Farmers can access community discussions, peer support, shared advice, and expert-backed insights that Anie can reference.',
				label: 'Community Screenshot',
				benefits: ['Shared advice', 'Less isolation', 'Relevant discussions'],
				image_path: '/illustrations/community-support.webp'
			}
		].entries()) {
			createRecord(app, 'landing_sections', {
				slug: `feature-${index + 1}`,
				eyebrow: feature.question,
				title: feature.title,
				body: feature.description,
				image_path: feature.image_path,
				content: {
					label: feature.label,
					benefits: feature.benefits
				},
				sort_order: 20 + index,
				published: true
			});
		}

		for (const [index, plan] of [
			{
				name: 'Free',
				price: '₱0',
				target: 'New farmers and casual users.',
				cta: 'Start Free',
				recommended: false,
				features: [
					'Basic Anie access',
					'Limited crop recommendations',
					'Basic crop monitoring',
					'Community access',
					'Limited reports',
					'Basic market viewing'
				]
			},
			{
				name: 'Farmer Plus',
				price: '₱149/month',
				annual_price: '₱1,490/year',
				target: 'Active small-to-medium farmers.',
				cta: 'Upgrade to Plus',
				recommended: true,
				features: [
					'Unlimited crop recommendations',
					'Advanced crop monitoring',
					'Personalized action items',
					'Disaster & climate alerts',
					'Market intelligence',
					'Unlimited reports',
					'Priority AI assistance',
					'Full history access'
				]
			},
			{
				name: 'Cooperative',
				price: 'Custom',
				target: 'Farming groups and cooperatives.',
				cta: 'Contact Us',
				recommended: false,
				features: [
					'Multi-user access',
					'Shared monitoring dashboard',
					'Cooperative analytics',
					'Community management',
					'Admin tools',
					'Team activity reports',
					'Priority support'
				]
			}
		].entries()) {
			createRecord(app, 'pricing_plans', {
				...plan,
				sort_order: index + 1,
				published: true
			});
		}

		for (const [index, testimonial] of [
			{
				quote: 'Agrisync helped me know the right time to harvest my crops.',
				name: 'Mang Leo',
				detail: 'Vegetable farmer, Nueva Ecija',
				image_path: '/illustrations/mang-leo.webp'
			},
			{
				quote: 'The market prices helped me avoid selling too low.',
				name: 'Aling Tess',
				detail: 'Rice and corn grower, Isabela',
				image_path: '/illustrations/aling-tess.webp'
			},
			{
				quote: 'Anie feels like a farming partner.',
				name: 'Jun Carlo',
				detail: 'Young farmer, Laguna',
				image_path: '/illustrations/jun-carlo.webp'
			}
		].entries()) {
			createRecord(app, 'testimonials', {
				...testimonial,
				sort_order: index + 1,
				published: true
			});
		}

		for (const [index, faq] of [
			{
				question: 'What is Agrisync?',
				answer:
					'Agrisync is an AI-powered smart farming assistant that helps farmers plan, monitor, protect, and sell crops more effectively.'
			},
			{
				question: 'Is Agrisync only for experienced farmers?',
				answer: 'No. Agrisync is designed for both beginner and experienced farmers.'
			},
			{
				question: 'Does Agrisync work for Philippine farming?',
				answer: 'Yes. The recommendations and market data are localized for Philippine agriculture.'
			},
			{
				question: 'Does Agrisync require internet?',
				answer: 'Some features may require internet connectivity, especially AI and live alerts.'
			},
			{
				question: 'Can I use Agrisync for multiple crops?',
				answer: 'Yes. Users can manage and monitor multiple crops.'
			},
			{
				question: 'Are market prices real?',
				answer: 'Agrisync references Department of Agriculture-based market pricing data.'
			}
		].entries()) {
			createRecord(app, 'faqs', {
				...faq,
				sort_order: index + 1,
				published: true
			});
		}

		createRecord(app, 'legal_pages', {
			slug: 'privacy-policy',
			title: 'Privacy Policy',
			eyebrow: 'Agrisync Privacy',
			description:
				'This Privacy Policy explains how Agrisync handles information for our smart farming assistant, landing page, and future app experience.',
			updated_on: '2026-05-16 00:00:00.000Z',
			sections: [
				{
					title: 'Information We Collect',
					body: [
						'Agrisync may collect account details, farm profile information, crop records, location-based farming inputs, app activity, and messages sent to Anie so we can provide crop guidance, monitoring, alerts, reports, and support.',
						'When market, weather, or crop recommendation features are used, related inputs may be processed to produce localized suggestions and practical farming action items.'
					]
				},
				{
					title: 'How We Use Information',
					body: [
						'We use information to operate Agrisync, personalize farming recommendations, estimate crop timelines, create reports, improve product quality, and communicate service updates.',
						'We do not sell personal information. If data is shared with service providers, it is used only to help deliver Agrisync features and support.'
					]
				},
				{
					title: 'Data Choices',
					body: [
						'Users may request access, correction, or deletion of their information by contacting us. Some records may be retained when needed for security, legal, accounting, or service integrity purposes.',
						'Farmers should avoid sharing sensitive personal information inside community discussions unless it is necessary for the question being asked.'
					]
				},
				{
					title: 'Security',
					body: [
						'We use reasonable technical and organizational measures to protect user information. No online service can guarantee perfect security, but we work to keep farmer data handled with care.'
					]
				}
			],
			published: true
		});

		createRecord(app, 'legal_pages', {
			slug: 'terms-of-service',
			title: 'Terms of Service',
			eyebrow: 'Agrisync Terms',
			description:
				'These Terms of Service describe the basic rules for using Agrisync and its smart farming assistance features.',
			updated_on: '2026-05-16 00:00:00.000Z',
			sections: [
				{
					title: 'Using Agrisync',
					body: [
						'Agrisync provides AI-powered farming guidance, crop monitoring tools, market views, reports, and community features to support farmer decision-making.',
						'The service is meant to assist, not replace, professional agricultural judgment, local government advisories, weather bulletins, or expert advice.'
					]
				},
				{
					title: 'Farmer Responsibility',
					body: [
						'Users are responsible for checking recommendations against real farm conditions, local rules, supplier instructions, and safety practices before acting.',
						'Market prices, weather alerts, and growth estimates may change. Agrisync cannot guarantee crop yield, profit, harvest dates, or disaster outcomes.'
					]
				},
				{
					title: 'Acceptable Use',
					body: [
						'Users should not misuse the platform, attempt unauthorized access, disrupt service operation, upload harmful content, or share misleading information in community spaces.',
						'Community contributions should be respectful, practical, and relevant to farming support.'
					]
				},
				{
					title: 'Changes to the Service',
					body: [
						'Agrisync may update features, pricing, content, and these terms as the product grows. Continued use after updates means the revised terms apply.'
					]
				}
			],
			published: true
		});
	},
	(app) => {
		for (const collectionName of [
			'legal_pages',
			'faqs',
			'testimonials',
			'pricing_plans',
			'landing_sections',
			'navigation_links',
			'site_settings'
		]) {
			const collection = app.findCollectionByNameOrId(collectionName);
			const records = app.findRecordsByFilter(collection, 'created != ""');

			for (const record of records) {
				app.delete(record);
			}
		}
	}
);
