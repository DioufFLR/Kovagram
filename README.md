# Kovagram

![badge1.svg](public%2Fassets%2Ficons%2Fbadge1.svg)
![badge2.svg](public%2Fassets%2Ficons%2Fbadge2.svg)
![badge3.svg](public%2Fassets%2Ficons%2Fbadge3.svg)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

<br/>

![badge-ukraine.svg](public%2Fassets%2Ficons%2Fbadge-ukraine.svg)

## Getting Started

Run in your shell

```shell
npm i 
npm run dev
```

Create .env.local for your API

```dotenv
VITE_APPWRITE_PROJECT_ID='enterYourId'
VITE_APPWRITE_URL='https://cloud.appwrite.io/v1'
VITE_APPWRITE_STORAGE_ID='enterYourId'
VITE_APPWRITE_DATABASE_ID='enterYourId'
VITE_APPWRITE_USER_COLLECTION_ID='enterYourId'
VITE_APPWRITE_POST_COLLECTION_ID='enterYourId'
VITE_APPWRITE_SAVES_COLLECTION_ID='enterYourId'
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<br/>

![diouf-fleur.svg](public%2Fassets%2Ficons%2Fdiouf-fleur.svg)