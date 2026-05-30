# Agrisync PocketBase Manual Setup

Use this checklist to create the CMS collections manually in PocketBase. PocketBase is not required
for the current static SvelteKit site yet, but Phase 6 will expect these collections and fields.

## Rules

Use these rule defaults unless noted otherwise:

- Public CMS records: `listRule` and `viewRule` should be `published = true`.
- CMS writes: keep `createRule`, `updateRule`, and `deleteRule` empty/admin-only.
- Contact submissions: keep list, view, create, update, and delete admin-only for now. Phase 7 can
  create submissions from a server-side SvelteKit action with privileged credentials.

## Collections

### `site_settings`

Fields:

- `slug` text, required, unique, presentable
- `site_name` text, required
- `tagline` text
- `description` text, required
- `site_url` url
- `og_image_path` text
- `contact_email` email
- `app_store_links` json
- `published` bool

Seed record:

```json
{
	"slug": "default",
	"site_name": "Agrisync",
	"tagline": "Your Smart Farm Assistant",
	"description": "Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance.",
	"site_url": "https://agrisync.online",
	"og_image_path": "/og-image.png",
	"contact_email": "hello@agrisync.ph",
	"app_store_links": {
		"apple": "https://apps.apple.com/",
		"google": "https://play.google.com/store/apps"
	},
	"published": true
}
```

### `navigation_links`

Fields:

- `label` text, required, presentable
- `href` text, required
- `sort_order` number, required
- `published` bool

Seed records:

| label | href | sort_order |
| --- | --- | --- |
| Home | `#home` | 1 |
| Features | `#features` | 2 |
| Pricing | `#pricing` | 3 |
| About | `#about` | 4 |
| FAQ | `#faq` | 5 |
| Download | `#download` | 6 |

### `landing_sections`

Fields:

- `slug` text, required, unique, presentable
- `eyebrow` text
- `title` text, required
- `subtitle` text
- `body` editor
- `content` json
- `image_path` text
- `sort_order` number, required
- `published` bool

Seed section records:

- `hero`: title `Grow Smarter. Earn Better. Live Better.`, image
  `/illustrations/agrisync-farm-hero.png`, content includes `trustBadges`.
- `about`: title `Less Guesswork. More Guidance.`, content includes `problems` and `solutions`.
- `phases`: title `From first plan to fair price.`, content includes the four farming phase cards.
- `anie`: title `Your virtual farm assistant.`, image `/illustrations/anie.webp`, content includes
  `highlights`.
- `download`: title `Start Growing Smarter Today`, content includes badge paths.
- `feature-1` to `feature-6`: one record per feature below, with `content.benefits` and
  `content.label`.

Feature records:

| slug | title | image_path |
| --- | --- | --- |
| `feature-1` | Crop Recommendation | `/illustrations/crop-recommendation.webp` |
| `feature-2` | Crop Monitoring | `/illustrations/crop-monitoring.webp` |
| `feature-3` | Personalized Action Items | `/illustrations/action-items.webp` |
| `feature-4` | Market Views | `/illustrations/market-views.webp` |
| `feature-5` | Generated Activity Reports | `/illustrations/generated-reports.webp` |
| `feature-6` | Community Support | `/illustrations/community-support.webp` |

Copy the body, questions, descriptions, benefits, problems, solutions, phases, and highlights from
`web/src/lib/data/landing.ts`.

### `pricing_plans`

Fields:

- `name` text, required, presentable
- `price` text, required
- `annual_price` text
- `target` text, required
- `cta` text, required
- `features` json, required
- `recommended` bool
- `sort_order` number, required
- `published` bool

Seed records from `web/src/lib/data/landing.ts`: `Free`, `Farmer Plus`, and `Cooperative`.
Set `Farmer Plus.annual_price` to `₱1,490/year`.

### `testimonials`

Fields:

- `quote` text, required, presentable
- `name` text, required
- `detail` text
- `image_path` text
- `sort_order` number, required
- `published` bool

Seed records:

- Mang Leo, `/illustrations/mang-leo.webp`
- Aling Tess, `/illustrations/aling-tess.webp`
- Jun Carlo, `/illustrations/jun-carlo.webp`

### `faqs`

Fields:

- `question` text, required, presentable
- `answer` editor, required
- `sort_order` number, required
- `published` bool

Seed all FAQ records from `web/src/lib/data/landing.ts`.

### `legal_pages`

Fields:

- `slug` text, required, unique, presentable
- `title` text, required
- `eyebrow` text
- `description` text, required
- `updated_on` date
- `sections` json, required
- `published` bool

Seed records:

- `privacy-policy`
- `terms-of-service`

Copy the legal page descriptions and `sections` arrays from `web/src/lib/data/legal.ts`.

### `contact_submissions`

Fields:

- `name` text, required, presentable
- `email` email, required
- `subject` text
- `message` editor, required
- `source` text
- `status` text
- `user_agent` text
- `ip_address` text
- `honeypot` text

Suggested initial `status`: `new`.

## Asset Decision

Keep existing assets in `web/static` for now:

- `/favicon.svg`
- `/favicon.ico`
- `/og-image.png`
- `/logos/app-store-badge.svg`
- `/logos/google-play-badge.png`
- `/illustrations/*`

Only move assets into PocketBase file fields later if non-developers need to replace them through the
PocketBase admin UI. Static paths are simpler for SSR and keep the site useful while PocketBase is
offline.
