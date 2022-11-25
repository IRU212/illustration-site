import axios from 'axios'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Like(props) {

    // ログインユーザID
    const userId = props.userId

    // 投稿Id
    const postId = props.postId

    // 送信先ユーザID
    const postUserId = props.postUserId

    const LikeClick = () => {

        const data = new FormData()

        data.append("user_id",userId)
        data.append("post_id",postId)

        axios
            .post(`http://localhost/api/post/like/store`,data)
            .then(() => {
                // location.reload()
            })
            .catch((err) =>  {
                console.log(err)
            })

        data.append("destination",postUserId) // 送信先ユーザID
        data.append("notification_type_id",1) // いいねタイプ

        // フォローメッセージ送信
        axios
            .post("http://localhost/api/notification/store",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={LikeClick}>
            <FavoriteIcon />
        </div>
    )
}

export default Like
