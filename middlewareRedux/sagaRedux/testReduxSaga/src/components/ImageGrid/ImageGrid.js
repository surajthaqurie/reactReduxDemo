import React, { Component } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../../actions/index';
import './styles.css';

import Button from '../Button/index';
import Stats from '../Stats/index';

// const key = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';
class ImageGrid extends Component {
    // state = {
    //     images: [],
    // };

    componentDidMount() {
        // fetch(`https://api.unsplash.com/photos/?client_id=${key}&per_page=28`)
        //     .then(res => res.json())
        //     .then(images => {
        //         this.setState({
        //             images,
        //         });
        //     });

        this.props.loadImages();
    }

    render() {
        // const { images } = this.state;
        const { images, error, isLoading, loadImages, imageStats } = this.props;
        return (
            <div className="content">
                <section className="grid">
                    {images.map(image => (
                        <div
                            key={image.id}
                            className={`item item-${Math.ceil(
                                image.height / image.width,
                            )}`}
                        >
                            <Stats stats={imageStats[image.id]} />
                            <img
                                src={image.urls.small}
                                alt={image.user.username}
                            />
                        </div>
                    ))}
                    {/* <a onClick={this.props.loadImages}>Load Images</a> */}
                </section>
                {error && <div className="error">{JSON.stringify(error)}</div>}
                <Button
                    onClick={() => !isLoading && loadImages()}
                    loading={isLoading}>
                    Load Here
                </Button>
            </div>
        );
    }
}

// This function gives props value
const mapStateToProps = ({ isLoading, images, error, imageStats }) => ({
    isLoading,
    images,
    error,
    imageStats
});

// Bind the action with store
const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps // null 
)(ImageGrid);


