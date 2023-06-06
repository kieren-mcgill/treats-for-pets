import SiteRoutes from "./SiteRoutes";
import SocialHeader from "./SocialHeader";


const Main = () => {
  return (
    <div className="main d-flex flex-column">
      <SocialHeader />
      <div className="w-auto d-flex justify-content-center align-items-center">
        <div className="route-display flex-grow-1 bg-light d-flex flex-column align-items-center">
          <h1 className="pt-5">Healthy & natural treats</h1>
          <SiteRoutes/>
        </div>
      </div>
    </div>
  )
}

export default Main;