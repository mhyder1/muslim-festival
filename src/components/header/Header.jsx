const Header = () => {
  return (
    <header class="masthead text-center text-white">
      <div class="masthead-content">
        <iframe
          class="bg-video"
          src="https://www.youtube.com/embed/Gs5iGS1POIk?autoplay=1&mute=1&controls=0&loop=1&playlist=Gs5iGS1POIk"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        />
        <div class="container px-5">
          <h1 class="masthead-heading mb-0 header-shadow">
            NC Muslim Festival
          </h1>
          <h4 class="masthead-subheading mb-0 header-shadow">
            {" "}
            Celebrate Diversity, Embrace Unity
          </h4>
          <div
            style={{
              marginTop: "5em",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p class="event-time">
              <span>Center City Park, downtown Greensboro</span>
              <span>200 N. Elm Street, Greensboro, NC</span>
            </p>
            <p class="event-time">
              <span>Saturday, May 10, 2025</span>
              <span>10:00 am - 6:00 pm</span>
            </p>
          </div>

          {/* <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">
            Learn More
          </a> */}
        </div>
      </div>
      {/* <div class="bg-circle-1 bg-circle"></div>
      <div class="bg-circle-2 bg-circle"></div>
      <div class="bg-circle-3 bg-circle"></div>
      <div class="bg-circle-4 bg-circle"></div> */}
    </header>
  );
};

export default Header;
