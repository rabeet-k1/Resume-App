import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

// import { userSkills } from "../../store/actions/resumeDetailsActions";
// import { store } from "../../store/store";
import "./developerResume.css";
import firebase from "../../Config/firebaseConfig";

const DeveloperResume = () => {
  const [fName, setFName] = useState();
  const [desig, setDesig] = useState();
  const [address, setAddress] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [email, setEmail] = useState();
  const [github, setGithub] = useState();

  const [userImage, setUserImage] = useState({ image: null, url: "" });

  const [inputList, setInputList] = useState([]);
  const [socialInput, setSocialInput] = useState([]);
  const [userSkills, setUserSkills] = useState([]);

  const [fbDisable, setFbDisable] = useState(true);
  const [twDisable, setTwDisable] = useState(true);
  const [youtubeDisable, setYoutubeDisable] = useState(true);
  const [linkedInDisable, setLinkedInDisable] = useState(true);

  const [socialEmails, setSocialEmails] = useState([]);
  const [summary, setSummary] = useState();

  const [experienceList, setExperienceList] = useState([]);
  const [workExp, setWorkExp] = useState([]);

  const [educationInput, setEducationInput] = useState([]);
  const [education, setEducation] = useState([]);

  const socialButtons = [
    { id: 1, value: "facebook", icon: faFacebook },
    { id: 2, value: "twitter", icon: faTwitter },
    { id: 3, value: "youtube", icon: faYoutube },
    { id: 4, value: "linkedIn", icon: faLinkedin },
  ];

  // useEffect(() => {
  //   store.subscribe(() => {
  //     const { userSkills } = store.getState().resumeDetails;
  //     console.log(userSkills);
  //   });
  // });

  const handleAddInputFields = () => {
    inputList.push({});
    setInputList([...inputList]);
  };

  const handleAddSkills = i => {
    if (userSkills.length === i) {
      let skillName = inputList[i].skillName;
      let skillPer = inputList[i].skillPer;
      userSkills.push({ skillName, skillPer });
      setUserSkills([...userSkills]);
    }
  };

  const handleRemoveFields = i => {
    // console.log(inputList);
    inputList.splice(i, 1);
    userSkills.splice(i, 1);
    setUserSkills([...userSkills]);
    setInputList([...inputList]);
  };

  const handleAddSocialInput = (e, buttonValue) => {
    e.preventDefault();
    if (fbDisable && buttonValue === "facebook") {
      socialInput.push({
        socialName: "Facebook",
        name: "facebook",
        placeHolder: "Your Facebook",
      });
      setFbDisable(false);
    } else if (twDisable && buttonValue === "twitter") {
      socialInput.push({
        socialName: "Twitter",
        name: "twitter",
        placeHolder: "Your Twitter",
      });
      setTwDisable(false);
    } else if (youtubeDisable && buttonValue === "youtube") {
      socialInput.push({
        socialName: "Youtube",
        name: "youtube",
        placeHolder: "Your Youtube",
      });
      setYoutubeDisable(false);
    } else if (linkedInDisable && buttonValue === "linkedIn") {
      socialInput.push({
        socialName: "LinkedIn",
        name: "linkedIn",
        placeHolder: "Your LinkedIn",
      });
      setLinkedInDisable(false);
    }
    setSocialInput([...socialInput]);
  };

  const onHandleChange = (e, i) => {
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
  };

  const handleAddExperienceInput = e => {
    experienceList.push({});
    setExperienceList([...experienceList]);
  };

  const handleAddWorkExp = i => {
    if (workExp.length === i) {
      let expDate = experienceList[i].date;
      let workOrg = experienceList[i].org;
      let workPosition = experienceList[i].position;
      workExp.push({ expDate, workOrg, workPosition });
      setWorkExp([...workExp]);
      console.log(workExp);
    }
  };

  const handleAddEducationInput = e => {
    educationInput.push({});
    setEducationInput([...educationInput]);
  };

  const handleAddEducation = i => {
    if (education.length === i) {
      let eduDate = educationInput[i].date;
      let faculty = educationInput[i].faculty;
      let eduInstitute = educationInput[i].institute;
      education.push({ eduDate, faculty, eduInstitute });
      setEducation([...education]);
      console.log(education);
    }
  };

  const handleImageUpload = e => {
    // console.log(e.target.files[0]);
    const image = e.target.files[0];
    if (image) {
      setUserImage({ image });
    }
  };

  const handleUpload = e => {
    e.preventDefault();
    // console.log(userImage.image.name);
    const { image } = userImage;
    console.log(image.name);
    const uploadTask = firebase
      .storage()
      .ref(`images/${image.name}`)
      .put(image);
    console.log(uploadTask);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        firebase
          .storage()
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // console.log(url);
            setUserImage({ url });
          });
      }
    );
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
                return (
                  <div key={i} className="random-skills">
                    <div className="form-group">
                      <label htmlFor="skillName" className="text-color">
                        Skill Name
                      </label>
                      <input
                        type="text"
                        name="skillName"
                        value={inputList[i].skillName}
                        className="form-control"
                        placeholder="Enter Your Skill Name"
                        onChange={e => {
                          inputList[i][e.target.name] = e.target.value;
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
                        value={inputList[i].skillPer}
                        className="form-control"
                        placeholder="Eg: 40%"
                        onChange={e =>
                          (inputList[i][e.target.name] = e.target.value)
                        }
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="btn btn-primary"
                        type="button"
                        value="Add"
                        style={{ marginTop: "30px" }}
                        onClick={e => handleAddSkills(i)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        className="btn btn-primary"
                        type="button"
                        value="x"
                        style={{ marginTop: "30px" }}
                        onClick={e => handleRemoveFields(i)}
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
                  let buttonValue = button.value;
                  return (
                    <li key={i}>
                      <button
                        className="social-icon"
                        // value="facebook"
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
              </ul>
              <div className="form-group">
                <input
                  type="file"
                  className="image"
                  name="image"
                  style={{ color: "white" }}
                  onChange={e => handleImageUpload(e)}
                />
                <button
                  className="btn btn-primary"
                  onClick={e => handleUpload(e)}
                >
                  Upload
                </button>
              </div>
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
                    </div>
                  );
                } else return null;
              })}
            </div>
            <div className="summary-container">
              <div className="form-group">
                <label htmlFor="social" className="text-color">
                  Your Summary
                </label>
                <textarea
                  defaultValue=""
                  className="form-control"
                  name="summary"
                  placeholder="Write about your self"
                  onChange={e => setSummary(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group">
              <input
                className="btn btn-primary"
                type="button"
                value="Add Exp"
                style={{ marginTop: "30px" }}
                onClick={e => handleAddExperienceInput(e)}
              />
            </div>

            {experienceList.map((expInput, i) => {
              return (
                <div className="work-experience" key={i}>
                  <div className="form-group">
                    <label htmlFor="social" className="text-color">
                      From - To
                    </label>
                    <input
                      type="text"
                      name="date"
                      // value = {[e.tar]}
                      className="form-control"
                      placeholder="Eg: 2002 - 2005"
                      onChange={e => {
                        experienceList[i][e.target.name] = e.target.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="social" className="text-color">
                      Organization
                    </label>
                    <input
                      type="text"
                      name="org"
                      className="form-control"
                      placeholder="Eg: Xyz Company"
                      onChange={e => {
                        experienceList[i][e.target.name] = e.target.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="social" className="text-color">
                      Position & Description
                    </label>
                    <input
                      type="text"
                      name="position"
                      className="form-control"
                      placeholder="Eg: worked as a senior full stack Developer"
                      onChange={e => {
                        experienceList[i][e.target.name] = e.target.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="Add"
                      style={{ marginTop: "30px" }}
                      onClick={e => handleAddWorkExp(i)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="x"
                      style={{ marginTop: "30px" }}
                      // onClick={e => handleAddExperienceInput(e)}
                    />
                  </div>
                </div>
              );
            })}

            <div className="form-group">
              <input
                className="btn btn-primary"
                type="button"
                value="Add Education"
                style={{ marginTop: "30px" }}
                onClick={e => handleAddEducationInput(e)}
              />
            </div>

            {educationInput.map((eduInput, i) => {
              return (
                <div className="education" key={i}>
                  <div className="form-group">
                    <label htmlFor="date" className="text-color">
                      From - To
                    </label>
                    <input
                      type="text"
                      name="date"
                      // value = {[e.tar]}
                      className="form-control"
                      placeholder="Eg: 2002 - 2005"
                      onChange={e => {
                        educationInput[i][e.target.name] = e.target.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="faculty" className="text-color">
                      Faculty
                    </label>
                    <input
                      type="text"
                      name="faculty"
                      className="form-control"
                      placeholder="Eg: Xyz Faculty"
                      onChange={e => {
                        educationInput[i][e.target.name] = e.target.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="institute" className="text-color">
                      School/College/Uni
                    </label>
                    <input
                      type="text"
                      name="institute"
                      className="form-control"
                      placeholder="Eg: Xyx School/College/Uni"
                      onChange={e => {
                        educationInput[i][e.target.name] = e.target.value;
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="Add"
                      style={{ marginTop: "30px" }}
                      onClick={e => handleAddEducation(i)}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="btn btn-primary"
                      type="button"
                      value="x"
                      style={{ marginTop: "30px" }}
                      // onClick={e => handleAddExperienceInput(e)}
                    />
                  </div>
                </div>
              );
            })}

            <div className="form-fields">
              <div>
                <button className="btn btn-primary btn-block">Next</button>
              </div>
            </div>
          </form>
        </div>

        {/* RESUME DIV */}
        <div className="resume">
          {/* {console.log(userImage)} */}
          <div className="resume-left">
            <div className="resume_profile">
              <img
                // src="user-img.png"
                src={userImage.url}
                alt="User Image"
                width="250px"
                height="250px"
              />
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
                  {userSkills?.map((skill, i) => {
                    return (
                      <li key={i}>
                        <div className="skill_name">{skill.skillName}</div>
                        <div className="skill_progress">
                          <span style={{ width: skill.skillPer }}></span>
                        </div>
                        <div className="skill_per">{skill.skillPer}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="resume_item resume_social">
                <div className="title">
                  <p className="bold">social</p>
                </div>
                <ul>
                  {socialEmails.map((email, i) => {
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
                </ul>
              </div>
            </div>
          </div>
          <div className="resume_right">
            <div className="resume_item resume_about">
              <div className="title">
                <p className="bold">Summary</p>
              </div>
              <div>
                <textarea
                  className="summary"
                  cols="58"
                  rows="6"
                  readOnly
                  // wrap="hard"
                  defaultValue={summary}
                />
                {/* <p className="summary-content">{summary}</p> */}
              </div>
            </div>
            <div className="resume_item resume_work">
              <div className="title">
                <p className="bold">Work Experience</p>
              </div>
              <ul>
                {workExp.map((exp, i) => {
                  console.log(exp);
                  return (
                    <li key={i}>
                      <div className="date">{exp.expDate}</div>
                      <div className="info">
                        <p className="working_content">{exp.workOrg}</p>
                        <p>{exp.workPosition}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="resume_item resume_education">
              <div className="title">
                <p className="bold">Education</p>
              </div>
              <ul>
                {education.map((eduFields, i) => {
                  console.log(eduFields);
                  return (
                    <li key={i}>
                      <div className="date">{eduFields.eduDate}</div>
                      <div className="info">
                        <p className="working_content">{eduFields.faculty}</p>
                        <p>{eduFields.eduInstitute}</p>
                      </div>
                    </li>
                  );
                })}
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
