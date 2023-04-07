import React from 'react';
import styled from 'styled-components';
import toMain from "../ToMainComponent/toMain";
import {Route} from "react-router-dom";


const QueryArea = styled.div`
  grid-column: 5/9;
  grid-row: 4;
  display: flex;
  justify-content: center;
  align-items: center;

  & input {
    width: 80%;
    height: 100%;
    border: none;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 2px solid rgba(172, 33, 197, 0.96);
    padding: 10px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    font-size: 1.5em;
    color: rgba(172, 33, 197, 0.96);
    border-right: none;
    font-weight: 700;
  }

  & button {
    width: 20%;
    height: 100%;
    border: none;
    border: 1px solid rgba(172, 33, 197, 0.96);
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    color: #dbdfe4;
    font-weight: 700;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);
    background-color: rgba(172, 33, 197, 0.96);
    transition-duration: 0.5s;
  }

  & button:hover {
    color: rgba(35, 32, 32, 0.8);
    background-color: white;
    cursor: pointer;

  }

  //responsywność pola wpisywania i przycisku//

  @media screen and (max-width: 1024px) {
    & button {
      border: none;
      font-weight: 600;
      font-size: 1.1em;
    }
  }


  @media screen and (max-width: 768px) {
    & input {
      width: 100vh;
      height: 100%;
      border: none;
      margin-inside: 30px;
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      border: 2px solid rgba(172, 33, 197, 0.96);
      padding-left: 10px;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);
      //box-sizing: border-box;
      font-size: 1.5em;
      color: rgba(172, 33, 197, 0.96);
      border-right: none;
      font-weight: 700;
    }

    & button {
      width: 40vh;
      height: 100%;
      border: none;
      border: 1px solid rgba(172, 33, 197, 0.96);
      border-top-right-radius: 10px;
      border-bottom-right-radius: 10px;
      color: #dbdfe4;
      font-weight: 700;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.4);
      background-color: rgba(172, 33, 197, 0.96);
      transition-duration: 0.5s;
    }

    & button:hover {
      color: rgba(35, 32, 32, 0.8);
      background-color: white;
      cursor: pointer;

    }
  }
`
const QueryField = (props: any) => {

    return (
        <QueryArea>
            <input onChange={(e) => props.inputChangeEventListener(e.target.value)} placeholder="Podaj miasto"/>
            <button onClick={props.buttonEventListener}>Sprawdź pogodę</button>
            <Route path="/" component={toMain}/>
        </QueryArea>
    )
}

export default QueryField;