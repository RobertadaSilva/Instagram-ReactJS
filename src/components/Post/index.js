import './style.css'
import { FiMoreHorizontal, FiSend } from 'react-icons/fi'
import {IoMdHeartEmpty} from 'react-icons/io'
import {BsChat, BsEmojiSmile, BsBookmark} from 'react-icons/bs'
import { IconContext } from 'react-icons/lib'
import fotoney from './NJ 🇧🇷 (@neymarjr) • fotos e vídeos do Instagram_files/meninoney.jpg'
import fotobored from './bored.webp'


export function Post() {
    return (
        <>
            <header className="header-post" >

                <div className="infos-post" >
                    <img className="img-header-post" src={fotobored} />

                    <p>neymarjr</p>
                </div>


                    <FiMoreHorizontal />
            </header>

            <div className="img-post" >
                <img src={fotoney}/>
            </div>

            <div className="footer-post" >
                <IconContext.Provider value={{size: "30px"}} >

                    <section className="engagement-post" >
                        <div className="icons-1" >
                            <div className="icon"><IoMdHeartEmpty /></div>
                            <div className="icon"><BsChat /></div>
                            <div className="icon"><FiSend /></div>
                        </div>

                        
                        <div className="icon"><BsBookmark /></div>
                        
                    </section>
                </IconContext.Provider>

                <section className="like" >
                    <span>601.000 curtidas</span>
                </section>

                <div className="legend" >
                    <p>
                        <span>neymarjr</span> Que Deus nos abençoe e nos proteja 🙏🏽❤️⚽️
                    </p>
                </div>

                <div className="time-post" >
                    <time>HÁ 1S</time>
                </div>

                <div className="comment" >

                    <div className="fake-comment" >

                        <IconContext.Provider value={{size: '25px'}}>
                            <div className="icon">
                                <BsEmojiSmile />
                            </div>
                            
                        </IconContext.Provider>

                        <input placeholder="Adicione um comentário..." />
                    </div>

                    <button>Publicar</button>

                </div>
            </div>
        </>

    )
}