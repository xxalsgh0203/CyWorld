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
                            <h4>Profile</h4><hr></hr>
                            <section>👩‍💻내 소개</section>
                            <section>👭내 인맥</section>
                            <section>⭐내 즐겨찾기</section>
                        </div>
                    </div>
                </div> 
                <div class="miniroom"> 
                    <div className="content">
                        <h4>내 소개</h4>
                        <img src="https://danbiilee.github.io/react-miniportfoly/resources/img/aboutMe.JPG" width="93%"></img>
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