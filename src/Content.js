import { apiKey } from './APIcall';
import React, {useState} from 'react';
import axios from "axios";

const Content = () => {
    
     const [searchTerm,setSearchTerm] = useState("");
     const [data, setData] = useState({});
     const onSearchHandler = () => {
        if(!searchTerm){
          return;}
          
         axios ({
            method: "GET",
            url: `http://www.omdbapi.com/?t=${searchTerm}&plot=full&&apiKey=${apiKey}`,  
         })
          .then((response) =>{
            setData(response.data)
            console.log(response.data);
         });
        };
  return (
    <div className="h-screen   bg-slate-800 border-indigo-950  w-full pt-9 ">
      <div className='w-full justify-center flex items-center'>
        <input type="text" 
               placeholder='Watch the latest movie...' 
               className="text-{90px} 
               mr-5 outline-none rounded-xl p-2 w-[43%]" 
               value={searchTerm}
               onChange={(e)=>setSearchTerm(e.target.value)} 
               /> 
           
           
           <button className='border
                             rounded-md p-3 
                             font-bold text-zinc-300
                             hover:text-sky-400
                             w-30' 
                       onClick={onSearchHandler}   >Search here</button>
        
        </div>
        { Object.keys(data).length >0&&
            <div className="mt-10 w-full flex items-center justify-items-center text-white font-extrabold flex-wrap">
           
                <div> <img src={data.Poster} alt="Type in the inputbox to search for you movie" className='mb-9 border border-amber-600 rounded-lg ml-20 size'/>
                      </div>
                    <div className="pl-5 rounded-md bg-zinc-600 p-2 ml-8 pr-7">
                        <h2 className="flex items-center justify-items-center pl-5 "> Title : {data.Title} </h2>

                        <div className="pt-5 ml-7" />
                        <p className="flex items-center justify-items-center "> Genre: {data.Genre}</p>
                        <p className="flex items-center justify-items-center "> Actors: {data.Actors}</p>
                        <p className="flex items-center justify-items-center "> Rating: {data.Rated}</p>
                        <p className="flex items-center justify-items-center "> Writer: {data.Writer}</p>
                        <p className="flex items-center justify-items-center "> Year of Release: {data.Released}</p>
                        <p className="flex items-center justify-items-center "> Awards: {data.Awards}</p>
                        <p className="flex items-center justify-items-center "> Language: {data.Language}</p>
                    </div>
            
            </div>}
      </div>
      
  )
}

export default Content

