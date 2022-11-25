import React, { useState } from 'react'
import styled from 'styled-components'

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
                            <div>
                                aaaaa
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

export default More
