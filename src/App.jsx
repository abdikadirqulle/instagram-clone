import React from 'react'
import Header from './component/Header'
import Feed from './component/Feed';

 const App = () => {
  return (
    <div className="flex ">
      {/* side Bar */}
      <div className="   border border-1 w-[15.5rem] border-r-[#DBDBDB] ">
        <Header />
      </div>
      {/* center Bar */}
      <div className="    h-screen  ">
        <Feed />
      </div>
    </div>
  );
}



export default App