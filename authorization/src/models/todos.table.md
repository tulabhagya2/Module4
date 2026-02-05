create table todos (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  completed boolean default false,
  userId uuid not null,
  created_at timestamp with time zone default now(),

  constraint fk_user
    foreign key (userId)
    references users(id)
    on delete cascade
);
