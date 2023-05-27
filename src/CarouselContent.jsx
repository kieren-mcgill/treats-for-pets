import { Carousel } from "react-bootstrap";

const CarouselContent =({ imagesURLs })=> {
  return(
    imagesURLs.map((url, i) =>
      <Carousel.Item key={i}>
        <img
          className="d-block w-100"
          src={`images/media/pet-shop-images/${imagesURLs[i]}`}
          alt="First slide"
        />
      </Carousel.Item>
    )
  )
}
export default CarouselContent;