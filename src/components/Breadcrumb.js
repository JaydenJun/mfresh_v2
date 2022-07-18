import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcrumb({ path }) {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h2>
          {
            path.map((p, i) => (
              <React.Fragment key={i}>
                <Link to={p.href}>{p.name}</Link>
                {i < path.length - 1 && '>'}
              </React.Fragment>
            ))
          }
        </h2>
      </div>
    </div>
  )
}
