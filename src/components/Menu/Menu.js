import React from 'react';
import Menus from './menus.json';

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: []
    };
  }
  componentDidMount() {
    this.setState({
      menus: Menus
    });
  }

  render() {
    return (
      <div className="Menu__wrapper">
        <h1>Menus</h1>
        {this.state.menus && (
          <nav className="Menu__list">
            {this.state.menus.map((linkName, i) => {
              return (
                <div key={i} className="Menu__item">
                  <Link label={linkName} />
                </div>
              );
            })}
          </nav>
        )}
      </div>
    );
  }
}

export class Link extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const url =
      '/' +
      this.props.label
        .toLowerCase()
        .trim()
        .replace(' ', '-');
    return (
      <div className="Link__wrapper">
        {this.props.label && <a href={url}>{this.props.label}</a>}
      </div>
    );
  }
}
