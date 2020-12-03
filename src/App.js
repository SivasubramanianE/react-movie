import React, { useState, Fragment } from 'react'
import AddUserForm from './forms/AddUserForm'
import EditUserForm from './forms/EditUserForm'
import UserTable from './tables/UserTable'
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Card from './card/Card.js'
import {movieData as _usersData} from './MovieList'
import {searchWithValues} from './Utils'
const App = () => {

	// Setting state
	const [ users, setUsers ] = useState(_usersData)
	const [ usersData, setUserData ] = useState(_usersData.slice(0,10))


   const [searchText, setSearchText] = useState("");

  // handle change event of search input
  const handleChange = value => {
	  if(value.target.value == ""){
		setUsers(_usersData.slice(0,10))
		  return 
	  }
    setSearchText(value.target.value)

	let filter = [{
		"value" : value.target.value,
		"field" :"title"
	}]
	
	setUserData(searchWithValues(_usersData, filter))
  };


  


	return (
		<div className="container">
			<h3>Moview Review Channel</h3>
			<div >
				{/* <div className="flex-large">
					{editing ? (
					<Fragment>
						<h4>Edit user</h4>
						<EditUserForm editing={editing} setEditing={setEditing} currentUser={currentUser} updateUser={updateUser}/>
					</Fragment>
					) : (
					<Fragment>
						<h4>Add a Review</h4>
						<AddUserForm addUser={addUser} />
					</Fragment>
					)}
				</div> */}
				<div>
					<TextField 
					id="standard-search" 
					label="Search field" 
					type="search" 
					value={searchText} 
					onChange={handleChange}
					 />

        			{/* <InputLabel id="demo-simple-select-label">Filter By</InputLabel>
       				<Select labelId="demo-simple-select-label" id="demo-simple-select">
					{
					movieByfilters.map(f=>{
						return <MenuItem value={f} onClick={a=> sort(f)}>{f}</MenuItem>
					})}   
       				</Select> */}
		
					<h4>View List</h4>
					
					{usersData.map((a,b) => <Card 
					key={b}
   							movieName = {a.title}
    						year = {a.year}
    						genre = {a.genre}
    						time = {a.duration}
   							description = {a.storyline}
    						readmorelink = {a.year}
    						movieImage = {a.posterurl}
    						playbuttonLink = {a.title}
						/>	
					)}
					{/* <UserTable users={users} /> */}
					{/* <UserTable users={filterActive?filteredData:users} data={data} editRow={editRow} searchText={searchText}deleteUser={deleteUser} /> */}
				</div>
			</div>
		</div>
  )
  

}

export default App