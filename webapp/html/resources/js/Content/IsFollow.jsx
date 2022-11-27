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
            .get(`https://illustration-site.herokuapp.com/api/follow/${userId}/${profileId}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    console.log(data)

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
