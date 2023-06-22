import React from "react";

export default function Sample() {
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
        <>
            <div class="card-group">
                {
                    men.map((element) => {
                        return (
                            <>
                                {
                                    <a href="">
                                        <div class="card">
                                            <img src={element.img} class="card-img-top" alt="..."></img>

                                            <h5 class="card-title">{element.name}</h5>

                                        </div>
                                    </a>

                                }
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}