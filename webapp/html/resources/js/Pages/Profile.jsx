import IsFollow from '@/Content/IsFollow'
import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Profile(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    const BackImg = styled.div`
        width: 100%;
        height: 75vh;

        img{
            width: 100%;
            height: 100%;
        }
    `

    const ProfileDiv = styled.div`
        position: relative;
        width: 100%;
        height: 14vh;
    `

    const Icon = styled.div`
        width: 110px;
        height: 110px;
        background-color: #ccc;
        border-radius: 50%;
        position: absolute;
        top: -50px;
        left: 8vh;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    `

    const NameDiv = styled.div`
        position: absolute;
        top: 50%;
        left: 16vw;
        transform: translateY(-50%);
        font-size: 1.2rem;
        font-weight: 600;
    `

    const FollowDiv = styled.div`
        position: absolute;
        top: 50%;
        right: 13vw;
        transform: translateY(-50%);
        font-size: 0.8rem;
        font-weight: 600;
    `

    // プロフィールデータ
    const [data,setData] = useState()

    // 現在のURL
    const locationUrl = location.href

    // プロフィールIDを取得
    const profileId = locationUrl.split("/")[4]

    // ログインユーザID
    const userId = props.auth.user.id

    useEffect(() => {
        axios
            .get(`http://localhost/api/profile/${profileId}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div style={{width: "100%"}}>
            <Header />
            <SideHeader
                userId={userId}
            />
            <Common>
                <BackImg>
                    <img src="https://pbs.twimg.com/media/FcM8hRhaMAA2zxi.jpg:large" alt="" />
                </BackImg>
                <ProfileDiv>
                    <Icon>
                        <img src="https://assets.nakamap.com/img/grp/03f0f08fae69e50930377d8b10ad3be90f48f403_raw.jpg" alt="" />
                    </Icon>
                    <NameDiv>
                        { data?.name }
                    </NameDiv>
                    <FollowDiv>
                        <IsFollow
                            userId={userId}
                            profileId={profileId}
                        />
                    </FollowDiv>
                </ProfileDiv>
            </Common>
        </div>
    )
}

export default Profile
