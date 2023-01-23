import React from "react";

const Introduction = ({ IntroductionRef }) => {
  const data = [
    {
      title: "Self Introduction",
      heading:
        "A programmer that doesn't perform magic tricks can't be a good photographer",
      desc: "Not only am I a big fan of programming, but I’m also an energetic learner and life explorer with 16 years of magic trick experience and 10 years of photography experience. I enjoy giving surprises to my friends and spreading happiness at work. Traveling, cooking, and playing tennis are my favorites in my spare time.",
    },
  ];
  return (
    <>
      <section ref={IntroductionRef} className="Branding wrapper">
        <div className="container">
          {data.map((value, index) => {
            return (
              <div key={index} className="box">
                <h3>{value.title}</h3>
                <h2 style={{ fontSize: "25px" }}>{value.heading}</h2>
                <p>{value.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Introduction;
