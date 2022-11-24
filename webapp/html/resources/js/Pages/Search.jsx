import React, { useEffect, useLayoutEffect, useState } from 'react'
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';
import axios from 'axios';
import IsLike from '@/Content/IsLike';

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
            <Header />
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
                    }}/>
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
                            { data?.map((item,index) =>
                                <CommonItem key={index}>
                                    <Icon>
                                        <img src="https://webstatic.hoyoverse.com/upload/uploadstatic/contentweb/20210419/2021041914484954170.png" alt="" />
                                    </Icon>
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
                </CommonDiv>
            </div>
        </div>
    )
}

export default Search
