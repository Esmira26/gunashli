import React from 'react'

function SebetMehsul({c}) {
    return (
        <>
        <div className="sebet11">
            <img src={`https://localhost:7039/img/${c.sebetImg}`} alt={c.sebetImg}/>
            <h2>{c.sebetPlace}</h2>
            <h2>{c.sebetFiled}</h2>
            <h3>{c.sebetRoom}</h3>
            <p>{c.sebetPrice}</p>
        </div>
        <hr/>
        </>
      )
}

export default SebetMehsul