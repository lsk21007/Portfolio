import React from "react"

const Skill = ({ SkillRef }) => {
  const Progress = ({ done, title }) => {
    return (
      <div className='progress'>
        <div
          className='progress-done'
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    )
  }

  const data = [
    {
      title: "Every Day is a New Challenge",
      para: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id autem veritatis nobis inventore consectetur omnis porro iusto excepturi, quo voluptate quos vel, quasi officia fugiat.",
      para1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos illo qui quibusdam perspiciatis soluta cumque quia asperiores sapiente! Veniam odit veritatis mollitia eos similique impedit beatae iusto.",
    },
  ]
  return (
    <>
      <section ref={SkillRef} className='skill'>
        <div className='container'>
          <div className='heading'>
            <h3> WHY CHOOSE ME</h3>
            <h1 style={{ fontSize: '40px' }}>Some Of My Skills</h1>
          </div>

          <div className='content flex'>
            <div className='left topMarign'>
              <Progress done='90' title='REACT' />
              <Progress done='85' title='HTML&CSS' />
              <Progress done='90' title='JAVASCRIPT' />
              <Progress done='75' title='TYPESCRIPT' />
              <Progress done='70' title='NODEJS' />
            </div>
            <div className='right mtop'>
              {data.map((val, index) => {
                return (
                  <div key={index}>
                    <h1>{val.title}</h1>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <button className='primary-btn'>Download CV</button>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Skill
