import React from 'react'
import { useParams } from 'react-router'

export default function Sam1() {

    const name = useParams().name;
    console.log(name)

    const men = [
        {
            name: 'Denim',
            img: 'https://media.istockphoto.com/id/584479824/photo/blue-jean-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_yZ_NkKcn_P-eFVlqtB2RsAx8A9sFEQIjSU_xTwIFdY='
        },
        {
            name: 'Shorts',
            img: 'https://media.istockphoto.com/id/584479824/photo/blue-jean-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_yZ_NkKcn_P-eFVlqtB2RsAx8A9sFEQIjSU_xTwIFdY='
        },
        {
            name: 'Shoe',
            img: 'https://media.istockphoto.com/id/584479824/photo/blue-jean-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_yZ_NkKcn_P-eFVlqtB2RsAx8A9sFEQIjSU_xTwIFdY='
        },
        {
            name: 'T-shirt',
            img: 'https://media.istockphoto.com/id/584479824/photo/blue-jean-shirt-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=_yZ_NkKcn_P-eFVlqtB2RsAx8A9sFEQIjSU_xTwIFdY='
        }
    ]

  return (
    <div>
      {
        // men.filter( (item)=>item.name==name ).m
      }
      hiii  
    </div>
  )
}
