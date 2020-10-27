import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle } from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
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
  const [socialInput, setSocialInput] = useState([]);

  const [socialEmails, setSocialEmails] = useState([]);

  const socialButtons = [
    { value: "facebook", icon: faFacebook },
    { value: "twitter", icon: faTwitter },
    { value: "youtube", icon: faYoutube },
    { value: "linkedIn", icon: faLinkedin },
  ];

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

  const handleAddSocialInput = (e, buttonValue) => {
    e.preventDefault();
    // socialInput.find((currentValue, i, arr) => {
    //   console.log();
    // });
    // console.log(buttonValue);
    if (buttonValue === "facebook") {
      // socialInput.find()
      socialInput.push({
        socialName: "Facebook",
        name: "facebook",
        placeHolder: "Your Facebook",
      });
    } else if (buttonValue === "twitter") {
      socialInput.push({
        socialName: "Twitter",
        name: "twitter",
        placeHolder: "Your Twitter",
      });
    } else if (buttonValue === "youtube") {
      socialInput.push({
        socialName: "Youtube",
        name: "youtube",
        placeHolder: "Your Youtube",
      });
    } else if (buttonValue === "linkedIn") {
      socialInput.push({
        socialName: "LinkedIn",
        name: "linkedIn",
        placeHolder: "Your LinkedIn",
      });
    }
    setSocialInput([...socialInput]);
  };

  const onHandleChange = (e, i) => {
    console.log(e.target.name);
    let value = e.target.value;

    if (e.target.name === "facebook") {
      socialEmails[i] = { social: value, icon: faFacebook, name: "Facebook" };
      setSocialEmails([...socialEmails]);
    } else if (e.target.name === "twitter") {
      socialEmails[i] = { social: value, icon: faTwitter, name: "Twitter" };
      setSocialEmails([...socialEmails]);
    } else if (e.target.name === "youtube") {
      socialEmails[i] = { social: value, icon: faYoutube, name: "Youtube" };
      setSocialEmails([...socialEmails]);
    } else if (e.target.name === "linkedIn") {
      socialEmails[i] = { social: value, icon: faLinkedin, name: "LinkedIn" };
      setSocialEmails([...socialEmails]);
    }

    // setSocialEmails({ [e.target.name]: e.target.value });
    // else if ((i = 1)) setTwitter(value);
    // else if ((i = 2)) setYoutube(value);
    // else if ((i = 3)) setLinkedIn(value);
    // console.log(socialEmails);
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
            <div className="social">
              <div className="form-group">
                <input
                  className="btn btn-primary"
                  type="button"
                  value="+"
                  onClick={handleAddInputFields}
                />
              </div>

              <ul className="social">
                {socialButtons.map((button, i) => {
                  console.log(button);
                  let buttonValue = button.value;
                  return (
                    <li key={i}>
                      <button
                        className="social-icon"
                        // value="facebook"
                        // disabled={isDisable}
                        onClick={e => handleAddSocialInput(e, buttonValue)}
                      >
                        <FontAwesomeIcon
                          icon={button.icon}
                          size="1x"
                          className="icons"
                        />
                      </button>
                    </li>
                  );
                })}
                {/* <li>
                  <button
                    className="social-icon"
                    value="twitter"
                    // disabled={setIsDisable(true)}
                    onClick={handleTwitterInput}
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="1x"
                      className="icons"
                    />
                  </button>
                      <div className="user-data">{email}</div>
                </li>
                <li>
                  <button
                    className="social-icon"
                    value="youtube"
                    onClick={handleYoutubeInput}
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="1x"
                      className="icons"
                    />
                  </button>
                  <div className="user-data">{email}</div>
                </li>
                <li>
                  <button
                    className="social-icon"
                    value="linkedIn"
                    onClick={handleLinkedInInput}
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="1x"
                      className="icons"
                    />
                  </button>
                  <div className="user-data">{email}</div>
                </li> */}
              </ul>
            </div>
            <div className="form-fields social-input">
              {socialInput.map((input, i) => {
                if (i <= 3) {
                  return (
                    <div className="form-group social-content" key={i}>
                      <label htmlFor="social" className="text-color">
                        {input.socialName}
                      </label>
                      <input
                        type="email"
                        name={input.name}
                        className="form-control"
                        placeholder={input.placeHolder}
                        onChange={e => onHandleChange(e, i)}
                      />
                      {/* <div className="form-group">
                        <input
                          className="btn btn-primary"
                          type="button"
                          value="Add"
                          // onClick={handleAddSocialEmail}
                        />
                      </div> */}
                    </div>
                  );
                } else {
                  return null;
                }
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
                        icon={faGoogle}
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
                  {socialEmails.map((email, i) => {
                    console.log(email);
                    return (
                      <li key={i}>
                        <div className="icon">
                          <FontAwesomeIcon
                            icon={email.icon}
                            size="1x"
                            className="icons"
                          />
                        </div>
                        <div className="user-data">
                          <p className="semi_bold">{email.name}</p>
                          <p>{email.social}</p>
                        </div>
                      </li>
                    );
                  })}
                  {/* <li>
                    <div className="icon">
                      <FontAwesomeIcon
                        icon={faTwitter}
                        size="1x"
                        className="icons"
                      />
                    </div>
                    <div className="user-data">
                      <p className="semi_bold">Twitter</p>
                      <p>{socialEmails?.twitter}</p>
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
                  </li> */}
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
