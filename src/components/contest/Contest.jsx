const Contest = () => {
  return (
    <div
      class="page container page-flex"
      //   style={{ minHeight: "calc(100vh - 117px)" }}
    >
      <div class="page-container">
        <h1
          class="page-title"
          style={{ fontFamily: "DIN Neuzeit Grotesk LT W01 BdCn" }}
        >
          Adhan Contest: A Tribute to Bilal Ibn Rabah
        </h1>
        <p class="page-text">
          We are excited to have you participate in this year's adhan contest at
          the 2025 NC Muslim Festival.
          <ul>
            <li>
              The local judges will be scoring based on tajweed, tone, clarity,
              and good performance.{" "}
            </li>
            <li>
              Each participant will receive a maximum of three minutes to
              perform.
            </li>
            <li>Each category will have a maximum of seven participants.</li>
            <li>
              Additional information will be provided to participants as we get
              closer to the day of event so check your email.
            </li>
          </ul>
          If interested in participating in the contest, please complete your
          registration form before <strong>Monday, March 31st</strong>.
        </p>
        <h4>Prizes:</h4>
        <p>CHILDREN 1st: iPad, 2nd: Bike, 3rd: $25 gift card</p>
        <p>TEENS 1st: $100.00, 2nd: $50.00, 3rd: $25.00</p>
        <p>ADULTS 1st: $150.00, 2nd: $75.00, 3rd: $50.00</p>
        <a
          href="https://forms.gle/xtmqvBbp2mkb4wtW9"
          target="_blank"
          class="btn btn-primary btn-xl rounded-pill mt-1 mb-4"
        >
          Register Now
        </a>
      </div>
    </div>
  );
};

export default Contest;
