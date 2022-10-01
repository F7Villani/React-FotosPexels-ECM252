import React from 'react';

export const Imagem = ({pic, alt, key}) => {
  return (
    <div key={key}>
        <img src={pic} alt={alt} />
    </div>
  )
}


