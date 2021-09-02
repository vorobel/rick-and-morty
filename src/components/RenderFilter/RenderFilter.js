import React from 'react';
import './render-file.css';
import { Button, ButtonGroup, TextField, Box } from '@material-ui/core';

function RenderFilter() {
  return(
    <section className='render-filter'>
      <div className='container render-filter-container'>
        <Box mr={10}>
          <ButtonGroup variant="contained" color="inherit" aria-label="contained outlined button group" mr={2}>
            <Button color='primary' >All</Button>
            <Button>Human</Button>
            <Button>Animal</Button>
            <Button>Alien</Button>
          </ButtonGroup>
        </Box>
        <form noValidate autoComplete="off" className='render-filter-form'>
          <TextField id="outlined-basic" label="Search by name..." variant="outlined" size='small'/>
          <Button variant='contained' color='inherit'>Search</Button>
        </form>
      </div>
    </section>
  )

}

export default RenderFilter;