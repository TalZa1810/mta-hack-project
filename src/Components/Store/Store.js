import React from 'react';
import Avatar from 'material-ui/Avatar';
import FontIcon from 'material-ui/FontIcon';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import PictureGrid from './PictureGrid';


import {
    blue300,
    indigo900,
    orange200,
    deepOrange300,
    pink400,

} from 'material-ui/styles/colors';


const style = {margin: 5};


const Store = () => (
    <List>
        <ListItem
            disabled={true}
            leftAvatar={
                <Avatar
                    icon={<FontIcon className="muidocs-icon-communication-voicemail" />}
                    color={blue300}
                    backgroundColor={pink400}
                    size={100}
                    style={style}
                />
            }
        >
            <PictureGrid > </PictureGrid >

        </ListItem>
    </List>
);

export default Store;