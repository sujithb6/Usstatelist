/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';

const ImageTabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleTabClick(1)}>Tab 1</button>
        <button onClick={() => handleTabClick(2)}>Tab 2</button>
        <button onClick={() => handleTabClick(3)}>Tab 3</button>
      </div>
      <div>
        {activeTab === 1 && (
          <img src="https://github.com/sujithb6/images/blob/main/us-state-wise-population.jpeg" alt="Image 1" />
        )}
        {activeTab === 2 && (
          <img src="https://gitlab.com/ApexAI/autowareclass2020/-/raw/master/images/valet_parking.jpeg" alt="Image 2" />
        )}
        {activeTab === 3 && (
          <img src="path_to_image_3" alt="Image 3" />
        )}
      </div>
    </div>
  );
};

export default ImageTabs;
