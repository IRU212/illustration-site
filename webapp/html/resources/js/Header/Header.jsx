import React from 'react'
import styled from 'styled-components'

function Header() {

    const Header = styled.div`
        width: 100%;
        height: 55px;
        background-color: #111;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        color: #fff;
    `

    const Home = styled.div`
        background-color: #111;
        position: absolute;
        top: 50%;
        left: 6vw;
        transform: translateY(-50%);
    `

    return (
        <Header>
            <Home>
                <a href="https://illustration-site.herokuapp.com/dashboard">
                    Home
                </a>
            </Home>
        </Header>
    )
}

export default Header
