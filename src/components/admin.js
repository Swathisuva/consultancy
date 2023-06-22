import React from 'react'
import Header from './Header'
import HomeAD from './HomeAD'
import Register from './Register'
import 'bootstrap/dist/css/bootstrap.min.css'
import Search from './search'
import Filter from './Filter'
function Admin(){
    return(
        <>
        <Header/>
        <br></br>
        <Search/>
        <Filter/>
        {/* <HomeAD/> */}

        
        </>
    )
}

export default Admin;