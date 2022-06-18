import { useState } from "react"

export default function CardItem({card}) {
    const [isSelect, handleIsSelect] = useState(false)

    const handleSelect = () => {
        handleIsSelect(!isSelect)
    }

    return (
        <div>
            <div 
                onClick={() => handleSelect()}
                className={`card ${card.disabled ? 'disabled' : ''} ${isSelect ? 'selected' : ''}`}
            >
                <div className="card-header">
                    <div className="card-header__corner"></div>
                    <div className="card-header__reactangle">
                        <span className='default'>
                            Сказочное заморское яство
                        </span>
                        
                        <span className='is-selected'>
                            Котэ не одобряет?
                        </span>
                        
                    </div>
                </div>
                <div className="card-body">
                    <img className='card-body__image' src='funbox_logo.png'/>
                    <div className='card-body__heading'>
                        <h1>Нямушка</h1>
                        <h3>
                            {card.heading}
                        </h3>
                    </div>
                    <ul className='card-body__options'>
                        <li className='card-body__options_item'>
                            {card.portions} порций
                        </li>
                        <li className='card-body__options_item'>
                            {card.gifts === 1 ? 'мышь в подарок' : `${card.gifts} мыши в подарок`}
                        </li>
                    </ul>
                    <div className="card-body__circle">
                        <h4>
                            {card.wight}
                        </h4>
                        <h6>
                            кг
                        </h6>
                    </div>
                
                </div>
            </div>
            <h4 className='card-poster'>
                {
                    card.disabled
                    ? (
                        <div className='empty'>
                            Печалька, {card.heading} закончился.
                        </div>
                    )
                    :  isSelect 
                    ?   (
                        <div>
                            {card.description}
                        </div>
                    )
                    : (
                        <div>
                            Чего сидишь? Порадуй котэ, 
                            <span 
                                onClick={() => handleSelect()}
                                className='card-buy'
                            >
                                купи
                            </span>.
                        </div>
                    )
                }
                
                
            </h4>
        </div>
        
    )
}