
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./advancly-widget-react.cjs.production.min.js')
} else {
  module.exports = require('./advancly-widget-react.cjs.development.js')
}
