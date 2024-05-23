import React from 'react';

const iconClass = 'w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-lg shadow-md';

const Form = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="text-center text-lg md:text-xl lg:text-2xl mb-4">
        Customization is at the core of the Sleeve experience — choose from any combination of design choices, behaviors and settings to make Sleeve at home on your desktop.
      </p>
      <div className="flex space-x-2 md:space-x-4">
        {[...Array(8)].map((_, index) => (
          <img key={index} src={`https://placehold.co/50x50`} alt={`icon${index + 1}`} className={iconClass} />
        ))}
      </div>
    </div>
  );
};

export default Form;
