/** 导航 **/
import React from 'react';
import { Link } from 'react-router-dom';
import CSSModules from 'react-css-modules';
import styles from './index.less';

@CSSModules(styles)
export default class Menu extends React.PureComponent {
  render() {
    return (
      <div styleName='menu'>
        <Link to='/home'>首页</Link>|<Link to='/features'>构建与特性</Link>|
        <Link
          to={{
            pathname: '/testhooks',
            search: '?a=123&b=abc',
            state: { c: '456', d: 'ABC' }
          }}>
          测试(hooks)
        </Link>
        |
        <Link
          to={{
            pathname: '/testclass',
            search: '?a=123&b=abc',
            state: { c: '456', d: 'ABC' }
          }}>
          测试(class)
        </Link>
        |
        <Link
          to={{
            pathname: '/testsaga',
            search: '?a=123&b=abc',
            state: { c: '456', d: 'ABC' }
          }}>
          测试(saga)
        </Link>
      </div>
    );
  }
}
