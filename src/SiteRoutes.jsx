import { Route, Routes } from "react-router-dom";
import ShopOffers from "./ShopOffers";
import DisplayBox from "./DisplayBox";
import { useContext } from "react";
import AppContext from "./appContext"


const SiteRoutes = () => {
  const { charityImages, shopImages, shopText, charityText } = useContext(AppContext);
  console.log(shopText)
  return (
    <div className="w-100 h-100 d-flex flex-column flex-md-row justify-content-center align-items-center pt-5 pb-5">
      <Routes>
        <Route path="/"
               element={(<DisplayBox
                 textContent={shopText.length === 0 ? "" : shopText[0].attributes.shopTextContent}
                 buttonUrl={"/our-shop"}
                 images={shopImages}
               />)}/>
        <Route path="/charity"
               element={(<DisplayBox
                 textContent={charityText.length === 0 ? "" : charityText[0].attributes.charityTextContent}
                 buttonUrl={"/charity"}
                 images={charityImages}
               />)}/>
        <Route path="/our-shop" element={(<ShopOffers/>)}/>
      </Routes>
    </div>
  )
}

export default SiteRoutes;

