import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';

function SideHeader() {

    const SideHeader = styled.div`
        width: 240px;
        height: calc(100vh - 55px);
        position: fixed;
        top: 55px;
        left: 0;
        border-right: 1px solid #ccc;
    `

    const SideDiv = styled.div`
        display: flex;
        margin: 40px 0;
    `

    return (
        <SideHeader>
            <SideDiv>
                <div>
                    <HomeIcon />
                </div>
                <div>
                    Home
                </div>
            </SideDiv>
        </SideHeader>
    )
}

export default SideHeader
