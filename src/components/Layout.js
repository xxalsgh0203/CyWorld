import './Layout.css';
import {useHistory} from 'react-router-dom';

function Layout(){

    let history = useHistory();

    return (
        <div>
        <div class="container">
            <div class="box1">
            <h3>김민호님의 미니홈피</h3> 
            <section>
                <div class="info"> info </div>
                <div class="miniroom"> <div className="content"> </div></div>
                <div class="menu">
                    <button className="home" onClick={()=>{history.push('/')}}><h4>홈</h4></button>
                    <button className="profile" onClick={()=>{history.push('/profile')}}><h4>프로필</h4></button>
                    <button className="settings" onClick={()=>{history.push('/settings')}}><h4>설정</h4></button>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
}

export default Layout