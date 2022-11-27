import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';
import axios from 'axios';
import IsLike from '@/Content/IsLike';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

function Search(props) {

    const CommonDiv = styled.div`
        width: 100%;
        position: relative;
    `

    const CommonItem = styled.div`
        width: 100%;
        position: relative;
        border-bottom: 1px solid #ccc;
        padding: 19px 38px;
        display: flex;
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
        top: 18px;

        &:hover{
            cursor: pointer;
        }
    `

    const SearchNoneDiv = styled.div`
        position: relative;
        width: 100%;
        height: calc(100vh - 55px);
    `

    const SearchNoneMessage = styled.div`
        position: absolute;
        top: 43%;
        left: 50%;
        transform: translate(-50%,-50%);
    `

    const [data,setData] = useState()

    // ログインユーザID
    const userId = props.auth.user.id

    // URLを取得
    const locationUrl = location.href

    // 検索文字を取得
    const url_string = locationUrl.split("/")[4]

    // 検索文字
    const keywordSearch = url_string?.slice(0,-1)

    // 検索キーワード
    const [keyword,setKeyword] = useState()

    const KeywordChange = (e) => {
        setKeyword(e.target.value)
    }

    useEffect(() => {
        axios
            .get(`../api/search/${keywordSearch}/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    return (
        <div style={{width: "100%"}}>
            <Header
                userInfo={props.auth.user}
            />
            <SideHeader
                userId={userId}
            />
            <div style={{
                position: "absolute",
                top: "55px",
                left: "240px",
                width: "calc(100% - 240px)",
            }}>
                <form action={`/search/${keyword}`} method="get" style={{
                    width: "100%",
                    padding: "0",
                    borderBottom: "1px solid #ccc",
                    position: "relative",
                    height: "76px"
                }}>
                    <input type="text" value={keyword} onChange={KeywordChange}
                        style={{
                            width: "86%",
                            margin: "0px auto",
                            position:"absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%,-50%)",
                            paddingLeft: "42px",
                    }}/>
                    <a href={`/search/${keyword}?`}>
                        <SearchIcon style={{
                            position:"absolute",
                            top: "50%",
                            left: "8%",
                            transform: "translate(0,-50%)",
                        }} />
                    </a>
                </form>
                <CommonDiv>
                    { keywordSearch == undefined ?
                        <SearchNoneDiv>
                            <SearchNoneMessage>
                                検索してください
                            </SearchNoneMessage>
                        </SearchNoneDiv>
                        :
                        <div>
                            { data?.length == 0 ?
                                <SearchNoneDiv>
                                    <SearchNoneMessage>
                                        見つかりませんでした
                                    </SearchNoneMessage>
                                </SearchNoneDiv>
                                :
                                <div>
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
                                                />
                                            </Like>
                                        </CommonItem>
                                    ) }
                                </div>
                            }
                        </div>
                    }
                </CommonDiv>
            </div>
        </div>
    )
}

export default Search
