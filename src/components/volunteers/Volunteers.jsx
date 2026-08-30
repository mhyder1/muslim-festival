import vol_1 from '../../assets/volunteer_1.jpg'
const Volunteers = () => {
  return (
    <div class="page container page-flex">
      <div class="page-container">
        <h1
          class="page-title"
          style={{ fontFamily: "DIN Neuzeit Grotesk LT W01 BdCn" }}
        >
          Volunteer With Us
        </h1>
        <p>Be part of the 2027 NC Muslim Festival and help make a difference! Volunteering is a great way to give back, earn good deeds, serve the community, and demonstrate the spirit of unity.</p>
        <p>We are seeking positive, reliable, and committed volunteers who are ready to help on the day of the festival. Please register only if you are serious about fulfilling your volunteer commitment.</p>
        <p class="align-left">Students (age 16+) and able-bodied men are especially encouraged to volunteer. Your time and support truly make a difference!</p>
        <a
          href="https://form.jotform.com/222664757551160"
          target="_blank"
          class="btn btn-primary btn-xl rounded-pill mt-5"
        >
          Volunteer
        </a>
        <div style={{ display: "flex", justifyContent: "center", margin: '2rem 0' }}>
          <img src={vol_1} alt="2023 volunteers" style={{ width: '75%' }} />
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
