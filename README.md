# D Property Find

A clean, conversion-focused website for Doniel Samuels — Cape Town property finder.

## File structure

```
/
├── index.html        Home page
├── about.html        About Doniel
├── contact.html      Contact form + FAQ
├── thank-you.html    Post-form redirect
├── 404.html          404 error page
├── styles.css        Single stylesheet
├── script.js         Minimal vanilla JavaScript
├── images/           Empty — Pexels CDN URLs used directly
└── README.md         This file
```

## Viewing locally

Open `index.html` directly in any modern browser. No build step, no server needed.

```
File → Open File → index.html
```

---

## Setup checklist before launch

- [ ] **Web3Forms key** — Get a free access key at https://web3forms.com, then replace `YOUR_WEB3FORMS_KEY_HERE` in `contact.html` (search for the `TODO` comment near the `access_key` input).
- [ ] **Replace hero image** — In `index.html`, replace the Pexels URL with Doniel's actual portrait photograph.
- [ ] **Replace about image** — In `about.html`, replace the Pexels URL with Doniel's actual candid photo.
- [ ] **Replace contact portrait** — In `contact.html`, replace the small circular Pexels URL with Doniel's photo.
- [ ] **Replace testimonials** — Search `contact.html` and `index.html` for `TODO: Replace with real client quotes` and swap in real names and quotes.
- [ ] **Replace about story** — In `about.html`, the four paragraphs under `TODO: Replace with Doniel's actual story` should be rewritten in Doniel's own words.
- [ ] **Verify contact details** — Confirm phone +27 84 857 3319 and email prezenced@gmail.com are correct across all files.
- [ ] **Test form end-to-end** — After deploying, submit the contact form and confirm receipt at prezenced@gmail.com.
- [ ] **Test on mobile** — Check all pages at 375px width. Pay attention to the mobile menu, hero layout, and contact form.

---

## Pexels image credits

Images used as placeholders until Doniel provides her own photography:

| Location | Pexels URL | Credit |
|---|---|---|
| Home hero portrait | `https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg` | Andrea Piacquadio via Pexels |
| About candid photo | `https://images.pexels.com/photos/3808804/pexels-photo-3808804.jpeg` | Andrea Piacquadio via Pexels |
| Contact card portrait | `https://images.pexels.com/photos/5386751/pexels-photo-5386751.jpeg` | Thirdman via Pexels |

All Pexels images are free for commercial use under the Pexels License.

---

## Deployment

### Option 1 — Netlify drag-and-drop (recommended, free)
1. Go to https://app.netlify.com
2. Create a free account or log in
3. Drag the entire `D Property Find` folder onto the deploy area
4. Site is live immediately at a `.netlify.app` URL
5. Add a custom domain under Site settings → Domain management

### Option 2 — GitHub Pages (free)
1. Create a new repository at https://github.com/new (set to Public)
2. Upload all files to the repository
3. Go to Settings → Pages → Source: Deploy from branch → main / root
4. Site goes live at `https://yourusername.github.io/repository-name`

### Option 3 — Vercel CLI
```bash
npm i -g vercel
cd "D Property Find"
vercel
```
Follow the prompts. Free tier is more than sufficient.

---

## Technology

- Plain HTML5, CSS3, vanilla JavaScript
- Google Fonts: Fraunces (serif) + Inter (sans-serif)
- Lucide icons (inline SVG)
- Web3Forms for contact form (no backend required)
- Zero dependencies, zero build step
