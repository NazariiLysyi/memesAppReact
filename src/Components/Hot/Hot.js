import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {arrMems} from '../Regular/Regular';


const useStyles = makeStyles((theme) => ({
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

  }));


const Hot = () => {

		  console.log ();

		  const newArr = arrMems.filter(function(item) {
			  return item.upvotes - item.downvotes > 5;
		  });
		  console.log (newArr)
	
	const classes = useStyles();
	
	return (
		<div className={classes.root}>
			<GridList cellHeight={280} className={classes.gridList}>
        		<GridListTile key="Subheader" cols={2} style={{ height: 100 }}>
          		<ListSubheader component="div"><h1>List Hot memes</h1></ListSubheader>
        	</GridListTile>
					{newArr.map((item) => ( <GridListTile key={item.img} >
						<img src={item.img} alt={item.title} />
            <GridListTileBar
              title={item.title}
              actionIcon={
				<ButtonGroup>
                    <ThumbUpAltIcon />
				<div className="span">
			  		<span >{item.upvotes}</span>
				</div>
                    <ThumbDownIcon />
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
};


export default Hot;