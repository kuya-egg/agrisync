export interface LegalSection {
	title: string;
	body: string[];
}

export interface LegalPageContent {
	title: string;
	eyebrow: string;
	description: string;
	sections: LegalSection[];
	updated: string;
}

export const privacyPolicy: LegalPageContent = {
	title: 'Privacy Policy',
	eyebrow: 'Agrisync Privacy',
	description:
		'This Privacy Policy explains how Agrisync handles information for our smart farming assistant, landing page, and future app experience.',
	updated: 'May 16, 2026',
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
	]
};

export const termsOfService: LegalPageContent = {
	title: 'Terms of Service',
	eyebrow: 'Agrisync Terms',
	description:
		'These Terms of Service describe the basic rules for using Agrisync and its smart farming assistance features.',
	updated: 'May 16, 2026',
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
	]
};
