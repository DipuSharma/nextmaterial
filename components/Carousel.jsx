import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Item from './Slider';
import slider from '../public/Items.json'

export default function Example() {

  return (
    <Carousel>
      {
        slider.map(item => <Item key={item.id} item={item} />)
      }
    </Carousel>
  )
};

