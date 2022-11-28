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
                Data
            </Common>
        </div>
    )
}

export default Data
