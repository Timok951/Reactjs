import React from 'react';
import Main from './components/main.js'

class App extends React.Component {
  render() {
    return (
      <div>
          <header className="header">
            <div className="container">
              <div className="header__inner">
                <div className="header__logo">DHRUVA</div>
                <nav className="nav">
                  <a className="nav__link" href="#">Home</a>
                  <a className="nav__link" href="#">Events</a>
                  <a className="nav__link" href="#">Podcast</a>
                  <a className="nav__link" href="#">About</a>
                </nav>
              </div>
            </div>
          </header>
          <Main/>


      </div>
    );
  }
}

export default App;
