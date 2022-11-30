import Header from '@/Header/Header'
import SideHeader from '@/Header/SideHeader'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
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
        z-index: 998;

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

    const GraphDataResult = styled.div`
        width: 92%;
        display: flex;
        position: absolute;
        top: -1.3vh;
        left: 5vw;

        div{
            margin: 0 auto;
            background-color: #ccc;
            width: 5%;
            height: 75.1vh;
        }
    `

    const [data,setData] = useState()

    // ログインユーザID
    const userId = props.auth.user.id

    useEffect(() => {
        axios
            .get(`http://localhost/api/data/24/index`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
            })
    },[])

    function DataHeight(data){
        return (75 - 6.2 * data)  + "vh"
    }

    // グラフの白色の高さ
    const OneHeight = DataHeight(data?.row_data.one_data);

    const TwoHeight = DataHeight(data?.row_data.two_data);

    const ThreeHeight = DataHeight(data?.row_data.three_data);

    const FourHeight = DataHeight(data?.row_data.four_data);

    const FiveHeight = DataHeight(data?.row_data.five_data);

    const SixHeight = DataHeight(data?.row_data.six_data);

    const SevenHeight = DataHeight(data?.row_data.seven_data);

    const EightHeight = DataHeight(data?.row_data.eight_data);

    const NineHeight = DataHeight(data?.row_data.nine_data);

    const TenHeight = DataHeight(data?.row_data.ten_data);

    const TweleveHeight = DataHeight(data?.row_data.ereven_data);

    const ThirteenHeight = DataHeight(data?.row_data.tweleve_data);

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
                            { data?.row.first_row }
                        </div>
                        <div>
                            { data?.row.secound_row }
                        </div>
                        <div>
                            { data?.row.third_row }
                        </div>
                        <div>
                            { data?.row.four_row }
                        </div>
                        <div>
                            { data?.row.five_row }
                        </div>
                        <div>
                            { data?.row.six_row }
                        </div>
                        <div>
                            0
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
                    <GraphDataResult>
                        <div>
                            <div style={{
                                height: OneHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: TwoHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: ThreeHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: FourHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: FiveHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: SixHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: SevenHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: EightHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: NineHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: TenHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: TweleveHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                        <div>
                            <div style={{
                                height: ThirteenHeight,
                                width: "100%",
                                backgroundColor: "#fff",
                            }} />
                        </div>
                    </GraphDataResult>
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
