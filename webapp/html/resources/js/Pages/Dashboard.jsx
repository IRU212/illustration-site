import React, { useEffect, useState } from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/inertia-react';
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';
import Post from '@/Post/Post';
import axios from 'axios';

export default function Dashboard(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: auto;
    `

    const CommonDiv = styled.div`
        width; 100%;
        position: relative;
    `

    const CommonItem = styled.div`
        width; 100%;
        position: relative;
        border-bottom: 1px solid #ccc;
    `

    const [data,setData] = useState()

    // ログインユーザID
    const userId = props.auth.user.id

    useEffect(() => {
        axios
            .get("api/post/index")
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
            <SideHeader />
            <Common>
                <CommonDiv>
                    { data?.map((item,index) =>
                        <CommonItem key={index}>
                            { item.message }
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
