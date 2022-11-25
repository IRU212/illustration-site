import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Like from './Like'
import UnLike from './UnLike'

function IsLike(props) {

    // ログインユーザID
    const userId = props.userId

    // 投稿Id
    const postId = props.postId

    const [data,seData] = useState()

    useEffect(() => {
        axios
            .get(`http://localhost/api/post/like/${userId}/${postId}/index`)
            .then((res) => {
                seData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div>
            { data == true ?
                <UnLike
                    userId={userId}
                    postId={postId}
                />
                :
                <Like
                    userId={userId}
                    postId={postId}
                    postUserId={props.postUserId}
                />
            }
        </div>
    )
}

export default IsLike
