import {
	anieHighlights,
	faqs,
	features,
	footerLinks,
	navLinks,
	phases,
	pricingPlans,
	problems,
	solutions,
	testimonials,
	trustBadges
} from './landing';
import { privacyPolicy, termsOfService } from './legal';
import type { LandingContent, LegalContent } from '$lib/types/content';

export const defaultSiteSettings = {
	siteName: 'Agrisync',
	tagline: 'Your Smart Farm Assistant',
	description:
		'Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance.',
	siteUrl: 'https://agrisync.online',
	ogImage: 'https://agrisync.online/og-image.png',
	contactEmail: 'hello@agrisync.ph',
	appleAppUrl: 'https://apps.apple.com/',
	googlePlayUrl: 'https://play.google.com/store/apps'
};

export const defaultLandingContent: LandingContent = {
	settings: defaultSiteSettings,
	navLinks,
	footerLinks,
	hero: {
		eyebrow: 'Your Smart Farm Assistant',
		title: 'Grow Smarter. Earn Better. Live Better.',
		body: defaultSiteSettings.description,
		image: '/illustrations/agrisync-farm-hero.png'
	},
	trustBadges,
	about: {
		eyebrow: 'Problem to Solution',
		title: 'Less Guesswork. More Guidance.',
		body: 'Agrisync turns scattered advice into a calm farm companion that helps farmers choose, care, prepare, and sell.'
	},
	problems,
	solutions,
	phasesIntro: {
		eyebrow: 'The Four Farming Phases',
		title: 'From first plan to fair price.'
	},
	phases,
	anie: {
		eyebrow: 'Meet Anie',
		title: 'Your virtual farm assistant.',
		body: 'Anie helps guide your farming journey from crop planning to harvesting and selling with simple, friendly answers.',
		image: '/illustrations/anie.webp'
	},
	anieHighlights,
	featuresIntro: {
		eyebrow: 'Feature Showcase',
		title: 'Built for the full farming cycle.'
	},
	features,
	pricingIntro: {
		eyebrow: 'Pricing',
		title: 'Simple plans for real farms.'
	},
	pricingPlans,
	testimonialsIntro: {
		eyebrow: 'Farmer Stories',
		title: 'Trust that feels close to home.'
	},
	testimonials,
	faqIntro: {
		eyebrow: 'FAQ',
		title: 'Helpful answers, no heavy jargon.'
	},
	faqs,
	download: {
		eyebrow: 'Download Agrisync',
		title: 'Start Growing Smarter Today',
		body: 'Download Agrisync and get your AI-powered farming assistant for planning, monitoring, alerts, reports, and fairer selling decisions.'
	}
};

export const defaultLegalContent: Record<string, LegalContent> = {
	'privacy-policy': privacyPolicy,
	'terms-of-service': termsOfService
};
