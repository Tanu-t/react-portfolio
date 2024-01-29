import './Intro.scss'
import { init } from 'ityped'
import { useEffect ,useRef} from 'react'

function intro() {
  const textRef= useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: false,
      backDelay:1500,
      backSpeed:60, 
      strings: [ 'Developer', 'Designer'],
     });
  },[])

  return(
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src="assests/myimage.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi, I'm</h2>
          <h1>Tanu Tyagi</h1>
          <h3>I am<span ref= {textRef}> </span></h3>
        </div>
        <a href="#portfolio">
          <img src="assests/images.png" alt="" />
        </a>
      </div>
    </div>
  )
}

export default intro
