//one way binding 

export function DataBindingComponent(){
    var username="john";
    return(
        <div className="container-fluid">
            <h2>One Way </h2>
            User Name: <input type="text" value={ username}/>

            <p>Hello! {username}</p>
        </div>
    )
}









// export function DataBindingComponent()
// {
//     var course=[
//         {Title:"CLOTHS",poster:"./box1_image.jpg",Topics:["Jence","towels"]},
//         {Title:"STUDY TABLE",poster:"./box3_image.jpg",Topics:["Chair","Table","books"]},
//         {Title:"MOBILE PHONE'S",poster:"./box4_image.jpg",Topics:["Oppo","Samsunge"]}
//     ,  {Title:"HOME",poster:"./box2_image.jpg",Topics:["Peast","Brash","Trimmer"]}
//     ]


// return(
//     <div className="container-fluid">
//       <h2>courses</h2>
//       <div className="d-flex flex-wrap">
//         {
//             course.map(course=>
//                 <div className="card m-3 p-3">
//                     <img src={course.poster} className="card-img-top" height='150px' />
//                     <div className="card-header">
//                         <h3>{course.Title}</h3>
//                         </div>
// <div className="card-body">
//     <ul>
//         {
//             course.Topics.map(Topic=>
//                 <li>{Topic}</li>
//                 )
//         }
//     </ul>
//     </div>
//     <div className="card-footer">
//         <button className="btn btn-primary w-100">Buy Product </button>
//         </div > 
//                </div>
//                 )
//         }

//       </div>

//     </div>
// )
// }






// nested Data
//   



// array of object Databinding
//  export function DataBindingComponent() {

//     var product=[
//         {Name:"Tv",Pirce:420000,stock:true},
//         {
//             Name:"mobile",Pirce:400000,stock:false
//         },
//         {Name:"Nike casuals",Pirce:200000,stock:true}
//     ];
//     return(
//         <div className="container-fluid">
//             <h2>product Table</h2>
//             <table className="table table-hover">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Price</th>
//                         <th>Stock</th>
//                         <th>Action</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         product.map(product=>
//                             <tr key={product.Name}>
//                                 <td>
//                                     {product.Name}</td>
//                                     <td>{product.Pirce}</td>
//                                     <td>{(product.stock==true)?"Available":"out of stock" }</td>
//                                     <td>
//                                         <button className="btn btn-info"><span className="bi bi-eye-fill"></span></button>
//                                         <button className="btn btn-warning ms-2"><span className="bi bi-pen"></span></button>
//                                         <button  className="btn btn-danger ms-2"><span className="bi bi-trash"></span></button>
//                                     </td>
                                 

//                             </tr>
//                             )
//                     }
//                 </tbody>
//             </table>
//         </div>
//     )
//  }
 



 //Array Type
 //{
//     var categories = ["All","electronics", 'footwear', 'fashion']
//     return (
//         <div className="container-fluid">
//             <h2>product Details</h2>
//             <ol>{
//                 categories.map(category =>
//                     <li key={category}>{category}</li>
//                 )

//             }

//             </ol>
//             <select>
//                 {
//                     categories.map(category =>
//                         <option >{category}</option>
//                     )
//                 }
//             </select>
//             <ul className="list-unstyled">
//                 {
//                     categories.map(category=>
//                         <li><input type="checkbox"/>{category}</li>)
//                 }
//             </ul>
//             <div>
//                 {
//                     categories.map(category=>
//                         <div key={category}>
//                             <button className="w-25" >{category}</button>
                            
//                            </div>  )
//                 }
//             </div>

//         </div>
//     )
// }









//  {
//     var product = {
//         Name: "Oppo Mobile",
//         Price: "490000",
//         Stock: true
//     }
//     return (
//         <div className="container-fluid">
//             <h2>product details..</h2>
//             <dl>
//                 <dt>Name</dt>
//                 <dd>{product.Name}</dd>
//                 <dd><input type="text" value={product.Name} /></dd>
//                 <dt>Price</dt>
//                 <dd>{product.Price}</dd>
//                 <dt>Stock</dt>
//                 <dd>{(product.Stock == true) ? "Available" : "out of Stock"}</dd>
//             </dl>

//         </div>
//     )
// }