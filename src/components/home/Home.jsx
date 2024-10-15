import Header from "../header/Header";
import Section from "./Section";
import { Link } from "wouter-preact";

import vendor_4 from "../../assets/vendor_4.jpg";
import sponsor_2 from "../../assets/sponsor_2.jpg";
import entertainment from "../../assets/entertainment.jpg";
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
          Seeking talented NC Muslim artists who would like to audition to
          perform at the 2025 NC Muslim Festival (eg. solo singer or band |
          rapper | spoken word | poetry | musicians - instruments | comedian,
          etc.). Submit a short video (mp4) of your performance to
          ncmuslimfest@gmail.com before {date}.
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
        img={vendor_4}
        imgClass="col-lg-6 order-lg-2"
        txtClass="col-lg-6 order-lg-1"
        title="Our 2025 Vendors"
      >
        <p>
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
        </p>
      </Section>
    </>
  );
};

export default Home;
