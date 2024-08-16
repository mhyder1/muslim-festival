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
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
          aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam
          exercitationem, ea animi blanditiis recusandae! Ratione voluptatum
          molestiae adipisci, beatae obcaecati.
        </p>
      </Section>
      <Section img={img2} imgClass="col-lg-6" txtClass="col-lg-6">
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
