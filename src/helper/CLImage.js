import React, {Component} from 'react';
import * as CLOUDINARY from 'cloudinary-core';

export const cloudName = 'dbt';

export const cloudinary = CLOUDINARY.Cloudinary.new({cloud_name: cloudName});

export default class CLImage extends Component {
  constructor() {
    super();
    this.state = {
      imageWidth: 0,
      imageHeight: 0,
    };
  }

  render() {
    return this.renderImage() ;
  }

  renderImage() {
    let opts = {};
    Object.assign(opts, this.props.options, {
        imageWidth: this.props.imageWidth,
        imageHeight: this.props.imageHeight,
    });
    return (
        <img
            className={this.props.className}
            src={this.imageUrl(this.props.cloudId, opts)}
            style={this.props.style}
        />
    );
  }

  imageUrl(cloudId, options = {}) {
    let opts = {};
    Object.assign(
      opts,
      {
        crop: 'fill',
        gravity: 'face',
        format: 'jpg',
        quality: 75,
        secure: true,
      },
      options,
    );
    opts.width = options.imageWidth;
    opts.height = options.imageHeight;
    let url = cloudinary.url(cloudId, opts);
    return url;
  }
}
