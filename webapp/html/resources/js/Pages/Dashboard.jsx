import React, { useEffect, useState } from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/inertia-react';
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';
import Post from '@/Post/Post';
import axios from 'axios';
import IsLike from '@/Content/IsLike';
import PersonIcon from '@mui/icons-material/Person';
import More from '@/Content/More';

export default function Dashboard(props) {

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

    const MoreItem = styled.div`
        position: absolute;
        right: 26px;
        top: -2px;
        letter-spacing: 1.6px;
        font-size: 1.6rem;

        &:hover{
            cursor: pointer;
        }
    `

    const Icon = styled.div`
        width: 50px;
        height 50px;
        border-radius: 50%;
        margin: 0 50px 0 0;
        position: relative;
        border: 1px solid #ccc;

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
        bottom: 12px;

        &:hover{
            cursor: pointer;
        }
    `

    const [data,setData] = useState()

    // ログインユーザID
    const userId = props.auth.user.id

    useEffect(() => {
        axios
            .get(`api/post/${userId}/index`)
            // .get("https://illustration-site.herokuapp.com/api/post/index")
            .then((res) => {
                setData(res.data)
                console.log(res.data)
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
                <CommonDiv>
                    { data?.map((item,index) =>
                        <CommonItem key={index}>
                            <a href={`http://localhost/profile/${item.user.id}`}>
                                <Icon>
                                    { item.user.icon_path == null ?
                                        <PersonIcon
                                            style={{
                                                color: "#ccc",
                                                position: "absolute",
                                                top: "50%",
                                                left: "50%",
                                                transform: "translate(-50%,-50%)",
                                                fontSize: "34px",
                                        }}
                                    />
                                        :
                                        <img src={`data:image/png;base64,${item.user.icon_path}`} alt="" style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: "50%",
                                        }} />
                                    }
                                </Icon>
                            </a>
                            <div>
                                <CommonName>
                                    { item.user.name }
                                </CommonName>
                                <div>
                                    { item.message }
                                </div>
                            </div>
                            <Like>
                                <IsLike
                                    userId={userId}
                                    postId={item.id}
                                    postUserId={item.user_id}
                                />
                            </Like>
                            <MoreItem>
                                <More
                                    ItemIndex={index}
                                    userInfo={props.auth.user}
                                    postInfo={item}
                                />
                            </MoreItem>
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
