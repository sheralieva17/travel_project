import React from 'react';

export const Pagination = (props) => {
    const { page, count, handleChange } = props;
  return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}>
      <span style={{ marginRight: '10px' }}>Page: {page}</span>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          onChange={handleChange}
          style={{
            padding: '5px 10px',
            margin: '0 5px',
            cursor: 'pointer',
            border: '1px solid white',
            borderRadius: '5px',
            background: page === index + 1 ? '#ff7f50' : 'transparent',
            color: page === index + 1 ? 'white' : 'black',
          }}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
}


