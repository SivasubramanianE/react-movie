import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '30ch',
            '&:focus': {
                width: '35ch',
            },
        },
    },
    sortas_color:{
        color:'white',
        backgroundColor: '#5c6bc0'
    },
    fontWhiteColor:{
        color: 'white'
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    select: {
        '&:before': {
            borderColor: 'white',
        },
        '&:after': {
            borderColor: 'white',
        }
    },
    active :{
        backgroundColor:'white'
    }
}));

export default function Header(props) {
    const classes = useStyles();
    
    return (
        <div className={classes.root}>
            <AppBar position='static'>
                <Toolbar>
                <Grid
                      container
                      direction="row"
                      justify="space-between"
                      alignItems="center"
                    >
                    <div>
                    <Typography className={classes.title} variant='h6' >
                        Movie Website
                    </Typography>
                    </div>
                  
                  <div>

                  <FormControl className={classes.formControl}>
                  <InputLabel id="filter-by">Search By </InputLabel>
       				<Select className={classes.select} labelId="filter-by" id="filter-by" onClick={props.filteredSearch}>
					{
					props.movieSubsearch.map((f,i)=>
						 <MenuItem key={i} value={f}>{f}</MenuItem>
					)}   
       				</Select>
                    </FormControl>

                  </div>
                  <div className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon />
                        </div>
                        <InputBase
                            placeholder='Search…'
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                            value={props.value}
                            onChange={props.onChange}
                        />
                    </div>
                  
                    
                    <div>
                    <InputLabel id="filter-by" className={classes.fontWhiteColor}>Sort By Title : </InputLabel>
                    <ButtonGroup variant="text"  aria-label="text button group">
                      <Button className={(props.sort === 'asc' && !props.isSortYear)? classes.active: classes.sortas_color}  onClick={ () => { props.sortByAz('asc') } }>ASC</Button>
                      <Button className={(props.sort === 'desc'&& !props.isSortYear)? classes.active: classes.sortas_color} onClick={() => { props.sortByAz('desc')}}>DESC</Button>
                    </ButtonGroup>
                    </div>

                    <div>
                    <InputLabel id="filter-by" className={classes.fontWhiteColor}>Sort By Release year :</InputLabel>
                    <ButtonGroup variant="text"  aria-label="text button group">
                      <Button className={(props.sort === 'asc' && props.isSortYear)? classes.active: classes.sortas_color} onClick={ () => { props.sortByYear('asc') } }>ASC</Button>
                      <Button className={(props.sort === 'desc'&& props.isSortYear)? classes.active: classes.sortas_color} onClick={() => { props.sortByYear('desc')}}>DESC</Button>
                    </ButtonGroup>
                    </div>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
