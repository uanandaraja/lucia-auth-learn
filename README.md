# Cloudflare Workers and Hono type shit

How to start?

```
pnpm dlx create-hono@latest your-app-title --template cloudflare-workers --install --pm pnpm`
```

Change `.dev.vars.example` to `.dev.vars`, change `.env.local.example` to `.env.local`

We need these:

```
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
```

Then, do this to generate and do migrations for the db.

```
pnpm generate

pnpm migrate
```

To run this locally, do:

```
pnpm dev
```

To deploy this to Cloudflare workers:

```
pnpm run deploy
```
