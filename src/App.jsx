import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from "./NavbarEl";
import Main from "./Main";
import FindUs from "./FindUs";
import { useEffect, useState } from "react";
import axios from "axios";
import AppContext from "./appContext";

const App = () => {

  const [shopItems, setShopItems] = useState([]);
  const [charityImages, setCharityImages] = useState([]);
  const [shopImages, setShopImages] = useState([]);
  const [shopText, setShopText] = useState([]);
  const [charityText, setCharityText] = useState([]);

  const strapiDataToGet = [
    { url: "/shop-items?populate=*", response: setShopItems },
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
      <div style={{fontFamily: "'Lato', sans-serif"}}>
      <NavbarEl/>
      <Main/>
      <FindUs/>
      </div>
    </AppContext.Provider>
  )
}

export default App;
