import React from 'react';
import memeUpload from '../../assets/img/memeupload.jpeg';

const Upload = () => {
  return (
	<div>
	  	<h1>Oh yes! Upload new meme</h1>
	  	<img src={memeUpload} alt="memeupload" />;
	</div>
  );
};

export default Upload;