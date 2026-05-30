export const navLinks = [
	{ label: 'Home', href: '#home' },
	{ label: 'Features', href: '#features' },
	{ label: 'Pricing', href: '#pricing' },
	{ label: 'About', href: '#about' },
	{ label: 'FAQ', href: '#faq' },
	{ label: 'Download', href: '#download' }
];

export const trustBadges = [
	'Localized for Philippine farming',
	'Department of Agriculture market insights',
	'AI-powered guidance',
	'Smart climate alerts'
];

export const problems = [
	'Unsure what crops to plant this season',
	'Weather changes that disrupt farm work',
	'Selling too low because prices are unclear',
	'Scattered advice that is not local enough',
	'Hard-to-track crop progress and harvest timing',
	'No single assistant for daily farm decisions'
];

export const solutions = [
	'Localized crop recommendations',
	'Growth monitoring and harvest estimates',
	'Personalized tasks and climate reminders',
	'Market price views based on Department of Agriculture data',
	'Community support and expert-backed answers',
	'Downloadable farming activity reports'
];

export const phases = [
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
];

export const anieHighlights = [
	'Answers farming questions conversationally',
	'Recommends crops based on local conditions',
	'Turns data into clear action items',
	'Helps prepare for storms and climate risks',
	'Supports better market decisions'
];

export const features = [
	{
		title: 'Crop Recommendation',
		question: 'What should I plant this season?',
		description:
			'Anie asks about location, season, soil type, light, farm size, and purpose, then suggests crops with simple growing guides.',
		label: 'Crop Recommendation Screenshot',
		benefits: ['Localized choices', 'Less guesswork', 'Beginner-friendly guides']
	},
	{
		title: 'Crop Monitoring',
		question: 'When should I harvest my crop?',
		description:
			'Farmers log crops and planting dates, then Agrisync builds growth progress, estimated harvest windows, and activity timelines.',
		label: 'Crop Monitoring Screenshot',
		benefits: ['Harvest planning', 'Crop progress visibility', 'Smarter schedules']
	},
	{
		title: 'Personalized Action Items',
		question: 'How do I manage my farm and prepare for disasters?',
		description:
			'Operational reminders, weather warnings, climate alerts, market prompts, and crop care tasks arrive when they matter.',
		label: 'Action Items Screenshot',
		benefits: ['Daily farm tasks', 'Storm preparation', 'Market reminders']
	},
	{
		title: 'Market Views',
		question: 'How do I price my crops fairly?',
		description:
			'Compare crop prices against Department of Agriculture-based market data, including average, highest, lowest, and historical trends.',
		label: 'Market Views Screenshot',
		benefits: ['Avoid underpricing', 'Better profit choices', 'Market awareness']
	},
	{
		title: 'Generated Activity Reports',
		question: 'How do I review my farm activity?',
		description:
			'Create PDF or email-ready reports with managed crops, completed tasks, Anie conversations, timelines, and date ranges.',
		label: 'Reports Screenshot',
		benefits: ['Farm documentation', 'Productivity tracking', 'History review']
	},
	{
		title: 'Community Support',
		question: 'Where can I ask and learn with others?',
		description:
			'Farmers can access community discussions, peer support, shared advice, and expert-backed insights that Anie can reference.',
		label: 'Community Screenshot',
		benefits: ['Shared advice', 'Less isolation', 'Relevant discussions']
	}
];

export const pricingPlans = [
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
];

export const testimonials = [
	{
		quote: 'Agrisync helped me know the right time to harvest my crops.',
		name: 'Mang Leo',
		detail: 'Vegetable farmer, Nueva Ecija',
		image: '/illustrations/mang-leo.webp'
	},
	{
		quote: 'The market prices helped me avoid selling too low.',
		name: 'Aling Tess',
		detail: 'Rice and corn grower, Isabela',
		image: '/illustrations/aling-tess.webp'
	},
	{
		quote: 'Anie feels like a farming partner.',
		name: 'Jun Carlo',
		detail: 'Young farmer, Laguna',
		image: '/illustrations/jun-carlo.webp'
	}
];

export const faqs = [
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
];

export const footerLinks = [
	{ label: 'Privacy Policy', href: '/privacy-policy' },
	{ label: 'Terms of Service', href: '/terms-of-service' },
	{ label: 'Contact', href: '/contact' }
];
