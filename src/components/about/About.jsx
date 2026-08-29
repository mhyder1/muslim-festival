import shine_logo from "../../assets/shine_logo.jpg";
import { useEffect } from "preact/hooks";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      class="page container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={shine_logo} alt="S.H.I.N.E logo" style={{ width: "50%" }} />
      <p class="page-text">The North Carolina Muslim Festival is presented by the <a href="https://www.shinenow.org/" target="_blank">Self-Help Information Network and Exchange</a> (S.H.I.N.E.), a registered nonprofit organization dedicated to empowering, uplifting, and uniting communities through education, engagement, and meaningful experiences.</p>
      <p class="page-text">Since its inaugural event in downtown Greensboro in 2023, the NC Muslim Festival has continued to grow in attendance, community participation, local sponsorship, and business support. What began with more than 1,000 attendees and 30 vendors has grown into a highly anticipated celebration bringing together people from across North Carolina and beyond.</p>
      <p class="page-text">Through cultural experiences, entertainment, local businesses, family activities, education, and community engagement, the festival creates an inclusive space for people of all backgrounds to connect.</p>
      <p class="page-text">Our mission is simple: <span style={{ fontWeight: 'bold' }}>Celebrate Diversity. Embrace Unity. Build Community.</span></p>
      {/* <p class="page-text">
        The North Carolina Muslim Festival is sponsored by the{" "}
        <a href="https://www.shinenow.org/" target="_blank">
          Self-Help Information Network and Exchange
        </a>{" "}
        (S.H.I.N.E.). Founded by Robyn Saleem-Abdusamad, S.H.I.N.E. is a
        registered non-profit organization with a mission to empower, uplift,
        and unite communities by providing educational programs and events that
        foster lifelong learning, personal growth, meaningful relationships, and
        community engagement.
      </p>
      <p class="page-text">
        On April 29, 2023, S.H.I.N.E. successfully hosted the first bi-annual NC
        Muslim Festival in Center City Park - downtown Greensboro, NC. Over
        273,000 Muslims reside in North Carolina and something of this magnitude
        had never been done in our state. The city of Greensboro is an ideal
        location for this event as it is centrally located between two of our
        largest cities - Charlotte and Raleigh-Durham.
      </p>
      <p class="page-text">
        The NC Muslim Festival attracted over 1,000 people statewide. The
        purpose of this event is to promote cultural understanding, community
        engagement, arts, diversity, humanity, service, and of course, unity. We
        do so by helping to build bridges with community members and offer an
        opportunity for civic pride, as well as education. Proudly, we had over
        30 vendors with products ranging from health, beauty, and wellness, to
        art, jewelry, clothing, and books. While many of the vendors were local
        business owners, there were quite a few who traveled from Raleigh,
        Durham, Charlotte, Eastern and Western North Carolina, and as far as
        Indiana to participate in the festival. Attendees enjoyed the
        educational and interactive African drumming circle, the games and
        prizes offered at the KidZone area, and music from a renowned hip-hop
        Muslim artist, Haa Seen Noon. There was a huge amount of diverse
        representation that filled the park along with peaceful, loving vibes
        from all.
      </p>
      <p class="page-text">
        Each time we host the NC Muslim Festival, it is our hope for it to
        continue to grow and become a beacon for the communities to celebrate
        diversity and embrace unity.
      </p> */}
    </div>
  );
};

export default About;
