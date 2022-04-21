import React from "react";
import "./Template2.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();
const Template2 = () => {
  return (
    <>
      <Pdf
        targetRef={ref}
        filename="code-example.pdf"
        x={0.5}
        y={0.5}
        scale={0.8}
      >
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <div className="l-Wrapper">
          <div className="l-Header">
            <div className="l-Header-col">
              <h1 className="Title">
                <span className="u-shadow">Sonja Strieder</span>
                <br />
                <span className="Title-sub">Front-end UI developer</span>
              </h1>
            </div>
            <div className="l-Header-col Contact">
              <div>Seattle, WA</div>
              <div>
                <a
                  className="u-link"
                  href="http://sonjastrieder.com/"
                  target="_blank"
                >
                  76767676666
                </a>
              </div>
              <div>
                <a
                  className="u-link"
                  href="mailto:sonja.strieder@gmail.com"
                  target="_blank"
                >
                  sonja.strieder@gmail.com
                </a>
              </div>
            </div>
          </div>

          <section className="l-Section">
            <h2 className="l-Section-title h3 u-hidden@sm-down">Summary</h2>
            <div className="l-Section-content">
              <p>
                I specialize in component based HTML/CSS architecture, with a
                focus on maintainability and scalability, a mobile first
                approach.I specialize in component based HTML/CSS architecture,
                with a focus on maintainability and scalability, a mobile first
                approach. specialize in component based HTML/CSS architecture,
                with a focus on maintainability and scalability, a mobile first
                approach.
              </p>
            </div>
          </section>

          <section className="l-Section">
            <h2 className="l-Section-title h3">Skills</h2>
            <div className="l-Section-content">
              <ul>
                <li>Highly skilled in creating performance</li>
                <li>Passionate CSS Preprocessors</li>
                <li>Skilled in creating Style Guide</li>
                <li>Experienced with Templating Languages JavaScript</li>
              </ul>
            </div>
          </section>

          <section className="l-Section">
            <h2 className="l-Section-title h3">Experience</h2>
            <div className="l-Section-content">
              <h3>Front-end Developer</h3>
              <a
                className="u-link"
                href="https://www.snaptechnology.co.uk/"
                target="_blank"
              >
                Snap Fashion, London
              </a>{" "}
              (UK) May 2014 - Jul 2016
              <ul>
                <li>
                  Re-architected CSS/HTML codebase of the responsive Snap
                  Fashion website for better maintainability and performance.
                </li>
                <li>
                  Introduced Grunt, Bower and npm to automate common tasks,
                  optimize frontend assets and manage third party packages.
                </li>
                <li>
                  Created and maintained a style guide to use as a reference for
                  our design language.
                </li>
                <li>
                  Delivered front-end work for various external and internal
                  projects to the backend team.
                </li>
              </ul>
              <h3>Web Design & Interface Specialist</h3>
              <a
                className="u-link"
                href="http://www.johnhenry.net/"
                target="_blank"
              >
                JohnHenry, London
              </a>{" "}
              (UK) Jun 2010 - May 2014
              <ul>
                <li>
                  Working within a team of 16+ I’ve established myself as a
                  front-end developer with a strong focus on web standards,
                  semantics, accessibility and progressive enhancement
                  (HTML/CSS).
                </li>
                <li>
                  Designed and/or built Wordpress themes as well as Shopify
                  themes from scratch or customized them depending on the
                  client’s needs.
                </li>
                <li>
                  Headed the design team and designed simple and clean user
                  interfaces.
                </li>
              </ul>
              <section className="l-Section">
                <h2 className="l-Section-title h3">Education</h2>
                <div className="l-Section-content">
                  <h3>BSc, Media-technology and -design</h3>
                  <a
                    className="u-link"
                    href="https://www.fh-ooe.at/en/hagenberg-campus/"
                    target="_blank"
                  >
                    University of Applied Sciences Campus Hagenberg
                  </a>{" "}
                  (AUT) 2006 - 2009
                  <p>
                    A full-time degree programme that provides the technical
                    expertise as well as the design and communication skills in
                    areas including web (backend and frontend development),
                    multimedia, 3D modelling, animation, audio & video
                    production.
                  </p>
                </div>
              </section>
              <section className="l-Section u-hidden@print">
                <h2 className="l-Section-title h3">Interests</h2>
                <div className="l-Section-content">
                  <p>
                    User Experience, Accessibility, Web Standards,
                    Automatization, Technology, Simplicity, Snowboarding,
                    Bouldering, Coffee, Food, Art, Music, Movies, Traveling,
                    Cabins, Plants, Goats, Chickens
                  </p>
                </div>
              </section>
            </div>
          </section>

          <div className="l-Wrapper u-keyline">
            <div className="l-Footer">
              <div className="l-Footer-col">
                <strong className="Tag">S. Strieder</strong>
              </div>
              <div className="l-Footer-col Contact">
                <a href="http://sonjastrieder.com" target="_blank">
                  sonjastrieder.com
                </a>
                <a href="mailto:sonja.strieder@gmail.com" target="_blank">
                  sonja.strieder@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Template2;
