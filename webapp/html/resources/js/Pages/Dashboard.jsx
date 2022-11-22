import React from 'react';
// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/inertia-react';
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';
import Post from '@/Post/Post';

export default function Dashboard(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: auto;
    `

    // ログインユーザID
    const userId = props.auth.user.id

    return (
        <div>
            <Header />
            <SideHeader />
            <Common>
                <div>
                    aaa
                </div>
            </Common>
            <Post
                userId={userId}
            />
        </div>
    );
}
