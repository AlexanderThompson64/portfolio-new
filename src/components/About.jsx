import alexProfilePic from "../img/Alex.jpeg";

const About = () => {
  return (
    <div className="About mb-4 mt-5 mt-md-4" style={{ fontFamily: "anak" }}>
      <div className="text-white" id="aboutStatement">
        <div className="container-fluid d-flex">
          <h1 className="mt-sm-5" id="aboutHeader" style={{ width: "180px" }}>
            About me
          </h1>
          <hr
            className="d-sm-none"
            style={{
              backgroundColour: "white",
              opacity: "0.75",
              width: "95%",
            }}
          />
        </div>
        <div className="row mt-2 mt-xxl-5 justify-content-center align-items-center">
          <div className="col-sm-6 d-flex justify-content-center col-xxl-4 order-sm-last mt-sm-5">
            <img
              className="rounded img-fluid w-75"
              src={alexProfilePic}
              alt="Image of Alexander"
              id="alexImg"
              style={{ boxShadow: " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", maxWidth: "400px" }}
            />
          </div>
          <div className="col-sm-5">
            <div
              className="d-flex flex-column justify-content-center mt-3"
              style={{ marginLeft: "15px", marginRight: "15px" }}
            >
              <h2
                className="d-none"
                id="aboutHeaderDesktop"
                style={{ opacity: "0.75" }}
              >
                About me
              </h2>
              <p className="mt-2" style={{ fontSize: "16px" }} id="aboutP">
                Hi there!
                <span style={{ color: "#64ffda" }}> I'm Alexander</span>
                , but you can just call me Alex.
                <br /> I started my adventure in software by writing basic
                <span style={{ color: "#64ffda" }}> Linux</span> applications, using
                <span style={{ color: "#64ffda" }}> Bash</span> and the command line to make scripts that worked together with
                <span style={{ color: "#64ffda" }}> Python</span>. After finishing my first projects, like a
                <span style={{ color: "#64ffda" }}> Web Scraper </span>
                and a console order system, I really got into development!
                <br />
                <br />
                From there, I explored different web technologies to build solutions like Progressive Web Applications, Web Apps, and APIs.
                I have a lot of fun with Web Design, making custom assets using tools like Figma to create digital mockups, wireframes, and high-fidelity prototypes.
                a few of the things I've been working on recently are
                <span style={{ color: "#64ffda" }}>
                  {" "}
                  Progressive Web Applications{" "}
                </span>
                ,<span style={{ color: "#64ffda" }}> Web Apps </span> and{" "}
                <span style={{ color: "#64ffda" }}>API's</span>.
                <br />
                <br />I really enjoy{" "}
                <span style={{ color: "#64ffda" }}>Web Design</span>, creating
                custom assets using programs like
                <span style={{ color: "#64ffda" }}> Figma</span> to create
                digital <span style={{ color: "#64ffda" }}>Mockups</span>,{" "}
                <span style={{ color: "#64ffda" }}>Wireframes</span> and{" "}
                <span style={{ color: "#64ffda" }}>Hi-Fidelity </span>
                prototypes.
                <br />
                <br />
                Some of technologies I've used recently are:
              </p>
            </div>
          </div>
        </div>

        <div
          className="row rounded mt-2 mt-sm-5 justify-content-center py-3"
          id="techStack"
          style={{ fontSize: "16px" }}
        >
          <div className="col-5 col-sm-4 col-lg-3 d-flex justify-content-center">
            <div className="text-center">
              {/* <h5 style={{ opacity: "0.75" }}> */}
                <h5>
                Front End
              </h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                  HTML
                </li>
                <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                  CSS
                </li>
                <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                  JS
                </li>
                <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                  Bootstrap
                </li>
                <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                  React JS
                </li>
              </ul>
            </div>
          </div>
          <div className="col-5 col-sm-4 col-lg-3 d-flex justify-content-center">
            <div className="text-center">
            {/* <h5 style={{ opacity: "0.75" }}> */}
            <h5>
                Back End
              </h5>
              <span>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    C#
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Python
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Node
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    SQL SERVER
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Razor
                  </li>
                </ul>
              </span>
            </div>
          </div>
          <div className="d-none d-sm-block col-sm-4 col-lg-3 d-flex justify-content-center">
            <div className="text-center">
            {/* <h5 style={{ opacity: "0.75" }}> */}
            <h5>
                Mobile
              </h5>
              <span>
                <ul className="list-group">
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    React Native
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Expo
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Xammarin
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Kotlin
                  </li>
                  <li className="list-group-item bg-transparent" style={{ color: "#64ffda" }}>
                    Jetpack Compose
                  </li>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
