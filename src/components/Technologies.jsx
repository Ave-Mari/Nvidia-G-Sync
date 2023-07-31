import React from 'react';

const technologiesData = [
    {
        img: '',
        headline: '',
        description: ''
    },
    {
        img: '',
        headline: '',
        description: ''
    },
    {
        img: '',
        headline: '',
        description: ''
    }
]

export default function Technologies() {
  return (
    <section>
        <ul>
            {technologiesData.map((item) => {
                return (
                    <li>
                        <img src={item.img} alt={item.headline} />
                        <h2>{item.headline}</h2>
                        <p>{item.description}</p>
                    </li>
                )
            })}
        </ul>
        <button>КУПИТЬ</button>
    </section>
  )
}
