# Creating a modern marionette app

## Set up

`yarn init`

`yarn add --dev webpack`

`yarn add --dev webpack-cli`

`npx webpack-cli init`

Create `index.html` in root

```html
<!DOCTYPE html>
<html>
  <head>
  </head>
  <body>
    <div id="app-hook"></div>
    <script src="./dist/app.js"></script>
  </body>
</html>
```

webpack-cli created `webpack.dev.js` file. Rename to `webpack.config.js`

> Webpack 4 default config **needs src/index.js** file

Set `webpack.output.publicPath` to `/dist/` to allow webpack-dev-server to locate `./dist/app.js`


## Create first Marionette View

Intall Marionette

`yarn add backbone backbone.marionette underscore@~1.8.3 jquery`

create `src/index.js` file with our first marionette View

```js
import { View } from 'backbone.marionette';

const HelloWorld = View.extend({
  el: `#app`,
  template: `
    <p>Hello World!</p>
  `
})

const hello = new HelloWorld();

hello.render();
``` 
