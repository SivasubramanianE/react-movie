import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop: '1rem' 
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const UserTable = (props) => {  

  const classes = useStyles();

  return <div className="App">
   
  <div className="box-container">
  {/* (props.searchText !== "" ? props.users:props.data) */}
    {props.users.map((d, i) => {
      return <Card className={classes.root}>
      <CardContent>
      <div key={i}>
        <div>
        <Typography variant="subtitle1">{+i}. {d.title}</Typography><Typography variant="body2" color="textSecondary">({d.year})</Typography>
        </div>
        {/* <b>Year: </b>{d.year}<br />
        <b>Color: </b>{d.color}<br />
        <b>Pantone value: </b>{d.pantone_value} */}
        <br></br>
          {/* <button onClick={() => props.deleteUser(d.id)} className="button">   Delete </button>
          <button onClick={() => {props.editRow(d)}}     className="button" color="secondary"> Edit </button>
         */}
      </div>
      </CardContent></Card>
      
    })}
    

    
    <div className="clearboth"></div>
    {/* {data.length === 0 && <span>No records found to display!</span>} */}
  </div>
 
</div>
  }

export default UserTable