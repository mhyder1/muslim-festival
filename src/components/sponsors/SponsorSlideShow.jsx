import sponsor_1 from "../../assets/carousel/sponsors/sponsor_1.jpg";
import sponsor_2 from "../../assets/carousel/sponsors/sponsor_2.jpg";
import sponsor_3 from "../../assets/carousel/sponsors/sponsor_3.png";
import sponsor_4 from "../../assets/carousel/sponsors/sponsor_4.png";
import sponsor_5 from "../../assets/carousel/sponsors/sponsor_5.jpg";
import sponsor_6 from "../../assets/carousel/sponsors/sponsor_6.jpg";
import sponsor_7 from "../../assets/carousel/sponsors/sponsor_7.jpg";
import sponsor_8 from "../../assets/carousel/sponsors/sponsor_8.jpg";
import sponsor_9 from "../../assets/carousel/sponsors/sponsor_9.jpg";
import sponsor_10 from "../../assets/carousel/sponsors/sponsor_10.png";
import sponsor_11 from "../../assets/carousel/sponsors/sponsor_11.jpg";
import sponsor_12 from "../../assets/carousel/sponsors/sponsor_12.png";
import sponsor_13 from "../../assets/carousel/sponsors/sponsor_13.jpg";
import sponsor_14 from "../../assets/carousel/sponsors/sponsor_14.jpg";
import sponsor_15 from "../../assets/carousel/sponsors/sponsor_15.jpg";
import sponsor_16 from "../../assets/carousel/sponsors/sponsor_16.png";
import sponsor_17 from "../../assets/carousel/sponsors/sponsor_17.png";
import sponsor_18 from "../../assets/carousel/sponsors/sponsor_18.png";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SponsorSlideShow = () => {
  const images = [
    sponsor_1,
    sponsor_2,
    sponsor_3,
    sponsor_4,
    sponsor_5,
    sponsor_6,
    sponsor_7,
    sponsor_8,
    sponsor_9,
    sponsor_10,
    sponsor_11,
    sponsor_12,
    sponsor_13,
    sponsor_14,
    sponsor_15,
    sponsor_16,
    sponsor_17,
    sponsor_18,
  ];
  const responsive = {
    largeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselItem = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "200px",
    padding: "10px",
  };

  const carouselImage = {
    height: "250px",
    width: "auto",
    maxWidth: "100%",
    objectFit: "contain",
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      slidesToSlide={2}
      itemClass=""
      containerClass=""
      sliderClass=""
    >
      {images.map((src, index) => (
        <div style={carouselItem} key={index}>
          <img style={carouselImage} src={src} />
        </div>
      ))}
    </Carousel>
  );
};

export default SponsorSlideShow;
