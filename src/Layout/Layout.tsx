import React from 'react';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Pacifico|Roboto&display=swap');
  width: 100vw;
  max-width: 100%;
  font-size: 10px;
  height: auto;
  min-height: 100vh;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: 5vh;
  grid-gap: 20px;
  //background-image: linear-gradient(to right, rgba(217, 114, 234, 0.96), #d5d569);
  background-image: url('https://cdn.pixabay.com/photo/2022/08/19/21/50/clouds-7397802_960_720.jpg'), url("https://cdn.pixabay.com/photo/2019/03/28/10/19/sunset-4086848_960_720.jpg");
  background-size: cover;

}


@media screen and (max-width: 412px) {
  //background-image: linear-gradient(to right, rgba(213, 213, 105, 0.84), rgba(203, 103, 222, 0.84));
  background-image: url("https://cdn.pixabay.com/photo/2019/03/28/10/19/sunset-4086848_960_720.jpg");
}


`
const Layout = (props: any) => {

    return (
        <LayoutContainer>
            {props.children}
        </LayoutContainer>
    )

}

export default Layout;