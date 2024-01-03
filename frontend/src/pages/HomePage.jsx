import React from 'react'
import Header from "../components/Layout/Header";
import Hero from "../components/Route/Hero/Hero";
import Categories from "../components/Route/Categories/Categories";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Events from "../components/Events/Events";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Trusted from "../components/Route/Trusted/Trusted";
import Headone from "../components/Route/Headone/Headone.jsx";
import Cardone from "../components/Route/Cardone/Cardone.jsx";
import Cardtwo from "../components/Route/Cardtwo/Cardtwo.jsx";
import Cardthree from "../components/Route/Cardthree/Cardthree";
import Cardfour from "../components/Route/Cardfour/Cardfour.jsx";
import RoomPlanner from "../components/RoomPlanner/RoomPlanner";

const HomePage = () => {
  return (
    <div>
      <Header activeHeading={1} />
      <Hero />
      {<Cardtwo />}
      {<Trusted />}
      {< RoomPlanner />}




      {<Cardfour />}
      {<Cardone />}
      {<Cardthree />}

      {<Headone />}
      {/* <Categories />
      <BestDeals />
      <Events />
      <Sponsored /> */}
      {/* <Footer /> */}

    </div>
  )
}

export default HomePage