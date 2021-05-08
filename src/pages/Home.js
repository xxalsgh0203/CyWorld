import Layout from '../components/Layout.js';
import {useHistory} from 'react-router-dom';
import './Home.scss';

function Home(){

    let history = useHistory();

    return (
        <div>
        <div class="container">
            <div class="box1">
            <h3>김민호님의 미니홈피</h3> 
            <section>
                <div class="info"><div><img src="https://newsimg.hankookilbo.com/cms/articlerelease/2020/06/05/202006051888034625_5.jpg" width="100%"></img></div></div> 
                <div class="miniroom"> <div className="content"><h4>미니룸</h4><img src="https://danbiilee.github.io/react-miniportfoly/resources/img/miniroom.gif" width="93%"></img> </div></div>
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

export default Home;