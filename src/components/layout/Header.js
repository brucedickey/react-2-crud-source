// Logo image is from https://www.goodfreephotos.com/. Image license is 
// CC0 / Public Domain: http://creativecommons.org/licenses/publicdomain/.
import chipmunk from '../../img/surprised-chipmunk.png';
import css from './Header.module.css';

const Header = () => {
  return (
    <header>
      <div className="row">
        <div className="col-12">
          <div className={css.headerContent}>
            <img id={css.titleIcon} src={chipmunk} alt="App icon" />
            <span id={css.title}>React 2 CRUD</span>
          </div>
        </div> 
      </div>
    </header>
  )
}

export default Header;
