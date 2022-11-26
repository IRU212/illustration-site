import React from 'react'
import styled from 'styled-components'
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

function Header(props) {

    const Header = styled.div`
        width: 100%;
        height: 55px;
        background-color: #111;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 999;
        color: #fff;
    `

    const Home = styled.div`
        background-color: #111;
        position: absolute;
        top: 50%;
        left: 6vw;
        transform: translateY(-50%);
    `

    const Icon = styled.div`
        background-color: #fff;
        position: absolute;
        top: 50%;
        right: 6vw;
        transform: translateY(-50%);
        border-radius: 50%;
        width: 40px;
        height: 40px;

        img{
            width: 100%;
            height: 100%;
            border-radius: 50%;
        }
    `

    // ログインユーザデータ
    const userInfo = props.userInfo

    return (
        <Header>
            <Home>
                <a href="https://illustration-site.herokuapp.com/home">
                    Home
                </a>
            </Home>
            <a href={`http://localhost/notification`}>
                <NotificationsIcon style={{
                    position: "absolute",
                    top: "50%",
                    right: "12vw",
                    fontSize: "35px",
                    transform: "translateY(-50%)",
                    cursor: "pointer"
                }} />
            </a>
            <a href={`http://localhost/profile/${userInfo.id}`}>
                <Icon>
                    { userInfo.icon_path == null ?
                        <PersonIcon
                            style={{
                                color: "#ccc",
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%,-50%)",
                                fontSize: "34px",
                        }} />
                        :
                        <img src={`data:image/png;base64,${userInfo.icon_path}`} alt="" />
                    }
                </Icon>
            </a>
        </Header>
    )
}

export default Header
