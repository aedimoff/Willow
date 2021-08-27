  import React from 'react';

  const RenderErrors = ({ errors }) => {
    return (
      <ul>
        {errors.map((error, i) => (
          <li className="session-errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  };

  export default RenderErrors;