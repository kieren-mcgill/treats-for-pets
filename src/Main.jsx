import SiteRoutes from "./SiteRoutes";
import SocialHeader from "./SocialHeader";


const Main = () => {
  return (
    <div className="main d-flex flex-column">
      <SocialHeader />
      <div className="w-auto d-flex justify-content-center align-items-center">
        <div className="route-display flex-grow-1 bg-light">
          <SiteRoutes/>
        </div>
      </div>
    </div>
  )
}

export default Main;