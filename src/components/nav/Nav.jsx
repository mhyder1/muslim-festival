import { Link } from "wouter-preact";

const Nav = () => {
  const menuItems = [
    { text: "About", url: "/about" },
    { text: "Vendors", url: "/vendors" },
    { text: "Sponsors", url: "/sponsors" },
    { text: "Volunteers", url: "/volunteers" },
    { text: "Contact", url: "/contact" },
  ];
  const menu = menuItems.map((item) => (
    <li class="nav-item">
      <Link class="nav-link" href={item.url}>
        {item.text}
      </Link>
    </li>
  ));
  return (
    <nav class="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
      <div class="container px-5">
        {/* <Link class="navbar-brand" href="/#page-top"> */}
        <Link class="navbar-brand" href="/">
          NC Muslim Festival
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ms-auto">{menu}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;