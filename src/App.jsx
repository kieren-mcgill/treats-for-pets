import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from "./NavbarEl";
import Main from "./Main";
import FindUs from "./FindUs";
import { useEffect, useState } from "react";
import axios from "axios";
import { initialCharityCarousel, initialShopItems, initialTextContent } from "./initialContent"
import AppContext from "./appContext";


const App = () => {

  const [shopItems, setShopItems] = useState(initialShopItems);
  const [charityImages, setCharityImages] = useState(initialCharityCarousel);
  const [shopImages, setShopImages] = useState([]);
  const [shopText, setShopText] = useState([]);
  const [charityText, setCharityText] = useState([]);

  const strapiDataToGet = [
    { url: "/shop-items", response: setShopItems },
    { url: "/charity-carousel-images?populate=*", response: setCharityImages },
    { url: "/shop-carousel-images?populate=*", response: setShopImages },
    { url: "/shop-texts", response: setShopText },
    { url: "/charity-texts", response: setCharityText },
  ]

  const getData = () => {
    strapiDataToGet.map((collection) =>
      axios
        .get(`http://localhost:1337/api${collection.url}`)
        .then(({ data }) => collection.response(data.data))
    )}

  useEffect(() => {
    getData()
  }, []);

  return (
    <AppContext.Provider
      value={{
        shopItems,
        charityImages,
        shopImages,
        shopText,
        charityText
      }}>
      <NavbarEl/>
      <Main/>
      <FindUs/>
    </AppContext.Provider>
  )
}

export default App;
