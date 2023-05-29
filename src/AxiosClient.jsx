import axios from 'axios';
import { useState } from "react";
import App from "./App";

const baseUrl = "http://localhost:1337/api";

const AxiosClient = () => {
  const [shopItems, setShopItems] = useState(null);

  const apiCall = ({ method, url, data }) => {
    return axios({
      method,
      url: `${baseUrl}${url}`,
      data,
    }).catch((error) => {
      console.log(error)
    })
  }

  const getShopItems =()=> {
    apiCall({
      method: 'get',
      url: '/shop-items'
    })
      .then((response) => {
        console.log(response)
        setShopItems(response.data)
      })
  }

  return (
    <App getShopItems={getShopItems}/>
  )

}

export default AxiosClient;