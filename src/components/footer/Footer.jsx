import ContactForm from "../contact/ContactForm";
const Footer = () => {
  return (
    <footer class="py-5" style={{backgroundColor: 'rgb(217,211,191)'}}>
      <div class="container px-5">
        <ContactForm />
        <p class="m-0 text-center text-black small">
          Copyright &copy; Your Website 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;