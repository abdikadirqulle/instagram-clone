import React from 'react'
import Header from './component/Header'
import Feed from './component/Feed';
import {MenuModel} from './component/model/MenuModel';

 const App = () => {
  return (
    <div className="grid grid-cols-4 ">
      {/* side Bar */}
      <div className=" hidden lg:block h-full z-50 border border-1 xl:w-[15.5rem] w-[5rem] border-r-[#DBDBDB] ">
        <div className='xl:fixed '>

        <Header />
      
        </div>
        
      </div>
      {/* center Bar */}
      <div className="col-span-3">
   
        <Feed />
      </div>
      <MenuModel />
    </div>
  );
}



export default App