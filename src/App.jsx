import Controls from "./components/Controls"
import MacBook from "./components/MacBook"
import Iphone from "./components/Iphone"
import Home from "./components/Home"
import Watch from "./components/Watch"
import IMac from "./components/IMac"
import Navbar from "./components/Navbar"
import PageTransition from "./components/PageTransition"
import { useState } from "react"; 


const App = () => {

  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0)

  // function to handle active folder/page
  const handlePageClick = (pageIndex) => {
    setActivePage(pageIndex)
  }


  // function to handle zoom-in and out
  const toggleZoom = () => {
    setFrameZoom(!frameZoom)
  }

  const resetPage = () => {
    setActivePage(0)
  }

  return (
    <div className="w-full h-screen grid place-items-center">
      <div className={`${
        frameZoom && "min-w-[97vw] min-h-[97vh]"
      }w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 
      rounded-2xl resize overflow-auto relative transition-all duration-100 flex`}
      >
        <Navbar 
          activePage={activePage}
          handlePageClick={handlePageClick}
        />
        <Controls 
          toggleZoom={toggleZoom}
          frameZoom={frameZoom}
          resetPage={resetPage}
          activePage={activePage}
        />
        <div className="flex-grow">
     
          <PageTransition activePage={activePage}>
            <Home onNavigate={handlePageClick}/> 
            <Iphone />
            <MacBook />
            <Watch />
            <IMac /> 
          </PageTransition>
        </div>
      </div>
    </div>
  )
}

export default App