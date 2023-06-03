import { Carousel, Container } from "react-bootstrap";


const CarouselEl = ({ images }) => {
  const envURL = process.env.REACT_APP_STRAPI_BASE_URL;
  const baseURL = envURL.slice(0, envURL.length - 1);
  return (
    <Container className="custom-carousel p-0">
      <Carousel fade controls={false}
                indicators={false}
                autoPlay={true}
                interval={4000}>
        {images.length === 0 ? <Carousel.Item>
            <p>Loading...</p>
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

