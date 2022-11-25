import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

function Notification(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    const Title = styled.div`
        text-align: center;
        margin: 70px 0;
        font-size: 1.4rem;
        font-weight: 600;
    `

    const List = styled.div`
        text-align: center;
        position: relative;
        border-top: 1px solid #ccc;
        width: 500px;
        margin: 10px auto;
    `

    const Item = styled.div`
        text-align: center;
        border-bottom: 1px solid #ccc;
        width: 500px;
        margin: 0 auto;
        padding: 20px 40px;
    `

    // ログインユーザID
    const userId = props.auth.user.id

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get(`api/notification/${userId}/index`)
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
                <Title>
                    お知らせ
                </Title>
                <List>
                    { data?.map((item,index) =>
                        <Item key={index}>
                            { item.message }
                        </Item>
                    ) }
                </List>
            </Common>
        </div>
    )
}

export default Notification
