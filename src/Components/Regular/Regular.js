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
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';


export const arrMems = [
    {
    title: "Mem1",
    upvotes: 0,
    downvotes: 0,
    img: image1, 
  },

  {
    title: "Mem2",
    upvotes: 0,
    downvotes: 0,
    img: image2, 
  },

  {
    title: "Mem3",
    upvotes: 0,
    downvotes: 0,
    img: image3, 
  },

  {
    title: "Mem4",
    upvotes: 0,
    downvotes: 0,
    img: image4, 
  },

  {
    title: "Mem5",
    upvotes: 0,
    downvotes: 0,
    img: image5, 
  },

  {
    title: "Mem6",
    upvotes: 0,
    downvotes: 0,
    img: image6,
  },

  {
    title: "Mem7",
    upvotes: 0,
    downvotes: 0,
    img: image7, 
  },

  {
    title: "Mem8",
    upvotes: 0,
    downvotes: 0,
    img: image8, 
  },

  {
    title: "Mem9",
    upvotes: 0,
    downvotes: 0,
    img: image9, 
  },

  {
    title: "Mem9",
    upvotes: 0,
    downvotes: 0,
    img: image10, 
  },

  {
    title: "Mem9",
    upvotes: 0,
    downvotes: 0,
    img: image11, 
  },

  {
    title: "Mem9",
    upvotes: 0,
    downvotes: 0,
    img: image12, 
  },
]

export default class Regular extends Component {
	constructor (props) {
        super(props);
		this.items = this.props.items;
        this.state = {
            items: []
        };

		this.classes = makeStyles((theme) => ({
			root: {
			  display: 'flex',
			  flexWrap: 'wrap',
			  justifyContent: 'space-around',
			  overflow: 'hidden',
			  backgroundColor: theme.palette.background.paper,
			},
			gridList: {
			  width: 600,
			  height: 'auto',
			},
			icon: {
			  color: 'rgba(255, 255, 255, 0.54)',
			  border: 'none'
			},
		
          }));
	}

	componentDidMount() {
		this.setState ({items: this.props.items})
	};

	useEffect () {};
    

	changeCounterValue = (i, type) => { 

		console.log (i)

		if (type === 'thumbup') {
			this.items[i].upvotes += 1;

		} else if (type === 'thumbdown') {
			this.items[i].downvotes += 1;}

		let prevItems = this.items;
		this.setState({items: prevItems})
		}
		
	render() {
	return (

		<div className={this.classes.root}>
 			<GridList cellHeight={380} className={this.classes.gridList}>
  	       		<GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
  	         		<ListSubheader component="div"><h1>List Regular memes</h1></ListSubheader>
  	       	</GridListTile>
					{this.props.items.map((item, i) => ( <GridListTile key={item.title} >
					<img src={item.img} alt={item.title} />
             <GridListTileBar
              title={item.title}
              actionIcon={
				<ButtonGroup>
                <Button onClick={() => {this.changeCounterValue(i, 'thumbup')}} className={this.classes.icon}>
                    <ThumbUpAltIcon />
                </Button>
				<div className="span">
			  		<span >{item.upvotes}</span>
				</div>
                <Button onClick={() => {this.changeCounterValue(i, 'thumbdown')}} className={this.classes.icon}>
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
