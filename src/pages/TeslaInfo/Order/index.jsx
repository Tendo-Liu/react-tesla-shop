import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import { Container, SelectBox } from './index.style';

const Order = (props) => {

    // 选择车型
    const [type, setType] = useState(1)

    const { state } = props.location

    const history = useHistory()
    const goBack = () => {
        history.go(-1)
    }
    return (
        <div>
            <Container>
            </Container>
            <SelectBox>
                <div className="carTop">
                    <span>选择车型</span>
                    <svg onClick={goBack} t="1642162897926" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2099" width="200" height="200"><path d="M806.4 263.2l-45.6-45.6L512 467.2 263.2 217.6l-45.6 45.6L467.2 512 217.6 760.8l45.6 45.6L512 557.6l248.8 248.8 45.6-45.6L557.6 512z" p-id="2100" fill="#33363B"></path></svg>
                </div>
                <div className="carList">
                    {
                        // _表示表示用不到的变量
                        state.map((item, _) => {
                            return (
                                <div onClick={() => setType(item.id)} className={type == item.id ? "carChoose" : "car"} key={item.id}>
                                    <div>
                                        {item.name}
                                    </div>
                                    <img src={item.configuration[0].carColor[item.id].configList[1].picUrl} /> 
                                </div>
                            )
                        })
                    }
                </div>
            </SelectBox>
        </div>
    )
}
export default Order