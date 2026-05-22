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
git clone https://github.com/rpontosalgado/todo-app.git
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
    TodoItem/                    # Individual todo card with edit/delete
    TodoList/
      LoadingView/               # Loading indicator
      EmptyState/                # Empty state with call-to-action
      DeleteConfirmModal/        # Delete confirmation modal
      TodoList.tsx               # Main list orchestrator
  contexts/
    TodoContext.tsx              # State management and persistence
  services/
    StorageService.ts            # AsyncStorage wrapper
  types/
    index.ts                     # TypeScript type definitions
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

| Metric     | Value |
| ---------- | ----- |
| Statements | 99%   |
| Branches   | 85%   |
| Functions  | 100%  |
| Lines      | 99%   |

Covered modules:

- `StorageService` — 6 tests (save, load, empty, errors)
- `TodoContext` — 8 tests (CRUD, loading, persistence)
- `TodoItem` — 7 tests (render, edit, save, cancel, delete)
- `TodoList` — 14 tests (render, add, input validation, modal orchestration)
- `LoadingView` — 1 test (render)
- `EmptyState` — 2 tests (render, call-to-action)
- `DeleteConfirmModal` — 3 tests (render, confirm, cancel)

## Linting

```bash
# Check linting
yarn lint

# Auto-fix lint issues
yarn lint:fix

# Format code
yarn format
```

## Commit & Push Workflow
  
This project enforces conventional commits and quality checks via Git hooks (Husky).

| Hook | Trigger | Action |
|------|---------|--------|
| `commit-msg` | `git commit` | Validates message format via commitlint |
| `prepare-commit-msg` | `git commit` | Launches commitizen interactive prompt |
| `pre-push` | `git push` | Runs linting and all tests |


## Screenshots
| Empty list | List with items |
|------------|-----------------|
| <img width="400" alt="Empty state" src="https://github.com/user-attachments/assets/3b385513-e13d-4392-8343-5a288869eb83" /> | <img width="400" alt="List with items" src="https://github.com/user-attachments/assets/1b13c210-f2f3-4d54-b838-e99385fdd92c" /> |

| Editing an item | Delete confirmation |
|-----------------|---------------------|
| <img width="400" alt=" Editing an item" src="https://github.com/user-attachments/assets/d0392ed5-ce0a-471f-a767-f260a46bbae5" /> | <img width="400" alt="Delete confirmation" src="https://github.com/user-attachments/assets/9eb63780-4376-428e-8238-1dac2297dced" /> |

## Pontos de melhoria

### Funcionalidades
- Categorias ou tags para agrupar tarefas
- Datas de entrega com notificações
- Níveis de prioridade (alta, média, baixa)
- Busca e filtro de tarefas
- Reordenar lista com drag and drop
- Tema escuro
- Desfazer/refazer ações
- Selecionar múltiplas tarefas e excluir em lote

### Técnico
- Pipeline de CI/CD com GitHub Actions
- Animações nas transições de adicionar/remover itens
- Melhorias de acessibilidade (leitor de tela)
- Persistência com banco local
- Sincronização com backend

### UI/UX
- Swipe para editar/excluir
- Pull to refresh
- Feedback tátil (haptic)
- Splash screen e ícone do app
