import vendor_1 from "../../assets/carousel/vendors/vendor_1.jpg";
import vendor_2 from "../../assets/carousel/vendors/vendor_2.png";
import vendor_3 from "../../assets/carousel/vendors/vendor_3.png";
import vendor_4 from "../../assets/carousel/vendors/vendor_4.jpg";
import vendor_5 from "../../assets/carousel/vendors/vendor_5.jpg";
import vendor_6 from "../../assets/carousel/vendors/vendor_6.jpg";
import vendor_7 from "../../assets/carousel/vendors/vendor_7.jpg";
import vendor_8 from "../../assets/carousel/vendors/vendor_8.png";
import vendor_9 from "../../assets/carousel/vendors/vendor_9.jpg";
import vendor_10 from "../../assets/carousel/vendors/vendor_10.png";
import vendor_11 from "../../assets/carousel/vendors/vendor_11.jpg";
import vendor_12 from "../../assets/carousel/vendors/vendor_12.jpg";
import vendor_13 from "../../assets/carousel/vendors/vendor_13.jpg";
import vendor_14 from "../../assets/carousel/vendors/vendor_14.jpg";
import vendor_15 from "../../assets/carousel/vendors/vendor_15.jpg";
import vendor_16 from "../../assets/carousel/vendors/vendor_16.jpg";
import vendor_17 from "../../assets/carousel/vendors/vendor_17.png";
import vendor_18 from "../../assets/carousel/vendors/vendor_18.png";
import vendor_19 from "../../assets/carousel/vendors/vendor_19.jpg";
import vendor_20 from "../../assets/carousel/vendors/vendor_20.png";
import vendor_21 from "../../assets/carousel/vendors/vendor_21.png";
import vendor_22 from "../../assets/carousel/vendors/vendor_22.png";
import vendor_23 from "../../assets/carousel/vendors/vendor_23.jpg";
import vendor_24 from "../../assets/carousel/vendors/vendor_24.jpg";
import vendor_25 from "../../assets/carousel/vendors/vendor_25.jpg";
import vendor_26 from "../../assets/carousel/vendors/vendor_26.jpg";
import vendor_27 from "../../assets/carousel/vendors/vendor_27.jpg";
import vendor_28 from "../../assets/carousel/vendors/vendor_28.jpg";
import vendor_29 from "../../assets/carousel/vendors/vendor_29.jpg";
import vendor_30 from "../../assets/carousel/vendors/vendor_30.jpg";
import vendor_31 from "../../assets/carousel/vendors/vendor_31.png";
import vendor_32 from "../../assets/carousel/vendors/vendor_32.jpg";
import vendor_33 from "../../assets/carousel/vendors/vendor_33.png";
import vendor_34 from "../../assets/carousel/vendors/vendor_34.png";
import vendor_35 from "../../assets/carousel/vendors/vendor_35.png";
import vendor_36 from "../../assets/carousel/vendors/vendor_36.jpg";
import vendor_37 from "../../assets/carousel/vendors/vendor_37.jpg";
import vendor_38 from "../../assets/carousel/vendors/vendor_38.jpg";
import vendor_39 from "../../assets/carousel/vendors/vendor_39.jpg";
import vendor_40 from "../../assets/carousel/vendors/vendor_40.jpg";
import vendor_41 from "../../assets/carousel/vendors/vendor_41.png";
import vendor_42 from "../../assets/carousel/vendors/vendor_42.jpg";
import vendor_43 from "../../assets/carousel/vendors/vendor_43.jpg";
import vendor_44 from "../../assets/carousel/vendors/vendor_44.png";
import vendor_45 from "../../assets/carousel/vendors/vendor_45.png";
import vendor_46 from "../../assets/carousel/vendors/vendor_46.jpg";
import vendor_47 from "../../assets/carousel/vendors/vendor_47.png";
import vendor_48 from "../../assets/carousel/vendors/vendor_48.jpg";
import vendor_49 from "../../assets/carousel/vendors/vendor_49.jpg";
import vendor_50 from "../../assets/carousel/vendors/vendor_50.jpg";
import vendor_51 from "../../assets/carousel/vendors/vendor_51.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const VendorSlideShow = () => {
  const images = [
    vendor_1,
    vendor_2,
    vendor_3,
    vendor_4,
    vendor_5,
    vendor_6,
    vendor_7,
    vendor_8,
    vendor_9,
    vendor_10,
    vendor_11,
    vendor_12,
    vendor_13,
    vendor_14,
    vendor_15,
    vendor_16,
    vendor_17,
    vendor_18,
    vendor_19,
    vendor_20,
    vendor_21,
    vendor_22,
    vendor_23,
    vendor_24,
    vendor_25,
    vendor_26,
    vendor_27,
    vendor_28,
    vendor_29,
    vendor_30,
    vendor_31,
    vendor_32,
    vendor_33,
    vendor_34,
    vendor_35,
    vendor_36,
    vendor_37,
    vendor_38,
    vendor_39,
    vendor_40,
    vendor_41,
    vendor_42,
    vendor_43,
    vendor_44,
    vendor_45,
    vendor_46,
    vendor_47,
    vendor_48,
    vendor_49,
    vendor_50,
    vendor_51,
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

export default VendorSlideShow;
