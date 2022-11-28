import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import React from 'react'
import styled from 'styled-components';

function Data(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    const Graph = styled.div`
        width: 90%;
        height: 75vh;
        background-color: #ccc;
        position: absolute;
        top: -20%;
        left: 50%;
        transform: translate(-50%,-50%);
    `

    // ログインユーザID
    const userId = props.auth.user.id

    return (
        <div>
            <Header
                userInfo={props.auth.user}
            />
            <SideHeader
                userId={userId}
            />
            <Common>
                <Graph>
                    aaaa
                </Graph>
            </Common>
        </div>
    )
}

export default Data
