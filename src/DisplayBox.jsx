import CarouselEl from "./CarouselEl";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DisplayBox = ({ buttonUrl, images, textContent, buttonText, title }) => {
  return (
    <>
      <div className="display-el bg-white">
        <CarouselEl images={images}/>
      </div>
      <div
        className="p-5 d-flex flex-column justify-content-around align-items-center"
        style={{ backgroundColor: '#F8F6E7FF', width: '100%', maxWidth: '500px', aspectRatio: '1/1'}}>
        <h5 className="pb-3">{title}</h5>
        <p style={{ lineHeight: "1.6", textAlign: "justify" }}>{textContent}</p>
        <Button as={Link}
                to={buttonUrl}
                variant="outline-secondary"
        >
          {buttonText}
        </Button>
      </div>
    </>
  )
}

export default DisplayBox;