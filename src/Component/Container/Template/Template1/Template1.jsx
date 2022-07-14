import React from "react";
import "./Template1.css";
import Pdf from "react-to-pdf";

const ref = React.createRef();

const Template1 = ({ data }) => {
  console.log(data.personal);
  const {
    firstName,
    lastName,
    jobTitle,
    city,
    country,
    phoneNumber,
    emailAddress,
  } = data?.personal;
  return (
    <>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <div className="l-Wrapper">
          <div className="l-Header">
            <div className="l-Header-col">
              <h1 className="Title">
                <span className="u-shadow">
                  {firstName}
                  {lastName}
                </span>
                <br />
                <span className="Title-sub">{jobTitle}</span>
              </h1>
            </div>
            <div className="l-Header-col Contact">
              <div>
                {city},{country}
              </div>
              <div>
                <a
                  className="u-link"
                  href="http://sonjastrieder.com/"
                  target="_blank"
                >
                  {phoneNumber}
                </a>
              </div>
              <div>
                <a
                  className="u-link"
                  href="mailto:sonja.strieder@gmail.com"
                  target="_blank"
                >
                  {emailAddress}
                </a>
              </div>
            </div>
          </div>

          <section className="l-Section">
            <h2 className="l-Section-title h3 u-hidden@sm-down">Summary</h2>
            <div className="l-Section-content">
              <p>{data.personal.summry}</p>
            </div>
          </section>

          <section className="l-Section">
            <h2 className="Section-title h3">Skills</h2>
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
              </a>
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
                  </a>
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
export default Template1;
