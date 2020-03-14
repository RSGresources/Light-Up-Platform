import React, { useState } from 'react';

import {fade,  makeStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      },
      searchIcon: {
        width: theme.spacing(7),
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
        fontSize: '0.63em',
        padding: theme.spacing(1, 1, 1, 7),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('xs')]: {
          width: '10vw',
          '&:focus': {
            width: '40vw',
          },
        },
      },
}));


const SearchBar = ({handleClick}) => {
    const classes = useStyles();

    const [filterParams, setfilterParams] = useState('');

    const handleSearchOnChange = (event) => {
           setfilterParams(event.target.value);
    }

    return ( 
        <div className={classes.search}>
        <div onClick={() => handleClick(filterParams)} className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={handleSearchOnChange}
          onKeyDown={ 
                      (e) => e.type === 'keydown' &&
                      e.key === 'Enter' &&
                      handleClick(filterParams)
                    }
        />
      </div>
     );
}
 
export default SearchBar;