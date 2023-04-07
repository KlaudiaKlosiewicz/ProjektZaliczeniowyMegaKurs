import React from 'react';
import Header from '../Header/Header';
import Layout from '../Layout/Layout';
import styled from 'styled-components';
import graphic from '../landing_img.svg';
import {Link} from 'react-router-dom';


const HeroTitle = styled.h1`

`
const Footer = styled.footer`

`
const LandingGraphic = styled.img`
`
const LandingDescription = styled.p`

`
const ToAppButton = styled(Link)`

`
const LandingComponent = () => {
    return (
        <Layout>
            <Header></Header>
            <HeroTitle className={"heroTitle"}>Sprawdź pogodę w swoim mieście !</HeroTitle>
            <LandingDescription className={"description"}>Fajnie, że jesteś na Naszej stronie! Jeśli chcesz sprawdzić
                aktualną pogodę, wciśnij przycisk poniżej. Miłego i (oby😉) słonecznego dnia!</LandingDescription>
            <LandingGraphic className={"graphic"} src={graphic}/>
            <ToAppButton className={"appBtn"} to='/client'>Przejdź do aplikacji</ToAppButton>
            <Footer className={"footer"}><p className={"text"}>Made with ❤ by Klaudia K.</p></Footer>
        </Layout>
    )
}

export default LandingComponent;
