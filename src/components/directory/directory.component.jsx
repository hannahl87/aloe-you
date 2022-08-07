import React from 'react';
import ShopCard from '../shop-card/shop-card.component';
import './directory.styles.scss';
import monstera from '../../assets/images/monstera.webp';
import pothos from '../../assets/images/scindapusus.webp';
import rubber from '../../assets/images/rubber-plant.webp';
import CtaButton from '../cta-button/cta-button.component';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          id: 1,
          title: 'Easy-Care',
          img: rubber,
        },
        {
          id: 2,
          title: 'Pet-Friendly',
          img: monstera,
        },
        {
          id: 3,
          title: 'Low-Light',
          img: pothos,
        },
      ],
    };
  }

  render() {
    return (
      <div className='cards mt-6 flex flex-wrap sm:space-x-4 justify-center'>
        {this.state.categories.map(({ id, title, img }) => (
          <ShopCard key={id} type={title} img={img} />
        ))}
        <div className='mobile-shop-cta m-8 inline md:hidden'>
          <CtaButton link='shop' text='Shop all' />
        </div>
      </div>
    );
  }
}

export default Directory;
