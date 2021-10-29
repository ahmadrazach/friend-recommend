import { useState } from "react";
const Checker=()=>{
    const [status, setStatus] = useState(false);
    function ShowM1()
    {
        return (<img className="object-contain h-80 w-56" src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />);
    }
    function HideImage()
    {
        return <div>Yep</div>;
    }
    return(
<div  className="min-h-screen flex flex-row bg-gray-900">
  <div  className="flex flex-col w-80 bg-gray-600  overflow-hidden">
    <div  className="flex items-center px-4 pt-4">
      <h1  className="text-1xl text-white">Dust Analysis</h1>
    </div>
    <ul  className="flex flex-col py-4">
      <li  className="flex flex-row items-center justify-between h-12 px-4">
      <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="green">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <button onClick={() => setStatus(!status)}>
      {`${status ?'on' : 'off'}`}
    </button>
          <span  className="text-sm font-medium text-white ">Matching Markers</span>
          
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      </li>
      <li  className="flex flex-row items-center justify-between h-12 px-4">
      <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="green">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <button onClick={() => setStatus(!status)}>
      {`${status ?'on' : 'off'}`}
    </button>
          <span  className="text-sm font-medium text-white ">Matching Markers</span>
          
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      </li>
      <li  className="flex flex-row items-center justify-between h-12 px-4">
      <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="green">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <button onClick={() => setStatus(!status)}>
      {`${status ?'on' : 'off'}`}
    </button>
          <span  className="text-sm font-medium text-white ">Matching Markers</span>
          
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      </li>
      <li  className="flex flex-row items-center justify-between h-12 px-4">
      <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="green">
        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
    </svg>
    <button onClick={() => setStatus(!status)}>
      {`${status ?'on' : 'off'}`}
    </button>
          <span  className="text-sm font-medium text-white ">Matching Markers</span>
          
          <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
  <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm9 4a1 1 0 10-2 0v6a1 1 0 102 0V7zm-3 2a1 1 0 10-2 0v4a1 1 0 102 0V9zm-3 3a1 1 0 10-2 0v1a1 1 0 102 0v-1z" clipRule="evenodd" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg"  className="h-5 w-5" viewBox="0 0 20 20" fill="#F9FAFB">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
        <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      </li>
     <li className="flex flex-row items-center justify-between h-12 px-4 text-white">
         User Configuration
     </li>
    
    
      
    </ul>
  </div>
  
  <div className="w-full h-screen  flex justify-center items-center">
  <div className=" w-96 h-96 relative z-0">
    
    <ShowM1/>
    <div class="absolute inset-0 flex justify-center items-center z-10">
      <img className="object-contain h-80 w-56" src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png" />
    </div>  
    <div className="absolute inset-0 flex justify-center items-center z-10">
      <img className="object-contain h-80 w-56" src="https://pngimg.com/uploads/triangle/triangle_PNG30.png" />
    </div>
  
</div>
</div>

</div>
    );
    
}

export default Checker;