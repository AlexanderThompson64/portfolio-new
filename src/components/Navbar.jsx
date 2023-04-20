import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const Navbar = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [offcanvasOpen, setOffcanvasOpen] = useState(false);
  const [disableScroll, setDisableScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!disableScroll) {
        const currentScrollPos = window.pageYOffset;
        setVisible(
          (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) ||
          currentScrollPos < 10 || currentScrollPos < prevScrollPos
        );
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableScroll, prevScrollPos, visible, setVisible]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (offcanvasOpen) {
        handleOffcanvasClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [offcanvasOpen]); // Add offcanvasOpen as a dependency

  const navbarClasses = visible ? "navbar navbar-dark fixed-top navbar-scrolled" : "navbar navbar-dark fixed-top navbar-hidden";

  const handleOffcanvasToggle = () => {
    setOffcanvasOpen(prevState => !prevState);
    setDisableScroll(true);
  }

  const handleOffcanvasClose = () => {
    setOffcanvasOpen(false);
    setTimeout(() => {
      setDisableScroll(false);
    }, 200);
  };


  return (
    <div className="Navbar">
      <nav className={navbarClasses}>
        <div className="container-fluid">
          <a
            className="navbar-brand ms-4"
            style={{ fontFamily: "Dancing" }}
            href="/"
          >
            A.Thompson
          </a>
          <div className="div">
            
          </div>
          <button
            className="navbar-toggler me-4 "
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            onClick={handleOffcanvasToggle}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            style={{ backgroundColor: "#0B192E", width: "80%" }}
          >
            <div
              className="offcanvas-header"
              style={{ backgroundColor: "#0b192e" }}
            >
              <div className="container">
                <div className="row justify-content-end">
                  <button
                    type="button"
                    className="btn-close btn-close-white"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    onClick={handleOffcanvasClose}
                  ></button>
                </div>
                <div className="row text-center">
                  <div className="col">
                    <a href="/" style={{ textDecoration: "none" }}>
                      <h5
                        className="offcanvas-title"
                        style={{ color: "whitesmoke", fontFamily: "Dancing" }}
                        id="offcanvasNavbarLabel"
                      >
                        A.Thompson
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="offcanvas-body lead d-flex flex-column"
              style={{ backgroundColor: "#0b192e", fontFamily: "anak" }}
            >
              <ul className="navbar-nav justify-content-center text-center flex-grow-1">
                <li className="nav-item">
                  <Link
                    className="nav-link mb-2"
                    data-bs-dismiss="offcanvas"
                    aria-current="false"
                    href="/"
                    to="root"
                    spy={true}
                    smooth={false}
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    to="About"
                    spy={true}
                    smooth={false}
                    className="nav-link mb-2"
                    href="About"
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    to="skills"
                    spy={true}
                    smooth={false}
                    className="nav-link mb-2"
                    href="Skills"
                  >
                    Skills
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                    to="projects"
                    spy={true}
                    smooth={false}
                    className="nav-link mb-2"
                    href="Projects"
                  >
                    Projects
                  </Link>
                </li>
              </ul>
              <br />
              <div className="container text-center">
                <div className="container-fluid" id="offcanvasIcons">
                  <a
                    href="https://github.com/AlexanderThompson64"
                    className="bi bi-github me-4"
                    id="footer-github"
                    style={{ color: "whitesmoke" }}
                  ></a>
                  <a
                    href="https://www.linkedin.com/in/alexander-thompson-095a171b7/"
                    className="bi bi-linkedin me-4"
                    id="footer-linkedin"
                    style={{ color: "whitesmoke" }}
                  ></a>
                  <a
                    href="https://www.instagram.com/lexilex64/"
                    className="bi bi-instagram me-4"
                    id="footer-instagram"
                    style={{ color: "whitesmoke" }}
                  ></a>
                  <a
                    href="https://twitter.com/theATdeveloper"
                    className="bi bi-twitter"
                    id="footer-twitter"
                    style={{ color: "whitesmoke" }}
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
