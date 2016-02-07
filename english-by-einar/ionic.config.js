module.exports = {
  "proxies": null,
  "paths": {
    "html": {
      "src": [
        "app/**/*.html"
      ],
      "dest": "www/build"
    },
    "sass": {
      "src": [
        "app/theme/app.+(ios|md).scss"
      ],
      "dest": "www/build/css",
      "include": [
        "node_modules/ionic-framework",
        "node_modules/ionicons/dist/scss"
      ]
    },
    "fonts": {
      "src": [
        "node_modules/ionic-framework/fonts/**/*.+(ttf|woff|woff2)"
      ],
      "dest": "www/build/fonts"
    },
    "watch": {
      "sass": [
        "app/**/*.scss"
      ],
      "html": [
        "app/**/*.html"
      ],
      "livereload": [
        "www/build/**/*.html",
        "www/build/**/*.js",
        "www/build/**/*.css"
      ]
    }
  },
  "autoPrefixerOptions": {
    "browsers": [
      "last 2 versions",
      "iOS >= 7",
      "Android >= 4",
      "Explorer >= 10",
      "ExplorerMobile >= 11"
    ],
    "cascade": false
  },
  "hooks": {},
  "name": "english-by-einar"
}