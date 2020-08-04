# RenderBlocks

Library by Alex Merced of AlexMercedCoder.com (AlexMercedCoder.com/jslib)

## Purpose

This FrontEnd Library was created to be small and give some very basic reactive and lifecycle features to a block of UI without needing a complex build setup

## Installation

### CDN

```
<script src="http://www.alexmercedcoder.com/renderBlocks.js" charset="utf-8" defer></script>
```

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
import {Block} from "http://www.alexmercedcoder.com/blockmodule.js"

```

## Getting started

Essentially all you need in your HTML to get started

```
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8" />
        <title></title>
        <script src="block.js" charset="utf-8" defer></script>
        <script src="app.js" charset="utf-8" defer></script>
    </head>
    <body>
        <m-app id="start"></m-app>
    </body>
</html>
```

mBlock tags always start with the prefix "m-" before the tag name and an id to distinguish between instances.

The code underlying the <m-app> tag would look like this in your app.js

```

//App Component
class App extends Block {
    constructor(id) {
        super({ name: 'app', state: { phrase: 'Hello World' }, id });
    }

    builder(state, props) {
        console.log(this.block.children);
        return `<h1>${state.phrase}</h1><m-test id=${props.id}></m-test>`;
    }

    assemble() {
        new Test(this.props.id);
    }
}

//the <m-test> component

class Test extends Block {
    constructor(id) {
        super({ name: 'test', state: { phrase: 'It Works' }, id });
    }

    builder(state, props) {
        return `<h1>${state.phrase}</h1>`;
    }

    assemble() {}
}

const app = new App('app');
```

in the constructor you pass a config object into super that configures element.

name: determines which tags trigger a render (tags that say m-element with the passed in ID)

state: the initial state which can be changed triggering a re-render with an call to instance.setState(newstate)

id: the id of the individual instance

there are fours function you should define...

builder(state, props) => a function that is passed the state and props objects and returns the template string to be rendered

assemble(state, props) => a function to run the constructors on any custom components included in your template

mount(state, props) => is run on the initial mounting of the component

update(state, props) => is run on every update triggered by setState

-   When the setState function is run it updates the state, then re-reruns the builder function, then the assemble is function is run to rebuild any custom components in your template.

That's it, just use setState to update any components state it should re-render and it will work! just remember to invoke constructors in assemble of children that are mBlocks (refer to the assemble function of the app component above.)
