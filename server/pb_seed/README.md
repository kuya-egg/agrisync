# Agrisync PocketBase Seed Notes

PocketBase is not expected to be running during this migration phase. The seed content lives in
`../pb_migrations/20260530001000_seed_agrisync_cms_content.js` so it can be applied automatically
with the schema migration when the PocketBase service starts.

## Asset Policy

The current landing images, app store badges, favicon, and Open Graph image stay in `web/static`.
CMS records reference those assets with public paths such as `/illustrations/anie.webp`.

Move assets into PocketBase file fields later only if non-developers need to replace them from the
admin UI. Until then, keeping them in source control gives the SvelteKit app stable SSR image paths
and avoids needing a live PocketBase file URL during Phase 6.

## Contact Submissions

`contact_submissions` is created with admin-only rules for list, view, create, update, and delete.
Phase 7 can open submissions through a server-side SvelteKit action using privileged server
credentials, field validation, and spam protection.
