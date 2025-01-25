import Header from "../header/Header";
import Section from "./Section";
import { Link } from "wouter-preact";

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

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// import vendor_4_1 from "../../assets/vendor_4.jpg";
import sponsor_2 from "../../assets/sponsor_2.jpg";
import entertainment from "../../assets/entertainment.jpg";
import { useDeadline } from "../../hooks/useDeadline";

const Home = () => {
  const { date } = useDeadline();
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
  const vendors = (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={2000}
      itemClass=""
      containerClass=""
      sliderClass=""
    >
      <img src={vendor_1} />
      <img src={vendor_2} />
      <img src={vendor_3} />
      <img src={vendor_4} />
      <img src={vendor_5} />
      <img src={vendor_6} />
      <img src={vendor_7} />
      <img src={vendor_8} />
      <img src={vendor_9} />
      <img src={vendor_10} />
      <img src={vendor_11} />
      <img src={vendor_12} />
      <img src={vendor_13} />
      <img src={vendor_14} />
      <img src={vendor_16} />
      <img src={vendor_17} />
      <img src={vendor_18} />
      <img src={vendor_19} />
      <img src={vendor_20} />
      <img src={vendor_21} />
      <img src={vendor_22} />
      <img src={vendor_23} />
      <img src={vendor_24} />
      <img src={vendor_25} />
      <img src={vendor_26} />
      <img src={vendor_27} />
      <img src={vendor_28} />
      <img src={vendor_29} />
      <img src={vendor_30} />
      <img src={vendor_31} />
      <img src={vendor_32} />
      <img src={vendor_33} />
      <img src={vendor_34} />
      <img src={vendor_35} />
      <img src={vendor_36} />
      <img src={vendor_37} />
      <img src={vendor_38} />
      <img src={vendor_39} />
      <img src={vendor_40} />
      <img src={vendor_42} />
      <img src={vendor_43} />
      <img src={vendor_44} />
      <img src={vendor_45} />
      <img src={vendor_46} />
      <img src={vendor_47} />
      <img src={vendor_48} />
    </Carousel>
  );

  return (
    <>
      <Header />
      {/* <div
        id="scroll"
        style={{
          backgroundColor: "rgb(217 211 191)",
          display: "flex",
          width: "75%",
          justifyContent: "center",
          margin: "2rem auto",
          padding: "1rem",
        }}
      >
        <h2 style={{ width: "40%" }}>Get to know your muslim neighbor</h2>
        <p style={{ width: "60%" }}>
          They are your Medical Professionals, Political Representatives,
          Educators, Realtors, Lawyers, Financial Advisors, Police Officers,
          Firemen, Chaplains, Supervisors, Chef, Judges, Journalists, General
          Contractors, Event Planners, Pilots, Engineers, Entrepreneurs, Your
          Favorite Athletes, Authors, Musicians, Poets, Actors/Actresses, Models
          and/or Comedians, Friends, Co-workers, Family, and More!
        </p>
      </div> */}
      <Section
        img={entertainment}
        imgClass="col-lg-6 order-lg-2"
        txtClass="col-lg-6 order-lg-1"
        title="Entertainment Lineup"
        isScroll={true}
      >
        <p>
          Seeking talented NC Muslim artists who would like to audition to
          perform at the 2025 NC Muslim Festival (eg. solo singer or band |
          rapper | spoken word | poetry | musicians - instruments | comedian,
          etc.). Submit a short video (mp4) of your performance to
          ncmuslimfest@gmail.com before April 1, 2025.
        </p>
      </Section>
      <Section
        title="Our Proud 2025 Sponsors"
        img={sponsor_2}
        imgClass="col-lg-6"
        txtClass="col-lg-6"
      >
        <p>
          Your support helps the NC Muslim Festival (NCMF) to stay free,
          sustainable, and relevant. Sponsorship of the NCMF extends beyond
          awareness of your brand, product, or service, by creating a meaningful
          connection with our diverse community.
          <Link
            href="/sponsors"
            class="btn btn-primary btn-lg rounded-pill mt-5"
          >
            Become a Sponsor TODAY!
          </Link>
        </p>
      </Section>
      <Section
        // img={vendor_4_1}
        imgClass="col-lg-6 order-lg-2"
        // txtClass="col-lg-6 order-lg-1"
        txtClass="d-flex justify-content-center"
        title="Our 2025 Vendors"
        component={vendors}
      >
        {/* <p>
          Take advantage of showcasing your business by vending at the NCMF.
          There are several ways of participating as a vendor: Exhibitor,
          Merchandise, Food Table or Food Truck. If interested, complete your
          vendor application before {date}.
          <Link
            href="/vendors"
            class="btn btn-primary btn-lg rounded-pill mt-5"
          >
            Become a Vendor TODAY!
          </Link>
        </p> */}
      </Section>
    </>
  );
};

export default Home;
