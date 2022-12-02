import React from "react";
//import close from "/images/icon-remove.svg";

const Header = ({ keywords, removeKeywords, clearAll }) => {
  
  return (
    <>
      <header>
        <img
          src="/images/bg-header-desktop.svg"
          alt=""
          className="header-image"
        />
      </header>
      <div className="header-container">
        {keywords.length > 0 && (
          <ul>
            {keywords.map((keyword, index) => (
              <li key={index}>
                {keyword}
                <button
                  className="close"
                  onClick={() => removeKeywords(keyword)}
                >
                  <img src="/images/icon-remove.svg" alt="" />
                </button>
              </li>
            ))}
            <a href="/" className="clear--button" onClick={() => clearAll()}>
              clear
            </a>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
