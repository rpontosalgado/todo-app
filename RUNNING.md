# How to Run This React Native App

## Prerequisites
- **Node.js** (v18+)
- **Expo Go** app installed on your phone
- **Android Studio** (for Android) or **Xcode** (for iOS) - optional, for emulator

## Quick Start (Web - Easiest)

```bash
cd /Users/robertosalgado/development/todo-app
npm start
```

Then press **w** to open in web browser, or scan the QR code with Expo Go on your phone.

## Run on Android

```bash
npm run android
```

This will start the Expo Dev Server and open the Android emulator (if Xcode/Android Studio is configured).

## Run on iOS

```bash
npm run ios
```

This requires Xcode to be installed and configured.

## What You'll See

Once the app loads, you'll see:
1. A text input at the top to add new items
2. A list showing all your todos
3. Each todo has "Editar" (Edit) and "Remover" (Remove) buttons
4. All data is persisted using AsyncStorage

## Testing

```bash
npm test
```

## Linting

```bash
npm run lint
```

## Project Structure

```
todo-app/
├── App.tsx              # Main app component
├── index.ts            # Entry point
├── src/
│   ├── components/     # Reusable components (TodoItem, TodoList)
│   ├── contexts/       # Context API (TodoContext)
│   ├── services/       # Storage service
│   └── types/          # TypeScript types
└── README.md
```

## Tech Stack

- React Native + Expo
- TypeScript
- Context API (State Management)
- AsyncStorage (Persistence)
- React Native Paper (UI Components)

## Notes

- The app uses Portuguese language for UI labels
- All todos are saved locally and persist between app restarts
- No backend is required - it's fully client-side
