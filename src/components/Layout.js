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
                    <button onClick={()=>{history.push('/')}}>홈</button>
                    <button onClick={()=>{history.push('/profile')}}>프로필</button>
                </div>
            </section>
            </div>
        </div>

        </div>
    );
}

export default Layout