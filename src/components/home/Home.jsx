import Header from "../header/Header";
import Section from "./Section";
import { Link } from "wouter-preact";
import VendorSlideShow from "../vendors/VendorSlideShow";
import SponsorSlideShow from "../sponsors/SponsorSlideShow";

// import vendor_4_1 from "../../assets/vendor_4.jpg";
import sponsor_2 from "../../assets/sponsor_2.jpg";
import entertainment from "../../assets/wafeeq.jpg";
import { useDeadline } from "../../hooks/useDeadline";

const Home = () => {
  const { date } = useDeadline();

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
          2025 NCMF Emcee, Wafeeq Zarif NC-based comedian and the Muslim News
          guy.
          <br />
          <a href="https://www.facebook.com/@wafeeq.zarif" target="_blank">
            <i
              class="bi bi-facebook entertainment-social-media"
              style={{ color: "#1877F2" }}
            ></i>
          </a>
          <a href="https://www.instagram.com/wafeeqzarif" target="_blank">
            <i
              class="bi bi-instagram entertainment-social-media"
              style={{ color: "#E4405F" }}
            ></i>
          </a>
          <a href="https://www.youtube.com/@wafeeqzarif" target="_blank">
            <i
              class="bi bi-youtube entertainment-social-media"
              style={{ color: "#CD201F" }}
            ></i>
          </a>
        </p>
      </Section>
      <Section
        title="Our Proud 2025 Sponsors"
        img={sponsor_2}
        imgClass="col-lg-6"
        txtClass="col-lg-6"
        component={<SponsorSlideShow />}
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
        component={<VendorSlideShow />}
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
