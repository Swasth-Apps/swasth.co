import React, {Component} from 'react';
import * as CLOUDINARY from 'cloudinary-core';

export const cloudName = 'dbt';

export const cloudinary = CLOUDINARY.Cloudinary.new({cloud_name: cloudName});

export default class CLImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageWidth: 0,
      imageHeight: 0,
    };
  }

  render() {
    return this.renderImage() ;
  }

  renderImage() {
    console.log(this.props)
    return (
        <img
            className={this.props.className}
            src={this.imageUrl(this.props.cloudId, this.props.options || {},this.props.transformation || [])}
            style={this.props.style}
        />
    );
  }

  imageUrl(cloudId, options = {}, transformation) {
    let opts = {};
    Object.assign(
      opts,
      {
        crop: 'fill',
        gravity: 'face',
        quality: 75,
        secure: true,
      },
      options,
    );
    if(transformation){
      opts.transformation = transformation;
    }
    opts.width = options.imageWidth;
    opts.height = options.imageHeight;
      let url = cloudinary.url(cloudId, opts);
    return url;
  }
}
