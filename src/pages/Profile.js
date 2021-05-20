import './Profile.scss';
import {useHistory} from 'react-router-dom';

function Profile(props){

    let history = useHistory();

    return (
        <div>
        <div class="container">
            <div class="box1">
            <h3>{props.title}</h3> 
            <section>
                <div class="info"> info </div>
                <div class="miniroom"> <div className="content"> </div></div>
                <div class="menu">
                    <button className="home" id="home2" onClick={()=>{history.push('/')}}><h4>홈</h4></button>
                    <button className="profile" id="profile2" onClick={()=>{history.push('/profile')}}><h4>프로필</h4></button>
                    <button className="settings" id="settings2" onClick={()=>{history.push('/settings')}}><h4>설정</h4></button>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
}

export default Profile;