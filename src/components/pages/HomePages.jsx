import React from "react"
import Home from "../home/Home"
import Education from "../home/Education"
import Experiences from "../home/Experiences"
import Introduction from "../home/Introduction"
import Skill from "../home/Skill"
import Data from "../home/Data"
import Project from "../home/Project/Project"

const HomePages = ({ homeRef, IntroductionRef, ExperiencesRef, SkillRef, EducationRef, ProjectRef }) => {
  return (
    <>
      <Home homeRef={homeRef} />
      <Introduction IntroductionRef={IntroductionRef} />
      <Experiences ExperiencesRef={ExperiencesRef} />
      <Data />
      <Skill SkillRef={SkillRef} />
      <Education EducationRef={EducationRef} />
      <Project ProjectRef={ProjectRef} />
    </>
  )
}

export default HomePages
