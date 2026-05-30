# PocketBase Data To Create

Use this as the data-entry checklist for an empty PocketBase instance. Create the collections and
fields from `web/API_DOCUMENTATION.md` first, then add these records.

Set every CMS record below to `published = true`.

## `site_settings`

Create one record:

| field | value |
| --- | --- |
| `slug` | `default` |
| `site_name` | `Agrisync` |
| `tagline` | `Your Smart Farm Assistant` |
| `description` | `Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance.` |
| `site_url` | `https://agrisync.online` |
| `contact_email` | `hello@agrisync.ph` |
| `apple_app_url` | `https://apps.apple.com/` |
| `google_play_url` | `https://play.google.com/store/apps` |
| `og_image_path` | upload `web/static/og-image.png` |

## `navigation_links`

| sort_order | label | href |
| --- | --- | --- |
| 1 | Home | `#home` |
| 2 | Features | `#features` |
| 3 | Pricing | `#pricing` |
| 4 | About | `#about` |
| 5 | FAQ | `#faq` |
| 6 | Download | `#download` |

## `landing_sections`

| sort_order | slug | eyebrow | title | body | image_path |
| --- | --- | --- | --- | --- | --- |
| 1 | `hero` | Your Smart Farm Assistant | Grow Smarter. Earn Better. Live Better. | Agrisync helps Filipino farmers plan crops, monitor growth, prepare for climate risks, and sell with confidence using AI-powered farming assistance. | upload `web/static/illustrations/agrisync-farm-hero.png` |
| 2 | `about` | Problem to Solution | Less Guesswork. More Guidance. | Agrisync turns scattered advice into a calm farm companion that helps farmers choose, care, prepare, and sell. | blank |
| 3 | `phases` | The Four Farming Phases | From first plan to fair price. | blank | blank |
| 4 | `anie` | Meet Anie | Your virtual farm assistant. | Anie helps guide your farming journey from crop planning to harvesting and selling with simple, friendly answers. | upload `web/static/illustrations/anie.webp` |
| 5 | `features` | Feature Showcase | Built for the full farming cycle. | blank | blank |
| 6 | `pricing` | Pricing | Simple plans for real farms. | blank | blank |
| 7 | `testimonials` | Farmer Stories | Trust that feels close to home. | blank | blank |
| 8 | `faq` | FAQ | Helpful answers, no heavy jargon. | blank | blank |
| 9 | `download` | Download Agrisync | Start Growing Smarter Today | Download Agrisync and get your AI-powered farming assistant for planning, monitoring, alerts, reports, and fairer selling decisions. | blank |

## `hero_trust_badges`

| sort_order | label |
| --- | --- |
| 1 | Localized for Philippine farming |
| 2 | Department of Agriculture market insights |
| 3 | AI-powered guidance |
| 4 | Smart climate alerts |

## `about_problems`

| sort_order | text |
| --- | --- |
| 1 | Unsure what crops to plant this season |
| 2 | Weather changes that disrupt farm work |
| 3 | Selling too low because prices are unclear |
| 4 | Scattered advice that is not local enough |
| 5 | Hard-to-track crop progress and harvest timing |
| 6 | No single assistant for daily farm decisions |

## `about_solutions`

| sort_order | text |
| --- | --- |
| 1 | Localized crop recommendations |
| 2 | Growth monitoring and harvest estimates |
| 3 | Personalized tasks and climate reminders |
| 4 | Market price views based on Department of Agriculture data |
| 5 | Community support and expert-backed answers |
| 6 | Downloadable farming activity reports |

## `farming_phases`

| sort_order | phase_label | title | question | feature_name | description |
| --- | --- | --- | --- | --- | --- |
| 1 | Phase 1 | Crop Planning | What should I plant this season? | Crop Recommendation | Agrisync helps farmers decide what to plant based on season, location, farm conditions, and demand. |
| 2 | Phase 2 | Planting Crop | When should I harvest my crop? | Crop Monitoring | Planting dates, crop stages, and GDD estimates become simple timelines farmers can follow. |
| 3 | Phase 3 | Monitoring & Maintenance | How do I manage my farm and prepare for disasters? | Personalized Action Items | Daily reminders, operational tasks, and climate alerts keep farmers ready before problems grow. |
| 4 | Phase 4 | Harvesting & Selling | How do I price my crops fairly? | Market Views | Department of Agriculture-based price views help farmers compare prices and sell with more confidence. |

## `anie_highlights`

| sort_order | text |
| --- | --- |
| 1 | Answers farming questions conversationally |
| 2 | Recommends crops based on local conditions |
| 3 | Turns data into clear action items |
| 4 | Helps prepare for storms and climate risks |
| 5 | Supports better market decisions |

## `feature_cards`

| sort_order | slug | title | question | description | label | image_path |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | `crop-recommendation` | Crop Recommendation | What should I plant this season? | Anie asks about location, season, soil type, light, farm size, and purpose, then suggests crops with simple growing guides. | Crop Recommendation Screenshot | upload `web/static/illustrations/crop-recommendation.webp` |
| 2 | `crop-monitoring` | Crop Monitoring | When should I harvest my crop? | Farmers log crops and planting dates, then Agrisync builds growth progress, estimated harvest windows, and activity timelines. | Crop Monitoring Screenshot | upload `web/static/illustrations/crop-monitoring.webp` |
| 3 | `personalized-action-items` | Personalized Action Items | How do I manage my farm and prepare for disasters? | Operational reminders, weather warnings, climate alerts, market prompts, and crop care tasks arrive when they matter. | Action Items Screenshot | upload `web/static/illustrations/action-items.webp` |
| 4 | `market-views` | Market Views | How do I price my crops fairly? | Compare crop prices against Department of Agriculture-based market data, including average, highest, lowest, and historical trends. | Market Views Screenshot | upload `web/static/illustrations/market-views.webp` |
| 5 | `generated-activity-reports` | Generated Activity Reports | How do I review my farm activity? | Create PDF or email-ready reports with managed crops, completed tasks, Anie conversations, timelines, and date ranges. | Reports Screenshot | upload `web/static/illustrations/generated-reports.webp` |
| 6 | `community-support` | Community Support | Where can I ask and learn with others? | Farmers can access community discussions, peer support, shared advice, and expert-backed insights that Anie can reference. | Community Screenshot | upload `web/static/illustrations/community-support.webp` |

## `feature_benefits`

Create each row and set the `feature` relation to the matching `feature_cards.slug`.

| feature slug | sort_order | text |
| --- | --- | --- |
| `crop-recommendation` | 1 | Localized choices |
| `crop-recommendation` | 2 | Less guesswork |
| `crop-recommendation` | 3 | Beginner-friendly guides |
| `crop-monitoring` | 1 | Harvest planning |
| `crop-monitoring` | 2 | Crop progress visibility |
| `crop-monitoring` | 3 | Smarter schedules |
| `personalized-action-items` | 1 | Daily farm tasks |
| `personalized-action-items` | 2 | Storm preparation |
| `personalized-action-items` | 3 | Market reminders |
| `market-views` | 1 | Avoid underpricing |
| `market-views` | 2 | Better profit choices |
| `market-views` | 3 | Market awareness |
| `generated-activity-reports` | 1 | Farm documentation |
| `generated-activity-reports` | 2 | Productivity tracking |
| `generated-activity-reports` | 3 | History review |
| `community-support` | 1 | Shared advice |
| `community-support` | 2 | Less isolation |
| `community-support` | 3 | Relevant discussions |

## `pricing_plans`

| sort_order | name | price | annual_price | target | cta | recommended |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Free | ₱0 | blank | New farmers and casual users. | Start Free | false |
| 2 | Farmer Plus | ₱149/month | ₱1,490/year | Active small-to-medium farmers. | Upgrade to Plus | true |
| 3 | Cooperative | Custom | blank | Farming groups and cooperatives. | Contact Us | false |

## `pricing_plan_features`

Create each row and set the `plan` relation to the matching `pricing_plans.name`.

| plan name | sort_order | text |
| --- | --- | --- |
| Free | 1 | Basic Anie access |
| Free | 2 | Limited crop recommendations |
| Free | 3 | Basic crop monitoring |
| Free | 4 | Community access |
| Free | 5 | Limited reports |
| Free | 6 | Basic market viewing |
| Farmer Plus | 1 | Unlimited crop recommendations |
| Farmer Plus | 2 | Advanced crop monitoring |
| Farmer Plus | 3 | Personalized action items |
| Farmer Plus | 4 | Disaster & climate alerts |
| Farmer Plus | 5 | Market intelligence |
| Farmer Plus | 6 | Unlimited reports |
| Farmer Plus | 7 | Priority AI assistance |
| Farmer Plus | 8 | Full history access |
| Cooperative | 1 | Multi-user access |
| Cooperative | 2 | Shared monitoring dashboard |
| Cooperative | 3 | Cooperative analytics |
| Cooperative | 4 | Community management |
| Cooperative | 5 | Admin tools |
| Cooperative | 6 | Team activity reports |
| Cooperative | 7 | Priority support |

## `testimonials`

| sort_order | quote | name | detail | image_path |
| --- | --- | --- | --- | --- |
| 1 | Agrisync helped me know the right time to harvest my crops. | Mang Leo | Vegetable farmer, Nueva Ecija | upload `web/static/illustrations/mang-leo.webp` |
| 2 | The market prices helped me avoid selling too low. | Aling Tess | Rice and corn grower, Isabela | upload `web/static/illustrations/aling-tess.webp` |
| 3 | Anie feels like a farming partner. | Jun Carlo | Young farmer, Laguna | upload `web/static/illustrations/jun-carlo.webp` |

## `faqs`

| sort_order | question | answer |
| --- | --- | --- |
| 1 | What is Agrisync? | Agrisync is an AI-powered smart farming assistant that helps farmers plan, monitor, protect, and sell crops more effectively. |
| 2 | Is Agrisync only for experienced farmers? | No. Agrisync is designed for both beginner and experienced farmers. |
| 3 | Does Agrisync work for Philippine farming? | Yes. The recommendations and market data are localized for Philippine agriculture. |
| 4 | Does Agrisync require internet? | Some features may require internet connectivity, especially AI and live alerts. |
| 5 | Can I use Agrisync for multiple crops? | Yes. Users can manage and monitor multiple crops. |
| 6 | Are market prices real? | Agrisync references Department of Agriculture-based market pricing data. |

## `privacy_policy_sections`

| sort_order | title | description | body |
| --- | --- | --- | --- |
| 1 | Information We Collect | Agrisync may collect account details, farm profile information, crop records, location-based farming inputs, app activity, and messages sent to Anie so we can provide crop guidance, monitoring, alerts, reports, and support. | When market, weather, or crop recommendation features are used, related inputs may be processed to produce localized suggestions and practical farming action items. |
| 2 | How We Use Information | We use information to operate Agrisync, personalize farming recommendations, estimate crop timelines, create reports, improve product quality, and communicate service updates. | We do not sell personal information. If data is shared with service providers, it is used only to help deliver Agrisync features and support. |
| 3 | Data Choices | Users may request access, correction, or deletion of their information by contacting us. Some records may be retained when needed for security, legal, accounting, or service integrity purposes. | Farmers should avoid sharing sensitive personal information inside community discussions unless it is necessary for the question being asked. |
| 4 | Security | We use reasonable technical and organizational measures to protect user information. No online service can guarantee perfect security, but we work to keep farmer data handled with care. | blank |

## `terms_of_service_sections`

| sort_order | title | description | body |
| --- | --- | --- | --- |
| 1 | Using Agrisync | Agrisync provides AI-powered farming guidance, crop monitoring tools, market views, reports, and community features to support farmer decision-making. | The service is meant to assist, not replace, professional agricultural judgment, local government advisories, weather bulletins, or expert advice. |
| 2 | Farmer Responsibility | Users are responsible for checking recommendations against real farm conditions, local rules, supplier instructions, and safety practices before acting. | Market prices, weather alerts, and growth estimates may change. Agrisync cannot guarantee crop yield, profit, harvest dates, or disaster outcomes. |
| 3 | Acceptable Use | Users should not misuse the platform, attempt unauthorized access, disrupt service operation, upload harmful content, or share misleading information in community spaces. | Community contributions should be respectful, practical, and relevant to farming support. |
| 4 | Changes to the Service | Agrisync may update features, pricing, content, and these terms as the product grows. Continued use after updates means the revised terms apply. | blank |

## `contact_submissions`

Do not pre-seed contact submissions. The website form will create these later.

For now, make sure the collection exists with the fields documented in `web/API_DOCUMENTATION.md`.
