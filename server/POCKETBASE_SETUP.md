# Agrisync PocketBase Manual Setup

Use this checklist to create the CMS collections manually in PocketBase.

This version is optimized for **manual seeding in the PocketBase dashboard**:

- no `json` fields
- no nested content blobs
- repeatable items are split into their own collections
- privacy policy and terms of service are separated

## Current status

Already done:

- `site_settings`
- `navigation_links`

Continue with the collections below.

## Rules

Use these defaults unless noted otherwise:

- Public CMS records: `listRule` and `viewRule` should be `published = true`.
- CMS writes: keep `createRule`, `updateRule`, and `deleteRule` empty/admin-only.
- Contact submissions: keep list, view, create, update, and delete admin-only.

## Already created collections

### `site_settings`

If you rebuild this collection later, use this flatter shape instead of a JSON field:

- `slug` text, required, unique, presentable
- `site_name` text, required
- `tagline` text
- `description` text, required
- `site_url` url
- `og_image_path` file, single file
- `contact_email` email
- `apple_app_url` url
- `google_play_url` url
- `published` bool

Recommended seed record:

| slug | site_name | tagline | description | site_url | og_image_path | contact_email | apple_app_url | google_play_url | published |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| `default` | Agrisync | Your Smart Farm Assistant | Smart farming guidance, market insights, and planning tools for Filipino farmers. | `https://agrisync.online` | upload `og-image.png` | `hello@agrisync.ph` | `https://apps.apple.com/` | `https://play.google.com/store/apps` | true |

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

## Collections to create next

### `landing_sections`

Create one record per top-level section. Keep this collection only for section-level copy.

Fields:

- `slug` text, required, unique, presentable
- `eyebrow` text
- `title` text, required
- `subtitle` text
- `body` editor
- `image_path` file, single file
- `sort_order` number, required
- `published` bool

Create these records:

| slug | title | image_path | sort_order |
| --- | --- | --- | --- |
| `hero` | Grow Smarter. Earn Better. Live Better. | upload `agrisync-farm-hero.png` | 1 |
| `about` | Less Guesswork. More Guidance. |  | 2 |
| `phases` | From first plan to fair price. |  | 3 |
| `anie` | Your virtual farm assistant. | upload `anie.webp` | 4 |
| `pricing` | Flexible pricing for every stage of farming. |  | 5 |
| `testimonials` | Trusted by farmers who want clearer decisions. |  | 6 |
| `faq` | Questions farmers ask before getting started. |  | 7 |
| `download` | Start Growing Smarter Today |  | 8 |

Copy any body text from `web/src/lib/data/landing.ts`.

### `hero_trust_badges`

Fields:

- `label` text, required, presentable
- `sort_order` number, required
- `published` bool

Seed records:

| label | sort_order |
| --- | --- |
| Localized for Philippine farming | 1 |
| Department of Agriculture market insights | 2 |
| AI-powered guidance | 3 |
| Smart climate alerts | 4 |

### `about_problems`

Fields:

- `text` text, required, presentable
- `sort_order` number, required
- `published` bool

Seed from `problems` in `web/src/lib/data/landing.ts`.

### `about_solutions`

Fields:

- `text` text, required, presentable
- `sort_order` number, required
- `published` bool

Seed from `solutions` in `web/src/lib/data/landing.ts`.

### `farming_phases`

Fields:

- `phase_label` text, required
- `title` text, required, presentable
- `question` text, required
- `feature_name` text, required
- `description` editor, required
- `sort_order` number, required
- `published` bool

Seed from `phases` in `web/src/lib/data/landing.ts`.

### `anie_highlights`

Fields:

- `text` text, required, presentable
- `sort_order` number, required
- `published` bool

Seed from `anieHighlights` in `web/src/lib/data/landing.ts`.

### `feature_cards`

Use one record per feature card instead of a JSON payload.

Fields:

- `slug` text, required, unique
- `title` text, required, presentable
- `question` text, required
- `description` editor, required
- `label` text
- `image_path` file, single file
- `sort_order` number, required
- `published` bool

Seed records:

| slug | title | image_path | sort_order |
| --- | --- | --- | --- |
| `feature-1` | Crop Recommendation | upload `crop-recommendation.webp` | 1 |
| `feature-2` | Crop Monitoring | upload `crop-monitoring.webp` | 2 |
| `feature-3` | Personalized Action Items | upload `action-items.webp` | 3 |
| `feature-4` | Market Views | upload `market-views.webp` | 4 |
| `feature-5` | Generated Activity Reports | upload `generated-reports.webp` | 5 |
| `feature-6` | Community Support | upload `community-support.webp` | 6 |

Use the matching `question`, `description`, and `label` values from `features` in
`web/src/lib/data/landing.ts`.

### `feature_benefits`

Fields:

- `feature` relation to `feature_cards`, required
- `text` text, required, presentable
- `sort_order` number, required
- `published` bool

Seed one record per benefit from each feature in `web/src/lib/data/landing.ts`.

### `pricing_plans`

Keep plans separate from their line-item features.

Fields:

- `name` text, required, unique, presentable
- `price` text, required
- `annual_price` text
- `target` text, required
- `cta` text, required
- `recommended` bool
- `sort_order` number, required
- `published` bool

Seed records:

| name | price | annual_price | target | cta | recommended | sort_order |
| --- | --- | --- | --- | --- | --- | --- |
| `Free` | `₱0` |  | New farmers and casual users. | Start Free | false | 1 |
| `Farmer Plus` | `₱149/month` | `₱1,490/year` | Active small-to-medium farmers. | Upgrade to Plus | true | 2 |
| `Cooperative` | `Custom` |  | Farming groups and cooperatives. | Contact Us | false | 3 |

### `pricing_plan_features`

Fields:

- `plan` relation to `pricing_plans`, required
- `text` text, required, presentable
- `sort_order` number, required
- `published` bool

Seed one record per feature string from each pricing plan in `web/src/lib/data/landing.ts`.

### `testimonials`

Fields:

- `quote` text, required, presentable
- `name` text, required
- `detail` text
- `image_path` file, single file
- `sort_order` number, required
- `published` bool

Seed records:

| quote | name | detail | image_path | sort_order |
| --- | --- | --- | --- | --- |
| Agrisync helped me know the right time to harvest my crops. | Mang Leo | Vegetable farmer, Nueva Ecija | upload `mang-leo.webp` | 1 |
| The market prices helped me avoid selling too low. | Aling Tess | Rice and corn grower, Isabela | upload `aling-tess.webp` | 2 |
| Anie feels like a farming partner. | Jun Carlo | Young farmer, Laguna | upload `jun-carlo.webp` | 3 |

### `faqs`

Fields:

- `question` text, required, presentable
- `answer` editor, required
- `sort_order` number, required
- `published` bool

Seed all FAQ records from `web/src/lib/data/landing.ts`.

### `privacy_policy_sections`

Create one record per section in the privacy policy.

Fields:

- `title` text, required, presentable
- `description` text
- `updated_on` date
- `body` editor, required
- `sort_order` number, required
- `published` bool

Recommended shared values:

- `description`: `This Privacy Policy explains how Agrisync handles information for our smart farming assistant, landing page, and future app experience.`
- `updated_on`: `2026-05-16`

Seed records from `privacyPolicy.sections` in `web/src/lib/data/legal.ts`.
Paste each section's paragraph array into `body` as normal paragraphs.

### `terms_of_service_sections`

Create one record per section in the terms page.

Fields:

- `title` text, required, presentable
- `description` text
- `updated_on` date
- `body` editor, required
- `sort_order` number, required
- `published` bool

Recommended shared values:

- `description`: `These Terms of Service describe the basic rules for using Agrisync and its smart farming assistance features.`
- `updated_on`: `2026-05-16`

Seed records from `termsOfService.sections` in `web/src/lib/data/legal.ts`.
Paste each section's paragraph array into `body` as normal paragraphs.

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

## Asset decision

Keep existing assets in `web/static` for now.

For collections that use file fields, upload the matching files from these paths:

- `/favicon.svg`
- `/favicon.ico`
- `/og-image.png`
- `/logos/app-store-badge.svg`
- `/logos/google-play-badge.png`
- `/illustrations/*`

Only move assets into PocketBase file fields later if non-developers need to replace them through the
PocketBase admin UI.
