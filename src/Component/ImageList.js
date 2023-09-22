import React from "react";

const ImageList = ({ images }) => {
  return (
    images.map((image, index) => (
      <img key={image.id} src={image.urls.thumb} alt={image.alt_description} />
    ))
  );
};

export default ImageList;