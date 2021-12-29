import React from 'react';
import ShopCard from '../shop-card/shop-card.component';
import './directory.component.css';
import monstera from '../../assets/images/monstera.webp';
import pothos from '../../assets/images/scindapusus.webp';
import rubber from '../../assets/images/rubber-plant.webp';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      categories: [
        {
          id: 1,
          title: 'Easy care',
          img: rubber,
        },
        {
          id: 2,
          title: 'Pet Friendly',
          img: monstera,
        },
        {
          id: 3,
          title: 'Low Light',
          img: pothos,
        },
      ],
    };
  }

  render() {
    return (
      <div className='cards mt-6 flex flex-col items-center md:grid md:grid-cols-3 md:gap-5'>
        {this.state.categories.map(({ id, title, img }) => (
          <ShopCard key={id} type={title} img={img} />
        ))}
      </div>
    );
  }
}

export default Directory;
