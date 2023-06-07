import { useContext } from "react";
import AppContext from "./appContext";
import ItemCard from "./ItemCard";
import { baseUrl } from "./defaultContent";

const ShopOffers = () => {
  const { shopItems } = useContext(AppContext);
  return (
    <>
      <div className="w-100 pt-5 pb-5 bg-white d-flex flex-wrap justify-content-around"
      style={{ minHeight: '400px' }}>
        {shopItems.length === 0 ? <p>Shop items coming soon...</p> :
          shopItems.map((shopItem, i) => (
            <ItemCard
              key={i}
              title={shopItem.attributes.title}
              description={shopItem.attributes.description}
              animal={shopItem.attributes.animal}
              itemImage={`${baseUrl}${shopItem.attributes.itemImage.data.attributes.formats.small.url}`}
              price={shopItem.attributes.priceInPounds}/>
          ))
        }
      </div>
    </>
  )
}

export default ShopOffers;