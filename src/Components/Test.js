// import React from "react"
// import { Button } from 'antd';
// import { useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';




// function test(){
//     const history = useHistory();

// //     let navigate = useNavigate(); 
// //     const routeChange = () =>{ 
// //     let path = `/load`; 
// //     navigate(path);
// //   }
//  return(

//   <div>   
//   <h1>

//       jamesj
//       nb
//       birthb
//       bj
//       bjk
//       <Button type="primary">Primary Button</Button>
//       <Button onClick={()=> history.push("/home")}>Click me!</Button>
//       {/* <Button color="primary" className="px-4"
//             onClick={routeChange}
//               >Primary Button</Button> */}
//   Welcome to the world. mm
//   </h1>
//   </div>

//  )
// }

// export default test;

import React from 'react';
import { useHistory } from "react-router-dom";
function Test() {
  const history = useHistory();
  const navigateTo = () => history.push('/home');//eg.history.push('/login');

  return (
   <div>
   <button style={{ backgroundColor: "#001C3E", color: "WHITE", marginLeft: "680px" ,height:"60px",width:"100px"}} onClick={navigateTo} type="button" >Click Me!</button>
   </div>
  );
}
export default Test;