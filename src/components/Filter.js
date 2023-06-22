import React, {useState,useEffect} from "react";
import axios from "axios"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import DisabledContext from "antd/es/config-provider/DisabledContext";
const Filter = () => { 
    const [filter, setFilter] = useState("");
    const [data, setData] = useState([]);

    const getUserData = async () => {
        const res = await axios.get("/getData", {
            headers: {
                "Content-Type": "application/json"
            }
        });
        console.log(res.data.data);
        if (res.data.status == 201) {
            console.log("data gettt");
           await setData(res.data.data)
        } else {
            console.log("error")
        }
    }
    const sendFilterToServer = async (filterValue) => {
        try {
          const res = await axios.post('/filter', { filter: filterValue });
          console.log("ff")
          console.log(res.data.data);
          setData(res.data.data)
        } catch (error) {
          console.error(error);
          
        }
      };
    const dltUser = async(id)=>{
      console.log(id)
      const res = await axios.delete(`/${id}`, {
          headers: {
              "Content-Type": "application/json"
          }
      });
      if (res.data.status === 201) {
          getUserData()
          // console.log("data gettt");
          // setData(res.data.data)
      } else {
          console.log("error")
      }
  }

  const edtUser = async(id)=>{
      console.log(id)
      const res = await axios.put(`/${id}`, {
          headers: {
              "Content-Type": "application/json"
          }
      });
      if (res.data.status === 201) {
          getUserData()
      } else {
          console.log("error")
      }
  }

    useEffect(() => {
        getUserData()
    }, [])
    
return (
  <>
    <div className="templateContainer">
      <div className="searchInput_Container">
      <label for="filter">Filter</label>
<select name="filter" id="filter" onChange={(event)=>{
    setFilter(event.target.value);
    sendFilterToServer(event.target.value);
}}>
    <option name='1000000' value="1000000" key="1000000">Select Filter</option>
  <option name='5000' value="5000" key="5000">Below 5000</option>
  <option name='3000' value="3000" key="3000">Below 3000</option>
  <option name='1000' value="1000" key="1000">Below 1000</option>
  <option name='500' value="500" key="500">Below 500</option>
</select>
      </div>
    </div>
    <div className='d-flex justify-content-between align-items-center mt-5 card-container'>

                    {data.length > 0 ? data.map((el, i) => {
                        return (
                            <Card className="card mb-6" key={i}>
                                <Card.Img variant="top" src={`/uploads/${el.image}`} className="card-img" />
                             

                                <Card.Body className="card-body">
                                    <Card.Title className="card-title">Product Name: {el.name}</Card.Title>
                                    <Card.Text className="card-price">
                                        Price: {el.price}
                                    </Card.Text>
                                    <Button variant="primary" onClick={()=>dltUser(el.id)} className="card-button">Delete</Button>
                                    <Button variant="primary" onClick={()=>edtUser(el.id)} className="card-button">Edit</Button>
                                </Card.Body>
                            </Card>
                            
                            )
                    }) : ""}



                </div>
  </>
)
}


export default Filter;