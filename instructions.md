# Instructions.md

Take all pasted HTML mockups for **Lysto** and convert them into the project's **existing tech stack and architecture**. Do **not** redesign the UI. Recreate the same visual system, layout, spacing, hierarchy, and interactions as closely as possible while adapting the code to the current codebase conventions.

## Core directive

- Use the **existing project tech stack** already present in the repository.
- Use the **existing routing system, component patterns, state approach, folder structure, styling setup, and naming conventions**.
- Do **not** ask what stack the project uses.
- Inspect the current project first, then implement these pages to match it.
- Convert the provided static HTML into reusable components consistent with the current app.
- Preserve the current theme tokens, or map the pasted theme tokens into the existing design system where appropriate.
- Implement the work in **batches by page**.
- Finish one batch completely before moving to the next.
- After each batch, verify styling, responsiveness, navigation behavior, and state handling before continuing.

## Required workflow

1. Inspect the repository structure and identify:
   - framework/runtime
   - routing approach
   - styling system
   - shared UI/component conventions
   - state management approach
   - image handling approach
   - icon strategy
   - form handling pattern

2. Create or reuse shared primitives before building all pages:
   - top app bar/header
   - bottom navigation
   - quantity stepper
   - product/list card components
   - category chip/filter pill
   - shared form field wrapper if useful

3. Convert each provided page into production-ready code.

4. Reuse shared components wherever possible instead of duplicating markup.

5. Keep all code typed and consistent with the codebase.

## Design system to preserve

Use these visual characteristics from the pasted HTML across all implementations:

- Brand: **Lysto**
- Tone: warm editorial grocery / pantry / kitchen aesthetic
- Primary green: `#31681e`
- Primary container green: `#4a8234`
- Surface/background: `#fff8f1`
- Surface container: `#f8edda`
- Surface container highest: `#ece1cf`
- Secondary container: `#c2f0a7`
- Tertiary: `#9e3c29`
- Text main: `#201b10`
- Text muted: `#42493c`
- Outline: `#72796b`
- Brand typography style: elegant editorial headline with **Anek Bangla** feel
- Supporting typography style: clean modern sans similar to **Plus Jakarta Sans** / **Be Vietnam Pro**
- Radius language: soft rounded cards and large pill buttons
- General feel: premium, soft, airy, organic, modern pantry curation

If the existing app already has theme tokens, map these values into that system instead of hardcoding everything repeatedly.

## Batch order

Implement in this exact order:

### Batch 1: Sign Up page
Convert the provided **Sign Up** HTML into the project structure.

#### Requirements
- Full-screen centered auth layout.
- No top nav or bottom nav on this page.
- Brand block with icon, title, and subtitle.
- Form with fields for full name, email, and password.
- Primary CTA: **Create Account**.
- Secondary auth link leading to sign in.
- Editorial image section near the bottom.
- Policy / terms copy at the bottom.
- Keep the same soft green + cream visual language.

#### Implementation notes
- Use controlled form state if that matches the current codebase conventions.
- Add validation using the project's existing form pattern.
- Wire submit behavior to the existing auth flow or placeholder action if backend wiring is not available yet.
- Make spacing and mobile layout match the mockup closely.

### Batch 2: Sign In page
Convert the provided **Sign In** HTML into the project structure.

#### Requirements
- No top nav or bottom nav on this page.
- Branded sign-in hero.
- Frosted / glass-like form card.
- Email and password fields with leading icons.
- Remember me control.
- Forgot password link.
- Primary CTA: **Sign In**.
- Secondary link to sign up.
- Muted decorative footer items.
- Decorative floating imagery on larger screens.

#### Implementation notes
- Use the project's existing auth mechanisms and route structure.
- Match the soft blur background accents.
- Keep desktop-only decorative image treatment where appropriate.

### Batch 3: My List page
Convert the provided **My List** page into the project structure.

#### Requirements
- Fixed glassy top app bar.
- Brand title in the header.
- Hero section with **My List** title.
- Group items by category sections like Fresh Produce and Pantry Essentials.
- Each row should include product image, item metadata, and a quantity stepper.
- Add the large centered **Share via WhatsApp** CTA.
- Include bottom navigation with the list tab active.

#### Implementation notes
- Quantity controls should be functional, not just visual.
- Use shared state/store/context already used by the app.
- Sharing should build a WhatsApp-compatible text payload from the live list contents.
- Preserve the card spacing, rounded controls, and editorial grocery imagery.

### Batch 4: Home page
Convert the provided **Home / Dashboard** page into the project structure.

#### Requirements
- Fixed top header with profile/avatar area and notification action.
- Greeting section.
- Search input.
- Primary action buttons.
- Horizontally scrollable category chips.
- Product grid/cards.
- Add-to-list interaction that can become a quantity stepper.
- Floating CTA/bar to review the current list when items exist.
- Bottom navigation with home active.

#### Implementation notes
- Use shared product card + quantity stepper patterns.
- Filtering by category should work.
- Add-to-list state must connect to the same list data used on My List.
- Keep responsiveness and mobile-first behavior aligned with the pasted design.

## Shared component guidance

Build or reuse shared components for these patterns if the codebase does not already have them:

- `TopAppBar`
- `BottomNavBar`
- `QuantityStepper`
- `ProductCard`
- `ListItemRow`
- `CategoryChip`
- `AuthFormField`

Use project naming conventions if different.

## Conversion rules

- Convert raw HTML into reusable framework components.
- Replace duplicated sections with shared components.
- Keep accessibility intact: labels, button names, alt text, keyboard support.
- Use the project's preferred image component/mechanism.
- Use the project's preferred link/navigation primitives.
- Use the project's preferred icon mechanism; if Material Symbols are already supported, reuse them.
- Avoid inline styles unless the current codebase already uses them for specific responsive or clamp-based typography cases.
- Keep all types/interfaces strict if the codebase uses TypeScript.
- Do not leave the pages as static mockups only; make interactions functional where implied.

## State/data expectations

Unify state between Home and My List so that:

- adding an item on Home updates the list
- increasing/decreasing quantity updates everywhere
- list counts remain consistent across components
- share output reflects the real current list state

Use the app's current global state pattern if one exists. If not, introduce the lightest-weight shared state solution that matches the existing architecture.

## Routing/navigation expectations

Map these designs into the app's existing routes. Use whatever route/file structure already exists in the project.

Minimum page set to implement:

- Sign Up
- Sign In
- My List
- Home

If there is a splash/loading route already in the project, connect auth flows to it where appropriate; otherwise keep navigation consistent with the existing app structure.

## Definition of done per batch

A batch is only complete when all of the following are true:

- page is implemented in the existing stack
- shared components are extracted where sensible
- page is responsive
- page visually matches the provided mockup closely
- buttons/inputs/interactions are wired
- navigation behavior is correct
- code passes lint/type checks relevant to the project
- no obvious duplicated markup that should have been componentized

## Final execution rule

Do the work **batch by batch** in this order:

1. Sign Up
2. Sign In
3. My List
4. Home

After completing each batch, briefly state:
- what was implemented
- what shared components were added/updated
- what remains for the next batch

Do not ask the user to restate the current stack. Infer it from the repository and continue implementing.


here are the pasted html mockups:
Sign up page:
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Harvest &amp; Hearth - Sign Up</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container-high": "#f2e7d4",
              "primary-container": "#4a8234",
              "surface-container-highest": "#ece1cf",
              "tertiary": "#9e3c29",
              "on-surface-variant": "#42493c",
              "on-error": "#ffffff",
              "secondary": "#42682f",
              "primary": "#31681e",
              "secondary-fixed-dim": "#a7d38d",
              "inverse-primary": "#99d77e",
              "background": "#fff8f1",
              "on-primary-container": "#f8ffee",
              "error": "#ba1a1a",
              "tertiary-fixed-dim": "#ffb4a5",
              "error-container": "#ffdad6",
              "on-primary-fixed-variant": "#1b5207",
              "on-secondary-container": "#486e34",
              "on-primary": "#ffffff",
              "surface-dim": "#e3d9c6",
              "surface-container": "#f8edda",
              "on-error-container": "#93000a",
              "inverse-on-surface": "#fbefdc",
              "on-primary-fixed": "#052100",
              "secondary-container": "#c2f0a7",
              "primary-fixed": "#b4f398",
              "tertiary-fixed": "#ffdad3",
              "surface-container-low": "#fdf2df",
              "surface": "#fff8f1",
              "surface-tint": "#346b20",
              "surface-container-lowest": "#ffffff",
              "outline": "#72796b",
              "inverse-surface": "#353023",
              "primary-fixed-dim": "#99d77e",
              "on-tertiary-container": "#fffbff",
              "on-secondary-fixed-variant": "#2b4f19",
              "outline-variant": "#c1c9b9",
              "on-tertiary-fixed-variant": "#822717",
              "surface-bright": "#fff8f1",
              "on-tertiary": "#ffffff",
              "on-surface": "#201b10",
              "on-secondary-fixed": "#072100",
              "on-tertiary-fixed": "#3f0400",
              "surface-variant": "#ece1cf",
              "secondary-fixed": "#c2f0a7",
              "on-background": "#201b10",
              "on-secondary": "#ffffff",
              "tertiary-container": "#be533f"
            },
            fontFamily: {
              "headline": ["Anek Bangla"],
              "body": ["Plus Jakarta Sans"],
              "label": ["Plus Jakarta Sans"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f8edda; /* As specified: surface-container */
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="antialiased min-h-screen flex flex-col items-center justify-center p-8">
<!-- Top Navigation Suppression: Not rendered per the "Destination Rule" for Sign Up pages -->
<main class="w-full max-w-md space-y-10">
<!-- Brand Identity Section -->
<div class="text-center space-y-4">
<div class="flex justify-center mb-6">
<div class="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-on-primary-container text-4xl" data-icon="restaurant">restaurant</span>
</div>
</div>
<h1 class="font-headline text-[2.5rem] font-semibold tracking-tight text-primary leading-tight">
                Harvest &amp; Hearth
            </h1>
<p class="font-body text-on-surface-variant text-lg">
                Curate your kitchen sanctuary.
            </p>
</div>
<!-- Form Canvas -->
<div class="bg-surface-container-lowest rounded-lg p-8 shadow-[0_12px_32px_rgba(66,73,60,0.08)]">
<form action="#" class="space-y-6">
<!-- Name Field -->
<div class="space-y-2">
<label class="font-label text-sm font-medium text-on-surface pl-2" for="name">Full Name</label>
<div class="relative">
<input class="w-full h-14 bg-surface-container-highest border-none rounded-md px-6 font-body text-on-surface placeholder:text-outline/60 focus:ring-0 focus:bg-primary-fixed/20 transition-all duration-200" id="name" placeholder="Enter your name" type="text"/>
</div>
</div>
<!-- Email Field -->
<div class="space-y-2">
<label class="font-label text-sm font-medium text-on-surface pl-2" for="email">Email Address</label>
<div class="relative">
<input class="w-full h-14 bg-surface-container-highest border-none rounded-md px-6 font-body text-on-surface placeholder:text-outline/60 focus:ring-0 focus:bg-primary-fixed/20 transition-all duration-200" id="email" placeholder="hello@hearth.com" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<label class="font-label text-sm font-medium text-on-surface pl-2" for="password">Password</label>
<div class="relative">
<input class="w-full h-14 bg-surface-container-highest border-none rounded-md px-6 font-body text-on-surface placeholder:text-outline/60 focus:ring-0 focus:bg-primary-fixed/20 transition-all duration-200" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Primary Action -->
<div class="pt-4">
<button class="w-full h-16 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-lg font-semibold rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200" type="submit">
                        Create Account
                    </button>
</div>
</form>
<div class="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col items-center space-y-4">
<p class="font-body text-sm text-on-surface-variant">
                    Already part of the hearth? 
                    <a class="text-primary font-semibold hover:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Log in</a>
</p>
</div>
</div>
<!-- Editorial Visual Element -->
<div class="grid grid-cols-2 gap-4 h-32 opacity-80">
<div class="rounded-lg overflow-hidden relative">
<img alt="Fresh organic vegetables on a rustic table" class="w-full h-full object-cover" data-alt="Close-up of vibrant fresh kale, carrots, and radishes on a textured wooden farmhouse table with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3cY6M9HbyvV0cYVh2vcBM-zM1Q4Ww43YBuVipPmPKIZ6uvlwtKS0ycR_mOg1nWl65wSOxci8GZLntkIVFmUBJw0zz_jb6RjglVfZ7H-mo17vHuWKBrDIxhdQGgsdAfD6JPRQj5S70XuJc2Zc6wrGseFXwYPDbXlfAec60AgnaW_yZ-jpidxbqolET-LnKxLWIhH7NJESol0yUjsM_5rx_Ae2l4aoruI2Oz_T1p94v6EdvuSloLGtqEPNmA_0AxJe4RtMqNnPmi5UM"/>
</div>
<div class="rounded-lg overflow-hidden relative">
<img alt="Artisan kitchen setting" class="w-full h-full object-cover" data-alt="A warm, clean minimalist kitchen interior with stone countertops, ceramic bowls, and a soft glow from a nearby window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFKAYlGJ3owEEO9kz2JVTcGaVEqpL31SMpgoAn8U1EDKnfROu4sNnNaafmYSftweVcFIewy7D-ZZt2KKQmzuPkDi9uUpJgNEEj5MipWxiGn210gL5F-QLLWNnTWPpUHaBUCF3kvuBxuPtqzE1IQCeexRoU2EQd5obW54tE4rhtE3A8MqBzvSt-jcks5wK8YZzK6JEkNk204r2oDO7z4ApT4IfTTj1a5UZbDf4R3CJ-m3vEXvSdPz9Om3LDiLMWj0Cji9aigHADBJ_"/>
</div>
</div>
<!-- Footer Policy Note -->
<p class="text-center font-label text-[0.7rem] text-on-surface-variant/60 px-8 uppercase tracking-widest leading-relaxed">
            By creating an account, you agree to our Terms of Service and Editorial Privacy Standards.
        </p>
</main>
<!-- Bottom Navigation Suppression: Not rendered per the "Destination Rule" for focused transactional screens -->
</body></html>

sign in page:
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Harvest &amp; Hearth - Sign Up</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;family=Be+Vietnam+Pro:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container-high": "#f2e7d4",
              "primary-container": "#4a8234",
              "surface-container-highest": "#ece1cf",
              "tertiary": "#9e3c29",
              "on-surface-variant": "#42493c",
              "on-error": "#ffffff",
              "secondary": "#42682f",
              "primary": "#31681e",
              "secondary-fixed-dim": "#a7d38d",
              "inverse-primary": "#99d77e",
              "background": "#fff8f1",
              "on-primary-container": "#f8ffee",
              "error": "#ba1a1a",
              "tertiary-fixed-dim": "#ffb4a5",
              "error-container": "#ffdad6",
              "on-primary-fixed-variant": "#1b5207",
              "on-secondary-container": "#486e34",
              "on-primary": "#ffffff",
              "surface-dim": "#e3d9c6",
              "surface-container": "#f8edda",
              "on-error-container": "#93000a",
              "inverse-on-surface": "#fbefdc",
              "on-primary-fixed": "#052100",
              "secondary-container": "#c2f0a7",
              "primary-fixed": "#b4f398",
              "tertiary-fixed": "#ffdad3",
              "surface-container-low": "#fdf2df",
              "surface": "#fff8f1",
              "surface-tint": "#346b20",
              "surface-container-lowest": "#ffffff",
              "outline": "#72796b",
              "inverse-surface": "#353023",
              "primary-fixed-dim": "#99d77e",
              "on-tertiary-container": "#fffbff",
              "on-secondary-fixed-variant": "#2b4f19",
              "outline-variant": "#c1c9b9",
              "on-tertiary-fixed-variant": "#822717",
              "surface-bright": "#fff8f1",
              "on-tertiary": "#ffffff",
              "on-surface": "#201b10",
              "on-secondary-fixed": "#072100",
              "on-tertiary-fixed": "#3f0400",
              "surface-variant": "#ece1cf",
              "secondary-fixed": "#c2f0a7",
              "on-background": "#201b10",
              "on-secondary": "#ffffff",
              "tertiary-container": "#be533f"
            },
            fontFamily: {
              "headline": ["Anek Bangla"],
              "body": ["Plus Jakarta Sans"],
              "label": ["Plus Jakarta Sans"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f8edda; /* As specified: surface-container */
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="antialiased min-h-screen flex flex-col items-center justify-center p-8">
<!-- Top Navigation Suppression: Not rendered per the "Destination Rule" for Sign Up pages -->
<main class="w-full max-w-md space-y-10">
<!-- Brand Identity Section -->
<div class="text-center space-y-4">
<div class="flex justify-center mb-6">
<div class="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center shadow-sm">
<span class="material-symbols-outlined text-on-primary-container text-4xl" data-icon="restaurant">restaurant</span>
</div>
</div>
<h1 class="font-headline text-[2.5rem] font-semibold tracking-tight text-primary leading-tight">
                Harvest &amp; Hearth
            </h1>
<p class="font-body text-on-surface-variant text-lg">
                Curate your kitchen sanctuary.
            </p>
</div>
<!-- Form Canvas -->
<div class="bg-surface-container-lowest rounded-lg p-8 shadow-[0_12px_32px_rgba(66,73,60,0.08)]">
<form action="#" class="space-y-6">
<!-- Name Field -->
<div class="space-y-2">
<label class="font-label text-sm font-medium text-on-surface pl-2" for="name">Full Name</label>
<div class="relative">
<input class="w-full h-14 bg-surface-container-highest border-none rounded-md px-6 font-body text-on-surface placeholder:text-outline/60 focus:ring-0 focus:bg-primary-fixed/20 transition-all duration-200" id="name" placeholder="Enter your name" type="text"/>
</div>
</div>
<!-- Email Field -->
<div class="space-y-2">
<label class="font-label text-sm font-medium text-on-surface pl-2" for="email">Email Address</label>
<div class="relative">
<input class="w-full h-14 bg-surface-container-highest border-none rounded-md px-6 font-body text-on-surface placeholder:text-outline/60 focus:ring-0 focus:bg-primary-fixed/20 transition-all duration-200" id="email" placeholder="hello@hearth.com" type="email"/>
</div>
</div>
<!-- Password Field -->
<div class="space-y-2">
<label class="font-label text-sm font-medium text-on-surface pl-2" for="password">Password</label>
<div class="relative">
<input class="w-full h-14 bg-surface-container-highest border-none rounded-md px-6 font-body text-on-surface placeholder:text-outline/60 focus:ring-0 focus:bg-primary-fixed/20 transition-all duration-200" id="password" placeholder="••••••••" type="password"/>
</div>
</div>
<!-- Primary Action -->
<div class="pt-4">
<button class="w-full h-16 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline text-lg font-semibold rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all duration-200" type="submit">
                        Create Account
                    </button>
</div>
</form>
<div class="mt-8 pt-8 border-t border-outline-variant/10 flex flex-col items-center space-y-4">
<p class="font-body text-sm text-on-surface-variant">
                    Already part of the hearth? 
                    <a class="text-primary font-semibold hover:underline decoration-primary-fixed decoration-2 underline-offset-4" href="#">Log in</a>
</p>
</div>
</div>
<!-- Editorial Visual Element -->
<div class="grid grid-cols-2 gap-4 h-32 opacity-80">
<div class="rounded-lg overflow-hidden relative">
<img alt="Fresh organic vegetables on a rustic table" class="w-full h-full object-cover" data-alt="Close-up of vibrant fresh kale, carrots, and radishes on a textured wooden farmhouse table with soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3cY6M9HbyvV0cYVh2vcBM-zM1Q4Ww43YBuVipPmPKIZ6uvlwtKS0ycR_mOg1nWl65wSOxci8GZLntkIVFmUBJw0zz_jb6RjglVfZ7H-mo17vHuWKBrDIxhdQGgsdAfD6JPRQj5S70XuJc2Zc6wrGseFXwYPDbXlfAec60AgnaW_yZ-jpidxbqolET-LnKxLWIhH7NJESol0yUjsM_5rx_Ae2l4aoruI2Oz_T1p94v6EdvuSloLGtqEPNmA_0AxJe4RtMqNnPmi5UM"/>
</div>
<div class="rounded-lg overflow-hidden relative">
<img alt="Artisan kitchen setting" class="w-full h-full object-cover" data-alt="A warm, clean minimalist kitchen interior with stone countertops, ceramic bowls, and a soft glow from a nearby window" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaFKAYlGJ3owEEO9kz2JVTcGaVEqpL31SMpgoAn8U1EDKnfROu4sNnNaafmYSftweVcFIewy7D-ZZt2KKQmzuPkDi9uUpJgNEEj5MipWxiGn210gL5F-QLLWNnTWPpUHaBUCF3kvuBxuPtqzE1IQCeexRoU2EQd5obW54tE4rhtE3A8MqBzvSt-jcks5wK8YZzK6JEkNk204r2oDO7z4ApT4IfTTj1a5UZbDf4R3CJ-m3vEXvSdPz9Om3LDiLMWj0Cji9aigHADBJ_"/>
</div>
</div>
<!-- Footer Policy Note -->
<p class="text-center font-label text-[0.7rem] text-on-surface-variant/60 px-8 uppercase tracking-widest leading-relaxed">
            By creating an account, you agree to our Terms of Service and Editorial Privacy Standards.
        </p>
</main>
<!-- Bottom Navigation Suppression: Not rendered per the "Destination Rule" for focused transactional screens -->
</body></html>

my list page:
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>My List - Harvest &amp; Hearth</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@300;400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&amp;family=Be+Vietnam+Pro:wght@300;400;500;600&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-container-high": "#f2e7d4",
              "primary-container": "#4a8234",
              "surface-container-highest": "#ece1cf",
              "tertiary": "#9e3c29",
              "on-surface-variant": "#42493c",
              "on-error": "#ffffff",
              "secondary": "#42682f",
              "primary": "#31681e",
              "secondary-fixed-dim": "#a7d38d",
              "inverse-primary": "#99d77e",
              "background": "#fff8f1",
              "on-primary-container": "#f8ffee",
              "error": "#ba1a1a",
              "tertiary-fixed-dim": "#ffb4a5",
              "error-container": "#ffdad6",
              "on-primary-fixed-variant": "#1b5207",
              "on-secondary-container": "#486e34",
              "on-primary": "#ffffff",
              "surface-dim": "#e3d9c6",
              "surface-container": "#f8edda",
              "on-error-container": "#93000a",
              "inverse-on-surface": "#fbefdc",
              "on-primary-fixed": "#052100",
              "secondary-container": "#c2f0a7",
              "primary-fixed": "#b4f398",
              "tertiary-fixed": "#ffdad3",
              "surface-container-low": "#fdf2df",
              "surface": "#fff8f1",
              "surface-tint": "#346b20",
              "surface-container-lowest": "#ffffff",
              "outline": "#72796b",
              "inverse-surface": "#353023",
              "primary-fixed-dim": "#99d77e",
              "on-tertiary-container": "#fffbff",
              "on-secondary-fixed-variant": "#2b4f19",
              "outline-variant": "#c1c9b9",
              "on-tertiary-fixed-variant": "#822717",
              "surface-bright": "#fff8f1",
              "on-tertiary": "#ffffff",
              "on-surface": "#201b10",
              "on-secondary-fixed": "#072100",
              "on-tertiary-fixed": "#3f0400",
              "surface-variant": "#ece1cf",
              "secondary-fixed": "#c2f0a7",
              "on-background": "#201b10",
              "on-secondary": "#ffffff",
              "tertiary-container": "#be533f"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Be Vietnam Pro"],
              "label": ["Be Vietnam Pro"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        body {
            background-color: #fff8f1;
            color: #201b10;
            -webkit-font-smoothing: antialiased;
        }
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glass-header {
            background: rgba(255, 248, 241, 0.8);
            backdrop-filter: blur(20px);
        }
        .text-hero {
            font-family: 'Anek Bangla', sans-serif;
            font-size: clamp(3rem, 10vw, 7.5rem);
            line-height: 0.9;
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="min-h-screen pb-32">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 glass-header">
<div class="flex items-center justify-between px-8 py-4 w-full">
<div class="flex items-center gap-4">
<button class="text-[#31681e] hover:opacity-80 transition-opacity active:scale-95 duration-200">
<span class="material-symbols-outlined" data-icon="menu">menu</span>
</button>
</div>
<h1 class="font-['Anek_Bangla'] text-2xl font-semibold text-[#31681e]">Harvest &amp; Hearth</h1>
<div class="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-container/20">
<img alt="User Profile" data-alt="close-up portrait of a woman with a warm smile in soft natural morning light outdoors" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTC3MbIaxDaZGD8fCQXDS3rC1eexXUiKQxC0gHbb8htAyBawc9cL9UeDI9iMOLOmfXdPGNEsh6DjPiPEbH3MecF3nDbUuT8mXp97IkDSYsesQMUU0Fw4oLo1QMmvak8V2k6gwKljzUUXV2HafXEdAsWKGd_-2p1fF_MctQBKpVHkO9xtvn22HHQRJ0cON7pZqpo_03epw2vFXK6ttzlS62J6h9bSFmcXR1yZ7W30tQlLesNsE-eUVP9UkQ9iC0XgMT5_98XQmBRNX0"/>
</div>
</div>
</header>
<main class="pt-28 px-8 max-w-screen-xl mx-auto">
<!-- Hero Section -->
<div class="mb-16">
<span class="font-headline font-bold uppercase tracking-widest text-xs text-primary mb-4 block">Current Selection</span>
<h2 class="text-hero font-medium text-on-surface">My List</h2>
</div>
<!-- List Content -->
<div class="space-y-16">
<!-- Section: Fresh Produce -->
<section>
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-['Anek_Bangla'] text-[2rem] font-semibold text-on-surface leading-none">Fresh Produce</h3>
<span class="font-label text-sm text-on-surface-variant font-medium">4 Items</span>
</div>
<div class="space-y-6">
<!-- Item 1 -->
<div class="flex items-center justify-between group">
<div class="flex items-center gap-6">
<div class="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="vibrant organic green kale leaves with water droplets in soft moody kitchen lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYd49IzIZqqM0I2nqxfIYSGVF6ExIHK66eCtph2nnPZLRpyVMAG2YAl8YiyU9ifWOaj4EtN9wsjA8xPq1lteOAYUCsQNUEg_XF3F5emKwYVhRcPDxssn6VaLfDpSvSihx5FCp_Wiy6XfbuIuZn8iUsqw7dyPOgVy3K-WO8Ju8wpqKFbwRojwNXruxRqC9C8L-MEJiLiJ8PEL1ZNm9VFzgmEWaNwKEL0ZWQVcxPH-onROzGzPxz50CdTYc6BXUZjrtahSCeMuAKCTWW"/>
</div>
<div>
<h4 class="font-headline font-semibold text-lg text-on-surface">Tuscan Kale</h4>
<p class="font-label text-xs text-on-surface-variant uppercase tracking-wider mt-1">Organic • 2 Bunches</p>
</div>
</div>
<div class="flex items-center bg-surface-container-highest rounded-full p-1 shadow-sm">
<button class="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined text-xl">remove</span>
</button>
<span class="px-4 font-headline font-bold text-on-surface">2</span>
<button class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:opacity-90 transition-all active:scale-90">
<span class="material-symbols-outlined text-xl">add</span>
</button>
</div>
</div>
<!-- Item 2 -->
<div class="flex items-center justify-between group">
<div class="flex items-center gap-6">
<div class="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="cluster of ripe heirloom tomatoes on a vine with rustic texture and soft warm light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgIcIWCqBgZ9_tml8Un-hpRaY8jC8xEGnRVEOd0zN5MXVJrSKHJDDeRdVqSPVRmJvfd1Of2x77g4GkTgg-vlFi_sQfJAlr4bBzCo3JPJL1-VBtuYr883nV7E2ldkcmhKhxIn5saZOWsnA611q_7N3sWvxM1gWHLVXkTLJqIVNrTMlu8gv23bwdKOamTJXgHgt9B7299zTVxt-RyUisBL4gbguXUVYZ76qSifiDQU_Yyktz7uzRRkuPgjDUTTncchiVvFZ6qMo8sc1u"/>
</div>
<div>
<h4 class="font-headline font-semibold text-lg text-on-surface">Heirloom Tomatoes</h4>
<p class="font-label text-xs text-on-surface-variant uppercase tracking-wider mt-1">Vine-Ripened</p>
</div>
</div>
<div class="flex items-center bg-surface-container-highest rounded-full p-1 shadow-sm">
<button class="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined text-xl">remove</span>
</button>
<span class="px-4 font-headline font-bold text-on-surface">3</span>
<button class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:opacity-90 transition-all active:scale-90">
<span class="material-symbols-outlined text-xl">add</span>
</button>
</div>
</div>
<!-- Item 3 -->
<div class="flex items-center justify-between group">
<div class="flex items-center gap-6">
<div class="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="crisp organic fuji apple with a smooth skin in bright airy natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFa90ZEqCedHICdRZKwBlg0tvDaAh6iSGUXxw12ayvneQOBWXOTPMIsKvxy4ibnIqBkTVwiEINLT9yTJEowXid200_dqBihsiUz0AaRbzKA1090tbMraiKbb8WeiOpHsi4Qf7bL0GgDybftWw1bLxI2ryZWhIqJQix-v-dVQG-SRlG60RjOVblY8F42QhJ8HM7d5GnIRPadNjcsX9FmjLF8Tx_ToeXuppHNERu6-GNflaTsIYfCwcv3bhH6D_HK6GW-OijwifarS8Y"/>
</div>
<div>
<h4 class="font-headline font-semibold text-lg text-on-surface">Fuji Apples</h4>
<p class="font-label text-xs text-on-surface-variant uppercase tracking-wider mt-1">Seasonal • Bulk</p>
</div>
</div>
<div class="flex items-center bg-surface-container-highest rounded-full p-1 shadow-sm">
<button class="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined text-xl">remove</span>
</button>
<span class="px-4 font-headline font-bold text-on-surface">6</span>
<button class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:opacity-90 transition-all active:scale-90">
<span class="material-symbols-outlined text-xl">add</span>
</button>
</div>
</div>
</div>
</section>
<!-- Section: Pantry Essentials -->
<section>
<div class="flex items-baseline justify-between mb-8">
<h3 class="font-['Anek_Bangla'] text-[2rem] font-semibold text-on-surface leading-none">Pantry Essentials</h3>
<span class="font-label text-sm text-on-surface-variant font-medium">2 Items</span>
</div>
<div class="space-y-6">
<!-- Item 4 -->
<div class="flex items-center justify-between group">
<div class="flex items-center gap-6">
<div class="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="close-up of artisan roasted coffee beans on a stone surface with high contrast lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCXa3boXImBnwzbkOlN5ftivUaCMj1F5iM8kWqPaSkwlxEAInzgYSwCr_rRqIAFf25FPCmF4kAj945eKj8vMAfcRH5ckyIumdZ1ye_Hen-GMtYqBBsUHJw9J6-J-EIBr-Jz_GH_O3A0Q7cAoek37W3AY9J_F8luTA-xKa6Kfbg9GQjQgHRaGEz13Fs9WKtyCXywcXiFtxU40ljYt-OoBe7CT1bw9tmdm7hJg2uFbyvjn5sGzXJ9Unwz0CHI4POfGG1Cwdzbk7fuwGKZ"/>
</div>
<div>
<h4 class="font-headline font-semibold text-lg text-on-surface">Whole Bean Coffee</h4>
<p class="font-label text-xs text-on-surface-variant uppercase tracking-wider mt-1">Dark Roast • 12oz</p>
</div>
</div>
<div class="flex items-center bg-surface-container-highest rounded-full p-1 shadow-sm">
<button class="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined text-xl">remove</span>
</button>
<span class="px-4 font-headline font-bold text-on-surface">1</span>
<button class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:opacity-90 transition-all active:scale-90">
<span class="material-symbols-outlined text-xl">add</span>
</button>
</div>
</div>
<!-- Item 5 -->
<div class="flex items-center justify-between group">
<div class="flex items-center gap-6">
<div class="w-20 h-20 rounded-lg overflow-hidden bg-surface-container">
<img class="w-full h-full object-cover" data-alt="bottle of extra virgin olive oil with gold highlights on a dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvQlhDhBj3OmH09Jg2BTa7nOtJp3UPkOcjO93CuLGpqAl4P6EwbHJsESO6o7ZHWNN4ff4x3KMBRltfsv1FGxv2L6hLIzIzay4zwwr69wtlzJW-EcNrQPZI0e07jSZitBXuQou_FWsbmctf938gxUtTaDb_h70UF3oWI3w6Rau3LA-bNJDCiTwtTwBU4uqhUViEXWrZdO2U05_IS0kpgU4Q0eYOTm7hQZMx1RsK_BSrNPWrW_7xWbLF_hJydDpO9lanAnabsiFdSWm0"/>
</div>
<div>
<h4 class="font-headline font-semibold text-lg text-on-surface">Cold Pressed Olive Oil</h4>
<p class="font-label text-xs text-on-surface-variant uppercase tracking-wider mt-1">Organic • 500ml</p>
</div>
</div>
<div class="flex items-center bg-surface-container-highest rounded-full p-1 shadow-sm">
<button class="w-10 h-10 flex items-center justify-center text-primary hover:bg-surface-container-high rounded-full transition-colors">
<span class="material-symbols-outlined text-xl">remove</span>
</button>
<span class="px-4 font-headline font-bold text-on-surface">1</span>
<button class="w-10 h-10 flex items-center justify-center bg-primary text-white rounded-full shadow-md hover:opacity-90 transition-all active:scale-90">
<span class="material-symbols-outlined text-xl">add</span>
</button>
</div>
</div>
</div>
</section>
</div>
<!-- Sticky Primary Action -->
<div class="mt-20 flex justify-center">
<button class="group relative flex items-center gap-4 bg-gradient-to-r from-primary to-primary-container text-white px-10 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform duration-300 active:scale-95">
<span class="material-symbols-outlined">share</span>
<span class="font-headline font-bold text-lg">Share via WhatsApp</span>
</button>
</div>
</main>
<!-- BottomNavBar -->
<nav class="fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] rounded-full shadow-[0_12px_32px_rgba(66,73,60,0.08)] z-50 bg-[#ffffff] dark:bg-stone-800 h-20 px-4 flex justify-around items-center">
<a class="flex flex-col items-center justify-center text-[#201b10]/50 dark:text-stone-400 px-4 hover:text-[#31681e] transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Home</span>
</a>
<a class="flex flex-col items-center justify-center text-[#201b10]/50 dark:text-stone-400 px-4 hover:text-[#31681e] transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="search">search</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Search</span>
</a>
<a class="flex flex-col items-center justify-center bg-[#c2f0a7] dark:bg-[#31681e] text-[#31681e] dark:text-[#c2f0a7] rounded-full px-6 py-2 transition-all" href="#">
<span class="material-symbols-outlined" data-icon="flatware" style="font-variation-settings: 'FILL' 1;">flatware</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">My List</span>
</a>
<a class="flex flex-col items-center justify-center text-[#201b10]/50 dark:text-stone-400 px-4 hover:text-[#31681e] transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Saved</span>
</a>
<a class="flex flex-col items-center justify-center text-[#201b10]/50 dark:text-stone-400 px-4 hover:text-[#31681e] transition-colors" href="#">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Profile</span>
</a>
</nav>
</body></html>

home page:
<!DOCTYPE html>

<html lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Harvest &amp; Hearth - Dashboard</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@300;400;500;600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;family=Be+Vietnam+Pro:wght@400;500&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "secondary-fixed": "#c2f0a7",
              "primary-fixed": "#b4f398",
              "on-primary-fixed": "#052100",
              "on-surface": "#201b10",
              "surface-variant": "#ece1cf",
              "primary-fixed-dim": "#99d77e",
              "on-error": "#ffffff",
              "surface-dim": "#e3d9c6",
              "surface-container-high": "#f2e7d4",
              "on-primary-container": "#f8ffee",
              "tertiary-fixed-dim": "#ffb4a5",
              "on-tertiary-fixed-variant": "#822717",
              "on-secondary-fixed-variant": "#2b4f19",
              "inverse-surface": "#353023",
              "inverse-primary": "#99d77e",
              "surface-container-lowest": "#ffffff",
              "on-secondary-fixed": "#072100",
              "on-secondary-container": "#486e34",
              "tertiary": "#9e3c29",
              "error-container": "#ffdad6",
              "secondary-fixed-dim": "#a7d38d",
              "secondary-container": "#c2f0a7",
              "surface-container-highest": "#ece1cf",
              "on-primary": "#ffffff",
              "background": "#fff8f1",
              "tertiary-container": "#be533f",
              "on-surface-variant": "#42493c",
              "secondary": "#42682f",
              "surface-bright": "#fff8f1",
              "on-tertiary-fixed": "#3f0400",
              "on-tertiary": "#ffffff",
              "primary": "#31681e",
              "on-secondary": "#ffffff",
              "surface": "#fff8f1",
              "primary-container": "#4a8234",
              "surface-container-low": "#fdf2df",
              "on-error-container": "#93000a",
              "inverse-on-surface": "#fbefdc",
              "tertiary-fixed": "#ffdad3",
              "error": "#ba1a1a",
              "on-tertiary-container": "#fffbff",
              "on-background": "#201b10",
              "surface-container": "#f8edda",
              "outline-variant": "#c1c9b9",
              "outline": "#72796b",
              "on-primary-fixed-variant": "#1b5207",
              "surface-tint": "#346b20"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Be Vietnam Pro"],
              "label": ["Be Vietnam Pro"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #fff8f1;
            font-family: 'Plus Jakarta Sans', sans-serif;
            color: #201b10;
        }
        .anek-bangla { font-family: 'Anek Bangla', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
  </head>
<body class="bg-surface selection:bg-primary-fixed">
<!-- TopAppBar -->
<header class="fixed top-0 w-full z-50 bg-[#fff8f1]/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 w-full">
<div class="flex items-center gap-3">
<div class="w-10 h-10 rounded-full bg-surface-container overflow-hidden border-2 border-primary-fixed">
<img alt="Profile" data-alt="close-up portrait of a smiling woman with warm lighting and a soft blurred kitchen background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOBdY9vPIAPlA0FVG6bQYzgWw8C38Li4Im92GR3H-MxBnhha0yxfZftMIIiXKu5Kr1ZJshUmmDq9zmgpbNbkNFiks8ffrtWTIPSm3LnmCO9SkfDRlABM4fQXWrwOed2N3cuTX4hLHyY-NQr7shA0WQSRfD-ewGwVYJIOQbOENnDDzqXXnzu0C83QMZKfahYs0CIvXgcue6dWNBOyYuOTYVUK4QxHdoCzxeFNNAMwKS3ptjdCtyUhOaYPpy9emrb-JmwCThsyq8Ohvh"/>
</div>
<span class="font-['Anek_Bangla'] text-[1.5rem] font-semibold tracking-tight text-[#31681e]">Harvest &amp; Hearth</span>
</div>
<button class="w-10 h-10 flex items-center justify-center rounded-full hover:opacity-80 transition-opacity">
<span class="material-symbols-outlined text-[#31681e]">notifications</span>
</button>
</header>
<main class="pt-24 pb-40 px-6 max-w-2xl mx-auto">
<!-- Greeting Section -->
<section class="mb-8">
<h1 class="font-['Anek_Bangla'] text-[2.5rem] leading-tight font-medium text-on-surface">
                Good morning, <br/>
<span class="text-primary">Ready to build ur list?</span>
</h1>
</section>
<!-- Search & Action Buttons -->
<section class="space-y-4 mb-10">
<div class="relative group">
<div class="absolute inset-y-0 left-5 flex items-center pointer-events-none">
<span class="material-symbols-outlined text-on-surface-variant">search</span>
</div>
<input class="w-full bg-surface-container-highest border-none rounded-[1.5rem] py-4 pl-14 pr-6 focus:ring-0 focus:bg-primary-fixed/20 transition-all placeholder:text-stone-500" placeholder="Search essentials..." type="text"/>
</div>
<div class="flex gap-4">
<button class="flex-1 py-4 px-6 bg-secondary-container text-on-secondary-container rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform">
<span class="material-symbols-outlined text-[20px]">pending_actions</span>
<span>In Progress</span>
</button>
<button class="flex-1 py-4 px-6 bg-gradient-to-r from-[#31681e] to-[#4a8234] text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:scale-[0.98] transition-transform shadow-lg shadow-primary/10">
<span class="material-symbols-outlined text-[20px]">add_circle</span>
<span>New List</span>
</button>
</div>
</section>
<!-- Category Horizontal Scroll -->
<section class="mb-8 -mx-6">
<div class="flex gap-3 overflow-x-auto px-6 hide-scrollbar">
<button class="whitespace-nowrap px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium">Vegetables</button>
<button class="whitespace-nowrap px-6 py-2.5 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Fruits</button>
<button class="whitespace-nowrap px-6 py-2.5 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Dairy</button>
<button class="whitespace-nowrap px-6 py-2.5 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Bakery</button>
<button class="whitespace-nowrap px-6 py-2.5 bg-surface-container text-on-surface-variant rounded-full text-sm font-medium hover:bg-surface-container-high transition-colors">Pantry</button>
</div>
</section>
<!-- Grid of Item Cards -->
<section class="grid grid-cols-2 gap-4">
<!-- Item Card 1 -->
<div class="bg-surface-container-lowest rounded-xl p-3 flex flex-col group hover:scale-[0.98] transition-all">
<div class="aspect-square rounded-lg bg-surface-container mb-3 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="close-up of fresh green organic kale leaves with water droplets and soft natural lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuACIpyd5jwTOzPvlshkxnXR1P39iUjCfKl4S3QZQWnjOL04CXZWDRqJxgYWwMX5q2VbeTwtg7xdXK1e-bGI_JVSrWii0zPRCuW-z5t0RBj_5LH_l4bmoK1xIDnKBzJjD6wbj3uibagQBTrt0w_6SpiUnUMdQ3srZsXum3DCO_2P-qnjhBwn4mq-e52IqMdE2UF1bbZ4VzkuWmsFLvO0E9KrhD6z4G-zH91j6tAqQbGILMToYln0IY6EPo_KjN1T4srZuT0Jns28k-M2"/>
</div>
<div class="flex-1 px-1">
<h3 class="font-headline text-[1rem] font-semibold text-on-surface leading-snug">Organic Red Onions</h3>
<p class="font-label text-[0.75rem] text-stone-500 mt-1">1 kg</p>
</div>
<div class="mt-4 px-1">
<button class="w-full py-2 bg-primary text-white rounded-full flex items-center justify-center gap-1 hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-[18px]">add</span>
<span class="text-sm font-medium">Add</span>
</button>
</div>
</div>
<!-- Item Card 2 -->
<div class="bg-surface-container-lowest rounded-xl p-3 flex flex-col group hover:scale-[0.98] transition-all">
<div class="aspect-square rounded-lg bg-surface-container mb-3 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="aesthetic glass bottle of fresh whole milk on a rustic wooden table with morning sunlight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBWnOxnEw5_-5paIDXYCMKcXgbCoElfeyyjKdzceL_o1iMyqwWVDLU3McA0MFlnhh8cPniMbTvuA-mPjjeNUQRVJtYQsc3zdMhrcMsF6sxiL5JXrBY0KCiy_DFwgxEgd0B0oaysUKfO3Of5xfeSJ67k1uR23bGVQfvNr8I0ixnogquywgA7DUqqTFG-SE2y5D-lAoaKDlXI94MPM9jvpK5UiVIBWXo9n7VKTsMieu_eZUh8SW5fH7bx7NmrdApguWSKjevwGRIep18W"/>
</div>
<div class="flex-1 px-1">
<h3 class="font-headline text-[1rem] font-semibold text-on-surface leading-snug">Amul Fresh Milk</h3>
<p class="font-label text-[0.75rem] text-stone-500 mt-1">1 Litre</p>
</div>
<div class="mt-4 px-1">
<!-- Active State Quantity Stepper -->
<div class="flex items-center justify-between bg-surface-container-highest rounded-full p-1">
<button class="w-8 h-8 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary">
<span class="material-symbols-outlined text-[18px]">remove</span>
</button>
<span class="text-sm font-bold text-on-surface">2</span>
<button class="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
<span class="material-symbols-outlined text-[18px]">add</span>
</button>
</div>
</div>
</div>
<!-- Item Card 3 -->
<div class="bg-surface-container-lowest rounded-xl p-3 flex flex-col group hover:scale-[0.98] transition-all">
<div class="aspect-square rounded-lg bg-surface-container mb-3 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="basket of brown farm fresh eggs nestled in straw with soft atmospheric lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsyv5Zlrc5kdoGpo-BULzJo6LTL_MJtWhv71tL17aWd8LjsSngzuH4onq4QvT1ZdXbQ-4QNvttiY3l76SLciy1ZpBJVDVMujqiqffMUy3DbKpBwVREti6jwRlIZ2Gdt5nG8latPygv_qRbDwhoSfaRJu4NrW1DA1Xv37R7RRWk8EybXNYS3R-RqyQV1afjkXUAmkcX2zEMGG0vj98VbhTCzliUeCcRc6yEwSBS-rdOpRUZkk66BPoe0U1B98ktaibewFX46LGlOWK8"/>
</div>
<div class="flex-1 px-1">
<h3 class="font-headline text-[1rem] font-semibold text-on-surface leading-snug">Organic Eggs</h3>
<p class="font-label text-[0.75rem] text-stone-500 mt-1">12 pcs</p>
</div>
<div class="mt-4 px-1">
<button class="w-full py-2 bg-primary text-white rounded-full flex items-center justify-center gap-1 hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-[18px]">add</span>
<span class="text-sm font-medium">Add</span>
</button>
</div>
</div>
<!-- Item Card 4 -->
<div class="bg-surface-container-lowest rounded-xl p-3 flex flex-col group hover:scale-[0.98] transition-all">
<div class="aspect-square rounded-lg bg-surface-container mb-3 overflow-hidden">
<img class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" data-alt="artisan sourdough bread loaf on a dark stone surface with flour dusting and dramatic side lighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAceS2wlylXJ9FstyxhVEWJVdmLx15I7mCxvV4lGAfK_GlwJdb_XmguX8Ab39wt96mZT4NHnTDp2Xv18bIHPaOG4Uk8UZwPzYxkQ9D9imUeafuR2FGekwPJSQg-w1_-c8KjoEPd4cL8pcNNDKVUD3BUPTfmRPNj0tikOGMAkX_Lp6PyDqB5eD5moUMzQ2WUH6dzRDxPC8Gjs5ymUr5nLpgcyb4aogd5jvSs-M6kSC1FLt_Ja87rt5E5MM3cLs11WM3g0spWn6udAvl1"/>
</div>
<div class="flex-1 px-1">
<h3 class="font-headline text-[1rem] font-semibold text-on-surface leading-snug">Sourdough Loaf</h3>
<p class="font-label text-[0.75rem] text-stone-500 mt-1">450g</p>
</div>
<div class="mt-4 px-1">
<button class="w-full py-2 bg-primary text-white rounded-full flex items-center justify-center gap-1 hover:bg-primary-container transition-colors">
<span class="material-symbols-outlined text-[18px]">add</span>
<span class="text-sm font-medium">Add</span>
</button>
</div>
</div>
</section>
</main>
<!-- Floating View List Summary Bar -->
<div class="fixed bottom-28 left-6 right-6 z-40 animate-bounce-subtle">
<button class="w-full bg-inverse-surface text-inverse-on-surface rounded-full py-4 px-8 flex items-center justify-between shadow-xl">
<div class="flex items-center gap-3">
<div class="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-on-primary-fixed text-xs font-bold">
                    8
                </div>
<span class="font-medium">View your list</span>
</div>
<div class="flex items-center gap-2">
<span class="text-stone-400 text-sm">Drafting...</span>
<span class="material-symbols-outlined">chevron_right</span>
</div>
</button>
</div>
<!-- BottomNavBar -->
<nav class="fixed bottom-0 left-0 w-full flex justify-around items-center px-6 pb-8 pt-4 bg-[#fff8f1] rounded-t-[3rem] z-50 shadow-[0_-12px_32px_rgba(66,73,60,0.08)]">
<div class="flex flex-col items-center justify-center bg-[#c2f0a7] text-[#486e34] rounded-full px-6 py-2 scale-98 transition-transform duration-200">
<span class="material-symbols-outlined" data-icon="home">home</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Home</span>
</div>
<div class="flex flex-col items-center justify-center text-stone-500 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="search">search</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Search</span>
</div>
<div class="flex flex-col items-center justify-center text-stone-500 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="receipt_long">receipt_long</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">My List</span>
</div>
<div class="flex flex-col items-center justify-center text-stone-500 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="bookmark">bookmark</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Saved</span>
</div>
<div class="flex flex-col items-center justify-center text-stone-500 px-4 py-2 hover:bg-stone-100 rounded-full transition-colors">
<span class="material-symbols-outlined" data-icon="person">person</span>
<span class="font-['Plus_Jakarta_Sans'] text-[0.75rem] font-medium">Profile</span>
</div>
</nav>
</body></html>

splash screen that comes after sign in:
<!DOCTYPE html>

<html class="light" lang="en"><head>
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0" name="viewport"/>
<title>Harvest &amp; Hearth | Splash</title>
<script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
<link href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&amp;family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&amp;family=Be+Vietnam+Pro:wght@100..900&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet"/>
<script id="tailwind-config">
      tailwind.config = {
        darkMode: "class",
        theme: {
          extend: {
            colors: {
              "surface-tint": "#346b20",
              "on-secondary-fixed-variant": "#2b4f19",
              "on-surface-variant": "#42493c",
              "error-container": "#ffdad6",
              "secondary-fixed": "#c2f0a7",
              "error": "#ba1a1a",
              "secondary-fixed-dim": "#a7d38d",
              "on-surface": "#201b10",
              "outline-variant": "#c1c9b9",
              "inverse-on-surface": "#fbefdc",
              "on-primary-container": "#f8ffee",
              "surface-container-low": "#fdf2df",
              "on-tertiary-fixed": "#3f0400",
              "on-secondary-container": "#486e34",
              "inverse-surface": "#353023",
              "secondary-container": "#c2f0a7",
              "tertiary-fixed-dim": "#ffb4a5",
              "surface-bright": "#fff8f1",
              "primary": "#31681e",
              "surface-container": "#f8edda",
              "on-tertiary": "#ffffff",
              "on-background": "#201b10",
              "tertiary-container": "#be533f",
              "primary-fixed-dim": "#99d77e",
              "on-tertiary-fixed-variant": "#822717",
              "on-error-container": "#93000a",
              "background": "#fff8f1",
              "on-primary-fixed-variant": "#1b5207",
              "surface-dim": "#e3d9c6",
              "tertiary-fixed": "#ffdad3",
              "on-secondary": "#ffffff",
              "on-tertiary-container": "#fffbff",
              "secondary": "#42682f",
              "on-secondary-fixed": "#072100",
              "on-primary": "#ffffff",
              "outline": "#72796b",
              "surface-container-high": "#f2e7d4",
              "surface-container-lowest": "#ffffff",
              "surface-variant": "#ece1cf",
              "inverse-primary": "#99d77e",
              "surface": "#fff8f1",
              "primary-fixed": "#b4f398",
              "surface-container-highest": "#ece1cf",
              "tertiary": "#9e3c29",
              "on-error": "#ffffff",
              "primary-container": "#4a8234",
              "on-primary-fixed": "#052100"
            },
            fontFamily: {
              "headline": ["Plus Jakarta Sans"],
              "body": ["Be Vietnam Pro"],
              "label": ["Be Vietnam Pro"],
              "brand": ["Anek Bangla"]
            },
            borderRadius: {"DEFAULT": "1rem", "lg": "2rem", "xl": "3rem", "full": "9999px"},
          },
        },
      }
    </script>
<style>
        .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        body {
            background-color: #f8edda; /* As specified in prompt */
        }
        .brand-wordmark {
            font-family: 'Anek Bangla', sans-serif;
            font-weight: 500;
            font-size: clamp(3rem, 10vw, 120px);
            line-height: 0.9;
            letter-spacing: -0.04em;
            color: #558e3f; /* Dark green as requested */
        }
    </style>
<style>
    body {
      min-height: max(884px, 100dvh);
    }
  </style>
</head>
<body class="flex flex-col min-h-screen items-center justify-between overflow-hidden">
<!-- Top Spacing/Utility Shell -->
<div class="w-full h-24"></div>
<!-- Main Identity Anchor -->
<main class="flex flex-col items-center px-8 text-center max-w-4xl w-full">
<!-- Brand Moment -->
<div class="mb-12">
<h1 class="brand-wordmark">
                Harvest<br/>&amp; Hearth
            </h1>
</div>
<!-- Editorial Tagline -->
<div class="space-y-4">
<p class="font-brand text-on-surface text-lg md:text-xl tracking-wide font-medium">
                The art of domestic curation.
            </p>
<div class="flex justify-center items-center gap-3">
<span class="w-8 h-[1px] bg-outline-variant/30"></span>
<span class="material-symbols-outlined text-primary text-sm" style="font-variation-settings: 'FILL' 1;">restaurant</span>
<span class="w-8 h-[1px] bg-outline-variant/30"></span>
</div>
</div>
</main>
<!-- Visual Anchor: Lower Area Placeholder Illustration -->
<section class="relative w-full flex flex-col items-center justify-end flex-grow mt-12 px-6">
<!-- Soft Tonal Background for Illustration -->
<div class="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent z-0"></div>
<!-- Illustration Wrapper -->
<div class="relative z-10 w-full max-w-3xl aspect-[4/3] rounded-t-xl overflow-hidden bg-surface-container-lowest/40 backdrop-blur-sm">
<img class="w-full h-full object-cover mix-blend-multiply opacity-60 grayscale-[20%]" data-alt="A soft focus editorial photo of organic vegetables and linen napkins on a sun-drenched wooden kitchen table with warm shadows" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBjBELxpTMETzDk7zc1FazlQDFqVIu6cVcu0NWYPDMo5RyMfHmEX7Oucm5iOee2UtJbzTb4CfMdS72YS4Ny9Dtgc3qalkPn8GNsqT3dkyVHbXIjWl3I3Xm6W-niTQdmWFLHqfDPy2K4SUz6P9NvGg9uDAdP0oWDh0v5ts-a2XKMs_4Sib3VmYoAHLygDKAz-X7V59UMwVMFN3_4I1oBGf5RFap6jYXILE1Tj_jiHOQy0cN-W5CzqXets20zBROgqFWGeZDnt76BN5aR"/>
<!-- Floating Decorative Element: Anek Bangla Detail -->
</div>
<!-- Bottom Loading/Action Indication -->
<div class="relative z-20 pb-16 pt-8 w-full flex flex-col items-center gap-6">
<div class="flex items-center gap-2">
<div class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></div>
<div class="w-1.5 h-1.5 rounded-full bg-primary/40"></div>
<div class="w-1.5 h-1.5 rounded-full bg-primary/20"></div>
</div>
<p class="font-brand text-on-surface-variant text-sm tracking-widest uppercase opacity-70">
                Organizing your pantry
            </p>
</div>
</section>
<!-- The Shell Interaction Rule - Suppression of Navigation for Splash -->
<!-- Navigation is suppressed per "Automatic Suppression" rule for transactional/onboarding flows -->
</body></html>

project structure:
app/
├── (auth)/
│   ├── sign-in.tsx        # {{DATA:SCREEN:SCREEN_4}}
│   └── sign-up.tsx        # {{DATA:SCREEN:SCREEN_15}}
├── (tabs)/
│   ├── _layout.tsx       # Bottom Tab Navigator
│   ├── index.tsx         # {{DATA:SCREEN:SCREEN_6}} (Home & Browse)
│   ├── my-list.tsx       # {{DATA:SCREEN:SCREEN_10}}
│   ├── search.tsx
│   ├── saved.tsx
│   └── profile.tsx
├── _layout.tsx           # Root Layout (Providers, Fonts)
└── index.tsx             # {{DATA:SCREEN:SCREEN_12}} (Splash/Entry)
components/
├── UI/
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── ItemCard.tsx
│   └── QuantityStepper.tsx
constants/
└── theme.ts              # Custom Color Palette


// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#558e3f",       // Main Green
        secondary: "#6c9556",
        accent: "#dfe8c7",
        background: "#f8edda",    // Main Neutral
        peach: "#f8d3bd",
        coral: "#d76650",
        destructive: "#e34b30",
      },
      fontFamily: {
        anek: ["AnekBangla_500Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};

