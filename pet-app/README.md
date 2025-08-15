# Pet Connect

A minimal Next.js app where owners can register pets and adopters can filter listings by type and optionally by city. Data and photos are stored in `localStorage`.

## Run locally

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Open http://localhost:3000

## Notes
- Photos are stored as data URLs in your browser only (no server upload).
- Adopter can filter by type (dog/cat/horse/rabbit/other) and by city. If city is empty, all cities are shown.