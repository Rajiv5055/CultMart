import React from 'react';
import Carousel from 'react-elastic-carousel';
import { enableAutoPlay } from 'react-elastic-carousel';
import Item from './Item';
import './style.css';
import madhubani from './Images/madhubani.jpg';
import madubaniSale from './Images/madubaniSale.png';
import warli from './Images/warli.jpg';
import bamboo from './Images/bamboo.jpg';
import hot5 from './Images/hot5.png';
import hot6 from './Images/hot6.png';
import hot7 from './Images/hot7.png';
import MP from './Images/MP.png';


const breakPoints = [
  { width: 1200, itemsToShow: 1 },
];



function Corousel1() {
  return (
    <div>
      <div className="corousel">
        <Carousel enableAutoPlay breakPoints={breakPoints}>
          <Item><img alt="" src={MP}/></Item>
          <Item><img alt="" src={madubaniSale}/></Item>
          <Item><img alt="" src={madhubani}/></Item>
          <Item><img alt="" src={warli}/></Item>
          <Item><img alt="" src={bamboo}/></Item>
          <Item><img alt="" src={hot5}/></Item>
          <Item><img alt="" src={hot6}/></Item>
          <Item><img alt="" src={hot7}/></Item>
        </Carousel>
      </div>
    </div>
  );
}

 export default Corousel1;
