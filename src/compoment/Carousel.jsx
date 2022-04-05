import React from 'react';
import './style/Carousel.css';


function Car() {
    return (

        <div className="carousel">
            <div className="carousel-inner">
                <input
                    className="carousel-open"
                    type="radio"
                    id="carousel-1"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                    defaultChecked="checked"
                />
                <div className="carousel-item">
                    <img src="https://th.bing.com/th/id/R.5fd78821eb34563c6a63847052652063?rik=J3mvj%2bsStePRtw&riu=http%3a%2f%2forfordsandahouse.com.au%2fwp-content%2fuploads%2f2016%2f09%2fRose-Room-2.jpg&ehk=xoc0c%2bI1R%2blrE1JC3RBQjitZ1o3WXWqHK0oddy%2bY%2b6s%3d&risl=&pid=ImgRaw&r=0" />
                </div>
                <input
                    className="carousel-open"
                    type="radio"
                    id="carousel-2"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                />
                <div className="carousel-item">
                    <img src="https://www.coombeabbey.com/wp-content/uploads/2019/10/Coombe-Abbey-Chamberlain-room-01-feature.jpg" />
                </div>
                <input
                    className="carousel-open"
                    type="radio"
                    id="carousel-3"
                    name="carousel"
                    aria-hidden="true"
                    hidden=""
                />
                <div className="carousel-item">
                    <img src="https://landiscor.com/wp-content/uploads/2014/06/conf-1.jpg" />
                </div>
                <label htmlFor="carousel-3" className="carousel-control prev control-1">
                    ‹
                </label>
                <label htmlFor="carousel-2" className="carousel-control next control-1">
                    ›
                </label>
                <label htmlFor="carousel-1" className="carousel-control prev control-2">
                    ‹
                </label>
                <label htmlFor="carousel-3" className="carousel-control next control-2">
                    ›
                </label>
                <label htmlFor="carousel-2" className="carousel-control prev control-3">
                    ‹
                </label>
                <label htmlFor="carousel-1" className="carousel-control next control-3">
                    ›
                </label>
                <ol className="carousel-indicators">
                    <li>
                        <label htmlFor="carousel-1" className="carousel-bullet">
                            •
                        </label>
                    </li>
                    <li>
                        <label htmlFor="carousel-2" className="carousel-bullet">
                            •
                        </label>
                    </li>
                    <li>
                        <label htmlFor="carousel-3" className="carousel-bullet">
                            •
                        </label>
                    </li>
                </ol>
            </div>
        </div>
    )
}
export default Car;