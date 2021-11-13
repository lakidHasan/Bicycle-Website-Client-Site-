import React from 'react';
import './UserReview.css';

const UserReview = ({userReview}) => {
    const {name, Comment} = userReview;
    return (
        <div className="review">
            <h1>Name : {name}</h1>
            <h5>Comment : {Comment}</h5>
        </div>
    );
};

export default UserReview;