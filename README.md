# pkgi

[![NPM Version](https://img.shields.io/npm/v/pkgi.svg)](https://www.npmjs.com/package/pkgi)
[![Dependency Status](https://david-dm.org/roccomuso/pkgi.png)](https://david-dm.org/roccomuso/pkgi)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> Node interactive [pkg](https://github.com/zeit/pkg)

Interactive module for zeit pkg. To use as CLI too install [pkgi-cli](https://github.com/roccomuso/pkgi-cli).

## Install

    $ npm install --save pkgi

## Usage

```javascript
var pkg = require('pkg')
var pkgi = require('pkgi')

var prompt = pkgi(pkg)
prompt()
```

## Enhancement

- [ ] pass `options` to set defult values for the questions

# Author

Rocco Musolino ([@roccomuso](https://twitter.com/roccomuso))

# License

MIT
