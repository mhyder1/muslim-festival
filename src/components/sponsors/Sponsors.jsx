import sponsor_shirt from "../../assets/sponsor_1.jpg";
import sponsor_board from "../../assets/sponsor_3.jpg";
import lion from "../../assets/logos/lion.png";
import build from "../../assets/logos/build.jpg";
import caesar from "../../assets/logos/caesar.png";
import domino from "../../assets/logos/domino.png";
import icg from "../../assets/logos/icg.png";
import psa from "../../assets/logos/psa.jpg";
import roots from "../../assets/logos/roots.jpg";
import saffron from "../../assets/logos/saffron.png";
import shine from "../../assets/logos/shine.jpg";
// 2025 sponsors
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
import { useDeadline } from "../../hooks/useDeadline";
const Sponsors = () => {
  const { date } = useDeadline();

  return (
    <div class="page container page-flex" id="2027">
      <div class="page-container ">
        <h1 class="page-title">Sponsors</h1>
        <h3>Become a 2027 NC Muslim Festival Sponsor!</h3>
        <p class="page-text">
          We invite businesses and organizations to partner with us as an official 2027 NC Muslim Festival Sponsor. Your support helps keep the festival free, sustainable, and accessible to the community while providing valuable exposure for your business or organization.
        </p>
        <p class="page-text align-left">Click the button below to learn more and submit your sponsorship application by <span style={{ fontWeight: 'bold' }}>December 31, 2026</span>.</p>

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
          <img src={sponsor_shirt} alt="2023 sponsor 1" style={{ width: "75%" }} />
          <img src={sponsor_board} alt="2025 sponsor 3" style={{ width: "75%" }} />
        </div>
        <hr style={{ width: "100%" }} />
        <section id="2025">
          <h2
            class="page-title"
            style={{ textAlign: "center", marginBottom: "2rem" }}
          >
            2025 Sponsors
          </h2>
          <div class="d-flex justify-content-between flex-wrap gap-5" style={{ borderBottom: '1px solid black', marginBottom: '2rem', paddingBottom: '2rem' }}>
            <img class="logo" src={sponsor_1} alt="sponsor_1" />
            <img class="logo" src={sponsor_2} alt="sponsor_2" />
            <img class="logo" src={sponsor_3} alt="sponsor_3" />
            <img class="logo" src={sponsor_4} alt="sponsor_4" />
            <img class="logo" src={sponsor_5} alt="sponsor_5" />
            <img class="logo" src={sponsor_6} alt="sponsor_6" />
            <img class="logo" src={sponsor_7} alt="sponsor_7" />
            <img class="logo" src={sponsor_8} alt="sponsor_8" />
            <img class="logo" src={sponsor_9} alt="sponsor_9" />
            <img class="logo" src={sponsor_10} alt="sponsor_10" />
            <img class="logo" src={sponsor_11} alt="sponsor_11" />
            <img class="logo" src={sponsor_12} alt="sponsor_12" />
            <img class="logo" src={sponsor_13} alt="sponsor_13" />
            <img class="logo" src={sponsor_14} alt="sponsor_14" />
            <img class="logo" src={sponsor_15} alt="sponsor_15" />
            <img class="logo" src={sponsor_16} alt="sponsor_16" />
            <img class="logo" src={sponsor_17} alt="sponsor_17" />
            <img class="logo" src={sponsor_18} alt="sponsor_18" />
          </div>
        </section>
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
