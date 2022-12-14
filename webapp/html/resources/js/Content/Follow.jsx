import axios from 'axios'
import React from 'react'
import styled from 'styled-components'

function Follow(props) {

    const FollowButton = styled.div`
        border: 1px solid #000;
        padding: 5px 16px;
        border-radius: 16px;

        &:hover{
            cursor: pointer;
        }
    `

    // ログインユーザId
    const userId = props.userId

    // フォローするユーザId
    const profileId = props.profileId

    const FollowClick = () => {

        const data = new FormData
        data.append("user_id",userId)
        data.append("following",profileId)

        axios
            .post("https://illustration-site.herokuapp.com/api/follow/store",data)
            .then(() => {
                // location.reload()
            })
            .catch((err) => {
                console.log(err)
            })

        data.append("destination",profileId) // 送信先ユーザID
        data.append("notification_type_id",0) //フォロータイプ

        // フォローメッセージ送信
        axios
            .post("https://illustration-site.herokuapp.com/api/notification/store",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })

    }

    return (
        <FollowButton onClick={FollowClick}>
            Follow
        </FollowButton>
    )
}

export default Follow
