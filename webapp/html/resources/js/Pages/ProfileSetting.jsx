import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import axios from 'axios'
import React, { useState } from 'react'
import styled from 'styled-components'

function ProfileSetting(props) {

    const Title = styled.div`
        font-size: 1.3rem;
        margin: 75px auto 60px auto;
        font-weight: 600;
        text-align: center;
    `

    const SaveButton = styled.div`
        margin: 75px 0 60px 0;
    `

    const [name,setName] = useState()
    const [backImage,setBackImage] = useState()

    // ログインユーザID
    const userId = props.auth.user.id

    const NameChange = (e) => {
        setName(e.target.value)
    }

    const BackImageChange = (e) => {
        setBackImage(e.target.files[0])
        console.log(e.target.files[0])
    }

    const SaveClick = () => {

        const data = new FormData()

        data.append("name","name")
        // data.append("back_path",backImage)

        axios
            .post(`http://localhost/api/profile/20/update`,data,{
                'headers': {
                    'content-type': 'multipart/form-data',
                }
            })
            .then(() => {
                // location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    console.log(name)

    return (
        <div style={{width: "100%"}}>
            <Header />
            <SideHeader
                userId={userId}
            />
            <div style={{
                position: "absolute",
                top: "55px",
                left: "240px",
                width: "calc(100% - 240px)",
                padding: "0px 0 0 0",
            }}>
                <Title>
                    プロフィール設定
                </Title>
                <div style={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)"
                }}>
                    <div style={{
                        backgroundColor: "#ccc",
                        width: "550px",
                        height: "300px",
                    }}>
                        <input type="file" onChange={BackImageChange} multiple accept="image/*" enctype="multipart/form-data" id="" />
                    </div>
                    <div style={{
                        display:"flex",
                        margin: "50px 0 0 0"
                    }}>
                        <div style={{
                            backgroundColor: "#ccc",
                            width: "120px",
                            height: "120px",
                            borderRadius: "50%",
                            margin: "0 70px 0 80px"
                        }}>

                        </div>
                        <div>
                            <div style={{
                                margin: "0 0 6px 0"
                            }}>
                                name
                            </div>
                            <input type="text" name="name" value={name} onChange={NameChange} />
                        </div>
                    </div>
                    <SaveButton onClick={SaveClick}>
                        変更を保存
                    </SaveButton>
                </div>
            </div>
        </div>
    )
}

export default ProfileSetting
