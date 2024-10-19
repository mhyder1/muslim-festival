import FaqEntry from "./FaqEntry";
import { useEffect } from "preact/hooks";
const Faqs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div
      class="page container"
      style={{
        minHeight: "calc(100vh - 117px",
        // display: "flex",
        // flexDirection: "column",
      }}
    >
      <h2 id="faqs">FAQs</h2>
      <ol class="pb-3" style={{ borderBottom: "1px dotted" }}>
        <li>
          <a class="link-color" href="#why">
            Why is there an NCMF?
          </a>
        </li>
        <li>
          <a class="link-color" href="#cook">
            I want to cook a few pans of food to sell at the festival. Can I do
            that?
          </a>
        </li>
        <li>
          <a class="link-color" href="#funded">
            How is the NCMF funded? Who is supporting this organization?
          </a>
        </li>
        <li>
          <a class="link-color" href="#greensboro">
            Why is the NCMF held in Greensboro, NC?
          </a>
        </li>
        <li>
          <a class="link-color" href="#only">
            Is this event only for Muslims?
          </a>
        </li>
        <li>
          <a class="link-color" href="#swim">
            Can my child(ren) swim in the Center City Park Fountain?
          </a>
        </li>
        <li>
          <a class="link-color" href="#bring">
            What should I bring to the festival?
          </a>
        </li>
        <li>
          <a class="link-color" href="#address">
            What is the address for the festival? Where should I park?
          </a>
        </li>
        <li>
          <a class="link-color" href="#family">
            My family and I will be traveling from out of town. What are some
            hotels near the park?
          </a>
        </li>
        <li>
          <a class="link-color" href="#planning">
            I want to be a part of the NCMF planning team, what do you look for?
          </a>
        </li>
      </ol>
      <div>
        <FaqEntry
          id="why"
          title="Why is there an NCMF?"
          content={
            <p>
              Aside from Muslims celebrating Eid within their respective areas,
              the NCMF is an opportunity to unite Muslims within North Carolina
              to celebrate diversity. NCMF embraces unity while learning about
              various cultures and allowing non-Muslims to meet their Muslim
              neighbors.
            </p>
          }
        />
        <FaqEntry
          id="cook"
          title="I want to cook a few pans of food to sell at the festival. Can I do
          that?"
          content={
            <p>
              The NCMF is a city-permitted event. Therefore, all vendors selling
              unpackaged food must be approved by the local and state Food and
              Health departments.
            </p>
          }
        />
        <FaqEntry
          id="funded"
          title="How is the NCMF funded? Who is supporting this organization?"
          content={
            <div class="d-flex flex-column">
              <p>
                Self-Help Information Network and Exchange (SHINE) is a 501(c)3
                registered non-profit organization established within the United
                States. The NCMF is one of its major community events that
                promote cultural understanding, community engagement, diversity,
                humanity, arts, and unity.
              </p>
              <p>
                SHINE is not affiliated with any illegal and/or foreign
                organizations, nor is it affiliated with any religious
                institutions. SHINE is mainly supported by community grants and
                donations.
              </p>
            </div>
          }
        />
        <FaqEntry
          id="greensboro"
          title="Why is the NCMF held in Greensboro, NC?"
          content={
            <p>
              The NCMF is held in Greensboro because it is centrally located in
              NC as well as centrally located between two larger cities –
              Charlotte and Raleigh-Durham (1 hour drive time), which makes
              travel easier for those living outside of the Piedmont-Triad area.
              Additionally, the founders of NCMF reside in the Greensboro area.
            </p>
          }
        />
        <FaqEntry
          id="only"
          title="Is this event only for Muslims?"
          content={
            <p>
              While the word Muslim is in the title of the event, the event is
              open to the public. People who identify as other faiths are
              welcome to come to learn and fellowship for the sake of cultural
              understanding, education, community engagement, diversity, and
              unity.
            </p>
          }
        />
        <FaqEntry
          id="swim"
          title="Can my child(ren) swim in the Center City Park Fountain?"
          content={<p>No</p>}
        />
        <FaqEntry
          id="bring"
          title="What should I bring to the festival?"
          content={
            <p>
              Plan to stay the entire day at the festival. You may want to bring
              a folding chair, blanket for a family picnic, your prayer rug(s),
              money to support the wonderful small-business vendors, and of
              course, bring a smile and salaams for your brothers and sisters.
            </p>
          }
        />
        <FaqEntry
          id="address"
          title="What is the address for the festival? Where should I park?"
          content={
            <div class="d-flex flex-column">
              <p>
                The festival will be held at Center City Park, 200 N. Elm Street
                in downtown Greensboro (NC). There will be public parking in the
                parking decks below. They are all located across from the park.
              </p>
              <ul>
                <li>
                  Bellemeade Street Deck | 200 N. Greene St. | Greensboro, NC
                </li>
                <li>Church Street Deck | 215 N. Church St. | Greensboro, NC</li>
                <li>Davie Street Deck | 109 E. Market St. | Greensboro, NC</li>
              </ul>
            </div>
          }
        />
        <FaqEntry
          id="family"
          title="My family and I will be traveling from out of town. What are some
          hotels near the park?"
          content={
            <div class="d-flex flex-column">
              <p>
                If you plan to stay overnight. Below are a few nice hotels near
                Center City Park.
              </p>
              <ul>
                <li>
                  Marriott Greensboro Downtown (less than a mile from the park)
                  304 North Greene St. | Greensboro, NC | Ph. 336-379-8000
                </li>
                <li>
                  Hyatt Greensboro Downtown (7 min walk to the park) 300 N.
                  Eugene St. | Greensboro, NC | Ph. 336-373-6269
                </li>
                <li>
                  Hampton Inn & Suites Greensboro Downtown (13 min walk; 2 min
                  drive or may take the free Hopper Trolley) | 222 W. McGee St.
                  | Greensboro, NC | Ph. 336-553-1280
                </li>
              </ul>
            </div>
          }
        />
        <FaqEntry
          id="planning"
          title="I want to be a part of the NCMF planning team, what do you look for?"
          content={
            <p>
              Anyone who supports SHINE/NCMF's mission and purpose is welcome to{" "}
              <a
                href="https://form.jotform.com/222664757551160"
                target="_blank"
                class="link-color"
              >
                apply
              </a>{" "}
              to be a part of the festival planning team.
            </p>
          }
        />
      </div>
    </div>
  );
};

export default Faqs;
