# Silvers Concrete and Paving - Review Router

Static page, built from the Healthy Interior Solutions router. No database, no server code, no build step.
Suggested address: `reviews.silversconcreteandpaving.com`.

## Files
- `index.html` - the page (don't need to touch it)
- `config.js` - **the only file you edit**: percentage split, service list, star threshold, review links, phone
- `logo.png`, `hero.jpg` - optional. If they are not in this folder, the page loads the logo and patio photo
  straight from silversconcreteandpaving.com. Save local copies before launch so the page doesn't depend on the website.
  The logo is white, so it sits on a navy plate.

## How routing works
1. Customer picks a service. This only changes the wording on the thank-you screen.
2. The page picks one of the 5 Google profiles using the `split` percentages in `config.js`.
3. A link with `?p=` skips the split and always goes to that profile.

| Profile key | Google profile | Reviews (Nov 18 2026) | Starting split |
|---|---|---|---|
| `fishers` | Silvers Concrete and Paving - Fishers | 14 | 35% |
| `east` | E Raymond St, Indianapolis | 0 | 30% |
| `whitestown` | Silvers Concrete and Paving - Whitestown | 11 | 15% |
| `north` | W 96th St, Indianapolis (main) | 254 | 10% |
| `west` | W Minnesota St, Indianapolis | 82 | 10% |

## Links to send
| Use | Link |
|---|---|
| Normal - use the % split | `https://reviews.silversconcreteandpaving.com/?first_name={{contact.first_name}}` |
| Force Fishers | `...?p=fishers&first_name={{contact.first_name}}` |
| Force E Raymond | `...?p=east&first_name={{contact.first_name}}` |
| Force Whitestown | `...?p=whitestown&first_name={{contact.first_name}}` |
| Force W 96th (main) | `...?p=north&first_name={{contact.first_name}}` |
| Force W Minnesota | `...?p=west&first_name={{contact.first_name}}` |

`first_name` is optional. Unfilled merge tags are ignored.

## Flow
- 4-5 stars: "Thank you!" + Google review button
- 1-3 stars: "We're sorry" + call us / text us / Google review link (a Google link is on every rating)

## Before launch
- Open each review link once and confirm it opens the review box for the right profile
  (links were built from public Google Maps place IDs, not the Business Profile API).
- Confirm (317) 835-8991 can receive texts. If not, set `showText: false` in `config.js`.
- Save `logo.png` and `hero.jpg` into this folder.

## Deploy (one time)
1. Set a real git email first (`git config user.email you@domain.com`) - Vercel rejects commits without one.
2. Push this folder to a GitHub repo.
3. Vercel > Add New Project > import the repo > Framework: Other > Deploy (no settings).
4. Vercel > Project > Domains > add the subdomain, then add the CNAME it shows at the DNS host.

## Changing the split
Edit `split` in `config.js` on GitHub > Commit. Live in ~30 seconds.
