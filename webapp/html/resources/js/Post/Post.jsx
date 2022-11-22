import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

function Post(props) {

    const Post = styled.div`
        position: fixed;
        bottom: 7vh;
        right: 7vw;
    `

    const [message,setMessage] = useState()
    const [image,setImage] = useState()

    // ログインユーザID
    const userId = props.userId

    const PostClick = () => {

        const data = new FormData()

        // data.append("message",)
        // data.append("image",)
        data.append("user_id",userId)

        axios
            .post("http://localhost/api/post/store",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <Post>
            <div onClick={PostClick}>
                投稿
            </div>
        </Post>
    )
}

export default Post
