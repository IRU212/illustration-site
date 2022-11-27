import React, { useState } from 'react'
import styled from 'styled-components'

function ProfileMore(props) {

    const ModalDiv = styled.div`
        position: fixed;
        top: calc(-100vh + 110px);
        left: calc(-100vw + 139px);
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,0);
        z-index: 998;
    `

    const ModalSubDiv = styled.div`
        border: 1px solid #ccc;
        z-index: 999;
        position: absolute;
        right: 70px;
        box-shadow: 0 0 8px gray;
        font-size: 0.8rem;
        font-weight: 600;
        border-radius: 16px;
        background-color: #fff;
        top: 540px;
        right: 12vw;

        div{
            margin: 10px 20px;
        }
    `

    // ログインユーザID
    const userId = props.userId

    // プロフィールID
    const profileId = props.profileId

    const [moreDisplay,setMoreDisplay] = useState(false)

    const  BlockClick = () => {

        const data = new FormData

        data.append("block_user_id",profileId)
        data.append("user_id",userId)

        axios
            .post('https://illustration-site.herokuapp.com/api/user/block/store',data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const DisplayClick = () => {
        setMoreDisplay(!moreDisplay)
    }

    const ModalDisplayClick = (e) => {
        if (e.currentTarget == e.target) {
            setMoreDisplay(!moreDisplay)
        }
        console.log(e.target)
        console.log(e.currentTarget)
    }

    return (
        <div style={{width: "100%"}}>
            <div onClick={DisplayClick}>
                ・・・
            </div>
            <div  style={{width: "100%"}}>
                { moreDisplay == true ?
                    <ModalDiv onClick={(e) => {
                        ModalDisplayClick(e)
                    }}>
                        <ModalSubDiv>
                            <div onClick={BlockClick}>
                                User Block
                            </div>
                        </ModalSubDiv>
                    </ModalDiv>
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default ProfileMore
