import React from 'react'
import { motion } from "framer-motion"
import '../App.css' 

const Description = () => {
  return (
    <div>
         
      <div>
    <div>Описание</div>
{/* 

    // <motion.img
    // width={'15%'}
    // src='/img/icon.png'
    // alt=''


    //анимация
    animate={{rotate:360}}
    transition={{
      delay:2,
      duration:5,
      repeat:Infinity,
      repeatDelay: 0.5,
      repeatType: 'reverse',
      type:'tween'
    }}
    />

    <motion.p
      initial={{
        x:-1000,
        opacity: 0
      }}

      animate={{
        x:500,
        opacity: 1
    }}
    transition={{
      delay:2,
      duration:2,
      type:'tween'
    }}
>
    Текст который появится
    </motion.p> */}






</div>


{/* <motion.div id='div1'

initial={{

  x:-1000,
  opacity: 0
}}

animate={{
  x:0,
  opacity:1
}}

transition={{
delay:1,
duration:1
}}

>
Свойства преобразования ускоряются графическим процессором и, следовательно, плавно анимируются. Они могут
быть установлены и анимированы по отдельности как
</motion.div>
<motion.div id='div2'
initial={{
  opacity:0,
}}
animate={{
  y:0,
  opacity:1
}}
transition={{
  delay:1,
  duration:2
}}

>
<motion.img
src='img/banner-new.jpeg'
className='banner'
width={850}

initial={{
  opacity:0.6,
}}
transition={{
  duration:2
}}
whileTap={{
  rotate:360
}}
/>
</motion.div>
<div id='divImg'>
<motion.div id='div3'
initial={{
  opacity:0,
  scale:0.5
}}
animate={{
  scale:1,
  opacity:1
}}
transition={{
  duration:2
}}

>
<motion.img
src='img/ball.jpg'
className='ball'
width={200}

initial={{
  opacity:0.6,
}}
transition={{
  duration:2
}}
whileHover={{
  scale:1.5,
  transition:{
    duration:2
  }
}}
/>
</motion.div>

<motion.div id='div4'
initial={{
  opacity:0,
  scale:0.5
}}
animate={{
  scale:1,
  opacity:1
}}
transition={{
  duration:2
}}

>
<motion.img drag='x'
src='img/ball.jpg'
className='ball'
width={200}

initial={{
  opacity:0.6,
}}
transition={{
  duration:2
}}
whileDrag={{
  scale:1.5,
  
}}
/>
</motion.div>


<motion.button className='btn btn-primary'
whileHover={{
  scale:1.2
}}

>
Нажми
</motion.button>

</div> */}






{/* 
<div id='Pract4'>
<motion.div id='ani1'
animate={{
  x:150,
  opacity:0.8
}}
transition={{
  delay:2,
  duration:1
}}
>

<motion.img
src='img/ani1.jpg'
className='ani1'
width={350}
animate={{
  x:50,
  y:40,
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],

}}
transition={{
  ease: "easeOut", 
  duration: 1
}}
whileHover={{
  scale: [1, 2, 2, 1, 1],
  rotate: [0, 0, 270, 270, 0],
  
}}
/>
</motion.div>


<motion.div id='ani2'
animate={{
  x:-150,
  opacity:1
}}
transition={{
  delay:1,
  duration:1
}}>

<motion.img
src='img/ani2.jpg'
className='ani2'
width={350}
animate={{
  x:50,
  y:40,
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}}
transition={{
  delay:1,
  duration:4
}}
whileHover={{
  scale:1.2
}}
whileTap={{
  scale:0.6
}}
/>
</motion.div>


<motion.div id='ani3'
animate={{
  y:500,
  opacity:1
}}
transition={{
  
  duration:.4
}}>

<motion.img
src='img/ani3.jpg'
className='ani3'
width={350}
drag
dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
animate={{
  x:50,
  y:40,
  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
}}
transition={{
  delay:1,
  duration: 2
}}/>
</motion.div>
</div>




 */}



    </div>
  )
}

export default Description
