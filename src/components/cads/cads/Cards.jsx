import React, { Component } from 'react'
import Card from './CardUI'
import img1 from '../assets/1.png';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
class Cards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            //  <div className="container-fluid d-flex justify-content-center">
            <div>
                <div className="row">
                    <div className="col-md-6">
                        <Card imgsrc={img1} />
                        <div className="card-body text-dark">
                            <h4 className="card-title">Samudrika Pattu</h4>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={img2} />
                        <div className="card-body text-dark">
                            <h4 className="card-title">Chudidhar</h4>

                        </div>
                    </div><br></br><br></br><br></br>
                    <div className="col-md-6">
                        <Card imgsrc={img3} />
                        <div className="card-body text-dark">
                            <h4 className="card-title">Lehanga</h4>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={img6} />
                        <div className="card-body text-dark">
                            <h4 className="card-title">Anarkali</h4>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={img4} />
                        <div className="card-body text-dark">
                            <h4 className="card-title">Wedding wear</h4>

                        </div>
                    </div>
                    <div className="col-md-6">
                        <Card imgsrc={img5} />
                        <div className="card-body text-dark">
                            <h4 className="card-title">Western</h4>

                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default Cards;