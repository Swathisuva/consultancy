import React from 'react';
import './index.css';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Sarees from './components/Sarees';
import Silksarees from './components/silksarees';
import Women from './components/women';
import Accessories from './components/accessories';
import Men from './components/men';
import Kids from './components/kids';
import Homefurnishing from './components/Homefurnishing';
import Footer from  './components/Footer/Footer';
import MyNav from './components/Navbar';
import Login from './components/login';



import Negamamcotton from  './components/sarees/negamamcotton';

import Kovaicotton from './components/sarees/kovaicotton';
import Silkcotton from './components/sarees/Silkcotton';
import Karizmacotton from './components/sarees/karizmacotton';

import Manipuricotton from './components/sarees/manipuricotton';
import Linencotton from './components/sarees/linencotton';
import Casualshirts from './components/men/casualshirts';


import Formalshirts from './components/men/formalshirts';

import Kurta from './components/men/kurta';

import Puresilkshorts from './components/men/puresilkshorts';
import Shirtanddhotiset from './components/men/shirtanddhotiset';
import Trousers from './components/men/trousers';
import Tshirts from './components/men/tshirts';
import Westernwear from './components/women/westernwear';
import Chudidharmaterial from './components/women/chudidharmaterial';
import Dupatta from './components/women/dupatta';
import Kurtis from './components/women/kurtis';
import Lehangaghagra from './components/women/lehangaghagra';
import Lehanga from './components/kids/lehanga';
import Gownsandfrocks from './components/kids/gownsandfrocks';
import Readymadesuits from './components/women/readymadesuits';
import Skirt from './components/women/skirt';
import Tops from './components/women/tops';

import Bedsheets from './components/homefurnishing/bedsheets';
import Curtains from './components/homefurnishing/curtains';
import Mats from './components/homefurnishing/mats';
import Pillowcovers from './components/homefurnishing/pillowcovers';
import Towel from './components/homefurnishing/towel';
import Bangles from './components/accessories/bangles';
import Clutches from './components/accessories/clutches';
import Earings from './components/accessories/earings';
import Handbags from './components/accessories/handbags';
import Necklaces from './components/accessories/necklaces';
import Sareebeltodiyaanam from './components/accessories/sareebeltodiyaanam';
import Sample from './components/sample/Sample';
import Sam1 from './components/sample/Sam1';
import Admin from './components/admin';
import HomeAD from './components/HomeAD';
import Register from './components/Register';
import Artjacquard from './components/silksarees/artjacquard';
import Artsoftsilks from './components/silksarees/artsoftsilks';
import Artsilks from './components/silksarees/artsilks';
import Purejacquard from './components/silksarees/purejacquard';
import Puresoftsilk from './components/silksarees/puresoftsilk';
import Puresilksarees from './components/silksarees/puresilksarees';
import Registration from './components/registration';
import Leggings from './components/women/leggings';
import Scarf from './components/women/scarf';
import Blazers from './components/men/blazers.js';
import Boyswear from './components/kids/boyswear';
import Boyssharvaniset from './components/kids/boyssharvaniset';
import Coatsuit from './components/kids/coatsuit';
import Pantshirt from './components/kids/pantshirt';
import Westernandjean from './components/kids/westernandjean';
import Midiset from './components/kids/midiset';
import Pattupavadaisetreadymade from './components/kids/pattupavadaisetreadymade';
import Bornbabyset from './components/kids/bornbabyset';
import Kidswear from './components/kids/kidswear';
import UpdateProductForm from './components/edit';
import BulkUpload from './components/BulkUpload.js';
import Store from './components/store';
import CarouselComponent from './components/slider/slider2';
// import Slider2 from './components/slider/slider2';
// import ImageUploadForm from './components/slider/imgupload';





function App() {
  return (
    <div className="App">
     {/* <Sample/>  */}
      <HashRouter>
      <MyNav/>
        <Routes>
        <Route path="/men/:name" element={<Sam1 />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/sarees" element={<Sarees />}/>
        <Route path="/silksarees" element={<Silksarees/>}/>
        <Route path="/women" element={<Women />}/>
        <Route path="/accessories" element={<Accessories />}/>
        <Route path="/men" element={<Men />}/>
        <Route path="/kids" element={<Kids />}/>
        <Route path="/homefurnishing" element={<Homefurnishing />}/>
        <Route path="/login" element={<Login />}/>
        <Route path='/register1' element={<Registration/>}/>
        <Route path="/artsilks" element={<Artsilks />}/>
        <Route path="/artsoftsilks" element={<Artsoftsilks />}/>
        <Route path="/kidswear" element={<Kidswear />}/>
        <Route path="/artjacquard" element={<Artjacquard />}/>
        <Route path="/puresoftsilk" element={<Puresoftsilk/>}/>
        <Route path="/puresilksarees" element={<Puresilksarees/>}/>
        <Route path="/purejacquard" element={<Purejacquard />}/>
        <Route path="/karizmacotton" element={<Karizmacotton />}/>
      
        <Route path="/kovaicotton" element={<Kovaicotton />}/>
        <Route path="/silkcotton" element={<Silkcotton />}/>
        <Route path="/negamamcotton" element={<Negamamcotton/>}/>
       
        <Route path="/manipuricotton" element={<Manipuricotton/>}/>
        <Route path="/linencotton" element={<Linencotton />}/>
        <Route path="/casualshirts" element={<Casualshirts />}/>
        <Route path="/blazers" element={<Blazers />}/>

        <Route path="/formalshirts" element={<Formalshirts />}/>
       
        <Route path="/kurta" element={<Kurta />}/>
        
        <Route path="/puresilkshorts" element={<Puresilkshorts />}/>
        <Route path="/shirtanddhotiset" element={<Shirtanddhotiset />}/>
        <Route path="/trousers" element={<Trousers />}/>
        <Route path="/tshirts" element={<Tshirts />}/>
        <Route path="/bornbabyset" element={<Bornbabyset />}/>
        <Route path="/pantshirt" element={<Pantshirt />}/>
      
      
        <Route path="/pattupavadaisetreadymade" element={<Pattupavadaisetreadymade />}/>
       
        <Route path="/boyssharvaniset" element={<Boyssharvaniset />}/>
        <Route path="/coatsuit" element={<Coatsuit />}/>
        <Route path="/westernandjean" element={<Westernandjean />}/>
        <Route path="/boyswear" element={<Boyswear />}/>
        <Route path="/gownsandfrocks" element={<Gownsandfrocks />}/>
        <Route path="/midiset" element={<Midiset />}/>
        <Route path="/lehanga" element={<Lehanga />}/>
        <Route path="/pillowcovers" element={<Pillowcovers />}/>
        <Route path="/mats" element={<Mats />}/>
        <Route path="/curtains" element={<Curtains />}/>
        <Route path="/bedsheets" element={<Bedsheets />}/>
        <Route path="/tops" element={<Tops />}/>
        <Route path="/towel" element={<Towel />}/>
        <Route path="/skirt" element={<Skirt />}/>
        <Route path="/bangles" element={<Bangles />}/>
        <Route path="/lehangaghagra" element={<Lehangaghagra />}/>
        <Route path="/kurtis" element={<Kurtis />}/>
        <Route path="/dupatta" element={<Dupatta />}/>
        <Route path="/chudidharmaterial" element={<Chudidharmaterial />}/>
        <Route path="/westernwear" element={<Westernwear />}/>
        <Route path="/leggings" element={<Leggings />}/>
        <Route path="/scarf" element={<Scarf/>}/>
        <Route path="/readymadesuits" element={<Readymadesuits />}/>
        <Route path="/clutches" element={<Clutches />}/>
        <Route path="/earings" element={<Earings />}/>
        <Route path="/handbags" element={<Handbags />}/>
        <Route path="/necklaces" element={<Necklaces />}/>
        <Route path="/sareebeltodiyaanam" element={<Sareebeltodiyaanam />}/>
        <Route path="/admin" element={<Admin />}/>
        <Route path="/homead" element={<HomeAD/>}/>
        <Route path="/bulkupload" element={<BulkUpload/>}/>
        <Route path="/store" element={<Store/>}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/edit/:id" element={<UpdateProductForm/>}/>
        {/* <Route path="/slider" element={<Slider2/>}/>
        <Route path="/imgupload" element={<ImageUploadForm/>}/> */}
        
        </Routes>
      </HashRouter>
     <Footer/>
    </div>
  );
}


export default App;
