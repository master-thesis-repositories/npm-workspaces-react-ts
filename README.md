# npm-workspaces-react-ts
Setup process for a React monorepo with Typescript support using NPM workspaces.

### Setting up the monorepo
Setup `npm workspaces`
```bash 
npm init -y

# Remove unwanted fields
# Add "workspaces": ["packages/*"]
```

Create a directory for all the packages
```bash 
mkdir packages
cd packages
```

Create the app package using vite
```bash 
npm create vite@latest app -- --template react-ts

cd app
npm i

# Remove /public
# Remove /src/assets
# Remove /src/App.css
# Remove /src/index.css

# In /src/App.tsx Remove "import reactLogo from './assets/react.svg'"
# In /src/App.tsx Remove "import './App.css'"
# In /src/App.tsx Remove Component Content

# In /src/main.tsx Remove "import './index.css'"

# In /index.html Remove <link> tag
# In /index.html Update <title> tag
```

Create the ui package using vite
```bash 
npm create vite@latest ui -- --template react-ts

cd ui
npm i

# Remove /public
# Remove /src/assets
# Remove /src/App.css
# Remove /src/index.css
# Remove /src/App.tsx
# Remove /src/main.tsx
# Remove /index.html

# Create /src/index.tsx
# Create /src/components/
# Create /src/components/Component.tsx

# In /src/components/Component.tsx scaffold a simple React Component and export it
# In /src/index.tsx import and export Component.tsx

# In vite.config.ts Add
#  build: {
#    lib: {
#      entry: "./src/index.tsx",
#      name: "ui",
#      fileName: "index",
#      formats: ["es"]
#    },
#    outDir: "./lib"
#  }

# In package.json Add 
#  "files": [
#    "package.json",
#    "lib"
#  ],
#  "main": "./lib/index.js",
#  "types": "./lib/index.d.ts",

# In tsconfig.json Remove "noEmit": true
# In tsconfig.json Add "emitDeclarationOnly": true
# In tsconfig.json Add "declaration": true
# In tsconfig.json Add "declarationDir": "lib"

# In package.json Add
#  "scripts": {
#    "build:types": "tsc",
#    "build:vite": "vite build",
#    "build": "npm run build:vite && npm run build:types",
#    "build:watch": "npm run build:vite -- --watch"
#  },
```

Using the ui package in app
```bash 
# In package.json Add
#  "dependencies": {
#    "ui": "*"
#  },

# In /src/App.tsx Add
#  import {Component} from "ui";
```

Add HMR
```bash 
# If you want to use HMR, just run "npm run build:watch"
```

Add HMR for typescript types
```bash 
# In tsconfig.json Update
#  "declarationDir": "types"

# In package.json Update
#  "scripts": {
#    "build:vite:watch": "npm run build:vite -- --watch",
#    "build:types:watch": "tsc -w"
#  },

# In package.json Update
#  "types": "./types/index.d.ts",
```

Notice how only one `node_modules` folder is created.

