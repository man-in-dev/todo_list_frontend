import React from "react";

function Home() {
  return (
    <div>
      <form>
        <label htmlFor="name">Todo Name</label>
        <input type="text" id="name" name="name" />

        <br />

        <label htmlFor="description">Todo Description</label>
        <textarea type="text" id="description" name="description" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Home;
