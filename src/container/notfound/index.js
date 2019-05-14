/** 404 NotFound **/
import React from 'react';

import CSSModules from 'react-css-modules';
import styles from './index.less';

@CSSModules(styles)
export default class NotFoundPageContainer extends React.PureComponent {
  render() {
    return (
      <div styleName='page-notfound'>
        <div styleName='box'>404 not found</div>
      </div>
    );
  }
}
