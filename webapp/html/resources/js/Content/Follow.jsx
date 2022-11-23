import axios from 'axios'
import React from 'react'

function Follow(props) {

    // ログインユーザId
    const userId = props.userId

    // フォローするユーザId
    const profileId = props.profileId

    const FollowClick = () => {

        const data = new FormData
        data.append("user_id",userId)
        data.append("following",profileId)

        axios
            .post("http://localhost/api/follow/store",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={FollowClick}>
            Follow
        </div>
    )
}

export default Follow
