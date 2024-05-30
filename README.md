# Next.js + Drizzle + tRPC

## Fonctionnalités

- 🧙‍♂️ Sécurité des types de bout en bout avec [tRPC](https://trpc.io)
- ⚡ React full-stack avec Next.js
- ⚡ Base de données avec Drizzle
- ⚙️ Extensions VSCode
- 🎨 ESLint + Prettier
- 💚 Configuration CI avec GitHub Actions :
  - ✅ Tests de bout en bout avec [Playwright](https://playwright.dev/)
  - ✅ Linting
- 🔐 Validation de vos variables d'environnement à la compilation et au démarrage

## Clone + Installation

Clonez le projet et installez les dépendances :

```bash
git clone https://github.com/webdesign29/trpc-drizzle.git
cd trpc-drizzle
bun install

# Copier le fichier .env.example vers un fichier .env.local à la racine du projet
# et configurez les variables d'environnement

cp .env.example .env.local
```

Push le schéma de la base de données :

```bash
bun db:push
```

### Prérequis

- Node >= 20.0.0
- Postgres

## Développement

### Démarrer le projet

```bash
bun run dev
```

### Commandes

```bash
bun build      # exécute
bun db-reset   # réinitialise la base de données locale
bun dev        # démarre next.js
bun dx         # démarre la base de données postgres + exécute les migrations + initialise les données + démarre next.js
bun test-dev   # exécute les tests de bout en bout en mode développement
bun test-start # exécute les tests de bout en bout + les tests unitaires
bun test-unit  # exécute les tests unitaires avec Vitest
bun test-e2e  
```

## Utilisation des modules :

Utilisation de tRPC :

```tsx
// Coté serveur
import { api } from '~/trpc/server';

const dataRaw = await api.example.getAll();

// Coté client
import { api } from '~/trpc/react';

const { data, isLoading, refetch } = api.example.getAll.useQuery();
```

Utilisation de Drizzle :

```bash
bun db:push # pour push le schéma de la base de données
bun db:pull # pour pull le schéma de la base de données
bun db:generate # pour générer les fichiers de migration
```