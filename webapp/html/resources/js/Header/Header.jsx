import React from 'react'
import styled from 'styled-components'

function Header() {

    const Header = styled.div`
        width: 100%;
        height: 55px;
        background-color: rgb(136, 249, 255);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
    `

    return (
        <Header>
            Header
        </Header>
    )
}

export default Header
