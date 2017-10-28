/* @flow */

import * as React from 'react';

type Props = {
  children: React.Node,
};

export default class Container extends React.Component<Props> {
  render() {
    return (
      <div
        style={{
          position: 'relative',
          margin: '10em',
          height: '20em',
          width: '50em',
          backgroundColor: '#212733',
          color: '#fff',
          fontFamily: 'monospace',
          fontWeight: 'bold',
        }}
      >
        {this.props.children}
      </div>
    );
  }
}
