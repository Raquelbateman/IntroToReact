import {useState} from 'react';
import { LuGhost } from "react-icons/lu";
import { FaGhost } from "react-icons/fa6";


const Like = () => {

    const [changeImage, setChangeImage] = useState(false)
    const toggleImg = () => {
        setChangeImage(!changeImage)
    }
  return (
    <>
            {changeImage ? <LuGhost size={80} onClick={toggleImg}/> : <FaGhost size={80} onClick={toggleImg}/>}
    </>
  )
}

export default Like