const Header = () => {
  return (
    <header
      class="masthead text-center text-white"
      style={{ backgroundColor: "black" }}
    >
      <div class="masthead-content">
        {/* <iframe
          class="bg-video"
          src="https://www.youtube.com/embed/Gs5iGS1POIk?autoplay=1&mute=1&controls=0&loop=1&playlist=Gs5iGS1POIk"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        /> */}
        {/* <iframe
          class="bg-video"
          src="https://player.vimeo.com/video/1047695175?h=2c1b093adb&autoplay=1&amp;loop=1&amp;controls=0&amp;player_id=0&amp;app_id=58479"
          frameborder="0"
          allow="autoplay; fullscreen;encrypted-media"
          // style="position:absolute;top:0;left:0;width:100%;height:100%;"
          title="2023recap"
        ></iframe> */}
        <iframe
          class="bg-video"
          src="https://player.vimeo.com/video/1047695175?h=2c1b093adb&amp;title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;autoplay=1&amp;loop=1&amp;mute=1"
          // width="1920"
          // height="1080"
          frameborder="0"
          allow="autoplay; fullscreen; encrypted-media"
          title="2023recap"
        ></iframe>
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
              <span>Center City Park | Downtown Greensboro</span>
              <span>200 N. Elm Street | Greensboro, NC</span>
            </p>
            <p class="event-time">
              <span>Saturday, May 10, 2025 | 10:00 AM - 6:00 PM</span>
              <span>Free Admission | Open to the Public</span>
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
