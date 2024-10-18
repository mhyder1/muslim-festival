import { Link } from "wouter-preact";
// import ContactForm from "../contact/ContactForm";
const Footer = () => {
  return (
    <footer
      class="py-5"
      style={{
        backgroundColor: "rgb(217,211,191)",
        position: "relative",
        zIndex: "100",
      }}
    >
      <div class="container px-5">
        {/* <ContactForm /> */}
        <div class="d-flex flex-column">
          <Link href="/faqs" class="link-color">
            FAQs
          </Link>
          <Link href="/contact" class="link-color">
            Contact Info
          </Link>
        </div>
        <p class="m-0 text-center text-black small">
          Copyright <span>&copy;</span> SHINE{" "}
          <span>{new Date().getFullYear()}</span>
          <span style={{ marginLeft: "2px", marginRight: "2px" }}>|</span>
          <span>Tax ID: 87-1024593</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
