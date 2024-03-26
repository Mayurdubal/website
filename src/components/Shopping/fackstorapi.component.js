import { useEffect, useState } from "react";
import './fackApi.css';

export function FackStoreApi() {

    const [product, setproduct] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(function (response) {
                return response.json();

            })
            .then(function (data) {
                setproduct(data);
            })
    }, []);

    return (
        <div className="container-fluid m-3">
            <h1> Shooping App</h1>

            <div className="d-flex flex-wrap">

                {
                    product.map(item =>
        <div className="card m-3 p-3" id="card">
            <img src={item.image} className="card-img-top" height="300px"/> 
            <div>
<dl>
    <dt>Title</dt>
    <dd>{item.title}</dd>
    
    <dt>Price</dt>
    <dd>{item.price}</dd>

    <dt>Reating</dt>
    <dd>{item.rating.rate}</dd>

    <dt>Count</dt>
    <dd>{item.rating.count}</dd>
</dl>

</div>

<div className=" table-hover">
 <button className="btn btn-primary w-100">Buy Product </button>

         </div>
            
            </div>

            )
    
}

        </div>


{/* <table className='table table-hover'>
<thead>
    <th>title</th>
    <th>Price</th>
    <th>Rating</th>
    <th>Count </th>
    <th>image</th>
</thead>

<tbody>
    {

        product.map(item=>
            <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.rating.rate}</td>
                <td>{item.rating.count}</td>
                <td><img src={item.image} height="100px"/></td>
            </tr>
            )
    }
</tbody>

</table> */}
    </div >

)
}