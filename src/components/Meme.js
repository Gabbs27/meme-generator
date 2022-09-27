import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const mems = memesData.data.memes.map((item) => {
    return item.url;
  });

  function getMeme() {
    console.log(mems);
  }
  return (
    <main>
      <div className='form'>
        <input type='text' placeholder='Top text' className='form--input' />
        <input type='text' placeholder='Bottom text' className='form--input' />
        <button onClick={getMeme} className='form--button'>
          Get a new meme image 🖼
        </button>
      </div>
    </main>
  );
}
