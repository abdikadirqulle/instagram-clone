import React from 'react'
import Header from './component/Header'
import Feed from './component/Feed';

 const App = () => {
  return (
    <div className="grid grid-cols-6 ">
      {/* side Bar */}
      <div className="  fixed border border-1 border-r-[#DBDBDB] ">
        <Header />
      </div>
      {/* center Bar */}
      <div className="  ml-[15rem]  h-screen col-span-5 ">
       
        <Feed />
      </div>

      {/* right side Bar */}
    </div>
  );
}



export default App