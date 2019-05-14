/** Footer 页面底部 **/
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './index.less';

@CSSModules(styles)
export default class Footer extends React.PureComponent {
  render() {
    return <div styleName='footer'>© 2019</div>;
  }
}
