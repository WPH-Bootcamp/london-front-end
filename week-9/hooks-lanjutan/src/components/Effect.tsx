import React, { useEffect } from "react";

// const Effect = () => {
//   useEffect(() => {
//     console.log("Effect dijalankan");
//     // cleanup
//     return () => {
//       console.log("Effect dibersihkan");
//     };
//   }, []);
//   // ada array dependency
//   // jika ada array kosong, maka effect hanya dijalankan sekali saat komponen pertama kali dirender
//   // jika tidak ada array dependency, maka effect akan dijalankan terus menerus (looping forever)

//   return <div>Effect</div>;
// };

// export default Effect;

const EffectStudyCase = () => {
  return <div>EffectStudyCase</div>;
};

export default EffectStudyCase;
