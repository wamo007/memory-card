import { useState } from 'react';
import Toyota from '../public/toyota.jpg';
import BMW from '../public/bmw.jpg';
import Mercedes from '../public/mercedes.jpg';
import Audi from '../public/audi.jpg';
import Volvo from '../public/volvo.jpg';
import Chevrolet from '../public/chevrolet.jpg';
import Ford from '../public/ford.jpg';
import Lexus from '../public/lexus.jpg';
import Hyundai from '../public/hyundai.jpg';
import Kia from '../public/kia.jpg';
import Dodge from '../public/dodge.jpg';
import Jeep from '../public/jeep.jpg';
import './Cards.css';

const initialCards = [
  { image: Toyota, name: 'Toyota', pressed: 0 },
  { image: BMW, name: 'BMW', pressed: 0 },
  { image: Mercedes, name: 'Mercedes', pressed: 0 },
  { image: Audi, name: 'Audi', pressed: 0 },
  { image: Volvo, name: 'Volvo', pressed: 0 },
  { image: Chevrolet, name: 'Chevrolet', pressed: 0 },
  { image: Ford, name: 'Ford', pressed: 0 },
  { image: Lexus, name: 'Lexus', pressed: 0 },
  { image: Hyundai, name: 'Hyundai', pressed: 0 },
  { image: Kia, name: 'Kia', pressed: 0 },
  { image: Dodge, name: 'Dodge', pressed: 0 },
  { image: Jeep, name: 'Jeep', pressed: 0 },
]

function Cards() {

  const [cards, setCards] = useState(initialCards);
  const [score, setScore] = useState({ win: 0, loss: 0 });

  const shuffleFunc = (array) =>{
    let shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i+1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  }

  const handleScore = ( array ) => {
    for (let any of array) {
      if (any.pressed > 1) {
        alert('you lost');
        for (let any of array) {
          any.pressed = 0;
        }
        const newScore = { ...score, loss: score.loss + 1 };
        setScore(newScore);
      } else if (array.every(car => car.pressed == 1)) {
        alert('you won');
        for (let any of array) {
          any.pressed = 0;
        }
        const newScore = { ...score, win: score.win + 1 };
        setScore(newScore);
      }
    }
  }

  const handleCardPress = (i) => {
    const updatedCards = cards.map((car, index) => {
      if (i === index) {
        return { ...car, pressed: car.pressed + 1 };
      }
      return car;
    });
    handleScore(updatedCards);
    setCards(shuffleFunc(updatedCards));
  }


  
  return (
    <>
      <label className='scores'>
        <div>{score.win} : {score.loss}</div>
        Won : Lost
      </label>
      <div className='card'>
        {cards.map((car, index) => (
          <button key={index} onClick={() => handleCardPress(index)}>
            <img src={car.image} alt="" width={300} height={225} />
            <div>{car.name}</div>
            {/* <div>{car.pressed}</div> */}
          </button>
        ))}
      </div>
    </>
  )
  
}


export { Cards };