import { Carousel, Container } from "react-bootstrap";

const imagesURLs = [{ text: "This is slide 1", image: "antler_chews.jpeg"}, { text: "This is slide 2", image: "mince_food.jpeg"}];
const CarouselEl = () => {
  return (
    <Container style={{ width: "50%" }}>
      <Carousel fade controls={false}
                indicators={false}
                autoPlay={true}
                interval={2000}>
        {imagesURLs.map(({text, image}, i) =>
          <Carousel.Item key={i}>
            <p>{text}</p>
            <img
              className="d-block w-100"
              src={`images/media/pet-shop-images/${image}`}
              alt="First slide"
            />
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  )
}
export default CarouselEl;

