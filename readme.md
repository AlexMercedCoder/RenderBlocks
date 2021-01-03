# RenderBlocks

Library by Alex Merced of AlexMercedCoder.com (AlexMercedCoder.com/jslib)

## Purpose

This FrontEnd Library was created to be small and give some very basic reactive and lifecycle features to a block of UI without needing a complex build setup

## Installation

### CDN

```
<script src="https://res.cloudinary.com/dithdroai/raw/upload/v1609694789/libraries/renderBlocks_giqx5d.js" charset="utf-8" defer></script>
```

### Webpack Build Generator

```npx create-renderblocks-app projectName```

### NPM

```
npm i renderblocks
```

in your javascript file

```
const {RenderBlock} = require("renderblocks")
```

### ES6 Module

index.html

```
<script type="module" src="app.js" charset="utf-8" defer></script>
```

app.js

```
import {RenderBlock} from "https://res.cloudinary.com/dithdroai/raw/upload/v1609694789/libraries/renderBlocksmodule_easmjn.js"

```

## Getting started

Essentially all you need in your HTML to get started

```html
<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8" />
    <title></title>
    <script src="RenderBlock.js" charset="utf-8" defer></script>
    <script src="app.js" charset="utf-8" defer></script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

Give any element you want to attach to a renderBlock an Id.

```js
//A HelloWorld Block
const app = new RenderBlock({
  target: "#app",
  render: (block) => {
    return `<h1>${block.info.hello}</h1>`;
  },
  info: { hello: "Hello World" },
  methods: {
    test: function (block) {
      console.log(block);
    },
    update: (block) => block.updateInfo("hello", "goodbye world"),
  },
  initialBefore: (block) => console.log("initial before"),
  initialAfter: (block) => console.log("initial after"),
  before: (block) => console.log("before"),
  after: (block) => console.log("after"),
});

console.log(app.target);
app.useMethod("update");
```

The RenderBlock constructor is passed a config option that has the following defineable properties, all properties get assigned to the instance accessible with the this keyword.

**target:** ID that identifies the target element that the block will render too

**info:** object with any data you want available to the instance

**render: (block) => 'template string'** function that is passed the instance and should return a html template string to be rendered within the target element

**methods:** object with function that are passed the instance and can do whatever you like

**lifecycle:** functions that automatically run at certain points, all functions are passed the instance as an argument

- initialBefore: runs before the first render
- initialAfter: runs after the first render
- before: runs before every render
- after: runs after every render

## Other Methods and Properties of the Instance

- **this.useMethod(methodName)**, this will use a method in the method object and pass it the instance as an argument. The useMethod function takes a string of the methods name as an argument.

- **this.updateInfo(key, value)**, this updates data in the info object and triggers a new render. Takes a string of the key as the first argument, and the value to be assigned as the second argument.

- **this.props** is an object of any attributes on the target element
