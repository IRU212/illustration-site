import axios from 'axios'
import React, { useLayoutEffect, useState } from 'react'
import styled from 'styled-components'

function Count(props) {

    const Following = styled.div`
        margin-right: 30px;
    `

    // ログインユーザID
    const profileId = props.profileId

    const [data,seData] = useState()

    useLayoutEffect(() => {
        axios
            .get(`http://localhost/api/count/${profileId}/index`)
            .then((res) => {
                seData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div style={{display:"flex"}}>
            <Following>
                { data?.follow_count }following
            </Following>
            <div>
                { data?.follower_count }follower
            </div>
        </div>
    )
}

export default Count
