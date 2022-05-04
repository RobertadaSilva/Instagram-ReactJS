import './style.css'
import fotoluiza from './luiza.jpg'
import fotobritini from './britini.jpg'
import fotocristiano from './cristiano.webp'
import fotoharry from './harry.webp'
import fotozendaya from './zendaya.webp'

export function Story() {

    return (

        <div className="container" >

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={fotoluiza}  />
                </div>

                <span>luiza</span>
            </div>

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={fotobritini}  />
                </div>

                <span>britney</span>



            </div>

            <div className="user-elements" >

                <div>
                    <img className="image-user-story" src={fotocristiano} />
                </div>

                <span>CR7</span>

            </div>

            <div className="user-elements" >

            <div>
                <img className="image-user-story" src={fotoharry}  />
            </div>

            <span>harrystyles</span>

            </div>

            <div className="user-elements" >

<div>
    <img className="image-user-story" src={fotozendaya}  />
</div>

<span>zendaya</span>



</div>


            

        </div>

    )

}