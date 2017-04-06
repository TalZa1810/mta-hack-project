/**
 * A simple example of a scrollable `GridList` containing a [Subheader](/#/components/subheader).
 */
import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: 500,
        height: 450,
        overflowY: 'auto',
    },
};

const tilesData = [
    {
        img: 'https://us.123rf.com/450wm/popmarleo/popmarleo1306/popmarleo130600001/20329169-hipster-clothing-and-accessories-collection.jpg?ver=6',
        title: 'Accessories',
    },
    {
        img: 'http://www.pitt.edu/~gmd37/teamwebpage/bike.jpg',
        title: 'Outfit',
    }
];

export default class PictureGrid extends React.Component {

    imageClick() {
        switch(this.title){
            case "Accessories":
                alert(this.title);
                break;
            case "Outfit":
                alert(this.title);
                break;

        }
    }

    render() {
        return (<div style={styles.root}>
            <GridList style={styles.gridList} cellHeight={180}>
                <div id="store-title"><Subheader><b> Store </b></Subheader></div>

                {tilesData.map((tile) => (
                    <GridTile
                        key={tile.img}
                        title={tile.title}
                        actionIcon={<IconButton>
                            <StarBorder color="white"/></IconButton>}>
                        <img onClick={this.imageClick.bind(tile)} src={tile.img}/>
                    </GridTile>
                ))}
            </GridList>
        </div>)
    }
}



