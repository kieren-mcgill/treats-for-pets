import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarEl from "./NavbarEl";
import Main from "./Main";
import FindUs from "./FindUs";


const App = ({ getShopItems }) => {
  return (
    <div>
      <NavbarEl getShopItems={getShopItems} />
      <Main />
      <FindUs />
    </div>
)
}


export default App;
