import React from 'react';
import { Rating, RoundedStar } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const myStyles = {
    itemShapes: RoundedStar,
    activeFillColor: '#ffb700',
    inactiveFillColor: '#fbfa9'
  }

const StarRatingMag = (props) => {
    const {rating , setRating} = props

    return (
        <div>
            <Rating transition='opacity' style={{ maxWidth: 100 , direction: 'ltr' }} value={rating} onChange={setRating} itemStyles={myStyles}/>
        </div>
    );
};

export default StarRatingMag;