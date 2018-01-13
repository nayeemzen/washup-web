import React from 'react';
import CardList from "../card/CardList";

const Profile = ({firstName, lastName, email, cellphone}) => (
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