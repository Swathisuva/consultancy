import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import axios from "axios"
import '../HomeAD.css'

const Midiset = () => {
    const [data, setData] = useState([]);
    
    const getMidisetData = async () => {
        const res = await axios.get("/getMidiset", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        if (res.data.status == 201) {
            console.log("data gettt");
            setData(res.data.data)
        } else {
            console.log("error")
        }

    }

    useEffect(() => {
        getMidisetData()
    }, [])
    return(
        <>
        <div className='container mt-2'>

            <div className='d-flex justify-content-between align-items-center mt-5 card-container'>

                {data.length > 0 ? data.map((el, i) => {
                    return (
                        <Card className="card mb-3" key={i}>
                            <Card.Img variant="top" src={`/uploads/${el.productimg}`} className="card-img" />
                            <Card.Body className="card-body">
                                <Card.Title className="card-title">Product Name: {el.productname}</Card.Title>
                                <Card.Text className="card-price">
                                    Price: {el.productprice}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                        )
                }) : ""}

            </div>

        </div>
    </>
    )
}
 
export default Midiset;