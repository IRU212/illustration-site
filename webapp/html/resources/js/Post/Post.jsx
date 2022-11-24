import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'
import AddCircleIcon from '@mui/icons-material/AddCircle';

function Post(props) {

    const PostButton = styled.div`
        cursor: pointer;
    `

    const PostSaveButton = styled.div`
        cursor: pointer;
        padding: 6px 16px;
        margin: 40px 0 8px 0;
        border-radius: 6px;
        color: #fff;
        background-color: #000;
        font-size: 0.8rem;
        width: fit-content;
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
            .post("api/post/store",data)
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
        <div style={{
            position: "fixed",
            bottom: "7vh",
            right: "7vw",
        }}>
            { modalDisplay == true ?
                <div
                    style={{
                        position: "fixed",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100vh",
                        background:"rgba(0,0,0,0.5)",
                    }}
                    onClick={
                        (e) => modalDisplayClick(e)
                }>
                    <div style={{
                        width: "600px",
                        position: "absolute",
                        backgroundColor: "#fff",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%,-50%)",
                        opacity: "1",
                        padding: "30px 50px",
                        zIndex: "999",
                        borderRadius: "10px"
                    }}>
                        <div>
                            <div style={{
                                margin: "10px 0 20px 0"
                             }}>
                                message
                            </div>
                            <div>
                                <input type="text" value={message} onChange={MessageChnage} />
                            </div>
                        </div>
                        <PostSaveButton onClick={PostClick}>
                            投稿
                        </PostSaveButton>
                    </div>
                </div>
                :
                ""
            }
            <PostButton onClick={ModalClick}>
                <AddCircleIcon
                    style={{ fontSize: "3.2rem" }}
                />
            </PostButton>
        </div>
    )
}

export default Post
