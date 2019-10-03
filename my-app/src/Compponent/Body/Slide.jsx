import React, { Component } from 'react';
import cat from './../../Image/cat.jpg'
import shiba from './../../Image/shiba.jpg'
import corgi from './../../Image/corgi.jpg'
class Slide extends Component {
    render() {
        return (
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="item active">
                        <img className="d-block w-100" src={cat} />
                    </div>
                    <div className="item">
                        <img className="d-block w-100" src={shiba} />
                    </div>
                    <div className="item">
                        <img className="d-block w-100" src={corgi} />
                    </div>
                </div>
                <a className="left carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>
        );
    }
}

export default Slide;