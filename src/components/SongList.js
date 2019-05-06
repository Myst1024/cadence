import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

class SongList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() { 
        const listItems = this.props.songList.map((song) =>
            <ListItem key={song.uri} alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar src={song.album.images[2].url}/>
                </ListItemAvatar>
                <ListItemText
                    primary={song.name}
                    secondary={song.album.name}
                />
            </ListItem>
        );


        return ( 
            <List className="songList">
                {listItems}
            </List> 
        );
    }
}
 
export default SongList;