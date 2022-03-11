import React, { useState } from "react";

const BlockList = () => {
 const [block, setBlock] = useState(false)

  const blockHandler = () => {
    setBlock(true)        
  };
  console.log("status", block);

  const unblockHandler = () => {
   setBlock(false)
  };

  return (
    <>
      <div style={{ width: "100%", marginLeft: "250px", marginTop: "20px" }}>
        BlockListtttttttttttttttt
        <button onClick={() => blockHandler()}>Block</button>
        <button onClick={() => unblockHandler()}>unblock</button>
      </div>
    </>
  );
};

export default BlockList;
