// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import { NavLink } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
// import axios from "axios"
// import './HomeAD.css';

// const HomeAD = () => {

//     const [data, setData] = useState([]);
//     const [editing,setEditing]=useState(false);
//     const getUserData = async () => {
//         const res = await axios.get("/getData", {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.data.status == 201) {
//             console.log("data gettt");
//             setData(res.data.data)
//         } else {
//             console.log("error")
//         }

//     }

//     const dltUser = async(id)=>{
//         console.log(id)
//         const res = await axios.delete(`/${id}`, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.data.status == 201) {
//             getUserData()

//         } else {
//             console.log("error")
//         }
//     }


//     // const edtUser = async(id, name, price)=>{
//     //     console.log(id)
//     //     const res = await axios.put(`/${id}`, {

//     //         name: name,
//     //         price: price

//     //     }, {
//     //         headers: {
//     //             "Content-Type": "application/json"
//     //         }
//     //     });
//     //     if (res.data.status == 201) {
//     //         console.log("object");
//     //         getUserData()

//     //     } else {
//     //         console.log("error")
//     //     }
//     // }


//     useEffect(() => {
//         getUserData()
//     }, [])

//     return (
//         <>
//             <div className='container mt-2'>
//                 <h2 className='text-center mt-2'>Image Upload</h2>

//                 <div className='text-end'>
//                     <Button variant="info"><NavLink to="/register" className="text-decoration-none text-light">Add Image</NavLink></Button>
//                 </div>

//                 <div className='d-flex justify-content-between align-items-center mt-5 card-container'>

//                     {data.length > 0 ? data.map((el, i) => {
//                         return (
//                             <Card className="card mb-6" key={i}>
//                             <Card.Img variant="top" src={`${el.image}`} className="card-img" />
//                             <Card.Body className="card-body">
//                               <Card.Title className="card-title">Product Name: {el.name}</Card.Title>
//                               <Card.Text className="card-price">
//                                 Price: {el.price}
//                               </Card.Text>
//                               <Button variant="primary" onClick={() => dltUser(el.id)} className="card-button">Delete</Button>
//                               <Button variant="primary" onClick={() => edtUser(el.id)} className="card-button">Edit</Button>


//                             </Card.Body>
//                           </Card> 
//                             )
//                     }) : ""}





//                 </div>

//             </div>
//         </>
//     )
// }

// export default HomeAD;


// import React, { useEffect, useState } from 'react'
// import Button from 'react-bootstrap/Button';
// import { NavLink } from 'react-router-dom'
// import Card from 'react-bootstrap/Card';
// import axios from "axios"
// import './HomeAD.css';

// const HomeAD = () => {

//     const [data, setData] = useState([]);
//     const [editing,setEditing]=useState(false);
//     const getUserData = async () => {
//         const res = await axios.get("/getData", {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.data.status == 201) {
//             console.log("data gettt");
//             setData(res.data.data)
//         } else {
//             console.log("error")
//         }

//     }

//     const dltUser = async(id)=>{
//         console.log(id)
//         const res = await axios.delete(`/${id}`, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.data.status == 201) {
//             getUserData()

//         } else {
//             console.log("error")
//         }
//     }


//     const edtUser = async(id, name, price)=>{
//         console.log(id)
//         const res = await axios.put(`/${id}`, {

//             name: name,
//             price: price

//         }, {
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         });
//         if (res.data.status == 201) {
//             console.log("object");
//             getUserData()

//         } else {
//             console.log("error")
//         }
//     }


//     useEffect(() => {
//         getUserData()
//     }, [])

//     return (
//         <>
//             <div className='container mt-2'>
//                 <h2 className='text-center mt-2'>Image Upload</h2>

//                 <div className='text-end'>
//                     <Button variant="info"><NavLink to="/register" className="text-decoration-none text-light">Add Image</NavLink></Button>
//                 </div>

//                 <div className='d-flex justify-content-between align-items-center mt-5 card-container'>

//                     {data.length > 0 ? data.map((el, i) => {
//                         return (
//                             <Card className="card mb-6" key={i}>
//                             <Card.Img variant="top"className="card-img" />
//                             <Card.Body className="card-body">
//                               <Card.Title className="card-title">Product Name: {el.name}</Card.Title>
//                               <Card.Text className="card-price">
//                                 Price: {el.price}
//                               </Card.Text>
//                               <Button variant="primary" onClick={() => dltUser(el.id)} className="card-button">Delete</Button>
//                               <Button variant="primary" className="card-button"><NavLink to={`edit/${el.id}`} className="text-decoration-none text-light">Edit</NavLink></Button>


//                             </Card.Body>
//                           </Card> 
//                             )
//                     }) : ""}





//                 </div>

//             </div>
//         </>
//     )
//     function handleEdit(id, name, price) {
//         setEditing(true);

//     }
// }

// export default HomeAD;

import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { NavLink } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import axios from "axios"
import './HomeAD.css';

const HomeAD = () => {

    const [data, setData] = useState([]);
    const [editing, setEditing] = useState(false);
    const [editedData, setEditedData] = useState({});

    const getUserData = async () => {

        const res = await axios.get("/getData", {

            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status == 201) {
            console.log("data gettt");
            console.log(res.data)
            setData(res.data.data)
        } else {
            console.log("error")
        }
    }

    const dltUser = async (id) => {
        console.log(id)
        const res = await axios.delete(`/${id}`, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status == 201) {
            getUserData()
        } else {
            console.log("error")
        }
    }

    const edtUser = async (id, name, price,avail) => {
        console.log(avail)
        const res = await axios.put(`/${id}`, {

            name: name,
            price: price,
            avail:avail

        }, {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status == 200) {
            console.log("edittt");
            getUserData()
            setEditing(false)
            setEditedData({})
        } else {
            console.log(res.data)
            console.log("error")

        }
    }

    useEffect(() => {
        getUserData()
    }, [])

    return (
        <>
            <div className='container mt-2'>
                <h2 className='text-center mt-2'>Image Upload</h2>

                <div className='text-end' >
                    <Button variant="info"style={{marginTop:70}}><NavLink to="/register" className="text-decoration-none text-light">Add Image</NavLink></Button>
                </div>
                <div className='text-start'>
                    <Button variant="info"><NavLink to="/bulkupload" className="text-decoration-none text-light">Bulk Upload</NavLink></Button>
                </div>

                <div className='d-flex justify-content-between align-items-center mt-5 card-container'>
                    {data.length > 0 ? data.map((el, i) => {
                        return (
                            <Card className="card mb-6" key={i}>
                                <Card.Img variant="top" src={`/uploads/${el.image}`} className="card-img" />
                                <Card.Body className="card-body">
                                    {editing && editedData.id === el.id ? (
                                        <form onSubmit={() => edtUser(editedData.id, editedData.name, editedData.price, editedData.avail)}>
                                            <div className="mb-3">
                                                <label htmlFor="name" className="form-label">Product Name</label>
                                                <input type="text" className="form-control" id="name" value={editedData.name} onChange={(e) => setEditedData({ ...editedData, name: e.target.value })} />
                                            </div>
                                            <div className="mb-3">
                                                <label htmlFor="price" className="form-label">Price</label>
                                                <input type="text" className="form-control" id="price" value={editedData.price} onChange={(e) => setEditedData({ ...editedData, price: e.target.value })} />
                                            </div>
                                            <br></br>
                                            <div className="mb-3">
                                                <label htmlFor="avail" className="form-label">Availability</label>
                                                <input type="text" className="form-control" id="avail" value={editedData.avail} onChange={(e) => setEditedData({ ...editedData, avail: e.target.value })} />
                                            </div>
                                            {/* <div className="mb-3">
                                                <label htmlFor="image" className="form-label">Image URL</label>
                                                <input type="text" className="form-control" id="image" value={editedData.image} onChange={(e) => setEditedData({ ...editedData, image: e.target.value })} />
                                            </div> */}
                                            <Button type="submit" variant="primary" className="me-2" onClick="window.location.href=window.location.href">Save</Button>
                                            <Button variant="secondary" onClick={() => { setEditing(false); setEditedData({}); }}>Cancel</Button>
                                        </form>
                                    ) : (
                                        <>
                                            <h5 className="card-title">{el.name}</h5>
                                            <p className="card-text">{`Price: ${el.price}`}</p>
                                            <p className="card-text">{`Availability: ${el.availability}`}</p>
                                            <div className="d-flex justify-content-end">
                                                <Button variant="info" className="me-2" onClick={() => { setEditing(true); setEditedData({ id: el.id, name: el.name, price: el.price,availability:el.avail }) }}>Edit</Button>
                                                <Button variant="danger" onClick={() => dltUser(el.id)}>Delete</Button>
                                            </div>
                                        </>
                                    )}
                                </Card.Body>
                            </Card>
                        )
                    }) : (
                        <p>No Images Found</p>
                    )}
                </div>
            </div>
        </>
    )
}

export default HomeAD;