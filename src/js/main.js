const css = require('../css/root.css');
const scss = require('../scss/style.scss');


import navigation from './navigation';
import skipLinkFix from './skip-link-focus-fix';
// This enables application of JS modules changes in HTML view.
// Don't remove it!
if (module.hot) {
  module.hot.accept();
}
