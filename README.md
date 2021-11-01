# Starter3000

Studio starter for React based projects.

- Next.js
- Emotion for styling
- configs (ts, lint, babel)
- pre-commit hooks via husky

## Installation

**option A** You can clone this repository directly

**option B**

- `npm install -g starter3000` or `yarn global add starter3000`
- then in the directory where you want to start the project, run
  `npx starter3000 your-directory-name`
- cd to `your-directory-name`
- run `yarn dev`

husky not working? make sure after reinitializing `git`, to run `yarn` to
reinstall husky's pre-commit hooks

## Notes

- for modules, `@/` maps to root directory. So instead of doing
  `import Something from '../../components/SomethingComponent'` you can just do
  `import Something from '@/components/SomethingComponent'`
