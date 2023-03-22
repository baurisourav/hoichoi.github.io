
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


import React from 'react'

export default function Rows({title,movie}) {

 
  function ele(val){

    return(
        <>
                
        
      
       
        <img src={val.link} className="image"/>
           
       
       
      
           
            
        
 
        
       
        </>
        

    )
    
}






    const responsive = {
        // superLargeDesktop: {
        //   // the naming can be any, depends on you.
        //   breakpoint: { max: 4000, min: 3000 },
        //   items: 7
        // },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        // tablet: {
        //   breakpoint: { max: 1024, min: 464 },
        //   items: 2
        // },
        // mobile: {
        //   breakpoint: { max: 464, min: 0 },
        //   items: 1
        // }
      };
      

  return (
    <>
    <div><h1>{title}</h1></div>
<Carousel responsive={responsive}>
        {/* <div>Item 1</div>
        <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
       { movie.map((ele))}
      
        
      </Carousel>
    </>
    
  )
}
