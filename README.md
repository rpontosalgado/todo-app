# Todo App

A React Native (Expo) to-do list app built with TypeScript, featuring CRUD operations, persistent storage, and polished UX.

## Tech Stack

- **Framework:** Expo SDK 54 / React Native 0.81
- **Language:** TypeScript 5.9
- **State Management:** React Context API
- **Styling:** styled-components
- **Persistence:** AsyncStorage
- **Testing:** Jest + @testing-library/react-native
- **Linting:** ESLint + Prettier

## Prerequisites

- Node.js >= 22
- Yarn 4 (Berry)

## Setup

```bash
# Clone the repository
git clone <repo-url>
cd todo-app

# Install dependencies
yarn install

# Start the app
yarn start
```

For iOS, press `i` in the Expo terminal. For Android, press `a`.

## Project Structure

```
src/
  components/
    TodoItem/         # Individual todo card with edit/delete
    TodoList/         # Main list with add input and empty state
  contexts/
    TodoContext.tsx   # State management and persistence
  services/
    StorageService.ts # AsyncStorage wrapper
  types/
    index.ts          # TypeScript type definitions
```

## Features

- Create, read, update, and delete todos
- Persistent storage via AsyncStorage
- Loading indicator while fetching saved todos
- Empty state with call-to-action
- Delete confirmation modal
- Disabled add button when input is empty
- Inline edit with save/cancel

## Testing

```bash
# Run tests
yarn test

# Run tests with coverage
yarn test --coverage
```

### Coverage

| Metric | Value |
|--------|-------|
| Statements | 99% |
| Branches | 85% |
| Functions | 100% |
| Lines | 99% |

Covered modules:
- `StorageService` — 6 tests (save, load, empty, errors)
- `TodoContext` — 8 tests (CRUD, loading, persistence)
- `TodoItem` — 7 tests (render, edit, save, cancel, delete)
- `TodoList` — 16 tests (render, add, input validation, modal, loading, empty)

## Linting

```bash
# Check linting
yarn lint

# Auto-fix lint issues
yarn lint:fix

# Format code
yarn format
```

## Screenshots

<!-- Add screenshots here -->
