import shine_logo from "../../assets/shine_logo.jpg";

const About = () => {
  return (
    <div
      class="page container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={shine_logo} alt="S.H.I.N.E logo" style={{ width: "50%" }} />
      <p class="page-text">
        The North Carolina Muslim Festival is sponsored by the Self-Help
        Information Network and Exchange (S.H.I.N.E.). Founded by Robyn
        Saleem-Abdusamad, S.H.I.N.E. is a registered non-profit organization
        with a mission to empower, uplift, and unite communities by providing
        educational programs and events that foster lifelong learning, personal
        growth, meaningful relationships, and community engagement.
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
        purpose of this event is to promote arts, education, faith, service, and
        humanity. We do so by helping to build bridges with community members
        and offer an opportunity for civic pride, as well as education. Proudly,
        we had over 30 vendors with products ranging from health, beauty, and
        wellness, to art, jewelry, clothing, and books. While many of the
        vendors were local business owners, there were quite a few who traveled
        from Raleigh, Durham, Charlotte, Eastern and Western North Carolina, and
        as far as Indiana to participate in the festival. Attendees enjoyed the
        educational and interactive African drumming circle, the games and
        prizes offered at the KidZone area, and music from a renowned hip-hop
        Muslim artist, Haa Seen Noon. There was a huge amount of diverse
        representation that filled the park along with peaceful, loving vibes
        from all.
      </p>
      <p class="page-text">
        Each year, we hope for the festival to continue to grow and become a
        beacon for the communities to celebrate diversity and embrace unity.
      </p>
    </div>
  );
};

export default About;
