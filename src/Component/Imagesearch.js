import React,{useState, useEffect} from "react";
import axios from "axios";

const Imagesearch = ({setImages}) =>{
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(()=>{
        implementSearch()
    },[])


    async function implementSearch(){

        try{
                const response = await axios.get("https://api.unsplash.com/search/photos",{
                    params: {
                        query :searchTerm || "random"
                    },
                    headers: {
                        Authorization : "Client-ID UJXaf_sbwq2GjOgYQ5KMKXiXX5FtLSKLHh0zlorAy4U"
                    }
                })
            setImages(response.data.results)
        }

        catch(err){
            console.log(err)
        }
    }

    return(
        <div className="Navbar">
            <h1>Image Bazar Clone</h1>
            <div className="search-section">
                <input type="text"  placeholder="Enter something..." onChange={e => setSearchTerm(e.target.value)} />
                <button onClick={implementSearch}>Search</button>
            </div>
        </div>
    )
}

export default Imagesearch;











    
