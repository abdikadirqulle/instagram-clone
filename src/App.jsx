import React from 'react'
import Header from './component/Header'

 const App = () => {
  return (
    <div className="flex">
      {/* side Bar */}
      <div className="w-[15.5rem] h-full   border border-1 border-r-[#DBDBDB] ">
        <Header />
      </div>
      {/* center Bar */}
      <div className="bg-blue-300 w-full ">
        fff
      </div>
      {/* right side Bar */}
      <div className="bg-gray-300">
        <h1>Abdikadir qulle</h1>
      </div>
    </div>
  );
}



export default App