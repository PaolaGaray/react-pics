import React, { Component } from 'react'
import './ImageList.css'
import ImageCard from './ImageCard'

export default class Image extends Component {
    render() {
        const imageList = this.props.images.map((image) => <ImageCard key={image.id} alt={image.description} image={image} />)
        return (
            <div className="image-list">
                {imageList}
            </div>
        )
    }
}