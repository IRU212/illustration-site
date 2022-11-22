import React from 'react'

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
            .post(`http://localhost/api/post/like/destory`,data)
            .then(() => {
                location.reload()
            })
            .catch((err) =>  {
                console.log(err)
            })

    }

    return (
        <div onClick={UnLikeClick}>
            UnLike
        </div>
    )
}

export default UnLike
