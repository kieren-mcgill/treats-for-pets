import { createContext } from "react";

const AppContext = createContext({
  shopItems: [],
  charityImages: [],
  shopImages: [],
  shopText: [],
  charityText: []
})
export default AppContext;