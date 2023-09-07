import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error404 = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{"page not found - brothers-salon"}</title>
      </Helmet>
      <div
        style={{
          padding: "5rem",
          display: "flex",
          height: "90vh",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div>
          <h3 style={{ fontSize: "4rem" }}>
            Oops!
            <i style={{ display: "inline-block", fontSize: "1rem" }}>
              {" "}
              <p>The bad! Request</p>
            </i>
            <h2 style={{ fontSize: "5rem" }}>404 Page not found</h2>
          </h3>
          <hr></hr>
        </div>
        <div style={{ paddingTop: "2rem" }}>
          <Link to="/">
            <button> Back to Home</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Error404;
