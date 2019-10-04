# Vue Spinners CSS Loaders ([React](https://github.com/JoshK2/react-spinners-css), [Angular](https://github.com/JoshK2/ng-spinners))
[![bit components](https://img.shields.io/badge/dynamic/json.svg?color=6e3991&label=bit%20components&query=payload.totalComponents&url=https%3A%2F%2Fapi.bit.dev%2Fscope%2Fjoshk%2Fvue-spinners-css)](https://bit.dev/joshk/vue-spinners-css)
[![npm version](https://badge.fury.io/js/vue-spinners-css.svg?u)](https://www.npmjs.com/package/vue-spinners-css)
[![GitHub stars](https://img.shields.io/github/stars/joshk2/vue-spinners-css)](https://github.com/JoshK2/vue-spinners-css/stargazers)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/JoshK2/vue-spinners-css/master/LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/joshkuttler)](https://twitter.com/JoshKuttler)
<span class="badge-buymeacoffee"><a href="https://ko-fi.com/X8X614J76" title="Donate to this project using Ko-fi"><img src="https://img.shields.io/badge/buy%20me%20a%20coffee-support-%23ff5f5f" alt="Buy Me A Coffee donate button" /></a></span>

<p align="center">
  <a href="https://bit.dev/joshk/vue-spinners-css"><img src="https://i.imagesup.co/images2/1990710a88808ee8914167c74f57e604c5ed91fe.gif"></a>
</p>

Amazing collection of Vue spinners components with pure css.  
The Vue spinners are based on loading.io and from all over the web.  

- 💅No extra CSS imports
- ✂️Zero dependencies
- 📦Spinners can be installing separately

## [Live Demo](https://bit.dev/joshk/vue-spinners-css)

Browse components and explore their props with [Bit](https://bit.dev/joshk/vue-spinners-css).  
Install specific vue spinner component with npm, yarn, unpkg or bit without having to install the whole project.  
[Install components and live demo](https://bit.dev/joshk/vue-spinners-css)
  
## 🚀 List of Spinners - PropTypes and Default Props

Each component accepts a `color` prop, and `loading` prop.  
The default `color` prop is `#7f58af`.  
The default `loading` prop is `true`.  
Component that accepts size prop have a default size in pixel.
Component that accepts duration prop have a default duration in seconds.

| Spinner          | color: string | loading: boolean  | size: number | duration: string |
| ---------------- | ------------  | ----------------- | ------------ | ---------------- |
| Circle Spinner   | `#7f58af`     | `true`            | `64`         | `2.4s`           |
| Default Spinner  | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| DualRing Spinner | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Ellipsis Spinner | `#7f58af`     | `true`            |              |                  |
| Facebook Spinner | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Grid Spinner     | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Heart Spinner    | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Hourglass Spinner| `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Ring Spinner     | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Ripple Spinner   | `#7f58af`     | `true`            | `80`         | `1s`             |
| Roller Spinner   | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Spinner Spinner  | `#7f58af`     | `true`            | `80`         | `1.2s`           |
| Orbitals Spinner | `#7f58af`     | `true`            | `80`         | `4s`             |

## 📦 Installation
### Using [npm](https://www.npmjs.com/package/vue-spinners-css) to install vue-spinners-css:  

```bash
$ npm i --save vue-spinners-css
```  

### Play and install vue spinners with Bit

Install specific vue spinner component with bit, npm or yarn without having to install the whole project.  
Using [bit](https://bit.dev/joshk/vue-spinners-css) to play with live demo, and try the spinners before install.

set npm regisetry config(one time action):
```bash
npm config set '@bit:registry' https://node.bit.dev
```
and use your favorite package manager:
```bash
npm i @bit/joshk.vue-spinners-css.facebook-loader
yarn add @bit/joshk.vue-spinners-css.facebook-loader
bit import joshk.vue-spinners-css/facebook-loader 
```  

## 💻 Usage Examples

you can use a random color from [jotils](https://bit.dev/joshk/jotils/get-random-color)  

### Vue Global Registration
```javascript
import Vue from 'vue'
import * as VueSpinnersCss from "vue-spinners-css";

Vue.use(VueSpinnersCss)

// Each spinner can now be used in your templates anywhere in the app!
```

### Vue Local Registration
```html
<template>
  <FacebookLoader :color="randomcolor" />
  <FacebookLoader />
</template>

<script>
  //using npm or yarn
  import { FacebookLoader } from 'vue-spinners-css';
  //using bit
  import FacebookLoader from '@bit/joshk.vue-spinners-css.facebook-loader';
  import { getRandomColor } from '@bit/joshk.jotils.get-random-color'

  export default ({
    data: () => ({
      randomcolor: getRandomColor()
    }),
    components: {
      FacebookLoader,
    }
  })
</script>
```

### Unpkg Import
```html
<!--Load libraries in your page's header-->
<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-spinners-css"></script>

<!--Use a component somewhere in your app-->
<div id="app">
  <facebook-loader color="blue" />
</div>

<script>
  new Vue({ el: '#app', data: { } })
</script>
```


## 👾 Development
You can see the components locally by cloning this repo and doing the following steps:
- Install dependencies from `package.json`, run: `npm install`.
- Run the app in the development mode, run: `npm run serve`.  

## ⌨️ Contributing
- Pull requests and ⭐ stars are always welcome.
- For bugs and feature requests, please create an issue.

## 👏🏻 Support my open-source
If you like to support my open-source contributions and feeling generous, feel free to:

[![ko-fi](https://www.ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/X8X614J76)

## 📄 License
[MIT](https://github.com/JoshK2/vue-spinners-css/blob/master/LICENSE)

