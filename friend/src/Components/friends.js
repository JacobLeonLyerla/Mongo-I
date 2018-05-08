import React from 'react';
import Friend from './friend';


const Friends = (props) =>{
    console.log(props.friends)
    return(<React.Fragment>

  <div>
     
      {props.friends.map(friend=>{
          return(
             
          <div key={friend._id}> 
      
        <Friend
         id={friend._id}
         firstName={friend.firstName}
         lastName={friend.lastName}
         age={friend.age}
         updateState={props.updateState}
         delete={props.delete}
        />

          </div>
      )
      })}
  </div>

</React.Fragment>)}
export default Friends