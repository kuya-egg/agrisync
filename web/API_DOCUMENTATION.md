# Agrisync API Documentation

## Overview

This project uses **PocketBase** as the backend for Agrisync content and contact form handling.

- **API base URL:** `https://api.agrisync.online`
- **Admin dashboard:** `https://admin.agrisync.online/_/`
- **API style:** PocketBase REST API
- **Backend version:** PocketBase `v0.29.3`

This document is the cleaned-up reference for the collections currently used by the web app.

## Access model

### Read access

The website consumes **read-only CMS collections** for landing page content, pricing, FAQ, legal pages, and related content blocks.

### Write access

**Only one create endpoint is documented for application use:**

- `contact_submissions` → `POST /api/collections/contact_submissions/records`

All other collections in this document should be treated as **read-only** from the website/client perspective.

## Common record endpoints

Most CMS collections use the standard PocketBase record endpoints:

### List records

```http
GET /api/collections/{collection}/records
```

### Get one record

```http
GET /api/collections/{collection}/records/{id}
```

## Common query parameters

These apply to most record list endpoints.

| Parameter | Type | Description |
| --- | --- | --- |
| `page` | number | Page number. Default is `1`. |
| `perPage` | number | Maximum number of records to return. Default is `30`. |
| `sort` | string | Sort by one or more fields. Prefix with `-` for descending. |
| `filter` | string | PocketBase filter expression. |
| `expand` | string | Expand relation fields. |
| `fields` | string | Return only selected fields. |
| `skipTotal` | boolean | Skip total count calculation for faster list responses. |

### Common sorting pattern

Most content collections should be requested in display order:

```text
sort=sort_order
```

### Common published-content filter

If the collection rules are not already enforcing this, use:

```text
filter=published=true
```

### Example list request

```http
GET /api/collections/navigation_links/records?sort=sort_order&filter=published=true
```

### Example PocketBase SDK usage

```ts
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.agrisync.online');

const links = await pb.collection('navigation_links').getFullList({
  sort: 'sort_order',
  filter: 'published=true'
});
```

## File fields

Some collections use PocketBase **file fields** instead of plain text paths.

Common file-backed fields in this project:

- `site_settings.og_image_path`
- `landing_sections.image_path`
- `feature_cards.image_path`
- `testimonials.image_path`

PocketBase returns the stored filename in the record. Build the public file URL with:

```text
https://api.agrisync.online/api/files/{collection}/{recordId}/{filename}
```

### SDK example

```ts
const pb = new PocketBase('https://api.agrisync.online');
const record = await pb.collection('feature_cards').getOne('RECORD_ID');
const imageUrl = pb.files.getURL(record, record.image_path);
```

## Relations

Two collections currently depend on single-record relations:

| Collection | Relation field | Related collection | Cardinality |
| --- | --- | --- | --- |
| `feature_benefits` | `feature` | `feature_cards` | many benefits → one feature card |
| `pricing_plan_features` | `plan` | `pricing_plans` | many plan features → one pricing plan |

### Example expanded query

```http
GET /api/collections/feature_benefits/records?expand=feature&sort=sort_order&filter=published=true
```

## Collection summary

| Collection | Purpose | List | View one | Create |
| --- | --- | --- | --- | --- |
| `site_settings` | Global site metadata and store links | Yes | Yes | No |
| `navigation_links` | Header/footer navigation items | Yes | Yes | No |
| `landing_sections` | Top-level landing page section content | Yes | Yes | No |
| `hero_trust_badges` | Trust badges shown in hero section | Yes | Yes | No |
| `about_problems` | Problem statements in about section | Yes | Yes | No |
| `about_solutions` | Solution statements in about section | Yes | Yes | No |
| `farming_phases` | Farming journey section cards | Yes | Yes | No |
| `anie_highlights` | Highlights for Anie assistant section | Yes | Yes | No |
| `feature_cards` | Main feature cards | Yes | Yes | No |
| `feature_benefits` | Benefit items per feature card | Yes | Yes | No |
| `pricing_plans` | Pricing plan definitions | Yes | Yes | No |
| `pricing_plan_features` | Included features per pricing plan | Yes | Yes | No |
| `testimonials` | Testimonial cards | Yes | Yes | No |
| `faqs` | Frequently asked questions | Yes | Yes | No |
| `privacy_policy_sections` | Privacy policy content | Yes | Yes | No |
| `terms_of_service_sections` | Terms of service content | Yes | Yes | No |
| `contact_submissions` | Contact form submissions | No | No | **Yes** |

---

## Public read collections

Each section below documents the schema and recommended usage for the CMS collections exposed to the website.

### `site_settings`

Global site metadata and app/store links.

**Endpoints**

- `GET /api/collections/site_settings/records`
- `GET /api/collections/site_settings/records/{id}`

**Suggested query**

```http
GET /api/collections/site_settings/records?filter=published=true
```

**Fields**

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | PocketBase record ID |
| `slug` | string | Usually `default` |
| `site_name` | string | Site/app name |
| `tagline` | string | Short brand line |
| `description` | string | SEO and site summary text |
| `site_url` | string | Canonical site URL |
| `og_image_path` | file | Open Graph image filename |
| `contact_email` | string | Public contact email |
| `apple_app_url` | string | App Store link |
| `google_play_url` | string | Google Play link |
| `published` | boolean | CMS visibility flag |
| `created` | datetime | PocketBase system field |
| `updated` | datetime | PocketBase system field |

### `navigation_links`

Navigation links for header or footer menus.

**Endpoints**

- `GET /api/collections/navigation_links/records`
- `GET /api/collections/navigation_links/records/{id}`

**Suggested query**

```http
GET /api/collections/navigation_links/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `label` | string |
| `href` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `landing_sections`

Top-level landing page sections such as hero, about, pricing, FAQ, and download.

**Endpoints**

- `GET /api/collections/landing_sections/records`
- `GET /api/collections/landing_sections/records/{id}`

**Suggested query**

```http
GET /api/collections/landing_sections/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `slug` | string |
| `eyebrow` | string |
| `title` | string |
| `subtitle` | string |
| `body` | string |
| `image_path` | file |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `hero_trust_badges`

Short supporting trust statements shown near the hero area.

**Endpoints**

- `GET /api/collections/hero_trust_badges/records`
- `GET /api/collections/hero_trust_badges/records/{id}`

**Suggested query**

```http
GET /api/collections/hero_trust_badges/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `label` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `about_problems`

Problem bullets used in the about section.

**Endpoints**

- `GET /api/collections/about_problems/records`
- `GET /api/collections/about_problems/records/{id}`

**Suggested query**

```http
GET /api/collections/about_problems/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `text` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `about_solutions`

Solution bullets used in the about section.

**Endpoints**

- `GET /api/collections/about_solutions/records`
- `GET /api/collections/about_solutions/records/{id}`

**Suggested query**

```http
GET /api/collections/about_solutions/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `text` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `farming_phases`

Content cards for the farming journey / lifecycle section.

**Endpoints**

- `GET /api/collections/farming_phases/records`
- `GET /api/collections/farming_phases/records/{id}`

**Suggested query**

```http
GET /api/collections/farming_phases/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `phase_label` | string |
| `title` | string |
| `question` | string |
| `feature_name` | string |
| `description` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `anie_highlights`

Short highlight points for the Anie section.

**Endpoints**

- `GET /api/collections/anie_highlights/records`
- `GET /api/collections/anie_highlights/records/{id}`

**Suggested query**

```http
GET /api/collections/anie_highlights/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `text` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `feature_cards`

Primary feature cards shown on the landing page.

**Endpoints**

- `GET /api/collections/feature_cards/records`
- `GET /api/collections/feature_cards/records/{id}`

**Suggested query**

```http
GET /api/collections/feature_cards/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | PocketBase record ID |
| `slug` | string | Stable identifier |
| `title` | string | Card title |
| `question` | string | Supporting question copy |
| `description` | string | Main body copy |
| `label` | string | Short label or badge |
| `image_path` | file | Uploaded image filename |
| `sort_order` | number | Display order |
| `published` | boolean | CMS visibility flag |
| `created` | datetime | PocketBase system field |
| `updated` | datetime | PocketBase system field |

### `feature_benefits`

Benefit rows associated with a single feature card.

**Endpoints**

- `GET /api/collections/feature_benefits/records`
- `GET /api/collections/feature_benefits/records/{id}`

**Suggested query**

```http
GET /api/collections/feature_benefits/records?expand=feature&sort=sort_order&filter=published=true
```

**Fields**

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | PocketBase record ID |
| `feature` | relation | Single relation to `feature_cards` |
| `text` | string | Benefit text |
| `sort_order` | number | Display order |
| `published` | boolean | CMS visibility flag |
| `created` | datetime | PocketBase system field |
| `updated` | datetime | PocketBase system field |

### `pricing_plans`

Pricing plan definitions displayed on the site.

**Endpoints**

- `GET /api/collections/pricing_plans/records`
- `GET /api/collections/pricing_plans/records/{id}`

**Suggested query**

```http
GET /api/collections/pricing_plans/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `name` | string |
| `price` | string |
| `annual_price` | string |
| `target` | string |
| `cta` | string |
| `recommended` | boolean |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `pricing_plan_features`

Line items attached to a single pricing plan.

**Endpoints**

- `GET /api/collections/pricing_plan_features/records`
- `GET /api/collections/pricing_plan_features/records/{id}`

**Suggested query**

```http
GET /api/collections/pricing_plan_features/records?expand=plan&sort=sort_order&filter=published=true
```

**Fields**

| Field | Type | Notes |
| --- | --- | --- |
| `id` | string | PocketBase record ID |
| `plan` | relation | Single relation to `pricing_plans` |
| `text` | string | Plan feature copy |
| `sort_order` | number | Display order |
| `published` | boolean | CMS visibility flag |
| `created` | datetime | PocketBase system field |
| `updated` | datetime | PocketBase system field |

### `testimonials`

Farmer testimonials displayed in the social proof section.

**Endpoints**

- `GET /api/collections/testimonials/records`
- `GET /api/collections/testimonials/records/{id}`

**Suggested query**

```http
GET /api/collections/testimonials/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `quote` | string |
| `name` | string |
| `detail` | string |
| `image_path` | file |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `faqs`

FAQ entries for the landing page.

**Endpoints**

- `GET /api/collections/faqs/records`
- `GET /api/collections/faqs/records/{id}`

**Suggested query**

```http
GET /api/collections/faqs/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `question` | string |
| `answer` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `privacy_policy_sections`

Structured privacy policy content.

**Endpoints**

- `GET /api/collections/privacy_policy_sections/records`
- `GET /api/collections/privacy_policy_sections/records/{id}`

**Suggested query**

```http
GET /api/collections/privacy_policy_sections/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `title` | string |
| `description` | string |
| `body` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

### `terms_of_service_sections`

Structured terms of service content.

**Endpoints**

- `GET /api/collections/terms_of_service_sections/records`
- `GET /api/collections/terms_of_service_sections/records/{id}`

**Suggested query**

```http
GET /api/collections/terms_of_service_sections/records?sort=sort_order&filter=published=true
```

**Fields**

| Field | Type |
| --- | --- |
| `id` | string |
| `title` | string |
| `description` | string |
| `body` | string |
| `sort_order` | number |
| `published` | boolean |
| `created` | datetime |
| `updated` | datetime |

---

## Write endpoint

## `contact_submissions`

This is the **only create endpoint documented for website/application use**.

Use it for contact form submissions only.

**Endpoint**

```http
POST /api/collections/contact_submissions/records
```

### Content type

- `application/json`
- `multipart/form-data`

### Notes

- `honeypot` should remain empty for real users.
- `status` is typically initialized to something like `new`.
- `user_agent` and `ip_address` are usually filled by the server/proxy layer, not the browser.
- If your PocketBase rule configuration requires authentication, that rule must be adjusted before public website submissions will work.

### Body fields

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| `id` | string | No | Auto-generated if omitted |
| `name` | string | No | Sender name |
| `email` | string | No | Sender email |
| `subject` | string | No | Short subject |
| `message` | string | No | Main message |
| `source` | string | No | Form/source identifier |
| `status` | string | No | Submission status |
| `user_agent` | string | No | Browser/device info |
| `ip_address` | string | No | Resolved client IP |
| `honeypot` | string | No | Bot trap field |

### Example request body

```json
{
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "subject": "Partnership inquiry",
  "message": "I want to learn more about Agrisync for our cooperative.",
  "source": "landing-page",
  "status": "new",
  "user_agent": "Mozilla/5.0",
  "ip_address": "203.0.113.10",
  "honeypot": ""
}
```

### Example PocketBase SDK usage

```ts
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://api.agrisync.online');

const submission = await pb.collection('contact_submissions').create({
  name: 'Juan Dela Cruz',
  email: 'juan@example.com',
  subject: 'Partnership inquiry',
  message: 'I want to learn more about Agrisync for our cooperative.',
  source: 'landing-page',
  status: 'new',
  honeypot: ''
});
```

### Example response

```json
{
  "collectionName": "contact_submissions",
  "id": "RECORD_ID",
  "name": "Juan Dela Cruz",
  "email": "juan@example.com",
  "subject": "Partnership inquiry",
  "message": "I want to learn more about Agrisync for our cooperative.",
  "source": "landing-page",
  "status": "new",
  "user_agent": "Mozilla/5.0",
  "ip_address": "203.0.113.10",
  "honeypot": "",
  "created": "2026-05-30 10:00:00.123Z",
  "updated": "2026-05-30 10:00:00.123Z"
}
```

---

## Recommended frontend fetch patterns

### Load site settings

```ts
const settings = await pb.collection('site_settings').getFirstListItem('published=true');
```

### Load ordered content blocks

```ts
const sections = await pb.collection('landing_sections').getFullList({
  sort: 'sort_order',
  filter: 'published=true'
});
```

### Load feature benefits with parent feature expanded

```ts
const benefits = await pb.collection('feature_benefits').getFullList({
  sort: 'sort_order',
  filter: 'published=true',
  expand: 'feature'
});
```

### Load pricing plan features with plan expanded

```ts
const planFeatures = await pb.collection('pricing_plan_features').getFullList({
  sort: 'sort_order',
  filter: 'published=true',
  expand: 'plan'
});
```

## Implementation notes

1. Prefer `sort=sort_order` for ordered CMS collections.
2. Use `expand` for relation-backed collections instead of manually stitching records together on the client.
3. Use `pb.files.getURL(record, record.some_file_field)` for file fields.
4. Keep all collections read-only from the public app except `contact_submissions`.
5. If the public app should not access unpublished content, enforce it in PocketBase collection rules, not only in frontend filters.
