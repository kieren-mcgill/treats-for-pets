import CarouselEl from "./CarouselEl";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const PetShop = ({ textContent }) => {
  return (
    <>
      <div className="display-el bg-white">
      </div>
      <div
        className="display-el light-brown p-2 pt-4 pb-4 d-flex flex-column justify-content-between align-items-center">
        <p>{textContent}</p>
        <Button as={Link}
                to="/our-shop"
                variant="outline-secondary">
          See our products
        </Button>
      </div>
    </>
  )
}

export default PetShop