import React,{useState} from "react";
import Imagesearch from "./Component/Imagesearch";
import ImageList from "./Component/ImageList";
import "./App.css";


const App = () => {

    const [images, setImages] = useState([]);

    return( 
        <div className="image-search">
            <Imagesearch setImages={setImages}/>
            <div className="ImageList">
               <ImageList images={images} />
            </div>
        </div>
    )
}

export default App;