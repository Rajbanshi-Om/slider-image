import React,{useState ,useEffect} from 'react'
function Home() {
const [index ,setIndex] = useState(0)
const [index1 ,setIndex1] = useState(1)
const [trans , setTrans] = useState(false)
const [transR , setTransR] = useState(false);
const [activeIndex , setActiveIndex] = useState(0)
 
useEffect(() => {
  if(transR) {
    setTimeout(() => {
      setTransR(false)
    },700)
  }
  
  if(trans ) {
    setTimeout(() => {
      setTrans(false)
      setIndex((index + 1) % images.length );
      setIndex1((index1 + 1) % images.length )
    },800)
  }
}, [trans ,transR])

  const images = [
              { name : 'egypt.png'},
              { name : 'germany.png'},
              { name : 'uk.png'},
              { name : 'usa.png'},
              { name : 'south_korea.png'},
  ]

  const handlePrev = () => {
    setTransR(true)
    setTrans(false)
       const nextIndex = index - 1 ;
       const nextIndex1 = index1 - 1 ;

      if(nextIndex1 < 0){
        setIndex1(images.length - 1);
      } else  {
        setIndex1(nextIndex1)
      }
  
      if(nextIndex < 0){
        setIndex(images.length - 1);
      } else  {
        setIndex(nextIndex)
      }
    

  }
  const handleNext = () => {
    setTrans(true)
    setTransR(false)
  }


  const handleImgClick = (idx) => {
      setActiveIndex(idx)
      if(idx === index ){
        return;
      }
      if(idx < index){
        setIndex(idx)
        setIndex1(idx + 1)
        setTransR(true)
        setTrans(false)
      } else {
        setIndex((idx-1) % images.length );
        setIndex1((idx ) % images.length )
        handleNext();
      }
  }

  return (

    <>
    {images.length > 0  ?   
      <>
        <div className="flex justify-center  space-x-4 mt-16 ">
             <button className="h-auto w-10 bg-yellow-800 font-extrabold text-3xl" onClick={handlePrev}>{"<"}</button>
              <div className="relative  w-96 border-2 h-56 overflow-hidden rounded-xl">
                  <img className={`absolute object-contain z-20 w-full h-full p-4  ${ trans ? 'transition duration-500 ease-linear transform -translate-x-full' : (transR ? 'animate-slideL' : "" )}`} src={images[index].name} alt="" />
                  <img className={`absolute object-contain z-0 w-full h-full  p-4 ${trans ? 'animate-slideR' : transR ? 'transition duration-500 ease-linear transform translate-x-full'  :  '' }`} src={images[index1].name} alt="" />
              </div>
              <button className="h-auto w-10 bg-yellow-800 font-extrabold text-3xl" onClick={handleNext}>{">"}</button>
        </div>



        <div className="flex justify-center space-x-4  mt-8 border-4 w-1/2 mx-auto p-4" >
          {images.map((el ,idx )=> {
            return (
              <div key={el.name+idx+el.name}>
                  <img onClick={() => handleImgClick(idx)} className={`w-20 h-20 border-b-8 pb-4 ${ images[activeIndex] === images[idx] ?  'border-red-900' : 'opacity-70 border-yellow-400'  } `} src={`/${el.name}`} alt="" />
              </div>
            )
          })}
        </div>

      </>  
       : "no images yet"}
      </>
      
  )
    
}

export default Home
