import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from "./NavbarEl";
import Main from "./Main";
import FindUs from "./FindUs";
import { useEffect, useState } from "react";
import axios from "axios";

  const App = () => {
    const [error, setError] = useState([]);
    const [shopItems, setShopItems] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:1337/api/shop-items")
        .then(({ data }) => setShopItems(data.data))
        .catch((error) => setError(error));
    }, []);

    useEffect(() => {
      axios
        .get("http://localhost:1337/api/shop-items")
        .then(({ data }) => setShopItems(data.data))
        .catch((error) => setError(error));
    }, []);



    if (error) {
      return <div>An error occurred: {error.message}</div>;
    }

  return (
    <div>
      <NavbarEl />
      <Main shopItems={shopItems}/>
      <FindUs />
    </div>
)
}


export default App;
