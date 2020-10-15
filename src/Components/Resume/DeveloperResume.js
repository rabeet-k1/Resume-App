import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faWeebly } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import "./developerResume.css";

const DeveloperResume = () => {
  return (
    <>
      <div className="resume-container">
        <div className="resume">
          <div className="resume-left">
            <div className="resume_profile">
              <img src="user-img.png" alt="" width="100%" height="100%" />
            </div>
            <div className="resume_content">
              <div className="resume_item resume_info">
                <div className="title">
                  <p className="bold">Rabeet Khan</p>
                  <p className="regular">Developer</p>
                </div>
                <ul>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faMapSigns}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">Gulshan-e-Iqbal block 20</div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">+92-3140582591</div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">abcd@gmail.com</div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faWeebly}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">www.userweb.com</div>
                  </li>
                </ul>
              </div>
              <div className="resume_item resume_skills">
                <div className="title">
                  <p className="bold">skill's</p>
                </div>
                <ul>
                  <li>
                    <div className="skill_name">HTML</div>
                    <div className="skill_progress">
                      <span style={{ width: "80%" }}></span>
                    </div>
                    <div className="skill_per">80%</div>
                  </li>
                  <li>
                    <div className="skill_name">CSS</div>
                    <div className="skill_progress">
                      <span style={{ width: "70%" }}></span>
                    </div>
                    <div className="skill_per">70%</div>
                  </li>
                  <li>
                    <div className="skill_name">SASS</div>
                    <div className="skill_progress">
                      <span style={{ width: "90%" }}></span>
                    </div>
                    <div className="skill_per">90%</div>
                  </li>
                  <li>
                    <div className="skill_name">JS</div>
                    <div className="skill_progress">
                      <span style={{ width: "60%" }}></span>
                    </div>
                    <div className="skill_per">60%</div>
                  </li>
                  <li>
                    <div className="skill_name">JQUERY</div>
                    <div className="skill_progress">
                      <span style={{ width: "88%" }}></span>
                    </div>
                    <div className="skill_per">88%</div>
                  </li>
                </ul>
              </div>
              <div className="resume_item resume_social">
                <div className="title">
                  <p className="bold">social</p>
                </div>
                <ul>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faFacebook}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">
                      <p className="semi_bold">Facebook</p>
                      <p>rabeet@facebook.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">
                      <p className="semi_bold">Twitter</p>
                      <p>rabeet@twitter.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">
                      <p className="semi_bold">Youtube</p>
                      <p>rabeet@youtube.com</p>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">
                      <p className="semi_bold">Linkedin</p>
                      <p>rabeet@linkedin.com</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="resume_right">
            <div className="resume_item resume_about">
              <div className="title">
                <p className="bold">Summary</p>
              </div>
              <p>dfjaslkdf nuetlkeusnfgryulaueiandjsnklgjsdh</p>
            </div>
            <div className="resume_item resume_work">
              <div className="title">
                <p className="bold">Work Experience</p>
              </div>
              <ul>
                <li>
                  <div className="date">2013- 2015</div>
                  <div className="info">
                    <p className="working_content">
                      ksdjfhansdurbgalsdgjashdfkj
                    </p>
                    <p>losemgnrugklsadkjrmgk</p>
                  </div>
                </li>
                <li>
                  <div className="date">2016- 2018</div>
                  <div className="info">
                    <p className="working_content">
                      ksdjfhansdurbgalsdgjashdfkj
                    </p>
                    <p>losemgnrugklsadkjrmgk</p>
                  </div>
                </li>
                <li>
                  <div className="date">2019- Present</div>
                  <div className="info">
                    <p className="working_content">
                      ksdjfhansdurbgalsdgjashdfkj
                    </p>
                    <p>losemgnrugklsadkjrmgk</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                <li>
                  <div className="date">2010 - 2013</div>
                  <div className="info">
                    <p className="working_content">XYZ University</p>
                    <p>
                      losemgnrugklsadkjrmgkslkdjfhaslkfjsakfnksjadglhkn4ungn4nglkma
                    </p>
                  </div>
                </li>
                <li>
                  <div className="date">2000 - 2010</div>
                  <div className="info">
                    <p className="working_content">ABC School/College</p>
                    <p>
                      losemgnrugklsadkjrmgkslkdjfhaslkfjsakfnksjadglhkn4ungn4nglkma
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="resume_item resume_hobby">
              <div className="title">
                <p className="bold">Honour</p>
              </div>
              <ul>
                <li>
                  <div className="date">2000 - 2010</div>
                  <div className="info">
                    <p className="working_content">Hafiz-e-Quran</p>
                    <p>XYZ Masjid</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeveloperResume;
