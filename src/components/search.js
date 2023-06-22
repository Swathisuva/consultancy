import React, { useState, useEffect } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({});

  const getUserData = async () => {
    const res = await axios.get("/getData", {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.data);
    if (res.data.status === 201) {
      console.log("data gettt");
      await setData(res.data.data);
    } else {
      console.log("error");
    }
  };

  const dltUser = async (id) => {
    console.log(id);
    const res = await axios.delete(`/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (res.data.status === 201) {
      getUserData();
    } else {
      console.log("error");
    }
  };

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
    getUserData();
  }, []);

  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input
            style={{
              height: "40px",
              paddingLeft: "100px",
              width: "500px",
              border: "2px solid black",
              borderRadius: "15px",
              position: "relative",
              left: "20px",
              marginBottom:"20px"
            }}
            id="searchInput"
            type="text"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
          />
        </div>
      </div>
      <div className="card-container">
        {data
          .filter((val) => {
            if (searchTerm === "") {
              return val;
            } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
              console.log(val);
              return val;
            }
          })
          .map((el, i) => (
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
          ))}
      </div>
    </>
  );
};

export default Search;