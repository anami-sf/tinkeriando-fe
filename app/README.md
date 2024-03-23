## DEVELOPMENT - Run development server (local) with Docker

# Move into folder containing Dockerfile
cd app

# Build dev docker image
docker build -t frontend:latest -f Dockerfile.dev . 

# Run Docker container 
docker run --name frontend -p 3000:3000 frontend:latest

### Docker compose
`docker-compose -f docker-compose.dev.yml up`

## PREVIEW
# Build preview docker image
`docker build -t frontend:latest -f Dockerfile.dev . `

## PRODUCTION - Run Docker 
`docker build -t anami127001/tinkeriando-ui:latest -f Dockerfile.prod .`

`docker run -d -p 3000:80 --name tinkeriando-ui anami127001/tinkeriando-ui:latest`

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

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
