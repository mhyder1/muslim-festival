import sponsor_1 from "../../assets/sponsor_1.jpg";
import lion from "../../assets/logos/lion.png";
import build from "../../assets/logos/build.jpg";
import caesar from "../../assets/logos/caesar.png";
import domino from "../../assets/logos/domino.png";
import icg from "../../assets/logos/icg.png";
import psa from "../../assets/logos/psa.jpg";
import roots from "../../assets/logos/roots.jpg";
import saffron from "../../assets/logos/saffron.png";
import shine from "../../assets/logos/shine.jpg";
import { useEffect } from "preact/hooks";
import { useDeadline } from "../../hooks/useDeadline";
const Sponsors = () => {
  const { date } = useDeadline();
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [window.location.hash]);
  return (
    <div class="page container page-flex">
      <div class="page-container ">
        <h1 class="page-title">Sponsors</h1>
        <p class="page-text">
          We seek individuals and businesses that are interested in becoming
          official sponsors for our event. Being an NC Muslim Festival sponsor
          is a mutual benefit for our local community as well as businesses in
          the area. Your support enables the North Carolina Muslim Festival
          (NCMF) to stay free, sustainable, and relevant. Click the button below
          and fill out the application by the deadline {date}.
        </p>

        <a
          href="https://form.jotform.com/222680687203154"
          target="_blank"
          class="btn btn-primary btn-xl rounded-pill mt-5"
        >
          Become a Sponsor
        </a>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "2rem 0",
          }}
        >
          <img src={sponsor_1} alt="2023 sponsor 1" style={{ width: "75%" }} />
        </div>
        <hr style={{ width: "100%" }} />
        <section id="2023">
          <h2
            class="page-title"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            2023 Sponsors
          </h2>
          <div class="d-flex justify-content-between flex-wrap gap-5">
            <img class="logo" src={saffron} alt="saffron road logo" />
            <img class="logo" src={lion} alt="food lion logo" />
            <img class="logo" src={build} alt="build a village logo" />
            <img class="logo" src={caesar} alt="little caesars logo" />
            <img class="logo" src={icg} alt="ICG logo" />
            <img class="logo" src={domino} alt="dominos logo" />
            <img class="logo" src={roots} alt="deep roots logo" />
            <img class="logo" src={shine} alt="S.H.I.N.E logo" />
            <img class="logo" src={psa} alt="PSA logo" />
          </div>
          {/* <section>
            <h3>Title Sponsor</h3>
            <p class="page-text">
              Self Help Information Network and Exchange (S.H.I.N.E.)
            </p>
          </section> */}
          {/* <section>
            <h3>SILVER $1,000+</h3>
            <p class="page-text">Islamic Center of Greensboro</p>
            <p class="page-text">Build-A-Village Consulting Group</p>
          </section> */}
          {/* <section>
            <h3>BRONZE $500 - $999</h3>
            <p class="page-text">Saffron Road</p>
            <p class="page-text">Food Lion</p>
            <p class="page-text">Pizza Hut</p>
            <p class="page-text">Domino's Pizza</p>
            <p class="page-text">Lil' Caesar Pizza</p>
          </section> */}
          {/* <section>
            <h3>FRIENDS $1 - $499</h3>
            <p class="page-text">Eastern North Carolina P.S.A. Friends</p>
            <p class="page-text">Deep Roots</p>
          </section> */}
        </section>
      </div>
    </div>
  );
};

export default Sponsors;
