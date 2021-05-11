import Layout from '../components/Layout.js';
import {useHistory} from 'react-router-dom';
import './Settings.scss';

function Settings(props){

    let history = useHistory();

    return (
        <div>
        <div class="container">
            <div class="box1">
                <h3><input onChange={(e)=>{props.changeTitle(e.target.value)}}></input> <button>수정</button></h3>
            <section>
                <div class="info">
                    <div>
                        <img src="https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/05/202006051888034625_5.jpg" width="100%"></img>
                        <div className="informations">
                            <hr />
                            <div className="my-contents">
                                <span className="my-name">김민호</span>
                                <span className="my-sex">(♂)</span>
                                <span className="my-birthday">1997.02.03</span>
                                <p className="my-email">xxalsgh0203@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="miniroom"> 
                    <div className="content">
                        <div className="setting">
                            <p>배경화면 색상 변경</p>
                            <p>메뉴 색상 변경</p>
                            <p>프로필 정보 변경</p>
                            <p>주크박스 만들기</p>
                            <p>미니홈피 제목변경 더 수정하기</p>
                            <p>버튼 클릭시 메뉴색깔 흰색으로 바뀌게</p>
                        </div>
                    </div>
                </div>
                <div class="menu">
                    <button className="buttons" onClick={()=>{history.push('/')}}><h4>홈</h4></button>
                    <button className="buttons" onClick={()=>{history.push('/profile')}}><h4>프로필</h4></button>
                    <button className="buttons" onClick={()=>{history.push('/settings')}}><h4>설정</h4></button>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
}

export default Settings;