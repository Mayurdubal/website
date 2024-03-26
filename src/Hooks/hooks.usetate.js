import { useState } from "react";

export function Hooks(){

    const [Name, setName]=useState(" ");
    const [Price ,setPrice] =useState(0);
    const [City , setCity]=useState("");
    const [Stock, setStock]=useState(false);

    function Namechange(e){
        setName(e.target.value);
    }

    function Pricechange(e){
        setPrice(e.target.value);
    }

    function Citychange(e){
        setCity(e.target.value);
    }

    function Stockchange(e){
        setStock(e.target.value);
    }
return(
    <div className="container-fluid">
        <div className="row">
            <div className="col-3">
                <dl>
                    <dt>Name</dt>
                    <dd><input onChange={Namechange} type="text"/></dd>
                    <dt>price</dt>
                    <dd><input   onChange={Pricechange} type="number"/></dd>
                    <dt>City</dt>
                    <dd>
                        <select  onChange={Citychange}>
                            <option>Delhi</option>
                            <option>Hydarbad</option>
                        </select>
                    </dd>
                    <dt>Stock</dt>
                    <dd className="form-switch"><input onChange={Stockchange} type="checkbox" className="form-check-input"/>Available</dd>
 
                </dl>
            </div>
            <div className="col-9">
                <h2>Details</h2>
                <dl>
                    <dt>Name</dt>
                    <dd>{Name}</dd>
                    <dt>Price</dt>
                    <dd>{Price}</dd>
                    <dt>City</dt>
                    <dd>{City}</dd>
                    <dt>Stock</dt>
                    <dd>{(Stock==true )?"Avaialable":"out of Stock"}</dd>
                </dl>
            </div>

            </div>
    </div>
)

}
// const [userName, SetuserName] =useState(" devid");

// function HandelUserName( e ) {
//   SetuserName(e.target.value);

// }
//    return(
//     <div className="container-fluid">
//         <h2>Register user</h2>
//         <dl>
//             <dt>User Name</dt>
//             <dd><input type="text" onKeyUp={HandelUserName} /></dd>
//         </dl>
//         <p>Hello ! {userName}</p>
//     </div>
// )
// }







//    const [userName, SetuserName]= useState("Mayur");   


//     return(
//         <div className="container-fluid">
//             <h2>One Way </h2>
//             user Name : <input type="text" value={userName}/>

//             <p>
//                 Hello! {userName}
//             </p>

//         </div>
//     )
// }