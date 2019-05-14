/** 主页 **/
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './index.less';

import ImgLogo from 'src/assets/react-logo.jpg';

@CSSModules(styles)
export default class HomePageContainer extends React.Component {
  render() {
    return (
      <div styleName='page-home'>
        <div styleName='box'>
          <img src={ImgLogo} />
          <div styleName='title'>Basic-React</div>
          <div styleName='info'>react16、redux4、router5、webpack4、eslint、babel7、antd</div>
        </div>
      </div>
    );
  }
}

// export default CSSModules(HomePageContainer, styles);

// export default HomePageContainer;
