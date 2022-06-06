import React from 'react'
import Bio from '../Bio/Bio'
import './home.css'
import Baseskill from '../Baseskill/Baseskill'



const Home=()=>{
    return(
        <header className="profile container">
        <div className="profile__container">
            <div className="profile__data">
                <div className="profile__border">
                    <div className="profile__perfil">
                    <img src="https://scontent.fdac14-1.fna.fbcdn.net/v/t1.6435-9/39502572_311815072709355_9202775671510663168_n.jpg?_nc_cat=101&ccb=1-6&_nc_sid=174925&_nc_eui2=AeErc4OLZM5hiMuFbkb8GQSPAPalYUVp8VoA9qVhRWnxWoAXq6tlSGT4BPANLg9fRNNi_F2_aBqHL6WwgeLOFrYr&_nc_ohc=Hrf9WqVgsmQAX_5PbTU&_nc_ht=scontent.fdac14-1.fna&oh=00_AT9O_RtZCRaIzclOkN997G61X_yw7fnjvOHKANQVXnBKyw&oe=62AA24E4" alt="shihab"/>
                    </div>
                </div>
               
                <div>
                    <h2 className="profile__name">Shihab Ahmed</h2>
                    <h3 className="profile__profession">Software Engineer</h3>
                    
                    

                    <ul className="profile__social">
                        <a href="#" target="_blank" className="profile__socail__link">
                            <i className="ri-instagram-line"></i>
                         </a>
                         <a href="#" target="_blank" className="profile__socail__link">
                            <i className="ri-linkedin-box-fill"></i>
                        </a>
                        <a href="#" target="_blank" className="profile__socail__link">
                            <i className="ri-github-fill"></i>
                        </a>
                    </ul>
                </div>

                </div>

                {/* another components   */}
                <Bio/>
                <Baseskill/>
                
               
                
                
            

            

            <div className="profile__info">
                <div className="profile__info__group">
                    <h3 className="profile__info__number">1.5</h3>
                    <p className="profile__info__descriptions">
                        years of <br/> experience
                    </p>
                </div>

                <div className="profile__info__group">
                    <h3 className="profile__info__number">+5</h3>
                    <p className="profile__info__descriptions">
                        completed <br/>projects
                    </p>
                </div>

                <div className="profile__info__group">
                    <h3 className="profile__info__number">+00</h3>
                    <p className="profile__info__descriptions">
                        Job<br/>changing
                    </p>
                </div>

                
            </div>

           
            <div className="profile__buttons">
                <a download="#"  href="#" className="button">
                    Download CV <i class="ri-download-line"></i>
                </a>
                <div className="profile__buttons__small">
                    <a href=" " target="_blank" className=" button  button__small button__gray">
                        <i className="ri-whatsapp-line"></i>
                    </a>
                    <a href=" " target="_blank" className=" button  button__small button__gray">
                        <i className="ri-messenger-line"></i>
                    </a>
                </div>
            </div>
        </div>
        
    </header>
    )
}



export default Home