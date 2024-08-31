import gallery_1 from "../../assets/gallery_1.jpg";
import gallery_2 from "../../assets/gallery_2.jpg";
import gallery_3 from "../../assets/gallery_3.jpg";
import gallery_4 from "../../assets/gallery_4.jpg";
import gallery_5 from "../../assets/gallery_5.jpg";
import gallery_6 from "../../assets/gallery_6.jpg";

const Contact = () => {
  return (
    <div
      class="page container page-flex"
      style={{
        minHeight: "calc(100vh - 117px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div class="page-container">
        <h1
          class="page-title"
          style={{ fontFamily: "DIN Neuzeit Grotesk LT W01 BdCn" }}
        >
          Contact
        </h1>
        <p class="page-text">
          Please email us with any questions and/or concerns at
          ncmuslimfest@gmail.com
        </p>
        <p class="page-text">
          We also encourage you to follow us on social media for updates and
          announcements on{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100085285972105"
            target="_blank"
          >
            Facebook (NC Muslim Fest)
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/ncmuslimfest" target="_blank">
            Instagram (@ncmuslimfest)
          </a>
        </p>
      </div>
      <div
        class="gallery"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2em",
          justifyContent: "center",
          marginBottom: "2em"
        }}
      >
        <img src={gallery_2} class="gallery-img" alt="gallery image 2" />
        <img src={gallery_3} class="gallery-img" alt="gallery image 3" />
        <img src={gallery_4} class="gallery-img" alt="gallery image 4" />
        <img src={gallery_5} class="gallery-img" alt="gallery image 5" />
        <img src={gallery_6} class="gallery-img" alt="gallery image 6" />
        <img src={gallery_1} class="gallery-img" alt="gallery image 1" />
      </div>
    </div>
  );
};

export default Contact;
