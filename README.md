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
    <script src="static/js/app.js"></script>
  </body>
</html>
```

Intall Marionette

`yarn add backbone backbone.marionette underscore@~1.8.3 jquery`

## Create first Marionette View

> Webpack 4 **needs src/index.js** file

