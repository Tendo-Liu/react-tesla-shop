import React from "react";
import CarInfo from '../../../components/carInfo/CarInfo';
import Scroll from '../../../baseUI/scroll'
import { Container } from './index.style';
import { useHistory } from "react-router-dom";

const Model = (props) => {

    // console.log(state)

    const { state } = props.location
    const { configuration, color } = state
    const history = useHistory()

    // 通过不同的configuration[]
    const { configList } = configuration[2]

    const goBack = () => {
        history.go(-1)
    }

    return (
        <Container>
            <div className="back" onClick={goBack}>
                <svg t="1641971935225" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2478" width="200" height="200"><path d="M738.145103 170.248828 663.234207 95.337931 313.114483 445.457655 312.937931 445.298759 238.768552 519.450483 238.945103 519.627034 238.768552 519.785931 313.679448 594.696828 313.838345 594.537931 658.996966 939.696552 733.166345 865.509517 388.007724 520.368552Z" p-id="2479" fill="#6F6F6F"></path></svg>
                <span>设计你的&nbsp;{state.name}</span>
            </div>
            <Scroll
                direction="vertical" // 垂直滚动
                refresh={false} // 下拉更新为false
            >
                <div>
                    <div className="topInfo">
                        <img src={configList[1].picUrl} />
                        <a>{state.name}</a>
                        <span>预计交付日期：12 至 16 周</span>
                    </div>
                    <CarInfo className="carInfo" res={state} />
                    <div className="chooseCarInfo">
                        <span>{state.mode}</span>
                        <div className="carPrice">
                            <span>{state.name}</span>
                            <svg t="1641989252390" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2167" width="200" height="200"><path d="M783.612 167.565L575.025 463.258h164.392v65.367H547.91v90.024h191.507v66.184H547.91v131.088h-98.529V684.833H250.865V618.65H449.38v-90.024H250.865v-65.367h169.374L213.646 167.565h111.089c96.536 146.85 155.141 240.007 175.922 279.397h1.992c7.047-16.226 26.331-48.891 57.787-97.996l118.135-181.4h105.04z" p-id="2168" fill="#000000"></path></svg>
                            <span>{state.price}</span>
                        </div>
                        <div className="carInfoDetail">
                            查看详情
                        </div>
                    </div>
                    <div className="chooseCarColor">
                        <img src={configList[1].picUrl} />
                        <h2>选择颜色</h2>
                        <div className="carColor">
                            {
                                color.map((item, index) => {
                                    return (
                                        <img key={item.id} src={item.picUrl} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </Scroll>
        </Container>
    )
}

export default Model