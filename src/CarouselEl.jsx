import { Carousel, Container } from "react-bootstrap";


const CarouselEl = ({ images }) => {
  const baseURL = process.env.REACT_APP_STRAPI_BASE_URL;
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
                src={`${baseURL}${images[i].attributes.images.data[0].attributes.formats.medium.url}`}
                alt={text}
              />
            </Carousel.Item>
          )}
      </Carousel>
    </Container>
  )
}
export default CarouselEl;

