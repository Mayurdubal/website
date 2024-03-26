import { useEffect, useState } from "react";
import './nasa.component.css';
export function NasaComponent()
{
    const [mars,setMars]
=useState([]);
const [photos,stePhotos]=useState([]);

useEffect(()=>{
    
  fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
  
  .then(function(response){
    return response.json();
  })
  
  .then(function(data){
    setMars(data.photos);
  })

},[]);

 
    return(

        <div className="container-fluid m-3">
            <h1>Mars Rover Photos </h1>
           
           {/* This Data show a form of   */}
           <div className="d-flex flex-wrap">
            {
                mars.map(item=>
                    <div className="card m-2 p-2" id="card">
                        <img src={item.img_src} className="card-img-top" height="200px" />
                        <div>
                            <dl>
                                <dt>Camera</dt>
                                <dd>{item.camera.full_name}</dd>
                                <dt>Rover</dt>
                                <dd>{item.rover.name}</dd>
                            </dl>
                        </div>
                    </div>
                    )
            }

           </div>
           
           
           
           
           
           
            {/* <table className='table table-hover'>
                <thead>
                    <th>Photos Id</th>
                    <th>Preview</th>
                    <th>Camera</th>
                    <th>Rover</th>
                </thead>
                <tbody>
                {
                    mars.map(item=>
                        <tr key={item.id}>
                        <td>{item.id}</td>
                        <td> 
                            <img src={item.img_src} width="100px" height="100px"/>
                            </td>
                        <td>{item.camera.full_name}</td>
                        <td>{item.rover.name}</td>
                        
                        </tr>
                        
                        )
                }
                </tbody>
            </table> */}
        </div>
    )
}