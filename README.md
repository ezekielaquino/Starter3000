# Starter3000

Studio starter for React based projects.

- Next.js
- Emotion for styling
- configs (ts, lint, babel)
- pre-commit hooks via husky

## Installation

- You can clone this repository directly
- `npx starter3000 your-directory-name`
- husky not working? make sure after reinitializing `git`, to run `yarn` to
  reinstall husky's pre-commit hooks

## Notes

- for modules, `@/` maps to root directory. So instead of doing
  `import Something from '../../components/SomethingComponent'` you can just do
  `import Something from '@/components/SomethingComponent'`
