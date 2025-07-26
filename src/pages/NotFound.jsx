import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="container notfound-container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="display-1 text-muted">404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <p className="lead mb-4">
            Oops! The page you're looking for doesn't exist. 
            It might have been moved or deleted.
          </p>
          <Link to="/" className="btn btn-success btn-lg">
            <i className="fas fa-home me-2"></i>
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound; 