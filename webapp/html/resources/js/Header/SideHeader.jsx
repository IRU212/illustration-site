import React from 'react'
import styled from 'styled-components'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

function SideHeader(props) {

    const SideHeader = styled.div`
        width: 240px;
        height: calc(100vh - 55px);
        position: fixed;
        top: 55px;
        left: 0;
        overflow-y: scroll;
        padding: 30px 0;
    `

    const SideDiv = styled.div`
        display: flex;
        margin: 75px 0 75px 52px;
        line-height: 2rem;
        text-align: center;
    `

    // ログインユーザId
    const userId = props.userId

    return (
        <SideHeader>
            <SideDiv>
                <div>
                    <HomeIcon
                        style={{fontSize: "1.7rem"}}
                    />
                </div>
                <div
                    style={{fontSize: "1.5rem",fontWeight:600,margin:"2px 0 0 10px"}}
                >
                    <a href="https://illustration-site.herokuapp.com/home">
                        HOME
                    </a>
                </div>
            </SideDiv>
            <SideDiv>
                <div>
                    <AccountCircleIcon
                        style={{fontSize: "1.7rem"}}
                    />
                </div>
                <div
                    style={{fontSize: "1.5rem",fontWeight:600,margin:"2px 0 0 10px"}}
                >
                    <a href={`https://illustration-site.herokuapp.com/profile/${userId}`}>
                        PROFILE
                    </a>
                </div>
            </SideDiv>
            <SideDiv>
                <div>
                    <SearchIcon
                        style={{fontSize: "1.7rem"}}
                    />
                </div>
                <div
                    style={{fontSize: "1.5rem",fontWeight:600,margin:"2px 0 0 10px"}}
                >
                    <a href={`https://illustration-site.herokuapp.com/search`}>
                        SEARCH
                    </a>
                </div>
            </SideDiv>
            <SideDiv>
                <div>
                    <FavoriteBorderIcon
                        style={{fontSize: "1.7rem"}}
                    />
                </div>
                <div
                    style={{fontSize: "1.5rem",fontWeight:600,margin:"2px 0 0 10px"}}
                >
                    <a href={`https://illustration-site.herokuapp.com/like/list/${userId}`}>
                        LIKE LIST
                    </a>
                </div>
            </SideDiv>
            <SideDiv>
                <div>
                    <SignalCellularAltIcon
                        style={{fontSize: "1.7rem"}}
                    />
                </div>
                <div
                    style={{fontSize: "1.5rem",fontWeight:600,margin:"2px 0 0 10px"}}
                >
                    <a href={`https://illustration-site.herokuapp.com/data`}>
                        DATA
                    </a>
                </div>
            </SideDiv>
            <SideDiv>
                <div>
                    <SettingsIcon
                        style={{fontSize: "1.7rem"}}
                    />
                </div>
                <div
                    style={{fontSize: "1.5rem",fontWeight:600,margin:"2px 0 0 10px"}}
                >
                    <a href={`https://illustration-site.herokuapp.com/setting`}>
                        SETTING
                    </a>
                </div>
            </SideDiv>
        </SideHeader>
    )
}

export default SideHeader
