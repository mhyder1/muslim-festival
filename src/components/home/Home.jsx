import Header from "../header/Header";
import Section from "./Section";

import img1 from "../../assets/01.jpg";
import img2 from "../../assets/02.jpg";
import img3 from "../../assets/03.jpg";
import entertainment from '../../assets/entertainment.jpg'

const Home = () => {
  return (
    <>
      <Header />
      <div id="scroll" style={{backgroundColor: "rgb(217 211 191)", display: 'flex', width: '75%', justifyContent: "center", margin: '2rem auto', padding: "1rem"}}>
        <h2 style={{width: '40%'}}>Get to know your muslim neighbor</h2>
        <p style={{width: '60%'}}>They are your Medical Professionals, Political Representatives, Educators, Realtors, Lawyers, Financial Advisors, Police Officers, Firemen, Chaplains, Supervisors, Chef, Judges, Journalists, General Contractors, Event Planners, Pilots, Engineers, Entrepreneurs, Your Favorite Athletes, Authors, Musicians, Poets, Actors/Actresses, Models and/or Comedians, Friends, Co-workers, Family, and More!</p>
      </div>
      <Section
        img={entertainment}
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
