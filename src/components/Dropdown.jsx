import React, { useState } from 'react';
import './dropdown.css';

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track dropdown visibility

  // Function to toggle dropdown visibility
  const handleFilterOpening = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <div style={{ borderBottom: "2px solid #9CE2D3" }}>
        <button class="dropdown-button" style={{ marginBottom: 0 }} onClick={handleFilterOpening}>
          <p style={{ fontWeight: "bold" }}>{title}</p>
          <div>
            {!isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-down"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-chevron-up"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 15l6 -6l6 6" /></svg>
            )}
          </div>
        </button>

        {isOpen && <div class="dropdown-content">{children}</div>}

      </div>
    </>
  );
}

export default Dropdown;
