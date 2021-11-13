import React, { useEffect, useState } from 'react';
import UserReview from '../UserReview/UserReview';
import "./UserReviews.css";

const UserReviews = () => {
    const [userReviews, setUsersReviews] = useState([]);

    useEffect( () =>{
        fetch('https://rocky-mountain-96539.herokuapp.com/reviews')
        .then(res => res.json())
        .then(data => setUsersReviews(data));
    } , [])
    return (
        <div>
            <h1 className="text-primary">Here Is Our Review</h1>
            <div className="review-container">
            
            {
                userReviews.map(userReview => <UserReview
                key={userReview._id}
                userReview={userReview}
                ></UserReview>)
            }
        </div>
        </div>
    );
};

export default UserReviews;