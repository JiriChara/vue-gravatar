# vue-gravatar

[![Build Status](https://travis-ci.org/JiriChara/vue-gravatar.svg?branch=master)](https://travis-ci.org/JiriChara/vue-gravatar)
[![NPM Version](https://img.shields.io/npm/v/vue-gravatar.svg)](https://www.npmjs.com/package/vue-gravatar)
[![NPM Dowloads](https://img.shields.io/npm/dm/vue-gravatar.svg)](https://www.npmjs.com/package/vue-gravatar)

A dead-simple gravatar component for VueJS applications.

**[DEMO](https://jirichara.github.io/vue-gravatar/)**


## Installation

```
yarn add vue-gravatar
```

## Usage

Register the component

```js
import Vue from 'vue';
import Gravatar from 'vue-gravatar';

Vue.component('v-gravatar', Gravatar);
```

You may now use the component in your markup

```vue
<v-gravatar email="somebody@somewhere.com" />
```

### Props

The following props are available:

* **hash** (type: String) md5 hash of the gravatar
* **email** (type: String) email address of the gravatar (used when md5 hash not given)
* **size** (type: Number, default: 80) size of the avatar
* **default-img** (type: String, default: 'retro') default image type (see. http://en.gravatar.com/site/implement/images/)
* **rating** (type: String, default: 'g') rating of the image (see. http://en.gravatar.com/site/implement/images/)
* **alt** (type: String, default: 'Avatar') The alternative text of the image

#### Example

```vue
<v-gravatar hash="f3ada405ce890b6f8204094deb12d8a8" alt="Nobody" :size="200" default-img="mm" />
```

## License

The MIT License (MIT) - See file 'LICENSE' in this project

## Copyright

Copyright © 2017 Jiří Chára. All Rights Reserved.
