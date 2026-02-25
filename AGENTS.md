# AGENTS.md

## Cursor Cloud specific instructions

This is an **Expo SDK 54 / React Native** journaling app called "Daily Reflection". It uses an in-memory fake database (no external services or Docker required).

### Key commands

See `package.json` scripts for the full list. Summary:

| Task | Command |
|------|---------|
| Install deps | `npm install` |
| Dev server (web) | `npx expo start --web` |
| Lint | `npx expo lint` |
| Test | `npx jest --no-watchAll` |

### Caveats

- The app is primarily designed for **mobile** (iOS/Android via Expo Go or native builds). The web version renders via `react-native-web` but some interactive features (e.g. the submit button for adding reflections) may not work fully on web due to React Native Web event handling differences.
- The test script in `package.json` uses `jest --watchAll`; for CI/headless runs use `npx jest --no-watchAll`.
- No `.nvmrc` or `.node-version` file exists. Expo SDK 54 requires **Node 18+**.
- The default dev server port is **8081** (Expo default). Use `--port` flag to override if needed.
- There are platform-specific component files (e.g. `AddNewReflection.native.tsx` vs `AddNewReflection.tsx`) — the `.native.tsx` variant is used on iOS/Android while the plain `.tsx` is the web fallback.
