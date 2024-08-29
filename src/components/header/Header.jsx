const Header = () => {
  return (
    <header class="masthead text-center text-white">
      <div class="masthead-content" >
        <iframe
          class="bg-video"
          src="https://www.youtube.com/embed/Gs5iGS1POIk?autoplay=1&mute=1&controls=0&loop=1&playlist=Gs5iGS1POIk"
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
        />
        <div class="container px-5">
          <h1 class="masthead-heading mb-0">NC Muslim Festival</h1>
          <h2 class="masthead-subheading mb-0">
            {" "}
            Celebrate Diversity, Embrace Unity
          </h2>
          <a class="btn btn-primary btn-xl rounded-pill mt-5" href="#scroll">
            Learn More
          </a>
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
