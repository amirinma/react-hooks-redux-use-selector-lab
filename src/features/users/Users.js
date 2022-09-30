import React from "react";
// add any needed imports here
import {useSelector} from 'react-redux'

function Users() {
  const users = useSelector((state)=>state.users);
  const totalCount = useSelector((state)=> state.users.length)
 
  return (
    <div>
      <ul>
        {users.map((user)=>
          <li>{user.username}</li>
        )}
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
      Total Users: {totalCount}
    </div>
  );
}

export default Users;
