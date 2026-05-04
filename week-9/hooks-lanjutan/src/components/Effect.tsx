import { useState, useEffect } from "react";

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
  const [number, setNumber] = useState<number>(0);

  useEffect(() => {
    console.log("Effect dijalankan dengan trigger number 1");

    return () => {
      console.log("Effect dibersihkan dengan trigger number 1");
    };
  }, [number]);
  // number di gunakan sebagai trigger

  useEffect(() => {
    console.log("Effect dijalankan dengan trigger number 2");

    return () => {
      console.log("Effect dibersihkan dengan trigger number 2");
    };
  }, []);

  return (
    <div>
      <button
        onClick={() => setNumber(number + 1)}
        className="py-2 px-3 bg-green-700 text-white hover:bg-green-800 rounded-lg"
      >
        Add Number
      </button>
      <p className="text-3xl font-bold text-blue-600">{number}</p>
    </div>
  );
};

export default EffectStudyCase;
