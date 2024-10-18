const FaqEntry = ({ title, content, id }) => {
  return (
    <dl style={{ borderBottom: "1px dotted" }} id={id}>
      <dt class="mb-2">
        <span class="me-3 faq-color">Q:</span>
        {title}
      </dt>
      <dd class="d-flex">
        <span class="me-3 faq-color fw-bold">A:</span>
        {content}
      </dd>
      <dd>
        <a class="link-color" href="#faqs">
          Return to Top
        </a>
      </dd>
    </dl>
  );
};

export default FaqEntry;
