import React from 'react';

const ContactView = () => {
  return (
    <section id='contact'>
    <div className="container mt-5">
      <h1>Contact Information</h1>
      
      <div className="row mt-3 mb-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Chandra</h5>
              <p className="card-text">Email: bhattc02@gmail.com</p>
              <p className="card-text">Phone: +1234567890</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">David</h5>
              <p className="card-text">Email: david@example.com</p>
              <p className="card-text">Phone: +1987654321</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    </section>
  );
};

export default ContactView;
