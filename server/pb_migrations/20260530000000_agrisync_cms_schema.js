migrate(
	(app) => {
		const publicPublished = 'published = true';

		const collections = [
			{
				type: 'base',
				name: 'site_settings',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'slug', required: true, presentable: true },
					{ type: 'text', name: 'site_name', required: true },
					{ type: 'text', name: 'tagline' },
					{ type: 'text', name: 'description', required: true },
					{ type: 'url', name: 'site_url' },
					{ type: 'text', name: 'og_image_path' },
					{ type: 'email', name: 'contact_email' },
					{ type: 'json', name: 'app_store_links' },
					{ type: 'bool', name: 'published' }
				],
				indexes: ['CREATE UNIQUE INDEX idx_site_settings_slug ON site_settings (slug)']
			},
			{
				type: 'base',
				name: 'navigation_links',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'label', required: true, presentable: true },
					{ type: 'text', name: 'href', required: true },
					{ type: 'number', name: 'sort_order', required: true },
					{ type: 'bool', name: 'published' }
				],
				indexes: ['CREATE INDEX idx_navigation_links_sort ON navigation_links (sort_order)']
			},
			{
				type: 'base',
				name: 'landing_sections',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'slug', required: true, presentable: true },
					{ type: 'text', name: 'eyebrow' },
					{ type: 'text', name: 'title', required: true },
					{ type: 'text', name: 'subtitle' },
					{ type: 'editor', name: 'body' },
					{ type: 'json', name: 'content' },
					{ type: 'text', name: 'image_path' },
					{ type: 'number', name: 'sort_order', required: true },
					{ type: 'bool', name: 'published' }
				],
				indexes: [
					'CREATE UNIQUE INDEX idx_landing_sections_slug ON landing_sections (slug)',
					'CREATE INDEX idx_landing_sections_sort ON landing_sections (sort_order)'
				]
			},
			{
				type: 'base',
				name: 'pricing_plans',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'name', required: true, presentable: true },
					{ type: 'text', name: 'price', required: true },
					{ type: 'text', name: 'annual_price' },
					{ type: 'text', name: 'target', required: true },
					{ type: 'text', name: 'cta', required: true },
					{ type: 'json', name: 'features', required: true },
					{ type: 'bool', name: 'recommended' },
					{ type: 'number', name: 'sort_order', required: true },
					{ type: 'bool', name: 'published' }
				],
				indexes: ['CREATE INDEX idx_pricing_plans_sort ON pricing_plans (sort_order)']
			},
			{
				type: 'base',
				name: 'testimonials',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'quote', required: true, presentable: true },
					{ type: 'text', name: 'name', required: true },
					{ type: 'text', name: 'detail' },
					{ type: 'text', name: 'image_path' },
					{ type: 'number', name: 'sort_order', required: true },
					{ type: 'bool', name: 'published' }
				],
				indexes: ['CREATE INDEX idx_testimonials_sort ON testimonials (sort_order)']
			},
			{
				type: 'base',
				name: 'faqs',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'question', required: true, presentable: true },
					{ type: 'editor', name: 'answer', required: true },
					{ type: 'number', name: 'sort_order', required: true },
					{ type: 'bool', name: 'published' }
				],
				indexes: ['CREATE INDEX idx_faqs_sort ON faqs (sort_order)']
			},
			{
				type: 'base',
				name: 'legal_pages',
				listRule: publicPublished,
				viewRule: publicPublished,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'slug', required: true, presentable: true },
					{ type: 'text', name: 'title', required: true },
					{ type: 'text', name: 'eyebrow' },
					{ type: 'text', name: 'description', required: true },
					{ type: 'date', name: 'updated_on' },
					{ type: 'json', name: 'sections', required: true },
					{ type: 'bool', name: 'published' }
				],
				indexes: ['CREATE UNIQUE INDEX idx_legal_pages_slug ON legal_pages (slug)']
			},
			{
				type: 'base',
				name: 'contact_submissions',
				listRule: null,
				viewRule: null,
				createRule: null,
				updateRule: null,
				deleteRule: null,
				fields: [
					{ type: 'text', name: 'name', required: true, presentable: true },
					{ type: 'email', name: 'email', required: true },
					{ type: 'text', name: 'subject' },
					{ type: 'editor', name: 'message', required: true },
					{ type: 'text', name: 'source' },
					{ type: 'text', name: 'status' },
					{ type: 'text', name: 'user_agent' },
					{ type: 'text', name: 'ip_address' },
					{ type: 'text', name: 'honeypot' }
				],
				indexes: [
					'CREATE INDEX idx_contact_submissions_status ON contact_submissions (status)',
					'CREATE INDEX idx_contact_submissions_created ON contact_submissions (created)'
				]
			}
		];

		for (const config of collections) {
			app.save(new Collection(config));
		}
	},
	(app) => {
		for (const name of [
			'contact_submissions',
			'legal_pages',
			'faqs',
			'testimonials',
			'pricing_plans',
			'landing_sections',
			'navigation_links',
			'site_settings'
		]) {
			try {
				app.delete(app.findCollectionByNameOrId(name));
			} catch {
				// Collection may already be absent when reverting partial local migrations.
			}
		}
	}
);
