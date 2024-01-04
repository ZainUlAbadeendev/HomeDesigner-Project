import React from 'react'
import Header from "../components/Layout/Header.jsx";
import Hero from "../components/Route/Hero/Hero.jsx";
import Categories from "../components/Route/Categories/Categories.jsx";
import BestDeals from "../components/Route/BestDeals/BestDeals.jsx";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct.jsx";
import Events from "../components/Events/Events.jsx";
import Sponsored from "../components/Route/Sponsored.jsx";
import Footer from "../components/Layout/Footer.jsx";
import Trusted from "../components/Route/Trusted/Trusted.jsx";
import Headone from "../components/Route/Headone/Headone.jsx";
import Cardone from "../components/Route/Cardone/Cardone.jsx";
import Cardtwo from "../components/Route/Cardtwo/Cardtwo.jsx";
import Cardthree from "../components/Route/Cardthree/Cardthree.jsx";
import Cardfour from "../components/Route/Cardfour/Cardfour.jsx";
import RoomPlanner from "../components/RoomPlanner/RoomPlanner.jsx";

const RoomPlannerTool = () => {
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

export default RoomPlannerTool