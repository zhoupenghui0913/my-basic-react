/** 主页 **/
import React from 'react';

import './index.less';
import ImgLogo from 'src/assets/react-logo.jpg';

function HomePageContainer(props) {
  return (
    <div className='page-home all_nowarp'>
      <div className='box'>
        <img src={ImgLogo} />
        <div className='title'>Basic-React</div>
        <div className='info'>react16、redux4、router5、webpack4、eslint、prettier、babel7、antd</div>
      </div>
    </div>
  );
}

export default HomePageContainer;
