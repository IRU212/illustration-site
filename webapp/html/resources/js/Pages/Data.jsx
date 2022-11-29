import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import React from 'react'
import styled from 'styled-components';

function Data(props) {

    const Common = styled.div`
        position: absolute;
        top: 55px;
        left: 240px;
        width: calc(100% - 240px);
    `

    const Graph = styled.div`
        width: 90%;
        height: 75vh;
        position: absolute;
        top: 12vh;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
    `

    const GraphData = styled.div`
        width: 100%;
        position: relative;

        div:nth-child(1){
            width: 100%;
            position: absolute;
            top: -1.5vh;
            border-bottom: 1px solid #ccc;
        }

        div:nth-child(2){
            width: 100%;
            position: absolute;
            top: calc( 12.5vh - 0.5rem );
            border-bottom: 1px solid #ccc;
        }

        div:nth-child(3){
            width: 100%;
            position: absolute;
            top: calc( 25vh - 0.5rem );
            border-bottom: 1px solid #ccc;
        }

        div:nth-child(4){
            width: 100%;
            position: absolute;
            top: calc( 37.5vh - 0.5rem );
            border-bottom: 1px solid #ccc;
        }

        div:nth-child(5){
            width: 100%;
            position: absolute;
            top: calc( 50vh - 0.5rem );
            border-bottom: 1px solid #ccc;
        }

        div:nth-child(6){
            width: 100%;
            position: absolute;
            top: calc( 62.5vh - 0.5rem );
            border-bottom: 1px solid #ccc;
        }

        div:nth-child(7){
            width: 100%;
            position: absolute;
            bottom: 0.5rem;
            border-bottom: 1px solid #ccc;
        }
    `

    const GraphNumber = styled.div`
        width: 5vw;
        text-align: center;
        position: relative;

        div:nth-child(1){
            position: absolute;
            top: -2.5vh;
            left: 50%;
            transform: translateX(-50%);
        }

        div:nth-child(2){
            position: absolute;
            top: calc( 12.5vh - 1rem );
            left: 50%;
            transform: translateX(-50%);
        }

        div:nth-child(3){
            position: absolute;
            top: calc( 25vh - 1rem );
            left: 50%;
            transform: translateX(-50%);
        }

        div:nth-child(4){
            position: absolute;
            top: calc( 37.5vh - 1rem );
            left: 50%;
            transform: translateX(-50%);
        }

        div:nth-child(5){
            position: absolute;
            top: calc( 50vh - 1rem );
            left: 50%;
            transform: translateX(-50%);
        }

        div:nth-child(6){
            position: absolute;
            top: calc( 62.5vh - 1rem );
            left: 50%;
            transform: translateX(-50%);
        }

        div:nth-child(7){
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    `

    const GraphMonth = styled.div`
        width: 92%;
        display: flex;
        position: absolute;
        bottom: -2rem;
        left: 5vw;

        div{
            margin: 0 auto;
        }
    `

    // ログインユーザID
    const userId = props.auth.user.id

    return (
        <div>
            <Header
                userInfo={props.auth.user}
            />
            <SideHeader
                userId={userId}
            />
            <Common>
                <Graph>
                    <GraphNumber>
                        <div>
                            1
                        </div>
                        <div>
                            2
                        </div>
                        <div>
                            3
                        </div>
                        <div>
                            4
                        </div>
                        <div>
                            5
                        </div>
                        <div>
                            6
                        </div>
                        <div>
                            7
                        </div>
                    </GraphNumber>
                    <GraphData>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </GraphData>
                    <GraphMonth>
                        <div>
                            1月
                        </div>
                        <div>
                            2月
                        </div>
                        <div>
                            3月
                        </div>
                        <div>
                            4月
                        </div>
                        <div>
                            5月
                        </div>
                        <div>
                            6月
                        </div>
                        <div>
                            7月
                        </div>
                        <div>
                            8月
                        </div>
                        <div>
                            9月
                        </div>
                        <div>
                            10月
                        </div>
                        <div>
                            11月
                        </div>
                        <div>
                            12月
                        </div>
                    </GraphMonth>
                </Graph>
            </Common>
        </div>
    )
}

export default Data
