import { imacModels } from "../Assets/index"


const IMac = () => {
  return (
    <div className="h-full grid grid-cols-2 grid-rows-2 gap-1 md:gap-4 bg-white">
      <div className="h-full col-span-1 row-span-2 flex flex-col items-center md:justify-center justify-start
      pt-8 bg-gray-50"
      >
        <img 
            src="src/Assets/images/imac/green-side.jpg" 
            alt="Imac" 
            className="2xl:max-w-full xl:max-w-36 max-w-24"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img 
            src="src/Assets/images/imac/green-front.jpg" 
            alt="Imac" 
            className="2xl:max-w-full xl:max-w-52 max-w-48"
        />
      </div>
      <div className="bg-gray-50 col-span-1 row-span-1 flex items-center justify-center p-4">
        <img 
            src="src/Assets/images/imac/green-back.jpg" 
            alt="Imac" 
            className="2xl:max-w-full xl:max-w-52 max-w-48"
        />
      </div>
    </div>
  )
}

export default IMac
