import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import React from 'react'
import styled from 'styled-components'
import { Link } from '@inertiajs/inertia-react';

function Setting(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    // ログインユーザID
    const userId = props.auth.user.id

    return (
        <div style={{width: "100%"}}>
            <Header />
            <SideHeader
                userId={userId}
            />
            <Common>
                <div>
                    <Link href={route('logout')}>
                        ログアウト
                    </Link>
                </div>
                <div>
                    <a href="">
                        アカウント削除
                    </a>
                </div>
            </Common>
        </div>
    )
}

export default Setting
