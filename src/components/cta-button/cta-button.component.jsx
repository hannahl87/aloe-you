import { Link } from 'react-router-dom';
import './cta-button.styles.scss';

const CtaButton = ({ text, link }) => (
  <div className='cta-container'>
    <Link
      to={link}
      className='cta-btn rounded-3xl px-5 py-2 mt-2 hover:scale-105'
    >
      {text}
    </Link>
  </div>
);

export default CtaButton;
