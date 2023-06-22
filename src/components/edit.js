// import React, { useState } from 'react';

// function UpdateProductForm() {
//   const [id, setId] = useState('');
//   const [fname, setFname] = useState('');
//   const [fprice, setFprice] = useState('');

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     try {
//       const response = await fetch(`/api/products/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ fname, fprice }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const data = await response.json();
//       console.log(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="id">ID:</label>
//       <input type="text" id="id" name="id" value={id} onChange={(event) => setId(event.target.value)} />

//       <label htmlFor="fname">Name:</label>
//       <input type="text" id="fname" name="fname" value={fname} onChange={(event) => setFname(event.target.value)} />

//       <label htmlFor="fprice">Price:</label>
//       <input type="text" id="fprice" name="fprice" value={fprice} onChange={(event) => setFprice(event.target.value)} />

//       <button type="submit">Update</button>
//     </form>
//   );
// }

// export default UpdateProductForm;



import React from "react";

function UpdateProductForm(){
  return(<>
  update
  </>)
}

export default UpdateProductForm;