import { Facebook, Instagram } from "react-bootstrap-icons";

const SocialHeader = () => {

  return (
      <div className="social p-5 d-flex justify-content-center align-items-center">
        <div>
          <a href="https://www.facebook.com/profile.php?id=100088748492268" target="_blank" rel="noopener noreferrer">
          <Facebook size='40' className="mt-2 mb-2 me-4 green"/>
          </a>
          <a href="https://www.instagram.com/treats_for_pets_uk/" target="_blank" rel="noopener noreferrer">
          <Instagram size='40' className="mt-2 mb-2 ms-4 green"/>
          </a>
        </div>
      </div>
  )
}

export default SocialHeader;