import { View } from 'backbone.marionette';

const HelloWorld = View.extend({
  el: `#app`,
  template: `<p>Hello World!</p>`
})

const hello = new HelloWorld();

hello.render();
