import { Facebook, Instagram } from "react-bootstrap-icons";

const SocialHeader = () => {

  return (
    <>
      <div className="social d-flex justify-content-center align-items-center">
        <div>
          <Facebook size='40' className="mt-2 mb-2 me-4 green"/>
          <Instagram size='40' className="mt-2 mb-2 ms-4 green"/>
        </div>
      </div>

    </>
  )
}

export default SocialHeader;