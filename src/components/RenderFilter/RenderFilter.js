import React from 'react';
import './render-file.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, ButtonGroup, Input, TextField, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

function RenderFilter() {
  const classes = useStyles();

  return(
    <section className='render-filter'>
      <div className='container render-filter-container'>
        <Box mr={5}>
          <ButtonGroup variant="contained" color="inherit" aria-label="contained primary button group" mr={2}>
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
        <form className={classes.root} noValidate autoComplete="off" className='render-filter-form'>
          <TextField id="outlined-basic" label="Search by name..." variant="outlined" size='small'/>
          <Button variant='contained' color='inherit'>Search</Button>
        </form>
      </div>

    </section>
  )

}

export default RenderFilter;