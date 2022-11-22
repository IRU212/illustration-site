import React from 'react'
import styled from 'styled-components'

function SideHeader() {

    const SideHeader = styled.div`
        width: 240px;
        height: calc(100vh - 55px);
        position: fixed;
        top: 55px;
        left: 0;
        border-right: 1px solid #ccc;
    `

    return (
        <SideHeader>
            SideHeader
        </SideHeader>
    )
}

export default SideHeader
