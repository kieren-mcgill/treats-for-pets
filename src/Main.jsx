import { Routes, Route } from "react-router-dom";
import PetShop from "./PetShop";
import Charity from "./Charity";
import SocialHeader from "./SocialHeader";
import ShopOffers from "./ShopOffers";

const Main = ( {shopItems} ) => {
  return (
    <div className="bg-danger h-100 w-100">
      <header>
      <SocialHeader shopItems={shopItems}/>
      </header>
      <main style={{ height: '1000px' }}>
      <Routes>
        <Route path="/" element={(<PetShop/>)}/>
        <Route path="/our-shop" element={(<ShopOffers/>)}/>
        <Route path="/charity" element={(<Charity/>)}/>
      </Routes>
      </main>
    </div>
  )
}

export default Main;