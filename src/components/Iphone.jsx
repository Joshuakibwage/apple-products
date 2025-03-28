import { iphoneModels } from "../Assets/index"

const Iphone = () => {
  return (
    <div className="flex w-full h-full flex-col items-center justify-around bg-white p-8">
       
      <h3 className="2xl:text-4xl xl:text-3xl md:text-2xl font-semibold text-gray-800 ">
        Which iphone is right for you?
      </h3>
      <div className="flex justify-between w-full">
        {
            iphoneModels.map((iphone,idx) => (
                <div key={idx} className="flex flex-col items-center justify-between gap-y-2">
                    <img 
                        src={iphone.img} 
                        alt={iphone.name}
                        className="2xl:w-72 lg:w-64 sm:w-48 md:h-64 sm:h-48 object-contain "
                    />
                    <a href="#" className="2xl:text-2xl xl:text-xl lg:text-base text-sm font-semibold 
                    mt-4 text-gray-800"
                    >
                        {iphone.name}
                    </a>
                    <p className="2xl:text-lg xl:text-base lg:text-sm text-xs text-gray-700 mt-2">
                        {iphone.description}
                    </p>
                    <span className="2xl:text-base xl:text-sm lg:text-xs text-blue-400 mt-2">
                        {iphone.price}
                    </span>
                    <button 
                        type="button"
                        className="text-sm mt-4 px-4 bg-blue-400 text-white rounded-full cursor-pointer py-2 "
                    >
                        Buy
                    </button>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default Iphone
