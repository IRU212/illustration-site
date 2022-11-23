import axios from 'axios'
import React, { useLayoutEffect, useState } from 'react'
import Follow from './Follow'
import UnFollow from './UnFollow'

function IsFollow(props) {

    // ログインユーザId
    const userId = props.userId

    // フォローするユーザId
    const profileId = props.profileId

    const [data,setData] = useState()

    useLayoutEffect(() => {
        axios
            .get(`http://localhost/api/follow/20/20/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })


    return (
        <div>
            { data == true ?
                <UnFollow
                    userId={userId}
                    profileId={profileId}
                />
                :
                <Follow
                    userId={userId}
                    profileId={profileId}
                />
            }
        </div>
    )
}

export default IsFollow
