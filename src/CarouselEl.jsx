import { Carousel, Container } from "react-bootstrap";
import { baseUrl } from "./defaultContent";


const CarouselEl = ({ images }) => {
  return (
    <Container className="custom-carousel p-0">
      <Carousel fade controls={false}
                indicators={false}
                autoPlay={true}
                interval={4000}>
        {images.length === 0 ? <Carousel.Item>
            <img src="/images/media/shop-front.jpeg" alt="A picture of the front of the shop"/>
          </Carousel.Item> :
          images.map(({ text, image }, i) =>
            <Carousel.Item key={i} className="carousel-item">
              <img
                src={`${baseUrl}${images[i].attributes.images.data[0].attributes.formats.small.url}`}
                alt={text}
              />
            </Carousel.Item>
          )}
      </Carousel>
    </Container>
  )
}
export default CarouselEl;

