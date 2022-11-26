import React, { useState } from 'react'
import styled from 'styled-components'
import BlockUser from './BlockUser'

function More(props) {

    const ModalDiv = styled.div`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(0,0,0,0);
        z-index: 999;
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

        div{
            margin: 10px 20px;
        }
    `

    // moreModalの何個目
    const ItemIndexTop = props.ItemIndex * 90 + 70
    const ItemIndexTopPosition = ItemIndexTop + "px"

    const [moreDisplay,setMoreDisplay] = useState(false)

    const DisplayClick = () => {
        setMoreDisplay(!moreDisplay)
    }

    const ModalDisplayClick = (e) => {
        if (e.currentTarget == e.target) {
            setMoreDisplay(!moreDisplay)
        }
    }

    return (
        <div>
            <div onClick={DisplayClick}>
                ...
            </div>
            <div>
                { moreDisplay == true ?
                    <ModalDiv onClick={(e) => {
                        ModalDisplayClick(e)
                    }}>
                        <ModalSubDiv style={{
                            top: ItemIndexTopPosition,
                        }}>
                            { props.userInfo.id == props.postInfo.user_id ?
                                <div>
                                    Delete
                                </div>
                                :
                                <BlockUser
                                    userInfo={props.userInfo}
                                    postInfo={props.postInfo}
                                />
                            }
                        </ModalSubDiv>
                    </ModalDiv>
                    :
                    ""
                }
            </div>
        </div>
    )
}

export default More
