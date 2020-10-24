import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import { userSkills } from "../../store/actions/resumeDetailsActions";
// import { store } from "../../store/store";
import "./developerResume.css";

const DeveloperResume = () => {
  const [fName, setFName] = useState();
  const [desig, setDesig] = useState();
  const [address, setAddress] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [github, setGithub] = useState();

  const [inputList, setInputList] = useState([]);
  const [socials, setSocials] = useState([]);

  // useEffect(() => {
  //   store.subscribe(() => {
  //     const { userSkills } = store.getState().resumeDetails;
  //     console.log(userSkills);
  //   });
  // });

  const handleAddInputFields = () => {
    inputList.push({ skillName: "", skillPer: "" });
    setInputList([...inputList]);
  };

  const handleRemoveFields = () => {
    inputList.splice(0, 1);
    setInputList([...inputList]);
  };

  const handleAddSocialFields = () => {
    socials.push({
      faIcon: ["faFacebook", "faTwitter", "faYoutube", "faLinkedin"],
      socialName: "",
      socialEmail: "",
    });
    setSocials([...socials]);
  };

  return (
    <>
      {/* RESUME CONTAINER */}
      <div className="resume-container">
        {/* USER DATA FORM */}
        <div className="user-data-form">
          <form>
            <h3>User Data</h3>
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="fullName" className="text-color">
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullName"
                  className="form-control"
                  placeholder="Enter Full Name"
                  onChange={e => setFName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="designation" className="text-color">
                  Enter Your Designation
                </label>
                <input
                  type="text"
                  name="designation"
                  className="form-control"
                  placeholder="Enter Your Designation"
                  onChange={e => setDesig(e.target.value)}
                />
              </div>
            </div>
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="address" className="text-color">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  className="form-control"
                  placeholder="Enter Your Address"
                  onChange={e => setAddress(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNo" className="text-color">
                  Phone No.
                </label>
                <input
                  type="text"
                  name="phoneNo"
                  className="form-control"
                  placeholder="Enter Your Phone No."
                  onChange={e => setPhoneNo(e.target.value)}
                />
              </div>
            </div>
            <div className="form-fields">
              <div className="form-group">
                <label htmlFor="email" className="text-color">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter Your Email"
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="github" className="text-color">
                  Github
                </label>
                <input
                  type="text"
                  name="github"
                  className="form-control"
                  placeholder="Enter Your Github"
                  onChange={e => setGithub(e.target.value)}
                />
              </div>
            </div>

            <div className="form-fields input-class">
              {inputList.map((skills, i) => {
                // console.log(skills, "skills console");
                return (
                  <div key={i} className="random-skills">
                    <div className="form-group">
                      <label htmlFor="skillName" className="text-color">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        name="skillName"
                        // value={inputList[i].skillName}
                        className="form-control"
                        placeholder="Enter Your Skill Name"
                        onChange={e => {
                          inputList[i].skillName = e.target.value;
                        }}
                      />
                    </div>
                    <div className="form-group skillPer">
                      <label htmlFor="skillPer" className="text-color">
                        Skill Percentage
                      </label>
                      <input
                        type="text"
                        name="skillPer"
                        // value={inputList[i].skillPer}
                        className="form-control"
                        placeholder="Eg: 40%"
                        onChange={e => (inputList[i].skillPer = e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="btn btn-primary"
                        type="button"
                        value="x"
                        style={{ marginTop: "30px" }}
                        onClick={handleRemoveFields}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <h4 style={{ color: "white" }}>Add Skills</h4>
            <div className="form-group">
              <input
                className="btn btn-primary"
                type="button"
                value="+"
                onClick={handleAddInputFields}
              />
              <input
                className="btn btn-primary"
                type="button"
                value="Add Social"
                style={{ marginLeft: "20px" }}
                onClick={handleAddSocialFields}
              />
            </div>

            <div className="form-fields socials-input">
              {socials.map((social, i) => {
                console.log(social.faIcon[i]);
                return (
                  <div className="form-group random-socials" key={i}>
                    <ul>
                      <li>
                        <div className="icon">
                          <FontAwesomeIcon
                            // icon={social.faIcon[i]}
                            size="1x"
                            className="icons"
                          />
                        </div>
                      </li>
                    </ul>
                    <div className="form-group">
                      <input
                        type="text"
                        name="social"
                        // value={inputList[i].skillName}
                        className="form-control"
                        placeholder="Enter Your Social Account"
                        // onChange={e => {
                        //   inputList[i].skillName = e.target.value;
                        // }}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="btn btn-primary"
                        type="button"
                        value="Add"
                        style={{ marginLeft: "10px" }}
                        // onClick={handleAddSocialFields}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="btn btn-primary remove-field"
                        type="button"
                        value="x"
                        style={{ marginLeft: "10px" }}
                        // onClick={handleRemoveFields}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="form-fields">
              <div>
                <button className="btn btn-primary btn-block">Next</button>
              </div>
            </div>
          </form>
        </div>

        {/* RESUME DIV */}

        <div className="resume">
          <div className="resume-left">
            <div className="resume_profile">
              <img src="user-img.png" alt="" width="100%" height="100%" />
            </div>
            <div className="resume_content">
              <div className="resume_item resume_info">
                <div className="title">
                  <p className="bold">{fName}</p>
                  <p className="regular">{desig}</p>
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
                    <div className="user-data">{address}</div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faMobileAlt}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">{phoneNo}</div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">{email}</div>
                  </li>
                  <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">{github}</div>
                  </li>
                </ul>
              </div>
              <div className="resume_item resume_skills">
                <div className="title">
                  <p className="bold">skill's</p>
                </div>
                <ul>
                  {inputList?.map((skill, i) => {
                    // console.log(skill);
                    if (
                      inputList[i].skillName !== "" &&
                      inputList[i].skillPer !== ""
                    ) {
                      return (
                        <li key={i}>
                          <div className="skill_name">{skill.skillName}</div>
                          <div className="skill_progress">
                            <span style={{ width: skill.skillPer }}></span>
                          </div>
                          <div className="skill_per">{skill.skillPer}</div>
                        </li>
                      );
                    }
                    return null;
                  })}
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
