import React, { Component } from 'react';
import './Card.css';
class Card extends Component {
    render() {
        return (
            <div className='wrapper'>
                <div className='main_card'>
                    <div className='card_left'>
                        <div className='card_datails'>
                            <h1>{this.props.movieName}</h1>
                            <div className='card_cat'>
                                <p className='PG'>PG - 13</p>
                                <p className='year'>{this.props.year}</p>
                                <p className='genre'>{this.props.genre?this.props.genre.join(" | "):null} </p>
                                <p className='time'>{this.props.time}</p>
                            </div>
                            <p className='disc'>{
                            ((this.props.description).length > 200) ? 
                            (((this.props.description).substring(0,200)) + '...') : 
                            this.props.description 
                            }</p>
                            <div className='social-btn'>
                                <button>
                                    <i className='fas fa-play'></i> SEE TRAILER
                                </button>
                                <button>
                                    <i className='fas fa-download'></i> DOWNLOAD
                                </button>
                                <button>
                                    <i className='fas fa-thumbs-up'></i> 97%
                                </button>
                                <button>
                                    <i className='fas fa-star'></i>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='card_right'>
                        <div className='img_container'>
                            <img src={this.props.movieImage} alt='' />
                        </div>
                        <div className='play_btn'>
                            <a href={this.props.playbuttonLink} target='_blank'>
                                <i className='fas fa-play-circle'></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;

