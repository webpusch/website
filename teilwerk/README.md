# Teilwerk — Portfolio-Demo (Kfz-Ersatzteile-Shop)

Fiktive Landingpage für einen Kfz-Ersatzteile-Händler. Reines Struktur-/Design-Demo
für dein Freelance-Portfolio — kein echter Shop, keine echten Bilder, keine echte Firma.

## Tech-Stack

- **Astro** (Static Site Generation)
- **Tailwind CSS v4** (CSS-first Konfiguration, Design-Tokens 1:1 aus `design.md` in `src/styles/global.css`)
- **shadcn/ui-Utilities** (`class-variance-authority`, `clsx`, `tailwind-merge`) — siehe Hinweis unten
- Vanilla-JS für Scroll-Reveal & Count-up (`src/scripts/reveal.js`), kein Framework-Runtime

## Hinweis zur shadcn/ui-Umsetzung

shadcn/ui ist im Original React-basiert (Radix-Primitives). Da im Briefing gleichzeitig
"keine unnötigen JS-Bundles" und Astro-Partial-Hydration gefordert war, habe ich die
shadcn-Komponenten (`Button`, `Badge`) als **reine Astro-Komponenten** mit denselben
zugrunde liegenden Utilities (`cva`, `cn()`-Helper) nachgebaut — gleiche Optik, gleiche
Varianten-Logik, aber ohne React-Laufzeit-Overhead, wo keine echte Interaktivität nötig
ist. Falls du doch eine React-Insel brauchst (z. B. für einen echten Warenkorb-Dialog
später), lässt sich `@astrojs/react` jederzeit ergänzen — die `cva`-Varianten sind 1:1
nach React portierbar.

## Setup

```bash
npm install
npm run dev       # lokaler Dev-Server
npm run build     # Production-Build nach /dist
npm run preview   # Production-Build lokal ansehen
```

## Vor dem Deployment: `astro.config.mjs` anpassen

```js
export default defineConfig({
  site: 'https://<dein-github-username>.github.io',
  base: '/<repo-name>',   // bei einem User-Repo (<username>.github.io) leer lassen: '/'
  ...
});
```

## Deployment auf GitHub Pages

1. Repository auf GitHub anlegen, Code pushen (Branch `main`).
2. In den Repo-Einstellungen: **Settings → Pages → Source: "GitHub Actions"** auswählen.
3. Der Workflow unter `.github/workflows/deploy.yml` baut und deployed automatisch bei
   jedem Push auf `main`.

## Was noch fehlt / bewusst ausgeklammert

- Alle Produktbilder, Kategoriebilder und Markenlogos sind **Platzhalter** (schraffierte
  Flächen mit Beschriftung), wie im Briefing gefordert — keine echten oder KI-generierten
  Bilder.
- Alle Kennzahlen (10.000+ Teile, 98 % Lieferquote, 500+ Werkstätten) sind **fiktive
  Demo-Werte** für die Portfolio-Präsentation, keine echten Geschäftszahlen.
- Kein Warenkorb, kein Checkout, kein CMS/Backend — wie im Briefing festgelegt.
- Footer-Links (Impressum/Datenschutz/AGB) sind Platzhalter-Anker (`#`), da es kein
  echtes Unternehmen gibt.
