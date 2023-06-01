import { Carousel, Container } from "react-bootstrap";

const imagesURLs = [{ text: "This is slide 1", image: "antler_chews.jpeg"}, { text: "This is slide 2", image: "mince_food.jpeg"}];
const CarouselEl = () => {
  return (
    <Container className="custom-carousel">
      <Carousel fade controls={false}
                indicators={false}
                autoPlay={true}
                interval={2000}>
                className=
        {imagesURLs.map(({text, image}, i) =>
          <Carousel.Item key={i}>
            <img
              src={`images/media/pet-shop-images/${image}`}
              alt={text}
              className='w-50 ratio-1x1'
            />
          </Carousel.Item>
        )}
      </Carousel>
    </Container>
  )
}
export default CarouselEl;

