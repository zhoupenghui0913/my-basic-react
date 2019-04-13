import React from 'react';
import P from 'prop-types';

// ==================
// 组件
// ==================
class Page2 extends React.Component {
  static propTypes = {
    location: P.any,
    history: P.any
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className='son'>B 子container 2</div>;
  }
}

export default Page2;
