const express = require("express");
const cors=require("cors")
const mysql = require('mysql2/promise');
const router = new express.Router();
// const conn = require("../db/conn");
const fs=require('fs')
const conn = require("../db/conn");
const multer = require("multer");
const { error } = require("console");
// const formidableMiddleware = require('express-formidable');
//img storage
var imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}.${file.originalname}`)
    }
});

//img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(null, Error("only image is allowed"))
    }
}


var upload = multer({
    storage: imgconfig,
    fileFilter: isImage
})
console.log("hlo")
router.post("/register", upload.single("photo"), async (req, res) => {

    console.log("/register");
    const { fname } = req.body;
    const { filename } = req.file;
    // const image = req.file.buffer; 
    const { fprice } = req.body;
    const {fsub}=req.body;
    const {avail}=req.body;
    console.log(filename);
    console.log(fsub);
    console.log(avail);
    // const image = fs.writeFileSync('image.png', imageBuffer);
    // res.writeHead(200, {'Content-Type': 'image/png' });
    // res.end(image, 'binary');
    // if(fname==="" || fprice==="" || fsub===""  ){
    //     alert("Enter all details")
    // }
    // if (!fname || !fprice || !fsub ||!filename) {
    //     res.status(422).json({ status: 422, message: "fill all the details" })
    // }

    // try {
    //    conn.query("INSERT INTO productdata SET ?", { productname: fname, productimg: filename, productprice: fprice, category:fsub }, (err, result) => {
        
    //         if (err) {
    //             throw error;
    //         }
    //         else {
    //             console.log("data inserted");
    //             console.log(result)
    //             res.status(201).json({ status: 201, data: req.body })
    //         }
    //     })
    // }
    // catch (error) {
    //     res.status(422).json({ status: 422, error })
    // }

    try {
    conn.query("INSERT INTO products SET ?", { name: fname, price: fprice, category: fsub, image:filename, availability:avail }, (err, result) => {
        
            if (err) {
                throw error;
            }
            else {
                console.log(avail);
                console.log("data inserted");
                console.log(result)
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    }
    catch (error) {
        res.status(422).json({ status: 422, error })
    }

})


router.post('/login', function(req, res) {
    console.log("comes in router.js")
    const username = req.body.uname;
    const password = req.body.upwd;
  console.log(username)
    // Retrieve the user's password from the MySQL database
    const query = `SELECT name, pwd FROM cv1.admin WHERE name = '${username}'`;
    console.log("qqq")
    console.log(username)
    conn.query(query, function(error, results, fields) {
      if (error) throw error;
        console.log("object")
        console.log(results);
      if (results.length > 0) {
        console.log("ss")
        const storedPassword = results[0].password;
        console.log("pwd")
        if (password === storedPassword) {
          // Passwords match, user is authenticated
          res.send('Login successful');
          
        } else {
          // Passwords don't match, authentication failed
          res.send('Incorrect username or password');
        }
      } else {
        // User not found in the database
        res.send('Incorrect username or password');
      }
    });
  });



// router.post("/bulkupload", upload.single("photo"), async (req, res) => {

//         console.log("/bulk");
//         const { fname } = req.body;
//         const { filename } = req.file;
         
//         const { fprice } = req.body;
//         const {fsub}=req.body;
//         console.log(filename);
//         console.log(fsub);
      
//         if (!fname || !fprice || !fsub ||!filename) {
//             res.status(422).json({ status: 422, message: "fill all the details" })
//         }

//         try {
//         conn.query("INSERT INTO products SET ?", { name: fname, price: fprice, category: fsub, image:filename }, (err, result) => {
            
//                 if (err) {
//                     throw error;
//                 }
//                 else {
//                     console.log("data inserted");
//                     console.log(result)
//                     res.status(201).json({ status: 201, data: req.body })
//                 }
//             })
//         }
//         catch (error) {
//             res.status(422).json({ status: 422, error })
//         }

//     })




router.post("/bulkupload", upload.array("photo"), async (req, res) => {
    console.log("/bulk");
  
    try {
      const files = req.files;
      const { fname, fprice, fsub } = req.body;
  
      if (!fname || !fprice || !fsub || files.length === 0) {
        res.status(422).json({ status: 422, message: "Fill all the details" });
      } else {
        for (let i = 0; i < files.length; i++) {
          const { filename } = files[i];
  
          try {
            conn.query(
              "INSERT INTO products SET ?",
              { name: fname, price: fprice, category: fsub, image: filename },
              (err, result) => {
                if (err) {
                  throw err;
                } else {
                  console.log("Data inserted:", result);
                }
              }
            );
          } catch (error) {
            console.log("Error during database insertion:", error);
            // Add your desired error handling logic here
          }
        }
  
        res.status(201).json({ status: 201, data: req.body });
      }
    } catch (error) {
      res.status(500).json({ status: 500, error: "Internal Server Error" });
    }
  });
  



  

  router.post("/register1",  async (req, res) => {

    console.log("/register1");
    const { uname } = req.body;
    const {upwd}=req.body;
   console.log(uname);
    if(uname==="" || upwd===""  ){
        alert("Enter all details")
    }
    if (!uname || !upwd ) {
        res.status(422).json({ status: 422, message: "fill all the details" })
    }

 

    try {
    conn.query("INSERT INTO admin SET ?", { name: uname, pwd:upwd }, (err, result) => {
        
            if (err) {
                throw error;
            }
            else {
                console.log("data inserted");
                console.log(result)
                res.status(201).json({ status: 201, data: req.body })
            }
        })
    }
    catch (error) {
        res.status(422).json({ status: 422, error })
    }

})



router.get("/getData", (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    try {
        conn.query("SELECT * FROM cv1.products", (err, result) => {
            if (err) {
                throw error;
            }
            else {
                console.log("data get");
                console.log(result)
                res.status(201).json({ status: 201, data: result })
            }

        })
    } catch (error) {
        res.status(422), json({ status: 422, error })
    }
})

router.get("/searchData", (req, res) => {
    // res.sendFile(__dirname + '/index.html');
    console.log("ssss")
    const { search } = req.body;
    console.log(search)
    try {
        conn.query("SELECT * FROM cv1.products where name Like='%search%'", (err, result) => {
            if (err) {
                throw error;
            }
            else {
                console.log("data get");
                console.log(result)
                res.status(201).json({ status: 201, data: result })
            }

        })
    } catch (error) {
        res.status(422), json({ status: 422, error })
    }
})



// router.post('/uploaded', upload.single('photo'), (req, res) => {
//     console.log("image");
//     const image = req.file;

//     // Read the image file
//     const data = fs.readFileSync(image.path);

//     // Create a new buffer from the image data
//     const buffer = Buffer.from(data);

//     // Save the image as a BLOB in the database
//     const sql = 'INSERT INTO images SET ?';
//     const values = { image: buffer };
//     conn.query(sql, values, (error, results, fields) => {
//       if (error) throw error;
//       res.send('Image uploaded successfully');
//     });
//   });

// app.get('/api/slider', (req, res) => {
//     const query = 'SELECT * FROM slider_data'; 
  
//     connection.query(query, (err, results) => {
//       if (err) {
//         console.error('Error fetching slider data:', err);
//         res.status(500).json({ error: 'Internal Server Error' });
//       } else {
//         res.json(results);
//       }
//     });
//   });



router.post('/api/upload', upload.single('image'), (req, res) => {
    console.log("reached")
    const { filename, path } = req.file;
  
    // Save the image metadata to the database
    const query = 'INSERT INTO slider (filename, path) VALUES (?, ?)';
    conn.query(query, [filename, path], (error, results) => {
      if (error) {
        console.error('Error saving image metadata to database:', error);
        res.status(500).send('Error uploading image');
        return;
      }
  
      const imageId = results.insertId;
      res.json({ imageId });
    });
  });
  
//   router.get('/images', async (req, res) => {
//     console.log("comes to api/images");
//     try {
//       // Retrieve the image data from the database
//       const images = await conn.query('SELECT * FROM slider');
      
//       // Extract necessary properties from images
//       const imagesWithoutCircularReferences = images.map(image => ({
//         id: image.id,
//         path: image.path,
//         filename: image.filename,
//         heading: image.heading,
//         desc: image.desc,
//       }));
  
//       res.json(imagesWithoutCircularReferences);
//     } catch (error) {
//       console.error('Error fetching images:', error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   });
  





//delete
router.delete("/:id", (req, res) => {
    const { id } = req.params;
    try {
      conn.query(`SELECT image FROM products WHERE id='${id}'`, (err, result) => {
        if (err) {
          throw error;
        } else {
          const filename = result[0].image;
          fs.unlink(`./uploads/${filename}`, (err) => {
            if (err) {
              throw err;
            } else {
              conn.query(`DELETE FROM products WHERE id='${id}'`, (err, result) => {
                if (err) {
                  throw error;
                } else {
                  console.log("data deleted");
                  res.status(201).json({ status: 201, data: result });
                }
              });
            }
          });
        }
      });
    } catch (error) {
      res.status(422), json({ status: 422, error });
    }
  });
  

//edit
router.put("/:id", async (req, res) => {
const { id } = req.params;
const { name, price } = req.body;
let {avail}=req.body;
// if(avail=='Yes' || avail=='yes'){
//     avail='Yes'
// }
// else{
//     avail='No'
// }
if (!name) {
    return res.status(422).json({ status: 422, message: "Name cannot be empty." });
  }
  
  conn.query(
    "UPDATE products SET name = ?, price = ?,availability=? WHERE id = ?",
    [name, price,avail, id],
    (err, result) => {
      if (err) {
        console.log(err)
        throw err;
      } else {
        console.log("data updated");
        console.log(result);
        res.status(200).json({ status: 200, message: "Data updated successfully." });
      }
    }
  );
  
});

router.post("/filter", (req, res) => {
    const filterValue = req.body.filter;
  
    try {
      let sqlQuery;
      if (filterValue === "1000000") {
        
        
        sqlQuery = "SELECT * FROM cv1.products";
      } else if (filterValue === "5000") {
       
        sqlQuery = "SELECT * FROM cv1.products WHERE price < 5000";
      } else if (filterValue === "3000") {
        
        sqlQuery = "SELECT * FROM cv1.products WHERE price < 3000";
      } else if (filterValue === "1000") {
        
        sqlQuery = "SELECT * FROM cv1.products WHERE price < 1000";
      } else if (filterValue === "500") {
        
        sqlQuery = "SELECT * FROM cv1.products WHERE price < 500";
      } else {
       
        return res.status(422).json({ status: 422, error: "Invalid filter value" });
      }
  
      conn.query(sqlQuery, (err, result) => {
        if (err) {
          throw err;
        } else {
          console.log("Data retrieved successfully");
          console.log(result);
          res.status(201).json({ status: 201, data: result });
        }
      });
    } catch (error) {
      res.status(500).json({ status: 500, error });
    }
  });
  




//art jacquard
router.get("/getArtjacquard", (req, res) => {
try {
    console.log("Artjacquard")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Artjacquard")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//artsilks
router.get("/getArtsilks", (req, res) => {
try {
    console.log("Artsilks")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Artsilks")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//artsoftsilks
router.get("/getArtsoftsilks", (req, res) => {
try {
    console.log("Artsoftsilks")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Artsoftsilks")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//purejacquard
router.get("/getPurejacquard", (req, res) => {
try {
    console.log("Purejacquard")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Purejacquard")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//puresilksarees
router.get("/getPuresilksarees", (req, res) => {
try {
    console.log("Puresilksarees")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Puresilksarees")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//puresoftsilk
router.get("/getPuresoftsilk", (req, res) => {
try {
    console.log("Puresoftsilk")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Puresoftsilk")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//karizmacotton
router.get("/getKarizmacotton", (req, res) => {
try {
    console.log("Karizmacotton")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Karizmacotton")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//kovaicotton
router.get("/getKovaicotton", (req, res) => {
try {
    console.log("Kovaicotton")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Kovaicotton")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//linencotton
router.get("/getLinencotton", (req, res) => {
try {
    console.log("Linencotton")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Linencotton")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//manipuricotton
router.get("/getManipuricotton", (req, res) => {
try {
    console.log("Manipuricotton")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Manipuricotton")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//negamamcotton
router.get("/getNegamamcotton", (req, res) => {
try {
    console.log("Negamamcotton")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Negamamcotton")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//silkcotton
router.get("/getSilkcotton", (req, res) => {
try {
    console.log("Silkcotton")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Silkcotton")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//chudidharmaterial
router.get("/getChudidharmaterial", (req, res) => {
try {
    console.log("Chudidharmaterial")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Chudidharmaterial")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//dupatta
router.get("/getDupatta", (req, res) => {
try {
    console.log("Dupatta")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Dupatta")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//kutis
router.get("/getKurtis", (req, res) => {
try {
    console.log("Kurtis")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Kurtis")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//leggings
router.get("/getLeggings", (req, res) => {
try {
    console.log("Leggings")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Leggings")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//lehangagaghra
router.get("/getLehangaghagra", (req, res) => {
try {
    console.log("lehangaghagra")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Lehangaghagra")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//readymadesuits
router.get("/getReadymadesuits", (req, res) => {
try {
    console.log("Readymadesuits")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Readymadesuits")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//scarf
router.get("/getScarf", (req, res) => {
try {
    console.log("Scarf")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Scarf")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//skirt
router.get("/getSkirt", (req, res) => {
try {
    console.log("Skirt")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Skirt")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//tops
router.get("/getTops", (req, res) => {
try {
    console.log("Tops")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Tops")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//westernwear
router.get("/getWesternwear", (req, res) => {
try {
    console.log("Westernwear")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Westernwear")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})



//blazers
router.get("/getBlazers", (req, res) => {
try {
    console.log("blaze")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Blazers")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//casualshirts
router.get("/getcasualshirts", (req, res) => {
try {
    console.log("casualshirts")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("casualshirts")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//formalshirts
router.get("/getFormalshirts", (req, res) => {
try {
    console.log("Formalshirts")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Formalshirts")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//kurta
router.get("/getKurta", (req, res) => {
try {
    console.log("Kurta")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Kurta")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//puresilkshorts
router.get("/getPuresilkshorts", (req, res) => {
try {
    console.log("Puresilkshorts")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Puresilkshorts")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//shirtanddhotiset
router.get("/getShirtanddhotiset", (req, res) => {
try {
    console.log("Shirtanddhotiset")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Shirtanddhotiset")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//trousers
router.get("/getTrousers", (req, res) => {
try {
    console.log("Trousers")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Trousers")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//tshirts
router.get("/getTshirts", (req, res) => {
try {
    console.log("Tshirts")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Tshirts")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//bangles
router.get("/getBangles", (req, res) => {
try {
    console.log("bangle")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Bangles")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//clutches
router.get("/getClutches", (req, res) => {
try {
    console.log("clutches")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Clutches")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//earrings
router.get("/getEarrings", (req, res) => {
try {
    console.log("Earrings")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Earrings")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//handbags
router.get("/getHandbags", (req, res) => {
try {
    console.log("handbags")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Handbags")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//necklaces
router.get("/getNecklaces", (req, res) => {
try {
    console.log("necklaces")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Necklaces")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//sareebeltodiyaanam
router.get("/getSareebeltodiyaanam", (req, res) => {
try {
    console.log("odiyaanam")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Sareebelt Odiyaanam")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//bedsheets
router.get("/getBedsheets", (req, res) => {
try {
    console.log("Bedsheets")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Bedsheets")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//curtains
router.get("/getCurtains", (req, res) => {
try {
    console.log("Curtains")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Curtains")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//mats
router.get("/getMats", (req, res) => {
try {
    console.log("Mats")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Mats")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//pillowcovers
router.get("/getPillowcovers", (req, res) => {
try {
    console.log("Pillowcovers")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Pillowcovers")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//towel
router.get("/getTowel", (req, res) => {
try {
    console.log("Towel")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Towel")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//bornbabyset
router.get("/getBornbabyset", (req, res) => {
try {
    console.log("Bornbabyset")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Bornbabyset")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//boyssharvaniset
router.get("/getBoyssharvaniset", (req, res) => {
try {
    console.log("Boyssharvaniset")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Boyssharvaniset")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//boyswear
router.get("/getBoyswear", (req, res) => {
try {
    console.log("Boyswear")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Boyswear")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//coatsuit
router.get("/getCoatsuit", (req, res) => {
try {
    console.log("Coatsuit")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Coatsuit")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//gowns and frocks
router.get("/getGownsandfrocks", (req, res) => {
try {
    console.log("Gownsandfrocks")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Gownsandfrocks")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//kidswear
router.get("/getKidswear", (req, res) => {
try {
    console.log("Kidswear")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Kidswear")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//lehanga
router.get("/getLehanga", (req, res) => {
try {
    console.log("Lehanga")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Lehanga")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//midiset
router.get("/getMidiset", (req, res) => {
try {
    console.log("Midiset")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Midiset")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//pantshirt
router.get("/getPantshirt", (req, res) => {
try {
    console.log("Pantshirt")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Pantshirt")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})

//pattupavadaisetreadymade
router.get("/getpattupavadaisetreadymade", (req, res) => {
try {
    console.log("Pattupavadaisetreadymade")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Pattupavadaisetreadymade")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})


//western and jean
router.get("/getWesternandjean", (req, res) => {
try {
    console.log("Westernandjean")
   conn.query("SELECT * FROM cv1.products where category = "+conn.escape("Westernandjean")+" ", (err, result) => {
        if (err) {
            throw error;
        }
        else {
            console.log("data get");
            console.log(result)
            res.status(201).json({ status: 201, data: result })
        }

    })
} catch (error) {
    res.status(422), json({ status: 422, error })
}
})










module.exports = router;