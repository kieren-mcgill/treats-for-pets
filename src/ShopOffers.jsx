import { useContext } from "react";
import AppContext from "./appContext";
import ItemCard from "./ItemCard";

const ShopOffers = () => {
  const baseURL = process.env.REACT_APP_STRAPI_BASE_URL;
  const { shopItems } = useContext(AppContext);
  return (
    <>
      <div className="shop-el w-100 pt-5 pb-5 bg-white d-flex flex-wrap justify-content-around">
        {shopItems.length === 0 ? <p>Shop items coming soon...</p> :
          shopItems.map((shopItem, i) => (
            <ItemCard
              key={i}
              title={shopItem.attributes.title}
              description={shopItem.attributes.description}
              animal={shopItem.attributes.animal}
              itemImage={`${baseURL}${shopItem.attributes.itemImage.data.attributes.formats.small.url}`}
              price={shopItem.attributes.priceInPounds}/>
          ))
        }
      </div>
    </>
  )
}

export default ShopOffers;