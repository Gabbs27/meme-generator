import React from "react";

function Header() {
  return (
    <header className='header'>
      <img
        src={process.env.PUBLIC_URL + "/Memelogy.png"}
        className='header--image'
        alt='logo'
      />
      <h2 className='header--title'>Meme Generator</h2>
      <h4 className='header--project'>
        <a
          className='header--title'
          href='https://codewithgabo.com'
          target='_blank'
          rel='noreferrer'>
          CodeWithGabo.com
        </a>
      </h4>
    </header>
  );
}
export default Header;
