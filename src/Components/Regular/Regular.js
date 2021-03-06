import React, {Component} from 'react';
import image1 from '../../assets/img/meme1.jpeg';
import image2 from '../../assets/img/meme2.jpeg';
import image3 from '../../assets/img/meme3.jpeg';
import image4 from '../../assets/img/meme4.jpg';
import image5 from '../../assets/img/meme5.jpg';
import image6 from '../../assets/img/meme6.jpg';
import image7 from '../../assets/img/meme7.jpg';
import image8 from '../../assets/img/meme8.jpg';
import image9 from '../../assets/img/meme9.jpg';
import image10 from '../../assets/img/meme10.jpg';
import image11 from '../../assets/img/meme11.jpg';
import image12 from '../../assets/img/meme12.jpg';
import image13 from '../../assets/img/meme13.jpg';
import image14 from '../../assets/img/meme14.jpg';
import image15 from '../../assets/img/meme15.jpg';
import image16 from '../../assets/img/meme16.jpg';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";

const useStyles = theme => ({
	root: {
	  display: 'flex',
	  flexWrap: 'wrap',
	  justifyContent: 'space-around',
	  overflow: 'hidden',
	  backgroundColor: theme.palette.background.paper,
	},
	gridList: {
	  width: 1200,
    height: 'auto',
	},
	icon: {
	  color: 'rgba(255, 255, 255, 0.54)',
	  border: 'none'
  },
  });

export const arrMems = [
  {
    title: "Meme1",
    upvotes: 0,
    downvotes: 0,
    img: image1, 
  },

  {
    title: "Meme2",
    upvotes: 0,
    downvotes: 0,
    img: image2, 
  },

  {
    title: "Meme3",
    upvotes: 0,
    downvotes: 0,
    img: image3, 
  },

  {
    title: "Meme4",
    upvotes: 0,
    downvotes: 0,
    img: image4, 
  },

  {
    title: "Meme5",
    upvotes: 0,
    downvotes: 0,
    img: image5, 
  },

  {
    title: "Meme6",
    upvotes: 0,
    downvotes: 0,
    img: image6,
  },

  {
    title: "Meme7",
    upvotes: 0,
    downvotes: 0,
    img: image7, 
  },

  {
    title: "Meme8",
    upvotes: 0,
    downvotes: 0,
    img: image8, 
  },

  {
    title: "Meme9",
    upvotes: 0,
    downvotes: 0,
    img: image9, 
  },

  {
    title: "Meme10",
    upvotes: 0,
    downvotes: 0,
    img: image10, 
  },

  {
    title: "Meme11",
    upvotes: 0,
    downvotes: 0,
    img: image11, 
  },

  {
    title: "Meme12",
    upvotes: 0,
    downvotes: 0,
    img: image12, 
  },

  {
    title: "Meme13",
    upvotes: 0,
    downvotes: 0,
    img: image13, 
  },

  {
    title: "Meme14",
    upvotes: 0,
    downvotes: 0,
    img: image14, 
  },

  {
    title: "Meme15",
    upvotes: 0,
    downvotes: 0,
    img: image15, 
  },

  {
    title: "Meme16",
    upvotes: 0,
    downvotes: 0,
    img: image16, 
  },
]

class Regular extends Component {
	constructor (props) {
    super(props);
		this.items = this.props.items;
      this.state = {
        items: []
      };

	}

	componentDidMount() {
		this.setState ({items: this.props.items})
	};

	useEffect () {};
    
	changeCounterValue = (i, type) => { 

		if (type === 'thumbup') {
			this.items[i].upvotes += 1;

		} else if (type === 'thumbdown') {
			this.items[i].downvotes += 1;}

    let prevItems = this.items;
    
		this.setState({items: prevItems})
	}
		
	render() {

    const { classes } = this.props;

	return (

		<div className={classes.root}>
 			<GridList cellHeight={280} className={classes.gridList}>
  	    <GridListTile key="Subheader" cols={2} style={{ height: 100 }}>
  	      <ListSubheader component="div"><h1>List Regular memes</h1></ListSubheader>
  	    </GridListTile>
				{this.props.items.map((item, i) => ( <GridListTile key={item.title} >
					<img src={item.img} alt={item.title} />
            <GridListTileBar
             title={item.title}
             actionIcon={
            <ButtonGroup>
              <Button onClick={() => {this.changeCounterValue(i, 'thumbup')}} className={classes.icon}>
                <ThumbUpAltIcon />
              </Button>
              <div className="span">
                <span >{item.upvotes}</span>
              </div>
              <Button onClick={() => {this.changeCounterValue(i, 'thumbdown')}} className={classes.icon}>
                <ThumbDownIcon />
              </Button>
              <div className="span">
                <span>{item.downvotes}</span>
              </div>
            </ButtonGroup>	
			    }
          />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
}

export default withStyles(useStyles)(Regular)
