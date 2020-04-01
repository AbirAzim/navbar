import React, { Component } from 'react';
import NavBarMain from './components/NavBarMain';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  links = [
    {
      id: 1,
      linkName: 'Facebook',
      linkUrl: '',
      linkIcon: 'fa fa-facebook'
    },
    {
      id: 2,
      linkName: 'Github',
      linkUrl: '',
      linkIcon: 'fa fa-github'
    },
    {
      id: 3,
      linkName: 'Linkedin',
      linkUrl: '',
      linkIcon: 'fa fa-linkedin'
    },
    {
      id: 4,
      linkName: 'Quora',
      linkUrl: '',
      linkIcon: 'fa fa-quora'
    }
  ];

  navBarMainStyle = {
    backgroundColor: 'black',
    navBrandIconColor: 'white',
    navBrandName: 'Badhon Khan'
  };

  render() {
    return (
      <div>
        <NavBarMain navBarMainStyle={this.navBarMainStyle} links={this.links} />
      </div>
    );
  }
}

export default App;
