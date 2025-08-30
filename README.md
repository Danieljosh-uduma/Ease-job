
# Ease-job

## Project Structure

This is an example structure of project describing the folder structure.

```text

my-app/
├─ public/
│  └─ favicon.ico
│
├─ src/
│  ├─ assets/               # static files: images, fonts, icons
│  │  └─ logo.svg
│  │
│  ├─ components/           # shared, reusable pieces
│  │  ├─ common/            # app-specific wrappers & layouts
│  │  │  ├─ Navbar.tsx
│  │  │  ├─ Footer.tsx
│  │  │  └─ index.ts
│  │  │
│  │  ├─ layout/            # page scaffolding
│  │  │  ├─ RootLayout.tsx
│  │  │  ├─ Sidebar.tsx
│  │  │  └─ index.ts
│  │  │
│  │  ├─ ui/                # auto-generated shadcn/ui components
│  │  │  └─ (…all shadcn/ui files…)
│  │  │
│  │  └─ widgets/           # small, generic widgets
│  │     ├─ UserAvatar.tsx
│  │     └─ index.ts
│  │
│  ├─ hooks/                # custom React hooks
│  │  ├─ useAuth.ts
│  │  └─ useDebounce.ts
│  │
│  ├─ pages/                # route entry points
│  │  ├─ HomePage.tsx       # mapped to "/"
│  │  ├─ AboutPage.tsx      # mapped to "/about"
│  │  ├─ Dashboard/         # nested group for dashboard routes
│  │  │  ├─ DashboardIndex.tsx
│  │  │  └─ SettingsPage.tsx
│  │  │
│  │  └─ NotFoundPage.tsx
│  ├─ redux/                # redux components and config
│  │    └─ (…all redux files)
│  ├─ router/               # global routing setup & config
│  │  └─ index.tsx
│  │
│  ├─ utils/                # pure helper functions
│  │  └─ formatDate.ts
│  │
│  ├─ App.tsx               # app root: routes, context providers
|  ├─ index.css             # Global tailwind config and theme setup
│  └─ main.tsx              # ReactDOM.render + global styles
│
├─ tsconfig.json
├─ package.json
└─ vite.config.ts
```
