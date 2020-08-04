import React from 'react';
import './PublicLayout.scss';

// Layout for unauth user
const PublicLayout = props => (
  <div className="h-100">
    {props.children}
  </div>
)

export default PublicLayout;
