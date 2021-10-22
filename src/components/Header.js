import {
    Link
  } from "react-router-dom";

const Header=()=>{
    return (
    <div className="flex px-4 py-1 bg-light-blue-500 justify-between items-center">
        <Link to="/">
        <div className="text-white capitalize">Friend Recommend</div>
        </Link>
        <div className="">
            <img 
            className="rounded-full h-8"
            alt="user avatar"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFdk7lOBYz96A/profile-displayphoto-shrink_400_400/0/1625083720660?e=1640217600&v=beta&t=OzR9OIQfsiFdMSAK5l_ZSwUvd66fIChbOoMklc5i21M"/>
        </div>
    </div>
    )
}

export default Header;