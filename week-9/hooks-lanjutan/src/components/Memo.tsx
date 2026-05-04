import { useState, useMemo } from "react";

const Memo = () => {
  const [number, setNumber] = useState<number>(0);
  const [input, setInput] = useState<string>("");

  // Tanpa useMemo, maka setiap kali komponen dirender, maka function yang ada di dalam useMemo akan dijalankan kembali
  //   const result = (() => {
  //     console.log("Tanpa UseMemo");
  //     return number * 1000;
  //   })();
  // IIFE = Immediately Invoked Function Expression
  // Artinya
  // function yang langsung dijalankan saat dibuat

  // Dengan useMemo, maka function yang ada di dalam useMemo hanya akan dijalankan sekali saat komponen pertama kali dirender, dan tidak akan dijalankan kembali saat komponen dirender ulang
  const result = useMemo(() => {
    console.log("Dengan UseMemo");
    return number * 1000;
  }, [number]);

  return (
    <>
      <div>
        <h1>UseMemo</h1>
      </div>
      <div>
        <button
          onClick={() => setNumber(number + 1)}
          className="py-2 px-3 bg-green-700 text-white hover:bg-green-800 rounded-lg"
        >
          Add Number
        </button>
        <p className="text-3xl font-bold text-blue-600">{number}</p>
      </div>
      <h3>Hasil: {result}</h3>

      <div>
        <input
          type="text"
          value={input}
          placeholder="Masukkan text ..."
          onChange={(e) => setInput(e.target.value)}
          className="border-2 border-gray-300 rounded-lg py-2 px-3 w-full"
        />
        <p className="text-lg font-semibold text-gray-700 mt-2">{input}</p>
      </div>
    </>
  );
};

export default Memo;
