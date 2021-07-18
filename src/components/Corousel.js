import React from 'react';
import Carousel from 'react-elastic-carousel';
import { enableAutoPlay,showArrows } from 'react-elastic-carousel';
import Item from './Item';
import './style.css';
import hot1 from './Images/hot1.png';
import hot2 from './Images/hot2.png';
import hot3 from './Images/hot3.png';
import hot4 from './Images/hot4.png';
import hot5 from './Images/hot5.png';
import hot6 from './Images/hot6.png';
import hot7 from './Images/hot7.png';
import hot8 from './Images/hot8.png';


const breakPoints = [
  { width: 1200, itemsToShow: 1 },
];



function Corousel() {
  return (
    <div>
      <div className="corousel">
        <Carousel breakPoints={breakPoints} showArrows="false" enableAutoPlay="true">
          <Item><img alt=""src={hot1}/></Item>
          <Item><img alt=""src={hot2}/></Item>
          <Item><img alt=""src={hot3}/></Item>
          <Item><img alt=""src={hot4}/></Item>
          <Item><img alt=""src={hot5}/></Item>
          <Item><img alt=""src={hot6}/></Item>
          <Item><img alt=""src={hot7}/></Item>
          <Item><img alt=""src={hot8}/></Item>
        </Carousel>
      </div>
    </div>
  );
}

 export default Corousel;
