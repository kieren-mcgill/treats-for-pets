import { Route, Routes } from "react-router-dom";
import ShopOffers from "./ShopOffers";
import DisplayBox from "./DisplayBox";
import { useContext } from "react";
import AppContext from "./appContext"
import { defaultCharityTextContent, defaultShopTextContent } from "./defaultContent";


const SiteRoutes = () => {
  const { charityImages, shopImages, shopText, charityText } = useContext(AppContext);
  return (
    <div className="w-100 h-100 d-flex flex-column flex-md-row justify-content-center align-items-center pt-5 pb-5">
      <Routes>
        <Route path="/"
               element={(<DisplayBox
                 title={"TREATS FOR PETS"}
                 textContent={shopText.length === 0 ? defaultShopTextContent : shopText[0].attributes.shopTextContent}
                 buttonUrl={"/our-shop"}
                 images={shopImages}
                 buttonText={"See our products"}
               />)}/>
        <Route path="/charity"
               element={(<DisplayBox
                 title={"PETS IN NEED"}
                 textContent={charityText.length === 0 ? defaultCharityTextContent : charityText[0].attributes.charityTextContent}
                 buttonUrl={"https://www.facebook.com/profile.php?id=100088748492268"}
                 images={charityImages}
                 buttonText={"Find out how to help"}
               />)}/>
        <Route path="/our-shop" element={(<ShopOffers/>)}/>
      </Routes>
    </div>
  )
}

export default SiteRoutes;

