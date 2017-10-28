/* @flow */

import * as React from 'react';

type ControlType = 'left' | 'right' | 'up' | 'down';

type Props = {|
  onControlKey: (type: ControlType) => mixed,
|};

export default class Controller extends React.Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', this._handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this._handleKeydown);
  }

  _handleKeydown = (e: KeyboardEvent) => {
    const { onControlKey } = this.props;

    switch (e.keyCode) {
      case 37:
        onControlKey('left');
        break;
      case 39:
        onControlKey('right');
        break;
      case 38:
        onControlKey('up');
        break;
      case 40:
        onControlKey('down');
        break;
    }
  };

  render() {
    return null;
  }
}
