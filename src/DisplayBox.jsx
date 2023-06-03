import CarouselEl from "./CarouselEl";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayBox = ({ buttonUrl, images, textContent }) => {
  return (
    <>
      <div className="display-el bg-white">
        <CarouselEl images={images}/>
      </div>
      <div
        className="display-el beige p-2 pt-4 pb-4 d-flex flex-column justify-content-between align-items-center">
        <p>{textContent}</p>
        <Button as={Link}
                to={buttonUrl}
                variant="outline-secondary"
        >
          See our products
        </Button>
      </div>
    </>
  )
}

export default DisplayBox;