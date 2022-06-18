import './highlight.styles.scss';
import sans from '../../assets/images/sans.webp';
import CtaButton from '../cta-button/cta-button.component';

const Highlight = () => (
  <div className='highlight-container ml-14 hidden md:inline md:col-span-2 mr-6 flex-1'>
    <div className='window flex justify-center items-center py-8'>
      <img
        src={sans}
        alt='snake plant'
        className='highlight-img items-center h-60'
      />
    </div>
    <div className='highlight-title'>
      <h2 className='my-2'>Air Purifying</h2>
      <span className='title-info mb-2'>
        Not just beautiful to look at, these plants also improve air quality and
        oxygen levels.
      </span>
    </div>
    <CtaButton text='From $9 - Shop Now' />
  </div>
);

export default Highlight;
