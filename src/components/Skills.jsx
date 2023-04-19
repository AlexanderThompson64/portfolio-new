import webDevImg from "../img/htmlimg.png";
import mobileDevImg from "../img/cfr.png";
import designImg from "../img/figmaxd.png";

const Skills = () => {
  return (
    <div className="Skills text-white" style={{ fontFamily: "anak" }}>
      <div className="container-fluid d-flex mb-sm-2" id="skills">
        <h1 style={{ width: "80px" }} id="skillsTitle">
          <span>Skills</span>
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
      <div className="container-fluid d-flex justify-content-center">
        <div style={{ fontSize: "16px" }} id="skillsP">
          <h2
            className="d-none"
            id="skillsHeaderDesktop"
            style={{ opacity: "0.75" }}
          >
            Skills
          </h2>
          <p>
            Throughout my studies over the last 4 years I have completed a range
            of various projects and gained an array of skills throughout my study,
            personal projects and work. <br />
            <br />I also gained valuable transferable skills through previous
            employment over my years in fast paced driven environments.
          </p>

          <br />
          <br />
        </div>
      </div>
      <div className="container mt-3">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active text-white">
              <div className="container d-flex flex-column justify-content-center align-items-center text-center">
                <h1>Web Development</h1>
                <div className="container d-flex flex-column justify-content-center" style={{ height: "300px" }}>

                  <img
                    src={webDevImg}
                    className="d-block rounded mx-auto img-fluid mb-5 "
                    style={{ maxWidth: "300px" }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item text-white">
              <div className="container d-flex flex-column align-items-center">
                <h1>Mobile App Development</h1>
                <div className="container d-flex flex-column justify-content-center" style={{ height: "300px" }}>
                  <img
                    src={mobileDevImg}
                    className="d-block rounded mx-auto mb-5 "
                    style={{ maxWidth: "300px", paddingRight: "20px" }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container d-flex flex-column align-items-center">
                <h1>Design</h1>
                <div className="container d-flex flex-column justify-content-center" style={{ height: "300px" }}>
                  <img
                    src={designImg}
                    className="d-block rounded mx-auto mb-5 "
                    style={{ maxWidth: "300px", paddingRight: "45px" }}
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container-fluid d-flex justify-content-center text-center">
        <div
          className="mt-2"
          style={{ fontSize: "16px" }}
          id="transSkillsList"
        >
          <p id="transSkillsTitle">Transferable Skills</p>
          <p>
            Critical Thinking
            <br />
            Problem Solving
            <br />
            Time Management
            <br />
            Excellent communicator written and verbally
            <br />
            Competent in with Microsoft products WSL2, PowerShell, Word, Excel,
            PowerPoint etc
            <br />
            Competent with Linux operating systems and command line interface
            <br />
            Highly Motivated
            <br />8 Years working in Client focused environments
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
