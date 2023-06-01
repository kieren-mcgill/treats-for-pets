import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from "./NavbarEl";
import Main from "./Main";
import FindUs from "./FindUs";
import { useEffect, useState } from "react";
import axios from "axios";
import { initialTextContent } from "./initialContent"


  const App = () => {
    const [error, setError] = useState([]);
    const [shopItems, setShopItems] = useState([]);
    const [charityImages, setCharityImages] = useState([]);
    const [shopImages, setShopImages] = useState([]);
    const [textContent, setTextContent] = useState(initialTextContent)

    const strapiDataToGet = [
      {url: "/shop-items", response: setShopItems},
      {url: "/charity-carousel-images", response: setShopItems},
      {url: "/shop-carousel-images", response: setShopItems}
    ]

    useEffect(() => {
      strapiDataToGet.map((collection)=>
      axios
        .get(`http://localhost:1337/api${collection.url}`)
        .then(({ data }) => setShopItems(data.data))
        .catch((error) => setError(error)))
    }, []);

  return (
    <div>
      <NavbarEl />
      <Main textContent={textContent}/>
      <FindUs />
    </div>
)
}

export default App;
