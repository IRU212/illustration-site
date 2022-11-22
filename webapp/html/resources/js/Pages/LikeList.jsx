import React, { useEffect, useState } from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/inertia-react';
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';
import Post from '@/Post/Post';
import axios from 'axios';
import IsLike from '@/Content/IsLike';

export default function LikeList(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    const CommonDiv = styled.div`
        width: 100%;
        position: relative;
    `

    const CommonItem = styled.div`
        width: 100%;
        position: relative;
        border-bottom: 1px solid #ccc;
        padding: 19px 38px;
        display: flex;
    `

    const Icon = styled.div`
        width: 50px;
        height 50px;
        border-radius: 50%;
        margin: 0 50px 0 0;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    `

    const CommonName = styled.div`
        font-size: 0.8rem;
        font-weight: 700;
    `

    const Like = styled.div`
        position: absolute;
        right: 26px;
        top: 18px;

        &:hover{
            cursor: pointer;
        }
    `

    const [user,setUser] = useState()
    const [data,setData] = useState()

    // ログインユーザID
    const userId = props.auth.user.id

    useEffect(() => {
        axios
            .get("http://localhost/api/like/list/1/index")
            .then((res) => {
                setUser(res.data?.user)
                setData(res.data?.posts)
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
                <CommonDiv>
                    { data?.map((item,index) =>
                        <CommonItem key={index}>
                            <Icon>
                                <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210419/2021041914484954170.png" alt="" />
                            </Icon>
                            <div>
                                <CommonName>
                                    { user.name }
                                </CommonName>
                                <div>
                                    { item.message }
                                </div>
                            </div>
                            <Like>
                                <IsLike
                                    userId={userId}
                                    postId={item.id}
                                />
                            </Like>
                        </CommonItem>
                    ) }
                </CommonDiv>
            </Common>
            <Post
                userId={userId}
            />
        </div>
    );
}
