import axios from 'axios'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';

function Like(props) {

    // ログインユーザID
    const userId = props.userId

    // 投稿Id
    const postId = props.postId

    const LikeClick = () => {

        const data = new FormData()

        data.append("user_id",userId)
        data.append("post_id",postId)

        axios
            .post(`http://localhost/api/post/like/store`,data)
            .then(() => {
                location.reload()
            })
            .catch((err) =>  {
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
