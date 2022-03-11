import React, { useState ,useEffect} from "react";

const BlockList = (UID) => {
  const [users, setUsers] = useState([])
 const [block, setBlock] = useState("")

//  const fetchData = () => {
//   fetch(`http://localhost:4500/feedback/list `)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log("dataa", data);
//       setUsers(data);
//       console.log("dataaa", data);
//     });
// };
console.log("blockList DATA",users);
 
// useEffect(() => {
//   fetchData();
// }, []);
// const mulData = users.filter((item) => item.Status === "true")
//   console.log("mul dataaa",mulData)
//   setBlock(mulData)
//   console.log("blockkkkk",block);
  return (
    <> <div style={{marginLeft:"400px"}}>


         <h1>hiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
      
    </div>
    </>
  );
};

export default BlockList;
