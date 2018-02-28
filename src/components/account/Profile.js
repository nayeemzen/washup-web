import React from 'react';
import CardList from "../card/CardList";
import './Profile.css';

const Profile = ({firstName, lastName, email, cellphone, isLoading}) => (
  <div className="Profile">
    <CardList
      categoryName="Profile"
      items = {
        [
          { name: `${firstName} ${lastName}` },
          { name: email },
          { name: cellphone }
        ]
      }
    />
  </div>
);

export default Profile;