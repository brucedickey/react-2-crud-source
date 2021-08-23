// Logo image is from https://www.goodfreephotos.com/. Image license is 
// CC0 / Public Domain: http://creativecommons.org/licenses/publicdomain/.
import chipmunk from './surprised-chipmunk.png';
import './Header.css';

const Header = () => {
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
