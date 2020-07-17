import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Favorite from '@material-ui/icons/Favorite';
import Home from '@material-ui/icons/Home';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useDrawer from '../../hooks/UseDrawer';

function NavMenu() {
	const { drawerState, dispatchEvent, CLICK_ICON_BUTTON } = useDrawer();
	const useStyles = makeStyles((theme) => ({
		drawer: {
			width: drawerState.drawerWidth,
			flexShrink: 0,
		},
		drawerPaper: {
			width: drawerState.drawerWidth,
		},
		drawerHeader: {
			display: 'flex',
			alignItems: 'center',
			padding: theme.spacing(0, 1),
			// necessary for content to be below app bar
			...theme.mixins.toolbar,
			justifyContent: 'flex-end',
		},
	}));
	const classes = useStyles();
	const theme = useTheme();

	return (
		<Drawer
			className={classes.drawer}
			variant="persistent"
			anchor="left"
			open={drawerState.open}
			classes={{
				paper: classes.drawerPaper,
			}}
		>
			<div className={classes.drawerHeader}>
				<IconButton
					onClick={() => dispatchEvent({ name: CLICK_ICON_BUTTON })}
				>
					{theme.direction === 'ltr' ? (
						<ChevronLeftIcon />
					) : (
						<ChevronRightIcon />
					)}
				</IconButton>
			</div>
			<Divider />
			<List>
				<ListItem button key={'home'}>
					<ListItemIcon>
						<Home />
					</ListItemIcon>
					<ListItemText primary={'Home'} />
				</ListItem>
				<ListItem button key={'favoris'}>
					<ListItemIcon>
						<Favorite />
					</ListItemIcon>
					<ListItemText primary={'Favoris'} />
				</ListItem>
			</List>
		</Drawer>
	);
}

export default NavMenu;
