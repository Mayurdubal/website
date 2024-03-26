import { NetflixRegister } from '../netflic-register/netflix-register'
import './netflix-main.css'
export function NetflixMain(){
    return(
        <div className='text-white text-center'>
           <h1>Unlimited movies, TV shows And more.</h1>
<h3>Watch anywhere. Cancle anytime. </h3>
<NetflixRegister/>
        </div>
    )
}