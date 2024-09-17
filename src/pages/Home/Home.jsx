import React from 'react';
import Banner from './Banner/Banner';
import HomeAbout from './Banner/About/HomeAbout';
import CardRow from './Gift/Gift';
import ShippingPolicy from './ShippingPolicy/ShipingPolicy';
import FooterSlider from '../../components/common/FooterSlider/FooterSlider';
import EnjoyAbout from './Enjoy/HomeAbout';
import Sliding from './Sliding/Sliding';

function Home() {
  return (
    <div className="">

      <Banner />
      <Sliding  />
      <HomeAbout />
      <CardRow />
      <EnjoyAbout />
      {/* <ShippingPolicy /> */}
      <FooterSlider />
    </div>
  );
}

export default Home;
