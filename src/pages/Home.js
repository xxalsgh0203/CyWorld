import {useHistory} from 'react-router-dom';
import './Home.scss';

function Home(props){

    let history = useHistory();

    return (
        <div>
        <div class="container">
            <div class="box1">
            <h3>{props.title}</h3> 
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
                        <h4>미니룸</h4>
                        <img src="https://danbiilee.github.io/react-miniportfoly/resources/img/miniroom.gif" width="93%"></img>
                        <div className="guest-book">
                            <hr />
                            <h4>일촌평</h4>
                        </div> 
                    </div>
                </div>
                <div class="menu">
                    <button className="buttons" id="home1" onClick={()=>{history.push('/')}}><h4>홈</h4></button>
                    <button className="buttons" id="profile1" onClick={()=>{history.push('/profile')}}><h4>프로필</h4></button>
                    <button className="buttons" id="settings1" onClick={()=>{history.push('/settings')}}><h4>설정</h4></button>
                </div>
            </section>
            </div>
        </div>
        </div>
    );
}

export default Home;