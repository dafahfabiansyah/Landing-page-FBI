import React from 'react';

const loading = () => {
  return (
    <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
      <div className="flex justify-center items-center gap-4 flex-col ">
        <h3 className="loader" />
      </div>
    </div>
  );
};

export default loading;