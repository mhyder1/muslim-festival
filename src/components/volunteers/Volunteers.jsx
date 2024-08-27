import vol_1 from '../../assets/volunteer_1.jpg'
const Volunteers = () => {
  return (
    <div class="page container page-flex">
      <div class="page-container">
        <h1
          class="page-title"
          style={{ fontFamily: "DIN Neuzeit Grotesk LT W01 BdCn" }}
        >
          Volunteer
        </h1>
        <p>
          Volunteers are essential to the success of the NC Muslim Festival. We
          seek students and adults who can commit to helping to make sure the
          festival runs smoothly and efficiently. Take a moment to review the
          various ways you can assist with the festival. Volunteer training will
          be required. Additional information for training will be provided as
          we get closer to the event. Register to volunteer TODAY!
        </p>
        <a
          href="https://form.jotform.com/222664757551160"
          target="_blank"
          class="btn btn-primary btn-xl rounded-pill mt-5"
        >
          Volunteer
        </a>
        <div style={{ display: "flex", justifyContent: "center", marginTop: '2rem' }}>
          <img src={vol_1} alt="2023 volunteers" style={{width: '75%'}}/>
        </div>
      </div>
    </div>
  );
};

export default Volunteers;
