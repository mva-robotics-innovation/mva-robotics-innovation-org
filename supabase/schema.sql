create extension if not exists "pgcrypto";

create table if not exists profiles(
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null default 'user' check(role in ('user','admin')),
  created_at timestamptz default now()
);

create table if not exists courses(
  id uuid primary key default gen_random_uuid(), title text not null, slug text unique,
  description text, price numeric default 0, published boolean default false, created_at timestamptz default now()
);
create table if not exists projects(
  id uuid primary key default gen_random_uuid(), title text not null, slug text unique,
  description text, status text default 'active', created_at timestamptz default now()
);
create table if not exists events(
  id uuid primary key default gen_random_uuid(), title text not null, event_date timestamptz,
  venue text, description text, published boolean default false, created_at timestamptz default now()
);
create table if not exists media(
  id uuid primary key default gen_random_uuid(), title text, storage_path text not null,
  alt_text text, created_at timestamptz default now()
);
create table if not exists posts(
  id uuid primary key default gen_random_uuid(), title text not null, slug text unique,
  excerpt text, content text, author_id uuid references auth.users(id),
  published boolean default false, published_at timestamptz, created_at timestamptz default now()
);
create table if not exists applications(
  id uuid primary key default gen_random_uuid(), name text not null, email text not null,
  phone text, program text, message text, status text default 'new', created_at timestamptz default now()
);
create table if not exists contact_enquiries(
  id uuid primary key default gen_random_uuid(), name text not null, email text not null,
  phone text, message text not null, status text default 'new', created_at timestamptz default now()
);
create table if not exists private_urls(
  id uuid primary key default gen_random_uuid(), label text not null, url text not null,
  created_by uuid not null references auth.users(id), created_at timestamptz default now()
);
create table if not exists analytics_events(
  id uuid primary key default gen_random_uuid(), event_name text not null, path text,
  metadata jsonb default '{}', created_at timestamptz default now()
);

alter table profiles enable row level security;
alter table courses enable row level security;
alter table projects enable row level security;
alter table events enable row level security;
alter table media enable row level security;
alter table posts enable row level security;
alter table applications enable row level security;
alter table contact_enquiries enable row level security;
alter table private_urls enable row level security;
alter table analytics_events enable row level security;

drop policy if exists "public courses" on courses;
drop policy if exists "public projects" on projects;
drop policy if exists "public events" on events;
drop policy if exists "public media" on media;
drop policy if exists "public posts" on posts;
drop policy if exists "users read own profile" on profiles;
drop policy if exists "admin courses" on courses;
drop policy if exists "admin projects" on projects;
drop policy if exists "admin events" on events;
drop policy if exists "admin media" on media;
drop policy if exists "admin posts" on posts;
drop policy if exists "admin applications" on applications;
drop policy if exists "admin contact enquiries" on contact_enquiries;
drop policy if exists "admin private urls" on private_urls;
drop policy if exists "admin profiles" on profiles;

create policy "public courses" on courses for select using (published=true);
create policy "public projects" on projects for select using (true);
create policy "public events" on events for select using (published=true);
create policy "public media" on media for select using (true);
create policy "public posts" on posts for select using (published=true);
create policy "users read own profile" on profiles for select using (auth.uid()=id);

create policy "admin courses" on courses for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin projects" on projects for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin events" on events for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin media" on media for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin posts" on posts for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin applications" on applications for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin contact enquiries" on contact_enquiries for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin private urls" on private_urls for all using (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin')) with check (exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
create policy "admin profiles" on profiles for select using (auth.uid()=id or exists(select 1 from profiles p where p.id=auth.uid() and p.role='admin'));
