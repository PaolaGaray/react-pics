import React, { Component } from 'react'

export default class Image extends Component {
    render() {
        const imageList = this.props.images.map((image) => <img key={image.id} src={image.urls.regular} alt={image.description} />)
        return (
            <div>
                {imageList}
            </div>
        )
    }
}
