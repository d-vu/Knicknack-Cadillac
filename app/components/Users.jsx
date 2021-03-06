import React from 'react';
import User from './User.jsx'

const Users = props => (
  <div>
    { props.chats.map( user => (
      <User user={user} key={user.message} click={() => props.click(user)} />
    )) }
  </div>
);

export default Users;
