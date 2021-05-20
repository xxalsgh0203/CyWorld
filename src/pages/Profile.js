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
                <div class="info">
                    <div>
                        <div className="my-private-profile">
                            <div className="my-private-introductions">👩‍💻내 소개</div>
                        </div>
                    </div>
                </div> 
                <div class="miniroom"> 
                    <div className="content">
                        <h4>미니룸</h4>
                        <img src="https://danbiilee.github.io/react-miniportfoly/resources/img/miniroom.gif" width="93%"></img>
                        <div className="guest-book">
                            <hr />
                            <h4>일촌평</h4>
                        </div> 
                    </div>
                </div>
                <div class="menu">
                    <button className="buttons" id="home2" onClick={()=>{history.push('/')}}><h4>홈</h4></button>
                    <button className="buttons" id="profile2" onClick={()=>{history.push('/profile')}}><h4>프로필</h4></button>
                    <button className="buttons" id="settings2" onClick={()=>{history.push('/settings')}}><h4>설정</h4></button>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
}

export default Profile;