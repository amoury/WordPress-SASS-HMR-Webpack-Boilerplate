# Developing Wordpress theme with Webpack, HMR, SASS, Underscores Theme and Browsersync

The aim of this example is to present a simple workflow of a Wordpress theme development which leverages all goodness of a [Webpack](https://webpack.github.io/) module bundler including with a hot module replacement (HMR) which in combination with [Browsersync](https://www.browsersync.io/) provides a very fast developing experience.

> This example uses Node.js v8._._

## Installation

Create a folder for your new theme in your local Wordpress 'themes' directory. Then clone this repository into it. When done, install all required packages:

```
$ npm install
```

## How to use it?

The development process of a new WP theme is divided into a two phases: the development and the final build.

To start the development phase, you should have installed a local Wordpress site. Then run the Webpack development middleware and HMR via Browsersync with:

```
$ npm start
```

This will proxy your local Wordpress site through Browsersync development server, which means that you can see your new theme (if it's been already activated in WP settings) under http://localhost:3000

### JS files

All Javascript files should be stored in 'src/js' folder. You can use ES6, because all code is automatically transpiled to ES5 through [Babel](https://babeljs.io/).

Every time your javascript code is modified, the changes are immediately sent to the browser via HMR. No page refresh is needed.

### CSS files

CSS files should be stored in 'src/css' folder. The example makes use css preprocessor like SASS as well as it 'post process' all css files with [postCSS](http://postcss.org/).

We think this is a better option for handling CSS syntax, because it's faster than any CSS preprocessor and it's more modular which means that you have all freedom to include only those plugins which are needed by your project. Please see the 'postcss.config.js' file to see which postCSS plugins are already included.

The same as we told for Javascript files is also valid for CSS files. Each change in CSS is immediately visible in the browser without any page refresh.

### SCSS files

SCSS files should be stored in 'src/scss' folder. We have included the SASS preprocessor as an option for those who are comfortable using SASS in their projects. 

### Fonts

Font files should be stored in 'src/assets/fonts' folder. Check the 'scss/variables/typography' file for an example on how to include the fonts in your project. 

Once you run 'build', make sure to go to the folder 'build/compiled' and make a small change in the main.css file. You might get 'Failed to find Font' error in your console. This is because of the WordPress relative path issue. To resolve this, simply change


``` css
@font-face {
  font-family: 'oranienbaumregular';
  src: url(/assets/fonts/oranienbaum.eot);
  src: url(/assets/fonts/oranienbaum.eot?#iefix) format("embedded-opentype"), url(/assets/fonts/oranienbaum.woff2) format("woff2"), url(/assets/fonts/oranienbaum.woff) format("woff"), url(/assets/fonts/oranienbaum.ttf) format("truetype"); }
```

To

``` css
@font-face {
  font-family: 'oranienbaumregular';
  src: url(./assets/fonts/oranienbaum.eot);
  src: url(./assets/fonts/oranienbaum.eot?#iefix) format("embedded-opentype"), url(./assets/fonts/oranienbaum.woff2) format("woff2"), url(./assets/fonts/oranienbaum.woff) format("woff"), url(./assets/fonts/oranienbaum.ttf) format("truetype"); }
```

The fonts used in the example is a free font and is downloaded for demo purposes from [dafont](https://www.dafont.com/oranienbaum.font). 

### PHP files

This example contains [Underscores Starter Theme](https://underscores.me/) which is one of the most popular Barebones starter theme for web development. 

With Browsersync support we're able to see every single change in WP template file in the browser right after the file is saved without page refresh.

### The final step

When your theme is ready to be published, you are entering the build phase. This step actually extracts all required theme files and copy them into the 'build' directory, which is then ready to become an 'official' WP theme package. You can move it into your local Wordpress 'themes' directory, rename it to whatever you want, modify theme description data in 'style.css' and finally activate the new theme.

## Credits

This example is forked from this [repo](https://github.com/tadejstanic/wp-hrm-webpack.git)
which is heavily inspired by this [repo](https://github.com/bionikspoon/webpack-hmr-wordpress)

Thank you Tadej Stanic and @bionikspoon
