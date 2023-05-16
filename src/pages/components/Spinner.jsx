import {useState, React} from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import {PropagateLoader, RingLoader, ScaleLoader} from 'react-spinners';
import {css} from "@emotion/react";
import '../../App.css'

const override = css `
  display: block;
  margin: 0 auto;
  border-color: yellow;
`;

const Spinner = () => {

  let[loading, setLoading] = useState(true);

  return (
    
    <div className='welcome' >
      <RingLoader color='blue' Loading={loading} css= {override} size={250} className='ringLoader'/>
      {/* <ClipLoader color={"#ffff00"} Loading ={loading} css={override} size={150}/>
      <PropagateLoader color= "#ffffff" Loading={loading} css= {override} size={15} />
      <ScaleLoader color='black' Loading={loading} css={override} size={500} className='scaleLoader'/> */}
      
    </div>
  )
}

export default Spinner