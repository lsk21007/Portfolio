import React, { useRef } from "react"
import "./App.css"
import { BrowserRouter as HashRouter, Switch, Route } from "react-router-dom"
import Footer from "./components/home/Footer"
import Header from "./components/home/header/Header"
import HomePages from "./components/pages/HomePages"

const App = () => {

  const homeRef = useRef()
  const IntroductionRef = useRef()
  const ExperiencesRef = useRef()
  const SkillRef = useRef()
  const EducationRef = useRef()
  const ProjectRef = useRef()

  const handleHome = () => {
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const handleIntroduction = () => {
    IntroductionRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const handleExperiences = () => {
    ExperiencesRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const handleSkill = () => {
    SkillRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const handleEducation = () => {
    EducationRef.current.scrollIntoView({ behavior: "smooth" });
  }
  const handleProject = () => {
    ProjectRef.current.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <HashRouter>
        <Header handleHome={handleHome} handleIntroduction={handleIntroduction} handleExperiences={handleExperiences} handleSkill={handleSkill} handleEducation={handleEducation} handleProject={handleProject} />
        <Switch>
          <Route path='/' ><HomePages homeRef={homeRef} IntroductionRef={IntroductionRef} ExperiencesRef={ExperiencesRef} SkillRef={SkillRef} EducationRef={EducationRef} ProjectRef={ProjectRef} /></Route>
        </Switch>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App
