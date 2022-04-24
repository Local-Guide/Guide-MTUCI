import React from 'react'
import './Map.css'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Map() {
    return (
        <div className='Map'>
            <svg>		
                <Popup className='transition' trigger={<polygon className='change' data-id="1" points="19,69 65,69 65,352 19,352"> </polygon>} position="left center">
                    <div>3а</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="2" points="94,152 267,152 267,207 233,207 233,352 94,352"> </polygon>} position="top center">
                    <div>Комната 3</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="3" points="241,215 378,215 378,352 241,352"> </polygon>} position="bottom center">
                    <div>Комната 2</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="4" points="385,208 503,208 503,352 385,352"> </polygon>} position="bottom center">
                    <div>Комната 4</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="5" points="275,152 394,152 394,108 418,108 418,82 477,82 477,196 378,196 378,207 275,207"> </polygon>} position="top center">
                    <div>Комната 7</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="6" points="394,82 417,82 417,107 394,107"> </polygon>} position="top center">
                    <div>Подвал</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="7" points="270,95 309,95 309,140 270,140"> </polygon>} position="top center">
                    <div>Туалет</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="8" points="318,86 375,86 375,140 318,140"> </polygon>} position="top center">
                    <div>Ванная комната</div>
                </Popup>
                <Popup className='transition' trigger={<polygon className='change' data-id="9" points="489,82 674,82 674,352 511,352 511,196 489,196"> </polygon>} position="right center">
                    <div>Комната 1</div>
                </Popup>
            </svg>
            <div className="text-inside">
                <div className="text__items">
                    <div className="text__item za">
                        3а
                    </div>
                    <div className="text__item third">
                        3
                    </div>
                    <div className="text__item second">
                        2
                    </div>
                    <div className="text__item fourth">
                        4
                    </div>
                    <div className="text__item fifth">
                        5
                    </div>
                    <div className="text__item sixth">
                        6
                    </div>
                    <div className="text__item seveth-a">
                        7a
                    </div>
                    <div className="text__item seveth">
                        7
                    </div>
                    <div className="text__item first">
                        1
                    </div>
                </div>
            </div>
        </div>
    )
}
