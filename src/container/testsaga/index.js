import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './index.less';

@CSSModules(styles)
export default class TestSaga extends React.Component {
  render() {
    return (
      <div>
        <div styleName='test'>测试less</div>
        <div styleName='center'>测试react-css-module</div>
      </div>
    );
  }
}

// export default CSSModules(TestSaga, styles);
