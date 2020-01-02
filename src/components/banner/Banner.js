import React, { Fragment } from 'react'
import Banner1 from "../../assets/images/banners/banner2.jpg"

const Banner = () => {
    return (
        <Fragment>
            <div
                className="jumbotron jumbotron-fluid mt-5 mb-5"
                style={{
                    height: "684px",
                    backgroundImage: `url(${Banner1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
            >
            </div>
        </Fragment>
    )
}

export default Banner
