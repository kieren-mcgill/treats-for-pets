import { Routes, Route } from "react-router-dom";
import PetShop from "./PetShop";
import Charity from "./Charity";
import SocialHeader from "./SocialHeader";

const Main = () => {
  return (
    <div className="bg-danger h-100 w-100">
      <header>
      <SocialHeader/>
      </header>
      <main style={{ height: '1000px' }}>
      <Routes>
        <Route path="/" element={(<PetShop/>)}/>
        <Route path="/pet-shop" element={(<PetShop/>)}/>
        <Route path="/charity" element={(<Charity/>)}/>
      </Routes>
      </main>
    </div>
  )
}

export default Main;