import axios from 'axios'
import React from 'react'

function PostDelete(props) {

    // POSTデータ
    const postInfo = props.postInfo

    const DeleteClick = () => {

        const data = new FormData()
        data.append("post_id",postInfo.id)

        axios
            .post("http://localhost/api/post/destory",data)
            .then(() => {
                location.reload()
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div onClick={DeleteClick}>
            Delete
        </div>
    )
}

export default PostDelete
