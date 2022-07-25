import React from 'react';
import { SvgBlob } from 'react-svg-blob';
import { cross as crossPattern } from 'react-svg-blob/dist/lib/patterns';

function blob() {
  return (
    <div className='blob'>
      <SvgBlob variant='solid' color='#00cec9' />;
      <SvgBlob variant='gradient' colors={['#2980B9', '#6DD5FA']} />
      <SvgBlob
        variant='pattern'
        pattern={crossPattern}
        color='#d1d8e0'
        isOutline
      />
      <SvgBlob
        variant='image'
        image='https://source.unsplash.com/random/600x600/?plants'
      />
    </div>
  );
}
export default blob;
