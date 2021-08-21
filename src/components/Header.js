// Photo https://www.goodfreephotos.com/ (public domain)
import chipmunk from './surprised-chipmunk.png';
import './Header.css';

function Header() {
  return (
    <header>
      <div className="row">
        <div className="col-12">
          <div className="header-content">
            <img id="title-icon" src={chipmunk} alt="App icon" />
            <span id="title">React 2 CRUD</span>
          </div>
        </div> 
      </div>
    </header>
  )
}

export default Header;
