import React from 'react';
//styles
import './Technologies.scss'
//images
import normal from './normal.svg'
import clock from './clock.svg'
import power from './power.svg'
import color from './color.svg'

const technologiesData = [
    {
        img: normal,
        headlineBold: 'HDR ',
        headline: 'DISPLAY',
        description: 'Получите более широкий и комфортный для восприятия диапазон цветовой гаммы, чем в обычных мониторах.'
    },
    {
        img: clock,
        headlineBold: 'INPUT ',
        headline: 'LAG',
        description: 'Мониторы с технологией G-SYNC обеспечивают минимальную задержку между нажатием клавиш и результатом на экране, что очень важно для геймеров.'
    },
    {
        img: power,
        headlineBold: 'HIGH REFRESH ',
        headline: 'RATE',
        description: 'NVIDIA тесно сотрудничает с производителями мониторов, чтобы вывести на рынок широкий спектр дисплеев с высокой частотой обновления экрана от 75 до 360 Гц.'
    },
    {
        img: color,
        headlineBold: 'WIDE COLOR ',
        headline: 'GAMUT',
        description: 'Современные мониторы G-SYNC ULTIMATE поддерживают цветовой охват DCI-P3, обеспечивая более реалистичную цветопередачу с плавными переходами.'
    }
]

export default function Technologies() {
  return (
    <section>
        <ul>
            {technologiesData.map((item) => {
                return (
                    <li>
                        <img src={item.img} alt={item.headlineBold + item.headline} />
                        <h2>
                            <b>{item.headlineBold}</b>
                            {item.headline}
                        </h2>
                        <p>{item.description}</p>
                    </li>
                )
            })}
        </ul>
        <button>КУПИТЬ</button>
    </section>
  )
}
