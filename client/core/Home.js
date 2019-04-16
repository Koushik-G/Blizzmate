import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import Card, {CardContent, CardMedia} from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import friendsImg from './../assets/images/friends.jpg'

const styles = theme => ({
  card: {
    maxWidth: '90%',
    margin: 'auto',
    marginTop: theme.spacing.unit * 5
  },
  title: {
    textAlign: 'center',
    paddingTop :`${theme.spacing.unit * 3}px`,
    paddingBottom :`${theme.spacing.unit * 3}px`, 
    color: theme.palette.text.secondary
  },
  media: {
    minHeight: 640
  }
})

class Home extends Component {
  render() {
    const {classes} = this.props
    return (
        <Card className={classes.card}>
          <Typography type="headline" component="h1" className={classes.title} style={{fontFamily:'Pacifico', fontSize:"1.5rem"}}>
            Blizzmate
          </Typography>
          <CardMedia className={classes.media} image={friendsImg} title="Unicorn Shells"/>
          <CardContent>
            <Typography type="body1" component="h1" style={{fontFamily:'Pacifico', fontSize:"1.5rem", textAlign:'center'}}>
              Finding Friends with similar interests.
            </Typography>
          </CardContent>
        </Card>
    )
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Home)
