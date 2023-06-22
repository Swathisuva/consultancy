// import { useState, useEffect } from 'react'
// import { Button, Form } from 'react-bootstrap';
// import axios from "axios"
// import { useNavigate, NavLink } from 'react-router-dom';

// const Register = () => {

//   const [megaCategory, setMegaCategory] = useState('');
//   const [subCategory, setSubCategory] = useState('');
//   const [fname, setFname] = useState('');
//   const [file, setFile] = useState('');
//   const [fprice, setFprice] = useState('');
//   const [fsub, setFsub] = useState('');
//   const [avail, setAvail] = useState('');
  
//   const history = useNavigate();

//   const setdata = (e) => {
//     setFname(e.target.value);
//     console.log(e.target.value);
//   }

//   const setSub = (e) => {
//     setFsub(e.target.value);
//     console.log(e.target.value);
//   }

//   const setimgfile = (e) => {
//     setFile(e.target.files[0]);

//     console.log(e.target.files[0])
//   }

//   const setproductprice = (e) => {
//     setFprice(e.target.value);
//     console.log(e.target.value);
//   }
//   const setavailstock = (e) => {
//     setAvail(e.target.value);
//     console.log(e.target.value);
//   }
//   const productdata = async (e) => {
//     e.preventDefault();
//     console.log("fetches")
//     var formData = new FormData();

//     formData.append("photo", file);
//     formData.append("fname", fname);
//     formData.append("fprice", fprice);
//     formData.append("fsub", fsub);
//     formData.append("avail", avail);


//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       }
//     }

//     const res = await axios.post("/register", formData, config);


//     if (res.data.status == 201) {
//       history("/homead")
//     } else {
//       console.log("error")
//     }

//   }

//   function getSubCategories(megaCategory) {

//     switch (megaCategory) {
//       case 'Puresilksarees':
//         return ['Artjacquard', 'Artsilks', 'Artsoftsilks', 'Purejacquard', 'Puresilksarees', 'Puresoftsilk'];
//       case 'Sarees':
//         return ['karizmacotton', 'kovaicotton', 'Linencotton', 'Manipuricotton', 'Negamamcotton', 'Silkcotton'];
//       case 'Women':
//         return ['Kurtis', 'Leggings', 'Lehangaghagra', 'Tops', 'Westernwear', 'Skirt', 'Scarf', 'Chudidharmaterial', 'Dupatta', 'Readymadesuits'];
//       case 'Men':
//         return ['Casualshirts', 'Formalshirts', 'Tshirts', 'Trousers', 'Blazers', 'Shirtanddhotiset', 'Kurta'];
//       case 'Kids':
//         return ['Gownsandfrocks', 'Boyswear', 'Kidswear', 'Bornbabyset', 'Midiset', 'Lehanga', 'Pattupavadaisetreadymade', 'Boyssharvaniset', 'Coatsuit', 'Pantshirt', 'Westernandjean'];
//       case 'Accessories':
//         return ['Clutches', 'Necklaces', 'Handbags', 'Bangles', 'Earrings', 'Sareebelt Odiyaanam'];
//       case 'HomeFurnishing':
//         return ['Bedsheets', 'Mats', 'Towel', 'Curtains', 'Pillowcovers'];

//       default:
//         return [];
//     }

//   }

//   return (
//     <div>
//       <center><h4 style={{ fontFamily: 'monseretto', padding: '10px', marginLeft: '0px', fontSize: '40px' }}>Enter the product Details</h4></center>

//       <select onChange={(e) => setMegaCategory(e.target.value)} style={{ height: '20px', padding: '0px', width: '300px' }}>
//         <option value="">Select a Mega Category</option>
//         <option value="Puresilksarees">PureSilkSarees</option>
//         <option value="Sarees">Sarees</option>
//         <option value="Women">Women</option>
//         <option value="Men">Men</option>
//         <option value="Kids">Kids</option>
//         <option value="Accessories">Accessories</option>
//         <option value="HomeFurnishing">Home Furnishing</option>

//       </select>

//       {megaCategory && (
//         <select onChange={(e) => setSubCategory(e.target.value)} required>
//           <option value="subCategory">Select a Sub Category</option>
//           {getSubCategories(megaCategory).map((subCategory) => (
//             <option key={subCategory} value={subCategory} required>
//               {subCategory}
//             </option>
//           ))}
//         </select>
//       )}

//       {/* Display Selected Categories */}
//       {megaCategory && subCategory && (
//         <div>
//           <br></br>
//           <h4>You Selected:</h4>
//           <h5><pre><p>Mega Category: {megaCategory}         Sub Category: {subCategory}</p></pre></h5>
          
        
//         </div>
//       )}

//       <Form>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Product</Form.Label>
//           <Form.Control type="text" name='fname' onChange={setdata} required/>

//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Product Price</Form.Label>
//           <Form.Control type="text" name='fprice' onChange={setproductprice} class="form-control" required/>

//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Availability</Form.Label>
//           <Form.Control type="text" name='avail' onChange={setavailstock} class="form-control" required/>
//         </Form.Group>
//         <Form.Group className="mb-3" controlId="formBasicPassword" action="/upload" method="post" enctype="multipart/form-data">
//           <Form.Label>Upload it</Form.Label>
//           <Form.Control type="file" name='photo' accept='image/png, image/jpeg, image/jpg' required onChange={setimgfile} />
//         </Form.Group>

//         <Button variant="primary" type="submit" value="Upload"onClick={productdata}><NavLink to="/homead" className="text-decoration-none text-light">Submit</NavLink>

//         </Button>
//       </Form>
//     </div>
//   );
// }

// export default Register;

import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from "axios"
import { useNavigate, NavLink } from 'react-router-dom';

const Register = () => {

  const [megaCategory, setMegaCategory] = useState('');
  const [subCategory, setSubCategory] = useState('');
  const [fname, setFname] = useState('');
  const [file, setFile] = useState('');
  const [fprice, setFprice] = useState('');
  const [fsub, setFsub] = useState('');
  
  const history = useNavigate();

  const setdata = (e) => {
    setFname(e.target.value);
    console.log(e.target.value);
  }

  const setSub = (e) => {
    setFsub(e.target.value);
    console.log(e.target.value);
  }

  const setimgfile = (e) => {
    setFile(e.target.files[0]);

    console.log(e.target.files[0])
  }

  const setproductprice = (e) => {
    setFprice(e.target.value);
    console.log(e.target.value);
  }

  const productdata = async (e) => {
    e.preventDefault();
    console.log("fetches")
    var formData = new FormData();
    console.log(fname)
    console.log(fprice)
    console.log(subCategory)
    console.log(file)
    if(fname==="" || fprice==="" || subCategory==="" || file===""){
      window.alert("Enter all the details")
      
    }
    else{
    formData.append("photo", file);
    formData.append("fname", fname);
    formData.append("fprice", fprice);
    formData.append("fsub", subCategory);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    }
    const res = await axios.post("/register", formData, config);
    // console.log(res);
    if (res.data.status == 201) {
      history("/homead")
    } else {
      console.log("error")
    }
  }
  }

  function getSubCategories(megaCategory) {

    switch (megaCategory) {
      case 'Puresilksarees':
        return ['Artjacquard', 'Artsilks', 'Artsoftsilks', 'Purejacquard', 'Puresilksarees', 'Puresoftsilk'];
      case 'Sarees':
        return ['karizmacotton', 'kovaicotton', 'Linencotton', 'Manipuricotton', 'Negamamcotton', 'Silkcotton'];
      case 'Women':
        return ['Kurtis', 'Leggings', 'Lehangaghagra', 'Tops', 'Westernwear', 'Skirt', 'Scarf', 'Chudidharmaterial', 'Dupatta', 'Readymadesuits'];
      case 'Men':
        return ['Casualshirts', 'Formalshirts', 'Tshirts', 'Trousers', 'Blazers', 'Shirtanddhotiset', 'Kurta'];
      case 'Kids':
        return ['Gownsandfrocks', 'Boyswear', 'Kidswear', 'Bornbabyset', 'Midiset', 'Lehanga', 'Pattupavadaisetreadymade', 'Boyssharvaniset', 'Coatsuit', 'Pantshirt', 'Westernandjean'];
      case 'Accessories':
        return ['Clutches', 'Necklaces', 'Handbags', 'Bangles', 'Earrings', 'Sareebelt Odiyaanam'];
      case 'HomeFurnishing':
        return ['Bedsheets', 'Mats', 'Towel', 'Curtains', 'Pillowcovers'];

      default:
        return [];
    }

  }

  return (
    <div>
      <center><h4 style={{ fontFamily: 'monseretto', padding: '20px', marginLeft: '0px', fontSize: '40px' }}>Enter the product Details</h4></center>

      <select onChange={(e) => setMegaCategory(e.target.value)} style={{ height: '30px', padding: '0px', width: '300px' }} required>
        <option value="">Select a Mega Category</option>
        <option value="Puresilksarees">PureSilkSarees</option>
        <option value="Sarees">Sarees</option>
        <option value="Women">Women</option>
        <option value="Men">Men</option>
        <option value="Kids">Kids</option>
        <option value="Accessories">Accessories</option>
        <option value="HomeFurnishing">Home Furnishing</option>

      </select>

      {/* Sub Category Dropdown */}
      {megaCategory && (
        <select style={{padding:'10px'}} onChange={(e) => setSubCategory(e.target.value)} required>
          <option value="subCategory">Select a Sub Category</option>
          {getSubCategories(megaCategory).map((subCategory) => (
            <option key={subCategory} value={subCategory} required>
              {subCategory}
            </option>
          ))}
        </select>
      )}

      {/* Display Selected Categories */}
      {megaCategory && subCategory && (
        <div>
          <br></br>
          <h4>You Selected:</h4>
          <h5><pre><p>    Mega Category: {megaCategory}         Sub Category: {subCategory}</p></pre></h5>
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>S category</Form.Label>
            <Form.Control type="text" name='fsub' value={subCategory} onPointerMove={setSub} disabled />
          </Form.Group> */}
        </div>
      )}

      <Form noValidate validated='false'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product</Form.Label>
          <Form.Control type="text" name='fname' onChange={setdata} />

        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Product Price</Form.Label>
          <Form.Control type="text" name='fprice' onChange={setproductprice} class="form-control" required/>

        </Form.Group>
        

        <Form.Group className="mb-3" controlId="formBasicPassword" action="/upload" method="post" enctype="multipart/form-data">
          <Form.Label>Upload it</Form.Label>
          <Form.Control type="file" name='photo' accept='image/png, image/jpeg, image/jpg' required onChange={setimgfile} />
        </Form.Group>

        <Button variant="primary" type="submit" value="Upload"onClick={productdata}>Submit</Button>
      </Form>
    </div>
  );
}

export default Register;
