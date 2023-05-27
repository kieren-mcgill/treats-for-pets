import { Carousel, Container } from "react-bootstrap";
import CarouselContent from "./CarouselContent";

const imagesURLs = ["antler_chews.jpeg", "mince_food.jpeg"];
const CarouselEl = () => {
  return (
    <Container style={{ width: "50%" }}>
      <Carousel fade controls={false}
                indicators={false}
                autoPlay={true}
                interval={1000}>
        <CarouselContent imagesURLs={imagesURLs}/>
      </Carousel>
    </Container>
  )
}
export default CarouselEl;