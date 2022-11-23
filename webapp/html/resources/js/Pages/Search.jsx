import React, { useState } from 'react'
import Header from '@/Header/Header';
import SideHeader from '@/Header/SideHeader';
import styled from 'styled-components';

function Search(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    // ログインユーザID
    const userId = props.auth.user.id

    // 検索キーワード
    const [keyword,setKeyword] = useState()

    const KeywordChange = (e) => {
        setKeyword(e.target.value)
    }

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
                            transform: "translate(-50%,-50%)"
                    }}/>
                </form>
                <div>
                    aaaa
                </div>
            </div>
        </div>
    )
}

export default Search
