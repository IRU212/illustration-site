import axios from 'axios'
import React from 'react'

function BlockUser(props) {

    // ログインユーザ情報
    const userInfo = props.userInfo

    const BlockClick = () => {

        const data = new FormData
        data.append("block_user_id",props.postInfo.user_id)
        data.append("user_id",userInfo.id)

        axios
            .post('http://localhost/api/user/block/store',data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={BlockClick}>
            Block User
        </div>
    )
}

export default BlockUser
