/** APP入口 **/
import React from 'react';
import ReactDOM from 'react-dom';

import Root from './app';

/** 公共样式 **/
import 'src/styles/css.css';
import 'src/styles/less.less';

ReactDOM.render(<Root />, document.getElementById('app-root'));

if (module.hot) {
  module.hot.accept();
}
