import { useState, useEffect } from 'react'
import { Button, Form } from 'react-bootstrap';
import axios from "axios"
import { useNavigate, NavLink } from 'react-router-dom';


const BulkUpload = () => {
  const [file, setFile] = useState('');
  
  const history = useNavigate();

  // const setimgfile = (e) => {
  //   setFile(e.target.files[0]);

  //   console.log(e.target.files[0])
  // *}

  const setimgfile = (e) => {
    setFile(e.target.files);
  }
  


//   const productdata = async (e) => {
//     e.preventDefault();
//     console.log("fetches")
//     const a=file.name;
//     const array=a.split("_");
//     console.log(array.length);
//     if(array.length==3){
//     const subCategory=array[0]
//     const fname=array[1];
//     var fprice=""
//     var price=array[2];
//     const l=array[2].length;
//     console.log(l)
//     for(let i=0;i<l;i++){
//         if(price[i]!="."){
//             console.log(price[i])
//             fprice=fprice+price[i]
            
//         }
//         else{
//             console.log(subCategory)
//             console.log(fname)
//             console.log(fprice)
//             break
//         }
//     }
//     var formData = new FormData();    
//     formData.append("photo", file);
//     formData.append("fname", fname);
//     formData.append("fprice", fprice);
//     formData.append("fsub", subCategory);
//     const config = {
//       headers: {
//         "Content-Type": "multipart/form-data"
//       }
//     }
//     const res = await axios.post("/bulkupload", formData, config);
//     // console.log(res);
//     if (res.data.status == 201) {
//       history("/homead")
//     } else {
//       console.log("error")
//     }
//   }
//   else{
//     window.alert("Invalid Name")
//   }
// }


const productdata = async (e) => {
  e.preventDefault();
  console.log("fetches");

  const formData = new FormData();
  const files = [...file];

  for (let i = 0; i < files.length; i++) {
    const selectedFile = files[i];
    const array = selectedFile.name.split("_");

    if (array.length === 3) {
      const subCategory = array[0];
      const fname = array[1];
      let fprice = "";
      const price = array[2];
      const l = price.length;

      for (let j = 0; j < l; j++) {
        if (price[j] !== ".") {
          fprice += price[j];
        } else {
          formData.append("photo", selectedFile);
          formData.append("fname", fname);
          formData.append("fprice", fprice);
          formData.append("fsub", subCategory);

          const config = {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          };

          try {
            const res = await axios.post("/bulkupload", formData, config);
            console.log(res);

            if (res.data.status === 201) {
              console.log("Data uploaded successfully");
              history("/homead")
              // Add your desired success logic here
            } else {
              console.log("Error during upload");
              // Add your desired error handling logic here
            }
          } catch (error) {
            console.log("Error during upload:", error);
            // Add your desired error handling logic here
          }

          break;
        }
      }
    } else {
      window.alert("Invalid Name");
    }
  }
};

  

  return (
    <div>
      <center><h4 style={{ fontFamily: 'monseretto', padding: '20px', marginLeft: '0px', fontSize: '40px' }}>Enter the product Details</h4></center>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword" action="/upload" method="post" enctype="multipart/form-data">
          <Form.Label>Upload it</Form.Label>
          {/* <Form.Control type="file" name='photo' accept='image/png, image/jpeg, image/jpg' required onChange={setimgfile} /> */}
          <Form.Control type="file"  name="photo" accept="image/png, image/jpeg, image/jpg" required multiple onChange={setimgfile} />

        </Form.Group>

        <Button variant="primary" type="submit" value="Upload"onClick={productdata}>Submit</Button>
      </Form>
    </div>
  );
}

export default BulkUpload;