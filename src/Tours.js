import React, { useState } from 'react';
import Tour from './Tour';
const Tours = ({ Tourz, removeBtn }) => {
  const { id, name, image, info, price } = Tourz;
  const [readMore, setreadMore] = useState(false);
  return (
    <>
      <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
          <div className='tour-info'>
            <h4>{name}</h4>
            <h4 className='tour-price'>${price}</h4>
          </div>
          <p>
            {readMore ? info : `${info.substring(0, 200)}`}
            <button onClick={() => setreadMore(!readMore)}>
              {' '}
              {readMore ? 'see less' : 'see more'}
            </button>
          </p>
          <button className='delete-btn' onClick={() => removeBtn(id)}>
            not interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tours;
