import React from 'react'
import {Link} from 'react-router-dom'
import {Menu, Space} from 'antd'
import './Navbar.css';
import logo from './logo.jpg'
import { useState } from 'react';

const MyNav = () => {
  return (

    <div>
      <Menu
      mode='horizontal'
      items={[
        {
          label:<Link to='/home'><img src={logo} alt='logo'></img></Link>,
          key:"logo",
          style:{
            height:'80px',
            width:'100px',
            
          }
        },
        {
          label:"SILK SAREES",
          key:"puresilk",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600'
          },
          children:[
            {
              label:<PURESILK/>,
              key:'subpuresilk',
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',
              }
            }
          ]
        },
        {
          label:"SAREES",
          key:"sarees",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600',
          },
          children:[
            {
              label: <SAREES />,
              key:"subsaree",
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',

              }
            },
          ],
        },
        {
          label:"WOMEN",
          key:"women",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600',
          },
          children:[
            {
              label: <WOMEN />,
              key:"MM",
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',
              }
            },
          ],
        },
        {
          label:"MEN",
          key:"men",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600',

          },
          children:[
            {
              label: <MEN />,
              key:"M",
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',

              }
            },
          ],
        },
        {
          label:"KIDS",
          key:"kids",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600',
          },
          children:[
            {
              label: <KIDS />,
              key:"K",
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',

              }
            },
          ],
        },
        {
          label:"ACCESSORIES",
          key:"accessories",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600',
          },
          children:[
            {
              label: <ACCESSORIES />,
              key:"A",
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',

              }
            },
          ],
        },
        {
          label:"HOME FURNISHING",
          key:"homefurnishing",
          style:{
            paddingTop:'12px',
            fontFamily:'Montserrat',
            fontWeight:'600',
          },
          children:[
            {
              label: <HOMEFURNISHING />,
              key:"H",
              style:{
                height:'fit-content',
                width:'1500px',
                marginLeft:'300px',
                marginBottom:'30px',
                backgroundColor:'white',

              }
            },
          ],
        },


        
      ]}
      ></Menu>
    </div>

  )
}
function PURESILK(){
  const [selectedkeys,setSelectedkeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedkeys([item.key]);
    console.log('item is selected',item.key)
  }
  return <div style={{backgroundColor:"white",width:'100%',paddingLeft: 20,paddingRight: 30,listStyleType:'none'}}>
    <Space direction='horizontal' size={12}>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
      {
        label:"Shop Pure Silk Sarees",
        key:'mob',
        type:'group',
       

       },
      {
        label:<Link to='/puresilksarees' style={{textDecoration:'none'}}>Pure Silk</Link>,
        key:'spattu',

      },
      {
        label:<Link to='/puresoftsilk' style={{textDecoration:'none'}}>Pure Soft Silk</Link>,
        key:'ppattu',
        style:{
         textDecoration:'none'
        }
       
      },
      {
        label:<Link to='/purejacquard' style={{textDecoration:'none'}}>Pure Jacquard</Link>,
        key:'vdpattu',
      },

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
</Space>

  <Space direction='horizontal'>
  <Menu
  onClick={onMenuItemClick}
  selectedKeys={selectedkeys}
    items={[
      {
        label:"Art Silk Sarees",
        key:'ksilk',
        type:'group',
       },
      {
        label:<Link to='/artsilks' style={{textDecoration:'none'}}>Art Silks</Link>,
        key:'banaras',
      },
      {
        label:<Link to='/artsoftsilks' style={{textDecoration:'none'}}>Art Soft Silk</Link>,
        key:'artsilk',
      },
      {
        label:<Link to='/artjacquard' style={{textDecoration:'none'}}>Art Jacquard</Link>,
        key:'ajsilk',
      },
    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  </div>
}
function SAREES(){
  const [selectedkeys,setSelectedkeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedkeys([item.key]);
    console.log('item is selected',item.key)
  }
  return <div style={{backgroundColor:"white",padding:0}}>
    <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Cotton Sarees",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/silkcotton'  style={{textDecoration:'none'}}>Silk Cotton</Link>,
          key:'ccottton',
        },
        {
          label:<Link to='/manipuricotton'style={{textDecoration:'none'}}>Manipuri Cotton</Link>,
          key:'kCotton',
        },
        {
          label:<Link to='/linencotton'style={{textDecoration:'none'}}>Linen Cotton</Link>,
          key:'lCotton',
        },

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:<br></br>,
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/karizmacotton'style={{textDecoration:'none'}}>Karizma Cotton</Link>,
          key:'dsarees',
        },
        {
          label:<Link to='/negamamcotton'style={{textDecoration:'none'}}>Negamam Cotton</Link>,
          key:'bwear',
        },
        {
          label:<Link to='/kovaicotton'style={{textDecoration:'none'}}>Kovai Cotton</Link>,
          key:'cwear',
        },

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  
  </div>
}
function WOMEN(){
  const [selectedkeys,setSelectedkeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedkeys([item.key]);
    console.log('item is selected',item.key)
  }
  return <div style={{backgroundColor:"white",padding:0}}>
    <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Readymade",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/kurtis'style={{textDecoration:'none'}}>Kurtis</Link>,
          key:'kurtis',
        },
        {
          label:<Link to='/tops'style={{textDecoration:'none'}}>Tops</Link>,
          key:'tops',
        },
        {
          label:<Link to='/readymadesuits'style={{textDecoration:'none'}}>Readymade Suits</Link>,
          key:'rsuits',
        },
        {
          label:<Link to='/westernwear'style={{textDecoration:'none'}}>Western Wear</Link>,
          key:'anarkali',
        },

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  <Space direction='horizontal'>
    <Menu 
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
      {
        label:<br></br>,
        key:'space',
        type:"group"
      },
        {
          label:<Link to='/lehangaghagra'style={{textDecoration:'none'}}>Lehanga Ghagra</Link>,
          key:'lehanga',
        },        {
          label:<Link to='/skirt'style={{textDecoration:'none'}}>Skirt and Midi</Link>,
          key:'skirt',
        },        {
          label:<Link to='/leggings'style={{textDecoration:'none'}}>Leggings</Link>,
          key:'nightwear',
        },        {
          label:<Link to='/dupatta'style={{textDecoration:'none'}}>Dupatta</Link>,
          key:'dupatta',
        },
      
    ]}style={{ boxShadow:"none", border:"none"}} />
  </Space>
  <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Material",
          key:'mob',
          type:'group',
         },
         {
          label:<Link to='/chudidharmaterial'style={{textDecoration:'none'}}>Chudidhar Material</Link>,
          key:'chudi',
        },
        {
          label:<Link to='/scarf'style={{textDecoration:'none'}}>Scarf</Link>,
          key:'scarf',
        },
        ]}
        style={{ boxShadow:"none", border:"none"}}/>
        </Space></div>
}
function MEN(){
  const [selectedkeys,setSelectedkeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedkeys([item.key]);
    console.log('item is selected',item.key)
  }
  return <div style={{backgroundColor:"white",padding:0}}>
    <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Mens Wear",
          key:'mob',
          type:'group',
         },
       
        {
          label:<Link to='/casualshirts'style={{textDecoration:'none'}}>Casual Shirts</Link>,
          key:'cshirts',
        },
        {
          label:<Link to='/formalshirts'style={{textDecoration:'none'}}>Formal Shirts</Link>,
          key:'fshirts',
        },
        {
          label:<Link to='/tshirts'style={{textDecoration:'none'}}>T-Shirts</Link>,
          key:'tshirt',
        },
        
        {
          label:<Link to='/trousers'style={{textDecoration:'none'}}>Trousers</Link>,
          key:'trouser',
        },   
           

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:<br></br>,
          key:'mo',
          type:'group',
         },
                
            
        {
          label:<Link to='/blazers'style={{textDecoration:'none'}}>Blazers</Link>,
          key:'denim',
        },        
        {
          label:<Link to='/kurta'style={{textDecoration:'none'}}>Kurta</Link>,
          key:'kurta',
        },
        {
          label:<Link to='/shirtanddhotiset'style={{textDecoration:'none'}}>Wedding Dhoti Shirt</Link>,
          key:'dhoti',
        },
        ]}
        style={{ boxShadow:"none", border:"none"}}/>
        </Space>
  </div>
}
function KIDS(){
  const [selectedkeys,setSelectedkeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedkeys([item.key]);
    console.log('item is selected',item.key)
  }
  return <div style={{backgroundColor:"white",padding:0}}>
    <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Boys Wear",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/boyswear'style={{textDecoration:'none'}}>Boys Wear</Link>,
          key:'ewear',
        },
        {
          label:<Link to='/boyssharvaniset'style={{textDecoration:'none'}}>Boys Sharvani Set</Link>,
          key:'bdhoti',
        },
        {
          label:<Link to='/coatsuit'style={{textDecoration:'none'}}>Coat Suit</Link>,
          key:'bset',
        },
        {
          label:<Link to='/pantshirt'style={{textDecoration:'none'}}>Pant Shirt</Link>,
          key:'pset',
        },
        {
          label:<Link to='/kidswear'style={{textDecoration:'none'}}>Kids Wear</Link>,
          key:'kset',
        },

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Girls Wear",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/gownsandfrocks'style={{textDecoration:'none'}}>Gowns and Frocks</Link>,
          key:'gown',
        },
        {
          label:<Link to='/westernandjean'style={{textDecoration:'none'}}>Western and jean</Link>,
          key:'chudidhar',
        },
        {
          label:<Link to='/midiset'style={{textDecoration:'none'}}>Midi Set</Link>,
          key:'npm',
        },
        {
          label:<Link to='/lehanga'style={{textDecoration:'none'}}>Lehanga</Link>,
          key:'npr',
        },
        {
          label:<Link to='/pattupavadaisetreadymade'style={{textDecoration:'none'}}>PattuPavadai Set Readymade</Link>,
          key:'artsilk',
        },

    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Kids",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/bornbabyset'style={{textDecoration:'none'}}>Born Baby Set</Link>,
          key:'0-6',
        },
        
    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  </div>
}
function ACCESSORIES(){
  const [selectedkeys,setSelectedkeys] = useState([])
  const onMenuItemClick = (item) => {
    setSelectedkeys([item.key]);
    console.log('item is selected',item.key)
  }
  return <div style={{backgroundColor:"white",padding:0}}>
    <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Fashion Jewellery",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/earings'style={{textDecoration:'none'}}>Earings</Link>,
          key:'earing',
        },
        {
          label:<Link to='/necklaces'style={{textDecoration:'none'}}>Necklaces</Link>,
          key:'necklace',
        },
        {
          label:<Link to='/bangles'style={{textDecoration:'none'}}>Bangles</Link>,
          key:'bangles',
        },
        {
          label:<Link to='/sareebeltodiyaanam'style={{textDecoration:'none'}}>Saree Belt/Odiyaanam</Link>,
          key:'odi',
        },       
    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
  <Space direction='horizontal'>
    <Menu
    onClick={onMenuItemClick}
    selectedKeys={selectedkeys}
    items={[
        {
          label:"Shop Bags",
          key:'mob',
          type:'group',
         },
         {
          label:<Link to='/handbags'style={{textDecoration:'none'}}>Hand Bags</Link>,
          key:'hbags',
        },
        {
          label:<Link to='/clutches'style={{textDecoration:'none'}}>Clutches</Link>,
          key:'clutch',
        },
        ]}
        style={{ boxShadow:"none", border:"none"}}/>
        </Space></div>
}
function HOMEFURNISHING(){
  return <div style={{backgroundColor:"white",padding:0}}>
    <Space direction='horizontal'>
    <Menu
    items={[
        {
          label:"Shop Home Furnishing",
          key:'mob',
          type:'group',
         },
        {
          label:<Link to='/bedsheets'style={{textDecoration:'none'}}>Bed Sheets</Link>,
          key:'bsheet',
        },
        {
          label:<Link to='/mats'style={{textDecoration:'none'}}>Mats</Link>,
          key:'mat',
        },
        {
          label:<Link to='/pillowcovers'style={{textDecoration:'none'}}>Pillow Covers</Link>,
          key:'pcover',
        },
        {
          label:<Link to='/towel'style={{textDecoration:'none'}}>Towel</Link>,
          key:'towel',
        },
        {
          label:<Link to='/curtains'style={{textDecoration:'none'}}>Curtains</Link>,
          key:'curtain',
        },       
    ]}
    style={{ boxShadow:"none", border:"none"}}
  /> 
  </Space>
</div>
}
export default MyNav
