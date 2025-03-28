import { items } from "../Assets/index"; 

 
 const Home = ({ onNavigate }) => {
   return (
     <section className="w-full h-full grid grid-cols-2 grid-rows-2 gap-4 bg-gray-50">
       
        {
            items.map((item, index) => (
                <div 
                onClick={() => onNavigate(item.pageIndex)}
                key={index} className="flex flex-col flex-grow items-center justify-center bg-white">
                    <span className="text-xl font-bold bg-gradient-to-b from-red-500 to-yellow-300 bg-clip-text 
                        text-transparent tracking-wider mb-12">
                            {item.label}
                    </span>
                    <img 
                        src={item.img} 
                        alt={item.label}
                        className="max-w-[65%] max-h-[65%] object-contain"
                        draggable="false"
                    />  
                </div>
            ))
        }
            
           
     </section>
   )
 }
 
 export default Home
 