# Deploying to Cloudflare Pages

https://lyra.works is served by Cloudflare Pages.

| | |
|---|---|
| Live site | https://lyra.works and https://www.lyra.works |
| Pages project | `lyra-works` (https://lyra-works.pages.dev) |
| Source | Vite + React app at the repository root |
| Build | `npm ci && npm run build && rm -f dist/404.html dist/CNAME` |
| Output directory | `dist` |
| Workflow | [`.github/workflows/cloudflare-pages.yml`](https://github.com/nirholas/lyra-web3-playground/blob/main/.github/workflows/cloudflare-pages.yml) |

## DNS

- The domain is registered at Namecheap, with its nameservers set to Cloudflare (`adaline.ns.cloudflare.com`, `greg.ns.cloudflare.com`).
- The Cloudflare zone `lyra.works` has proxied `CNAME` records for `lyra.works` and `www.lyra.works`, both pointing to `lyra-works.pages.dev`.
- Both hostnames are attached to the Pages project under **Custom domains**, and Cloudflare issues their TLS certificates.

To add a hostname, add it in **Workers & Pages → lyra-works → Custom domains**. Cloudflare creates the DNS record for you.

## Automatic deploys

Every push to `main` builds the site and uploads it with `wrangler pages deploy`. You can also start a deploy with **Actions → Deploy to Cloudflare Pages → Run workflow**. The workflow reads two repository secrets:

| Secret | Value |
|---|---|
| `CLOUDFLARE_API_TOKEN` | API token with the **Account → Cloudflare Pages → Edit** permission |
| `CLOUDFLARE_ACCOUNT_ID` | The Cloudflare account ID (from the dashboard sidebar) |

To set them without putting the values in shell history:

```bash
gh secret set CLOUDFLARE_API_TOKEN --repo nirholas/lyra-web3-playground   # paste the value when prompted
gh secret set CLOUDFLARE_ACCOUNT_ID --repo nirholas/lyra-web3-playground
```

## Manual deploy

Run these from the repository root. Export `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` first:

```bash
npm ci
npm run build
rm -f dist/404.html dist/CNAME
npx wrangler pages deploy dist --project-name lyra-works --branch main
```

`--branch main` publishes to production (the custom domains). Any other branch name creates a preview at `https://<branch>.lyra-works.pages.dev`.

## Rollback

Open **Workers & Pages → lyra-works → Deployments**, choose an earlier deployment and select **Rollback to this deployment**.

## Notes

- `public/404.html` exists only for GitHub Pages. It is removed from the upload so Cloudflare Pages falls back to `index.html` for client-side routes such as `/sandbox`. A deploy that keeps it serves every deep link with status 404.
- `npm run dev` still serves the app locally at `http://localhost:3000`.
