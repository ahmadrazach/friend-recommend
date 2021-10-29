import {
    Link
  } from "react-router-dom";

const Header=()=>{
    return (
    <div className="flex px-4 py-1 bg-gray-500 justify-between items-end">
        <div className="text-white capitalize">ADD NOTATION</div>
        <div className="text-white capitalize">RETAKE SCAN</div>
    </div>
    )
}

export default Header;