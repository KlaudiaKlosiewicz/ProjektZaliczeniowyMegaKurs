import React from 'react';
import styled , { keyframes } from 'styled-components';
const CardAnim = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;

  }
`

const Card = styled.div`
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  grid-row: 7/14;
  grid-column: 5/9;
  background-color: #ffffff;
  border: 2px solid rgba(172, 33, 197, 0.96);
  border-radius: 10px;
    //animation: ${CardAnim} 1s linear;
  position: relative;
  color: rgba(172, 33, 197, 0.96);
  animation: slide-in-top 0.7s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

  @keyframes slide-in-top {
    0% {
      transform: translateY(-1000px);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }

  & h3 {
    position: absolute;
    font-weight: 800;
    top: 50px;
    font-size: 3.8em;
  }

  & p {
    font-size: 2.8em;
    text-align: left;
    line-height: 1.5;
  }


  //*responsywoność karty z pogodą//


  @media screen and (max-width: 1024px) {
    justify-content: center;
    grid-row: 6/12;
    grid-column: 3/11;

    & h3 {
      position: absolute;
      text-align: center;
      font-weight: 700;
      top: 20px;
      font-size: 3em;
    }

    & p {
      font-size: 2.3em;
      text-align: center;
      line-height: 1;
      margin-top: 7px;
      padding-left: 20px;
      padding-right: 20px;
    }
  }

  @media screen and (max-width: 768px) {
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row: 7/14;
    grid-column: 3/11;
    background-color: #ffffff;
    border: 2px solid rgba(172, 33, 197, 0.96);
    border-radius: 10px;
    animation: ${CardAnim} 1s linear;
    position: relative;
    color: rgba(172, 33, 197, 0.96);

    & h3 {
      position: absolute;
      text-align: center;
      font-weight: 700;
      top: 50px;
      font-size: 3em;
    }

    & p {
      font-size: 2.8em;
      text-align: center;
      line-height: 1.5;
      margin-top: 10px;
      padding-left: 20px;
      padding-right: 20px;
    }

  }

  @media screen and (max-width: 412px) {
    font-family: Roboto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    grid-row: 6/13;
    grid-column: 3/11;
    background-color: #ffffff;
    border: 2px solid rgba(172, 33, 197, 0.96);
    border-radius: 10px;
    animation: ${CardAnim} 1s linear;
    position: relative;
    color: rgba(172, 33, 197, 0.96);

    & h3 {
      position: absolute;
      text-align: center;
      font-weight: 700;
      top: 50px;
      font-size: 2.4em;
    }

    & p {
      font-size: 2em;
      text-align: center;
      line-height: 1.5;
      margin-top: 10px;
      padding-left: 20px;
      padding-right: 20px;
    }

  }
}
`






const DisplayWeatherCard = (props:any) => {
    
    return(
            <Card>
                <h3>Pogoda dla {props.cityName}</h3>
                <p>Temperatura: {Math.floor((props.data.temp))}°C</p>
                <p>{props.data.description}</p>
                <p>Ciśnienie: {props.data.pressure} hPa</p>
                <p>Wilgotność: {props.data.humidity}%</p>
                <p>Prędkość wiatru: {Math.floor((props.data.wind))} m/s</p>
            </Card>
    )

}




export default DisplayWeatherCard;