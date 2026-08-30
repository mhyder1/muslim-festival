import gallery_1 from "../../assets/contact/contact_1.jpg";
import gallery_2 from "../../assets/contact/contact_2.jpg";
import gallery_3 from "../../assets/contact/contact_3.jpg";
import gallery_4 from "../../assets/contact/contact_4.jpg";
import gallery_5 from "../../assets/contact/contact_5.jpg";
import gallery_6 from "../../assets/contact/contact_6.jpg";

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
          Contact Us
        </h1>
        <p class="page-text">
          Questions? Email us at ncmuslimfest@gmail.com
        </p>
        <p class="page-text">
          Follow NC Muslim Festival on{" "}
          <a
            href="https://www.facebook.com/profile.php?id=100085285972105"
            target="_blank"
          >
            Facebook (NC Muslim Fest)
          </a>{" "}
          and{" "}
          <a href="https://www.instagram.com/ncmuslimfest" target="_blank">
            Instagram (@ncmuslimfest)
          </a>{" "}
          for the latest updates and announcements.
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
