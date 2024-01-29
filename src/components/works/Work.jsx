import { useState } from 'react';
import './Work.scss'


    


function work() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const data = [
    {
      id: "1",
      icon: "assets/mobile.png",
      title: "Web Design",
      desc:
        "I usually work with design systems and ui-component based react projects and make complex and beautiful components. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "assets/globe.png",
      title: "Wordpress Application",
      desc:
        "Easy to make website on wordpress.if you have urgently need",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
   
  ];
  const handleClick=(way)=>{
     way === "left" ? setCurrentSlide(currentSlide>0? currentSlide-1 :2) : 
     setCurrentSlide(currentSlide<data.length-1 ? currentSlide+1 : 0)
  }
  
  return (
    <div className='works' id='works'>
      <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
      {data.map((d) => (
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src={d.icon} alt="" />
                </div>
                <h2>{d.title}</h2>
                <p>{d.desc}</p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930" alt="" />
            </div>
          </div>
           
        </div>
          ))}
      </div>

      <img src="assests/arrow.png" className='arrow left' alt="" onClick={()=>handleClick("left")}/>
      <img src="assests/arrow.png" className='arrow right' alt="" onClick={()=>handleClick("")}/>
    </div>
  )
}

export default work
