import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import React from 'react'
import styled from 'styled-components'
import { Link } from '@inertiajs/inertia-react';
import axios from 'axios';

function Setting(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
        padding: 30px 0 0 0;
    `

    const CommonDiv = styled.div`
        margin: 20px 0 20px 55px;
    `

    const TitleDiv = styled.div`
        margin: 20px 0 40px 55px;
        font-size: 1.6rem;
        font-weight: 600;
    `

    // ログインユーザID
    const userId = props.auth.user.id

    const DeleteClick = () => {
        axios
            .post("api/user/delete",{
                'user_id': userId
            })
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div style={{width: "100%"}}>
            <Header />
            <SideHeader
                userId={userId}
            />
            <Common>
                <TitleDiv>
                    アカウント設定
                </TitleDiv>
                <CommonDiv>
                    <a href="setting/profile">
                        プロフィール設定
                    </a>
                </CommonDiv>
                <CommonDiv>
                    <Link href={route('logout')}>
                        ログアウト
                    </Link>
                </CommonDiv>
                <CommonDiv onClick={DeleteClick}>
                    アカウント削除
                </CommonDiv>
            </Common>
        </div>
    )
}

export default Setting
