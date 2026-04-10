# Senryx Tools — Style Guide

Independence Scorecard is the canonical template. All tools should match these patterns.

---

## Fonts

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Inter:wght@300;400;500;600&display=swap');
```

| Role | Family | Weight | Notes |
|---|---|---|---|
| Hero titles | Playfair Display | 900 | Italic variant for accent words |
| Section/question titles | Playfair Display | 700 | |
| All other text | Inter | 300–600 | |

---

## Colors

| Swatch | Name | Hex |
|---|---|---|
| Purple | Brand primary | `#4F10FF` |
| Orange | Accent / CTA | `#FF9900` |
| Light | Backgrounds / borders | `#E6E4E8` |
| Black | Text / dark elements | `#000000` |
| White | Surfaces | `#FFFFFF` |

```css
:root {
  --purple:  #4F10FF;
  --orange:  #FF9900;
  --black:   #000000;
  --light:   #E6E4E8;
  --border:  #E6E4E8;
  --text:    #000000;
  --white:   #FFFFFF;
}
```

---

## Header

Simple, inline-styled. Logo only — no nav links.

```html
<div style="padding:16px 24px;border-bottom:1px solid #e5e7eb;">
  <a href="https://senryx.com" style="display:inline-block;">
    <img src="[SENRYX_BANNER_URL]" alt="Senryx Group" style="height:36px;width:auto;display:block;">
  </a>
</div>
```

- Logo height: **36px**
- Padding: **16px 24px**
- Border bottom: `1px solid #e5e7eb`

---

## Footer

Appears only on the results screen (not a full page footer). Centered, subdued.

```html
<div class="results-footer">
  <a href="https://senryx.com" style="display:inline-block;">
    <img src="[SENRYX_BANNER_URL]" alt="Senryx Group" style="height:24px;width:auto;display:block;opacity:0.5;">
  </a>
  <span>Sustainable Growth for Leading Insurance Agencies</span>
</div>
```

```css
.results-footer {
  text-align: center;
  font-size: 12px;
  color: #9ca3af;
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8px;
}
```

- Logo height: **24px**, opacity: **0.5**
- Tagline: `Sustainable Growth for Leading Insurance Agencies`

---

## Layout

| Section | Max-width | Padding |
|---|---|---|
| Intro | 680px | 64px 32px 80px |
| Quiz / Results | 720px | per section |

All containers: `margin: 0 auto`

---

## Typography Scale

| Element | Size | Weight | Notes |
|---|---|---|---|
| Hero title | `clamp(48px, 8vw, 78px)` | 900 | Playfair Display, line-height 1.0 |
| Question text | `clamp(26px, 4vw, 36px)` | 700 | Playfair Display, line-height 1.25 |
| Body / intro desc | 17px | 400 | line-height 1.65 |
| Button text | 15–16px | 600 | Inter |
| Labels / chips | 11px | 600–700 | Uppercase, letter-spacing 0.1em |
| Trust / fine print | 12–13px | 400 | Italic where appropriate |

---

## Components

### Assessment Badge
```css
display: inline-flex;
align-items: center;
gap: 7px;
background: #FFE5B0;
color: #7A4500;
font-size: 11px;
font-weight: 700;
letter-spacing: 0.1em;
text-transform: uppercase;
padding: 5px 14px;
border-radius: 20px;
```
Dot before text: `6px` circle, `#FF9900`

```html
<div class="intro-badge">Free Assessment &middot; ~5 Minutes</div>
```

### Section Chip (quiz)
```css
background: #ede9fe;
color: var(--purple);
font-size: 11px;
font-weight: 700;
letter-spacing: .1em;
text-transform: uppercase;
padding: 5px 14px;
border-radius: 6px;
```

### Start / Primary Button
```css
background: var(--purple);
color: #fff;
font-size: 16px;
font-weight: 600;
padding: 18px 36px;
border-radius: 12px;
border: none;
```

### Answer Option
```css
display: flex;
align-items: center;
gap: 16px;
padding: 18px 22px;
background: var(--light);
border: 2px solid transparent;
border-radius: 14px;
font-size: 15px;
```
Selected state: `border-color: var(--purple); background: #f5f3ff`

### Next Button
```css
background: var(--purple);
color: #fff;
font-size: 15px;
font-weight: 600;
padding: 14px 28px;
border-radius: 10px;
opacity: 0.35; /* disabled */
```
Active: `opacity: 1`

### CTA Block (results)
```css
background: #4f10ff;
border-radius: 16px;
padding: 40px 36px;
text-align: center;
color: #fff;
```

### CTA Buttons (inside CTA block)
| Button | Style |
|---|---|
| Primary (schedule call) | `background: var(--orange); color: var(--black); font-weight: 700` |
| Secondary (retake) | `background: #000; color: #fff; font-weight: 500` |

### Progress Bar
```css
/* Track */
width: 120px; height: 4px; background: var(--border); border-radius: 100px;
/* Fill */
background: linear-gradient(90deg, var(--purple), #a78bfa);
```

---

## Assets

| Asset | URL |
|---|---|
| Logo (banner) | `https://images.squarespace-cdn.com/content/68e7db131f56d475ab63c3a4/131ac506-39da-421b-a240-cd70425f04d6/Senryx+Banner.webp?content-type=image%2Fwebp` |
| Favicon | `https://images.squarespace-cdn.com/content/68e7db131f56d475ab63c3a4/d4c5bf8c-c661-40da-9caa-ba5dfc214920/Senryx+Favicon.webp?content-type=image%2Fwebp` |

---

## Favicon

```html
<link rel="icon" type="image/webp" href="[FAVICON_URL]">
```

---

## Mobile Breakpoint (`max-width: 600px`)

- Intro padding: `40px 24px 60px`
- Stats row: `flex-direction: column`
- Start button: `width: 100%; justify-content: center`
- Quiz padding reduced
- Next button: `width: 100%`
- Hero title: `clamp(40px, 11vw, 78px)`
- CTA buttons: `flex-direction: column`, full width
