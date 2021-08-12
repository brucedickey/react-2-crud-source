import './Footer.css';
import APIWarning from './APIWarning';
import Copyright from './Copyright';

function Footer() {
  return (
    <div className="footer">
      <APIWarning />
      <Copyright />
    </div>
  )
}

export default Footer;
