import React from "react";

const Skill = ({ SkillRef }) => {
  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    );
  };

  const data = [
    {
      title: "All skills",
      para: "Frameworks/Libraries: ReactJs, Vue, Redux, MUI, Bootstrap, Ant, Express",
      para2:
        "Languages: Javascript, Typescript, HTML, CSS, SCSS, NodeJs, PHP, Python",
      para3:
        "Databases: NoSQL (MongoDB), SQL",
      para4:
        "Others: GitHub, Git, REST API, JSON ",
      para5:
        "Other skills: Photography, Magic tricks, Tennis, Scuba diving, Cooking.",
    },
  ];
  return (
    <>
      <section ref={SkillRef} className="skill">
        <div className="container">
          <div className="heading">
            <h3> WHY CHOOSE ME</h3>
            <h1 style={{ fontSize: "40px" }}>Some Of My Skills</h1>
          </div>

          <div className="content flex">
            <div className="left topMarign">
              <Progress done="90" title="REACT" />
              <Progress done="85" title="HTML&CSS" />
              <Progress done="90" title="JAVASCRIPT" />
              <Progress done="75" title="TYPESCRIPT" />
              <Progress done="80" title="REDUX" />
            </div>
            <div className="right mtop">
              {data.map((val, index) => {
                return (
                  <div key={index}>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <p>{val.para2}</p>
                    <p>{val.para3}</p>
                    <p>{val.para4}</p>
                    <a href="https://github.com/lsk21007/Portfolio/raw/main/Resume.pdf">
                      <button className="primary-btn">Download CV</button>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
