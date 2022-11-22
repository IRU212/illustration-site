import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

function Post(props) {

    const Post = styled.div`
        position: fixed;
        bottom: 7vh;
        right: 7vw;
    `

    const ModalMainDiv = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: #000;
        opacity: 0.6;
    `

    const ModalSubDiv = styled.div`
        width: 600px;
        position: absolute;
        background-color: #fff;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    `

    const [message,setMessage] = useState()
    const [image,setImage] = useState()

    const [modalDisplay,setModalDisplay] = useState(false)

    // ログインユーザID
    const userId = props.userId

    const MessageChnage = (e) => {
        setMessage(e.target.value)
    }

    const PostClick = () => {

        const data = new FormData()

        data.append("message",message)
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

    // modalの表示 true:false
    const ModalClick = () => {
        setModalDisplay(!modalDisplay)
    }

    const modalDisplayClick = (e) => {
        if (e.currentTarget == e.target) {
            setModalDisplay(!modalDisplay)
        }
    }

    return (
        <Post>
            { modalDisplay == true ?
                <ModalMainDiv onClick={
                    (e) => modalDisplayClick(e)
                }>
                    <ModalSubDiv>
                        <div>
                            <div>message</div>
                            <div>
                                <input type="text" value={message} onChange={MessageChnage} />
                            </div>
                        </div>
                        <div onClick={PostClick}>
                            投稿
                        </div>
                    </ModalSubDiv>
                </ModalMainDiv>
                :
                ""
            }
            <div onClick={ModalClick}>
                ＋
            </div>
        </Post>
    )
}

export default Post
