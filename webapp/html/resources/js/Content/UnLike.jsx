import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import axios from 'axios';

function UnLike(props) {

    // ログインユーザID
    const userId = props.userId

    // 投稿Id
    const postId = props.postId

    const UnLikeClick = () => {

        const data = new FormData()

        data.append("user_id",userId)
        data.append("post_id",postId)

        axios
            .post(`https://illustration-site.herokuapp.com/api/post/like/destory`,data)
            .then(() => {
                location.reload()
            })
            .catch((err) =>  {
                console.log(err)
            })

    }

    return (
        <div onClick={UnLikeClick}>
            <FavoriteIcon
                style={{color: "#EE55CC"}}
            />
        </div>
    )
}

export default UnLike
