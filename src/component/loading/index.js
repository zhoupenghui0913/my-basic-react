/** Loading组件 用于按需加载时过渡显示等 **/
import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.less';
import ImgLoading from '../../assets/loading.gif';

@CSSModules(styles)
export default class LoadingComponent extends React.PureComponent {
  makeType(p) {
    let msg;
    if (p.error) {
      msg = '加载出错，请刷新页面';
    } else if (p.timedOut) {
      msg = '加载超时';
    } else if (p.pastDelay) {
      msg = '加载中…';
    }
    return msg;
  }

  render() {
    return (
      <div styleName='loading'>
        <img src={ImgLoading} />
        <div>{this.makeType(this.props)}</div>
      </div>
    );
  }
}
