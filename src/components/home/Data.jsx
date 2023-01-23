import React from "react"

const Data = () => {
  const data = [
    {
      num: "4",
      text: "Number of applications maintained",
    },
    {
      num: "150+",
      text: "Number of fixed bugs",
    },
    {
      num: "10+",
      text: "Number of new features",
    },
    {
      num: "200+",
      text: "Number of tested cases",
    }
  ]
  return (
    <>
      <section className='Branding wrapperOne'>
        <div style={{ display: "flex", justifyContent: 'center' }}>
          <h2 style={{ fontSize: '40px', marginBottom: '20px',color:'black' }}>Contribution to Company</h2>
        </div>
        <div className='container grid1'>
          {data.map((value, index) => {
            return (
              <div key={index} className='box'>
                <h1>{value.num}</h1>
                <p>{value.text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Data
