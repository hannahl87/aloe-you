import { useNavigate } from 'react-router-dom';
import './cta-button.styles.scss';

const CtaButton = ({ text, link }) => {
console.log('link :', link);
  const navigate = useNavigate();
  const goToLink = () => navigate(link);

  return (
    <div className='cta-container'>
      <button
        onClick={goToLink}
        className='cta-btn rounded-3xl px-5 py-2 mt-2 hover:scale-105'
      >
        {text}
      </button>
    </div>
  );
};

export default CtaButton;
