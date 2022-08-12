import React from 'react'
import Advise from '../../subassets/right-4703934_1920.jpg'
import Negotiate from '../../subassets/negotiate.jpeg'
import Button from './Button'
const Work = () => {
    return ( 
        <section className = 'work'>
            <div className = "item">
                <div className = "item-img" >
                    <img src = { Advise } alt = "lawyer" />
                </div> 
                <div className = "item-text" >
                <h4 className = "tophead" >Experienced Attorney Professional Approach </h4> 
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.Cum
                laboriosam labore minima quasi tempora eius, debitis accusantium iusto quis distinctio officia fuga eum
                id eveniet itaque ut.Laborum quisquam harum amet possimus molestias dignissimos nihil minima iste laudantium
                rem recusandae facilis, sint minus perferendis ratione, deleniti sequi error a!Perspiciatis. 
                </p> 
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Vel quo veritat
                    is, quaerat quos consequatur cumque ? Velit, saepe voluptatem cumque qui
                    busdam nemo itaque repellat eveniet voluptatibus, minima dolore, neque magni vel. </p> 
                    <Button title = 'Learn more' />
                
                </div>
            </div> 
            <div className = "item" >
        
        <div className = "item-img">
            <img src = { Negotiate } alt = "lawyer" />
        </div>
        <div className = "item-text" >
            <h4 className = "tophead" >
            Corporate Lawsuits 
            </h4> 
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.Vel quo veritatis, quaerat quos consequatur cumque 
            lorem ipsum dolor sit amet consectetur adipisicing elit lorem ipsum dolor sit amet consectetur adipisicing elit
            Velit, saepe voluptatem cumque quibusdam nemo itaque repellat eveniet voluptatibus, minima dolore, neque mag
            ni vel.
            </p>
            <Button title = 'Learn more' />
            </div> 
        </div> 
    </section>
    )
}

export default Work