import React from 'react';
import CardItems from './CardItems';
import './styles/Cards.css';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check our these EPIC Destinations</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
            <ul className="cards__items">
                <CardItems 
                  src="./images/img-1.jpeg"
                  text="Enjoy the time with the luxurious trips to Switzerland"
                  label="Luxury"
                  path='/services'
                />
                <CardItems 
                  src="./images/img-2.jpeg"
                  text="Get immersed into the world of the Glass Igloos in Finland"
                  label="Romantic"
                  path='/services'
                />
            </ul>
            <ul className="cards__items">
                <CardItems 
                  src="./images/img-3.jpeg"
                  text="Explore the Tamamu Ice Village in Japan"
                  label="Fantasy"
                  path='/services'
                />
                <CardItems 
                  src="./images/img-4.jpeg"
                  text="Sightsee the majestic Gyeongbokgung Palace in Korean winter"
                  label="Historic"
                  path='/services'
                />
                <CardItems 
                  src="images/img-5.jpeg"
                  text="Experience the cultural dog slegging in the Artic cirle, Greenland"
                  label="Snow Wilderness"
                  path='/services'
                />
            </ul>

        </div>
      </div>
    </div>
  )
};

export default Cards;
