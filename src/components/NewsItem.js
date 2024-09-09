import React, { useState } from 'react';

const NewsItem = (props) => {
  const { title, description, imageUrl, newsUrl, author, date } = props;
  
  const [isHovered, setIsHovered] = useState(false);

  const cardStyle = {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    border: '1px solid #ddd',  // Light border for the card
    boxShadow: isHovered ? '0 4px 12px rgba(0, 0, 0, 0.3)' : 'none',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    backgroundColor: '#fff',  // Background color of the card
    color: '#000',  // Text color
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.02)' : 'scale(1)',
    minHeight: '350px'  // Ensure a minimum height
  };

  const imgStyle = {
    height: '200px',  // Fixed height for the image
    objectFit: 'cover',
  };

  return (
    <div className='my-3'>
      <div 
        className="card h-100" 
        style={cardStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img 
          src={!imageUrl ? "https://images.mktw.net/im-34752006/social" : imageUrl} 
          className="card-img-top" 
          alt="..."
          style={imgStyle}
        />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={{ fontSize: '1.1rem' }}>{title}</h5>
          <p className="card-text" style={{ flex: '1' }}>{description}</p>
          <p className="card-text">
            <small className="text-muted">By {!author ? 'Unknown' : author} on {new Date(date).toGMTString()}</small>
          </p>
          <a rel="noreferrer" href={newsUrl} target='_blank' className="btn btn-sm btn-dark mt-auto">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;