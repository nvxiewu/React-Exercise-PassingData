import React from 'react'

class UserFavoriteMovie extends React.Component {
	render(){
   	return(
   		<ul className='profiles-list'>
      {this.props.profiles.map((profile)=>(
    		<li key={profile.id}>
              {this.props.users[profile.id].name+"'s favorite movie is "}{this.props.movies[profile.favoriteMovieID].name}
         </li>
    	))}
      </ul>
    )	  
	}
}

export default UserFavoriteMovie