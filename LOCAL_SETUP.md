# React Native To-Do List - PWI Technical Challenge

## Overview

Successfully built a To-Do List app with full CRUD functionality using React Native, Expo, and TypeScript.

## What's Been Built

✅ **Core Features:**
- Add new todo items
- Edit existing item names
- Remove items from list
- View all todos in a list
- Local data persistence (AsyncStorage)

✅ **Architecture:**
- Context API for state management
- Clean component structure
- TypeScript for type safety
- React Native Paper for polished UI

✅ **Code Quality:**
- ESLint configuration
- Comprehensive project structure
- Separate layers (components, contexts, services, types)

## Project Location

```
/Users/robertosalgado/development/todo-app/
```

## How to Run

### Option 1: Web (Quickest Test)
```bash
cd /Users/robertosalgado/development/todo-app
npm start
```
Then press **w** for web, or scan QR code with Expo Go app.

### Option 2: Android
```bash
cd /Users/robertosalgado/development/todo-app
npm run android
```

### Option 3: iOS (requires Xcode)
```bash
cd /Users/robertosalgado/development/todo-app
npm run ios
```

## What You'll See

1. **Add Todo**: Text input at top with "Adicionar" button
2. **Todo List**: Shows all items with date created
3. **Actions per Item**: "Editar" (Edit) and "Remover" (Remove) buttons
4. **Empty State**: Helpful message when no todos exist
5. **Data Persistence**: Items survive app restarts

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React Native | Mobile UI framework |
| Expo | Development tooling & runtime |
| TypeScript | Type safety |
| Context API | State management |
| AsyncStorage | Local data persistence |
| React Native Paper | UI component library |

## Next Steps for You

1. **Test the App**:
   - Run `npm start` to start the development server
   - Install "Expo Go" on your phone (iOS/Android)
   - Scan the QR code to see the app live

2. **Review the Code**:
   - `App.tsx` - Entry point
   - `src/contexts/TodoContext.tsx` - State management
   - `src/components/TodoList.tsx` - Main list screen
   - `src/components/TodoItem.tsx` - Individual todo display

3. **For Production Deployment**:
   - Eject from Expo (if needed): `npx expo build:android` or `npx expo build:ios`
   - Or use Expo EAS for cloud builds

## Files Created

```
todo-app/
├── App.tsx                          # Main component
├── index.ts                         # Entry point
├── package.json                     # Dependencies & scripts
├── jest.config.js                   # Jest config
├── .eslintrc.json                   # ESLint rules
├── .gitignore                       # Git ignore rules
├── README.md                        # Usage documentation
└── RUNNING.md                       # Detailed run instructions
└── src/
    ├── components/
    │   ├── TodoItem.tsx            # Individual todo component
    │   └── TodoList.tsx            # Main list component
    ├── contexts/
    │   ├── TodoContext.ts          # Context types
    │   └── TodoContext.tsx         # Context provider
    ├── services/
    │   ├── StorageService.ts       # Data persistence
    │   └── StorageService.test.ts  # Unit tests
    └── types/
        └── index.ts                # TypeScript types
```

## Running the Development Server

The app is already running at http://localhost:8081. You can:
- Press **w** to open in browser
- Press **a** to open Android emulator
- Press **i** to open iOS simulator

Or install Expo Go on your phone and scan the QR code shown in the terminal.
