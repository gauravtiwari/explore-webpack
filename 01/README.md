# Part 01

Output production builds - sourcemaps, minification, code deduplication etc.

### Deps
Install node.js (either brew on mac or install from [https://nodejs.org/en/download/](https://nodejs.org/en/download/))

### Running locally
```bash
cd 01
npm install
npm run start
npm run build # Build for production
open main.html in your favorite browser
```

### Anatomy
All javascripts files/modules are located inside `/javascripts` folder
Webpack main file is: `main.js`
Webpack config file is: `webpack.js`
