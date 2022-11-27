import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

function UnFollow(props) {

    const UnFollowButton = styled.div`
        padding: 5px 16px;
        border-radius: 16px;
        color: #fff;
        background-color: #000;

        &:hover{
            cursor: pointer;
        }
    `

    // ログインユーザId
    const userId = props.userId

    // フォローするユーザId
    const profileId = props.profileId

    const UnFollowClick = () => {
        const data = new FormData
        data.append("user_id",userId)
        data.append("following",profileId)

        axios
            .post("https://illustration-site.herokuapp.com/api/follow/destory",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <UnFollowButton onClick={UnFollowClick}>
            Following
        </UnFollowButton>
    )
}

export default UnFollow
