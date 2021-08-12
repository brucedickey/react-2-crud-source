// Photo https://www.goodfreephotos.com/ (public domain)

import './Header.css';

function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <div className="svg-container">
              <img id="title-icon" src="../../img/final28-surprised-chipmunk.svg" alt="App icon" />
            </div>
            <span id="title">React 2 CRUD</span>
          </div>
        </div> 
      </div>
    </header>
  )
}

export default Header;
