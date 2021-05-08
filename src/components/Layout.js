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
                <div class="miniroom"> <h4>미니룸</h4> </div>
                <div class="menu">
                    <button onClick={()=>{history.push('/')}}><h4>홈</h4></button>
                    <button onClick={()=>{history.push('/profile')}}><h4>프로필</h4></button>
                    <button onClick={()=>{history.push('/settings')}}><h4>설정</h4></button>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
}

export default Layout