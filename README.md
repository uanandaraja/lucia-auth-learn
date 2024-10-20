# Cloudflare Workers and Hono type shit

How to start?

```
pnpm dlx create-hono@latest your-app-title --template cloudflare-workers --install --pm pnpm`
```

Change `.dev.vars.example` to `.dev.vars`
Change `.env.local.example` to `.env.local`
Change `wrangler.example.toml` to `wrangler.toml`

We need these for `dev.vars` and `env.local`

```
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GOOGLE_REDIRECT_URI=
```

We use KV to store the sessions, so create a KV in cloudflare and put yours in it:

```
[[kv_namespaces]]
binding = "your-kv-binding"
id = "your-kv-binding-id"
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
