import React from 'react';
import P from 'prop-types';

// ==================
// 组件
// ==================

class Page3 extends React.Component {
  static propTypes = {
    location: P.any,
    history: P.any
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div className='son'>C 子container 3</div>;
  }
}

export default Page3;
