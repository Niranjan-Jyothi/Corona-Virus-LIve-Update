import React from 'react';
import { Card, CardContent, Typography, Grid, CardHeader} from '@material-ui/core';
import styles from './Cards.module.css';
import CountUp from 'react-countup'
import cx from 'classnames';

const  Cards = ({data :{confirmed, recovered, deaths, lastUpdate }}) => {
  // console.log(props);
  if (!confirmed){
    return 'Loading...'
  }
  else {

  
  return( <div className={styles.container} >
    <Grid container spacing={5} justify='center'>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)} >
        <CardContent>
        <Typography color='textSecondary' gutterBottom>INFECTED</Typography>
          <Typography variant='h5'>
            <CountUp 
            start={0}
            end={confirmed.value}
            duration={2}
            separator=',' /> </Typography>
          <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant='body2'>Number of Active Cases</Typography>
          </CardContent>  
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)} >
        <CardContent>
        <Typography color='textSecondary' gutterBottom>RECOVERED</Typography>
          <Typography variant='h5'>
            <CountUp 
            start={0}
            end={recovered.value}
            duration={2}
            separator=',' /> </Typography>
          <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant='body2'>Recovered Cases</Typography>
          </CardContent>  
      </Grid>
      <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.death)} >
          <CardContent>
          <Typography color='textSecondary' gutterBottom>DEATHS</Typography>
          <Typography variant='h5'>
            <CountUp 
            start={0}
            end={deaths.value}
            duration={2}
            separator=',' /> </Typography>
          <Typography color = 'textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
          <Typography variant='body2'>Number of Deaths</Typography>
          </CardContent>  
      </Grid>

    </Grid>
    
  </div>

  ) }
}
export default Cards