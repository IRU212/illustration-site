import axios from 'axios'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import IsLike from '@/Content/IsLike';
import PersonIcon from '@mui/icons-material/Person';
import More from '@/Content/More';
import ItemMore from './ItemMore';

function Item(props) {

    const CommonItem = styled.div`
        width: 100%;
        position: relative;
        border-bottom: 1px solid #ccc;
        padding: 19px 38px;
        display: flex;
    `

    const MoreItem = styled.div`
        position: absolute;
        right: 26px;
        top: -2px;
        letter-spacing: 1.6px;
        font-size: 1.6rem;

        &:hover{
            cursor: pointer;
        }
    `

    const Icon = styled.div`
        width: 50px;
        height 50px;
        border-radius: 50%;
        margin: 0 50px 0 0;
        position: relative;
        border: 1px solid #ccc;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    `

    const CommonName = styled.div`
        font-size: 0.8rem;
        font-weight: 700;
    `

    const Like = styled.div`
        position: absolute;
        right: 26px;
        bottom: 12px;

        &:hover{
            cursor: pointer;
        }
    `
    // ユーザID
    const userId = props.userId

    // プロフィールID
    const profileId = props.profileId

    const [data,setData] = useState()

    useEffect(() => {
        axios
            .get(`https://illustration-site.herokuapp.com/api/profile/post/${profileId}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })

    },[])

    return (
        <div style={{
            borderTop: "1px solid #ccc",
        }}>
            { data?.map((item,index) =>
                <CommonItem key={index}>
                    <a href={`https://illustration-site.herokuapp.com/profile/${item.user.id}`}>
                        <Icon>
                            { item.user.icon_path == null ?
                                <PersonIcon
                                    style={{
                                        color: "#ccc",
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%,-50%)",
                                        fontSize: "34px",
                                }}
                            />
                                :
                                <img src={`data:image/png;base64,${item.user.icon_path}`} alt="" style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "50%",
                                }} />
                            }
                        </Icon>
                    </a>
                    <div>
                        <CommonName>
                            { item.user.name }
                        </CommonName>
                        <div>
                            { item.message }
                        </div>
                    </div>
                    <Like>
                        <IsLike
                            userId={userId}
                            postId={item.id}
                            postUserId={item.user_id}
                        />
                    </Like>
                    <MoreItem>
                        <ItemMore
                            ItemIndex={index}
                            userInfo={props.userInfo}
                            postInfo={item}
                        />
                    </MoreItem>
                </CommonItem>
            ) }
        </div>
    )
}

export default Item
