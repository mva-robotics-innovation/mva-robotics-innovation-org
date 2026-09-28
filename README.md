# MVA Robotics Innovation Org — Phase 2

Production-oriented Next.js platform for MVA Robotics Innovation Org.

## Included
- Advanced Three.js / React Three Fiber robotics hero
- Animated neural network
- Server-side MVA AI API architecture
- Supabase database schema for courses, projects, events, media, blog, applications and private URLs
- Supabase authentication + protected admin routes
- Admin-only private URL vault (not publicly listed)
- Resend email API
- Stripe Checkout + webhook
- PWA manifest
- SEO metadata, sitemap, robots and Organization JSON-LD
- Analytics API foundation

## Run
1. Copy `.env.example` to `.env.local`.
2. Create a Supabase project and run `supabase/schema.sql` in the SQL editor.
3. Create an admin user in Supabase Auth, then insert/update its `profiles.role` to `admin`.
4. `npm install`
5. `npm run dev`

## GitHub → Vercel
Push the repository to GitHub, import it into Vercel, add the same environment variables in Vercel Project Settings, deploy, then configure the custom domain.

## Security note
The private URL vault hides URLs from the public site and requires admin authentication. It does **not** make a third-party destination secret if that destination itself is public. For truly private documents/pages, protect the destination with authentication or signed URLs as well.
