import React from 'react'
import { Link } from 'react-router-dom';
import './main.css'
import BMI from '../BMI/BMI'


const Main = () => {


    return (
        <div className='mainPage'>
            <div className='secondDiv'>
                <h2 className='mainPageTitle'>Welcome to PUMP UP</h2>
                    <h2 className='fitTitle'>What is your current weight?</h2> 

                    <BMI />
                    

                <div>
                   <h2 className='fitTitle'>What is your fitness goal as of now?</h2> 
                    <ul className='goalOptions'>
                        <Link className='links' style={{ color: 'inherit', textDecoration:'none' }}  to='/losing-fat'>
                         <li><h2>Losing Fat</h2></li>
                        {/* <img  src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/rwd010122feachrissolomon-016-1639171216.jpg" 
                        className='pictures'
                        alt="running" /> */}
                        </Link>
                        <div className='picDic'>
                        </div>
                        <Link className='links' style={{ color: 'inherit', textDecoration:'none' }}  to='/leaner'>
                        <li><h2>Getting Leaner</h2></li>
                        </Link>
                        <Link className='links' style={{ color: 'inherit', textDecoration:'none' }}  to='/endurance'>
                        <li><h2>Work on Endurance</h2> </li>
                        </Link>
                        <Link className='links' style={{ color: 'inherit', textDecoration:'none' }}  to='/bulking'>
                        <li><h2>Bulking</h2></li>
                        </Link>
                    </ul>
                </div>
               
            </div>
        </div>

    )
}

export default Main