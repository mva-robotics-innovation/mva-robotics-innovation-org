# MVA Robotics Innovation Organization — Phase 3

This is the Phase 3 production redesign of the **existing** `mva-robotics-innovation-org` project. It does not create a second repository or change frameworks.

## What was upgraded

- Public website language now presents MVA as an organization, not a development project.
- Official MVA logo is used in navigation, footer, social metadata and app manifest.
- Premium navy / royal blue / electric blue / orange / gold visual system.
- Responsive sticky navigation with animated mobile menu and active-page indicator.
- Redesigned home page with robotics visualization, mission, programs, research, projects and rural technology sections.
- Added `/courses`, `/innovation-lab` and `/career` routes while retaining `/programs`.
- Professional project, research, events, media, blog, admissions, AI and contact pages.
- MVA AI explicitly presents itself as a demo when no real LLM backend is configured.
- `/admin` no longer crashes simply because Supabase environment variables are missing.
- Admin architecture includes dashboard modules and server-protected CRUD API for courses, projects, events, media and blog, plus review modules for admissions and contact enquiries.
- Supabase RLS policies were expanded for admin CRUD.
- Added `contact_enquiries` table and production contact API.
- Added Organization JSON-LD, OpenGraph/Twitter metadata, canonical URL, sitemap and robots rules.
- Reduced animation workload and respected `prefers-reduced-motion`.

## Required production setup

1. Create/connect a Supabase project.
2. Run `supabase/schema.sql`.
3. Create an authentication user in Supabase Auth.
4. Insert/update that user's `profiles.role` to `admin`.
5. Add the variables in `.env.example` to Vercel.
6. Optionally configure Resend and the server-side MVA AI provider.
7. Deploy the same GitHub repository.

### Create an admin profile

After creating an Auth user, run SQL similar to:

```sql
insert into profiles (id, role)
values ('AUTH_USER_UUID', 'admin')
on conflict (id) do update set role = 'admin';
```

Do not hard-code admin credentials in source code.

## Local verification

```bash
npm install
npm run build
npm run start
```

Verify:

`/` `/about` `/programs` `/research` `/innovation-lab` `/projects` `/courses` `/rural-mission` `/events` `/media` `/blog` `/admissions` `/ai` `/career` `/contact` `/admin`

The production admin route should return an authenticated dashboard or a clear setup/login state, not HTTP 500.
