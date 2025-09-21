# lorna.tv

Landing React + Vite + Tailwind + Framer Motion  
Animations bidirectionnelles, toggle de tarifs, fond global, bouton haut de page.

## Dev
```bash
npm ci
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Docker (prod)
```bash
docker build -t lorna.tv .
docker run -d -p 8080:80 --name lorna lorna.tv
# http://localhost:8080
```
