import Header from "../header/Header";
import Section from "./Section";

import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";

const Home = () => {
  return (
    <>
      <Header />
      <Section
        isScroll={true}
        img={img1}
        imgClass="col-lg-6 order-lg-2"
        txtClass="col-lg-6 order-lg-1"
        title="Entertainment Lineup"
      >
        <p>
        Seeking talented NC Muslim Artists who would like to audition to perform at the 2025 NC Muslim Festival (eg. solo singer or band | rapper | spoken word | poetry | musicians - instruments | comedian, etc.). Submit a short video (mp4) of your performance to ncmuslimfest@gmail.com before December 31, 2024. 
        </p>
      </Section>
      <Section title="Our Proud 2025 Sponsors" img={img2} imgClass="col-lg-6" txtClass="col-lg-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
          exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
          molestiae adipisci, beatae obcaecati.
        </p>
      </Section>
      <Section
        img={img3}
        imgClass="col-lg-6 order-lg-2"
        txtClass="col-lg-6 order-lg-1"
        title="Our 2025 Vendors"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
          exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
          molestiae adipisci, beatae obcaecati.
        </p>
      </Section>
    </>
  );
};

export default Home;
