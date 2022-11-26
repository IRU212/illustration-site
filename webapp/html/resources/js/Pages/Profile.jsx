import IsFollow from '@/Content/IsFollow'
import ProfileMore from '@/Content/ProfileMore'
import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SettingsIcon from '@mui/icons-material/Settings';
import Count from './Profile/Count'
import PersonIcon from '@mui/icons-material/Person';

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

    const CountDiv = styled.div`
        position: absolute;
        top: 50%;
        left: 25vw;
        transform: translateY(-50%);
        font-size: 1.1rem;
        font-weight: 600;
    `

    const MoreStyle = styled.div`
        position: absolute;
        top: 50%;
        right: 7vw;
        transform: translateY(-50%);
        font-size: 1.3rem;
        font-weight: 600;
        display: flex;
        letter-spacing: 0rem;
        paddding: 16px;

        &:hover{
            cursor: pointer;
        }
    `

    // プロフィールデータ
    const [data,setData] = useState()

    // 現在のURL
    const locationUrl = location.href

    // プロフィールIDを取得
    const profileId = locationUrl.split("/")[4]

    // ログインユーザID
    const userId = props.auth.user.id

    // ログインユーザ背景画像base64取得
    const userBack = props.auth.user.back_path

    // ログインユーザアイコンbase64取得
    const userIcon = props.auth.user.icon_path

    useEffect(() => {
        axios
            .get(`../api/profile/${profileId}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div style={{width: "100%"}}>
            <Header
                userInfo={props.auth.user}
            />
            <SideHeader
                userId={userId}
            />
            <Common>
                <BackImg>
                    { userBack == null ?
                        <div style={{
                            width: "100%",
                            height: "100%",
                            backgroundColor: "#ccc",
                            position: "relative"
                        }}>
                        </div>
                        :
                        <img src={`data:image/png;base64,${userBack}`} alt="aaaa" style={{
                            width: "100%",
                            height: "100%",
                        }} />
                    }
                </BackImg>
                <ProfileDiv>
                    <Icon>
                        { userIcon == null ?
                            <div style={{
                                width: "100%",
                                height: "100%",
                                border: "1px solid #ccc",
                                borderRadius: "50%",
                                backgroundColor: "#fff"
                            }}>
                                <PersonIcon
                                    style={{
                                        color: "#ccc",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        fontSize: "6.5rem"
                                    }}
                                />
                            </div>
                            :
                            <img src={`data:image/png;base64,${userIcon}`} alt="aaaa" style={{
                                width: "100%",
                                height: "100%",
                                borderRadius: "50%"
                            }} />
                        }
                    </Icon>
                    <NameDiv>
                        { data?.name }
                    </NameDiv>
                    <FollowDiv>
                        { userId == profileId ?
                            <a href="http://localhost/setting/profile">
                                <SettingsIcon />
                            </a>
                            :
                            <IsFollow
                                userId={userId}
                                profileId={profileId}
                            />
                        }
                    </FollowDiv>
                    <MoreStyle>
                        <ProfileMore />
                    </MoreStyle>
                    <CountDiv>
                        <Count
                            profileId={profileId}
                        />
                    </CountDiv>
                </ProfileDiv>
            </Common>
        </div>
    )
}

export default Profile
