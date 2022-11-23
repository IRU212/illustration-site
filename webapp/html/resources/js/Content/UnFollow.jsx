import React from 'react'

function UnFollow(props) {

    // ログインユーザId
    const userId = props.userId

    // フォローするユーザId
    const profileId = props.profileId

    const UnFollowClick = () => {
        const data = new FormData
        data.append("user_id",userId)
        data.append("following",profileId)

        axios
            .post("http://localhost/api/follow/destory",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={UnFollowClick}>
            UnFollow
        </div>
    )
}

export default UnFollow
