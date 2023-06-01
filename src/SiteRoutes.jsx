import { Route, Routes } from "react-router-dom";
import PetShop from "./PetShop";
import ShopOffers from "./ShopOffers";
import Charity from "./Charity";


const SiteRoutes =( {textContent})=> {
  return(
    <div className="w-100 h-100 d-flex flex-column flex-md-row justify-content-center align-items-center pt-5 pb-5">
    <Routes>
      <Route path="/" element={(<PetShop textContent={textContent.shop}/>)}/>
      <Route path="/our-shop" element={(<ShopOffers/>)}/>
      <Route path="/charity" element={(<Charity textContent={textContent.charity}/>)}/>
    </Routes>
    </div>
  )
}

export default SiteRoutes;

