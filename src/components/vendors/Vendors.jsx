import vendor_1 from "../../assets/vendor_1.jpg";
import vendor_2 from "../../assets/vendor_2.jpg";
import vendor_3 from "../../assets/vendor_3.jpg";
import { useDeadline } from "../../hooks/useDeadline";

const Vendors = () => {
  const { date } = useDeadline();
  return (
    <div
      class="page container page-flex"
      style={{ minHeight: "calc(100vh - 117px)" }}
    >
      <div class="page-container">
        <h1
          class="page-title"
          style={{ fontFamily: "DIN Neuzeit Grotesk LT W01 BdCn" }}
        >
          Vendors
        </h1>
        <p class="page-text">
          We invite you to participate as a vendor by bringing your business to
          the festival. Vendor fees vary based on food trucks, food tables, and
          merchandise tables (non-food items). Click one of the buttons below
          and fill out the application before the deadline {date}. Prices may
          increase after the deadline.
        </p>
        <p>
          <strong>Note:</strong>{" "}
          <span style={{ color: "red" }}>
            Food truck openings are for one seafood truck only. Thank you.
          </span>
        </p>
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            justifyContent: "space-around",
            width: "100%",
            flexWrap: "wrap",
            padding: "0",
          }}
        >
          <li style={{ position: "relative" }}>
            <a
              href="https://form.jotform.com/222685597504163"
              target="_blank"
              class="btn btn-primary btn-sm rounded-pill mt-5 disabled"
            >
              Food Table
            </a>
            <span class="text-danger sold-out">SOLD OUT</span>
          </li>
          <li>
            <a
              href="https://form.jotform.com/222684634140150"
              target="_blank"
              class="btn btn-primary btn-sm rounded-pill mt-5"
            >
              Food Truck
            </a>
          </li>
          <li style={{ position: "relative" }}>
            <a
              href="https://form.jotform.com/222684960721157"
              target="_blank"
              class="btn btn-primary btn-sm rounded-pill mt-5 disabled"
            >
              Merchandise
            </a>
            <span class="text-danger sold-out">SOLD OUT</span>
          </li>
          <li style={{ position: "relative" }}>
            <a
              href="https://form.jotform.com/240618023385150"
              target="_blank"
              class="btn btn-primary btn-sm rounded-pill mt-5 disabled"
            >
              Exhibitor (no products to sell)
            </a>
            <span class="text-danger sold-out">SOLD OUT</span>
          </li>
        </ul>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            gap: "2rem",
            margin: "2rem 0",
          }}
        >
          <img
            src={vendor_1}
            alt="vendor 1"
            style={{ width: "30%" }}
            class="zoom"
          />
          <img
            src={vendor_2}
            alt="vendor 2"
            style={{ width: "30%" }}
            class="zoom"
          />
          <img
            src={vendor_3}
            alt="vendor 3"
            style={{ width: "30%" }}
            class="zoom"
          />
        </div>
      </div>
    </div>
  );
};

export default Vendors;
