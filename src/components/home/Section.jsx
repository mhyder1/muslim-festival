const Section = ({ isScroll = false, imgClass, txtClass, img, title, children }) => {
  return (
    <section id={isScroll ? "scroll" : ""}>
      <div class="container px-5">
        <div class="row gx-5 align-items-center">
          <div class={imgClass}>
            <div class="p-5">
              <img class="img-fluid rounded-circle" src={img} alt="..." />
            </div>
          </div>
          <div class={txtClass}>
            <div class="p-5">
              <h2 class="display-4">{title}</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
