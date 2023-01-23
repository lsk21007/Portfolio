import React from "react";

const Experiences = ({ ExperiencesRef }) => {
  const data = [
    {
      title1: "05-2022/ present - Web Deveoper \n Goopter eCommerce Solutions",
      phrase1:
        "• Maintain 4 applications, including the business admin system, business management desktop app, sales management web, and web with React, Typescript, and Redux. \n • Create new features including doordash delivery service, third-party delivery service setting, etc., and enhance existing data by using dynamic coding logic to make code clean and reusable. \n • Develop website design based on the specific layouts, components, animations, and colors from mock-ups.\n• Collaborate closely with UX designers, product managers, and backend developers to build user-friendly web experiences.\n• Test existing features, diagnose bugs and discover corner cases to ensure the applications work well.\n• Verify pull requests from other developers and gave feedback on any potential improvements.\n• Work on agile development teams.",
      title2: "08-2020/ 05-2021 - Junior Front-End Developer \n IFENG (Auto channel)",
      desc2:
        "• Corporated with other team members in maintaining websites, including new features development, debugging, and code testing from the ticket system by using React and JavaScript.\n • Created new features for the Year-end promotion campaign to collect target audiences’ information.\n • Developed 12 mobile web application’s UI pages according to the UI designer’s mock-up.\n• Provide support to clients for instruction, technical issues, or feature requests.\n• Test processes and test specs for projects.\n• Building reusable code for future use.",
    },
  ];
  return (
    <>
      <section
        ref={ExperiencesRef}
        className="about"
        style={{ marginBottom: "20px" }}
      >
        <div className="container">
          {data.map((value, index) => {
            return (
              <span key={index} className="flex">
                <div className="mtop left">
                  <div className="heading">
                    <h3>About Me</h3>
                    <h1 style={{ whiteSpace: "pre-line" }}>{value.title1}</h1>
                  </div>
                  <p style={{ whiteSpace: "pre-line" }}>{value.phrase1}</p>
                </div>
                <div className="mtop right">
                  <div className="heading">
                    <h3>&nbsp;</h3>
                  </div>
                  <div className="heading">
                    <h1 style={{ whiteSpace: "pre-line" }}>{value.title2}</h1>
                  </div>
                  <p style={{ whiteSpace: "pre-line" }}>{value.desc2}</p>
                </div>
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Experiences;
