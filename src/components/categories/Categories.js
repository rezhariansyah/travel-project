import React, { Fragment } from 'react'
import './Categories.css'
import aboutImage from '../../assets/images/categories/about.jpg'
import travelImage from '../../assets/images/categories/travel.png'
import healthImage from '../../assets/images/categories/health.jpg'
import tipsImage from '../../assets/images/categories/tips.jpg'

const Categories = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mt-5 mb-5">
                        <h1>CATEGORIES</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-3">
                        <div className="card opacity" style={{ width: '17rem' }}>
                            <img src={aboutImage} className="card-img-top img-responsive card-categories" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">ABOUT</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card opacity" style={{ width: '17rem' }}>
                            <img src={travelImage} className="card-img-top img-responsive card-categories" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">TRAVEL</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card opacity" style={{ width: '17rem' }}>
                            <img src={healthImage} className="card-img-top img-responsive card-categories" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">HEALTH</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card opacity" style={{ width: '17rem' }}>
                            <img src={tipsImage} className="card-img-top img-responsive card-categories" alt="" />
                            <div className="card-body">
                                <h5 className="card-title">TIPS</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Categories

