// import React from "react";
// import { motion } from "framer-motion";

// const FramerMotion = () => {
//   return (
//     // Fade In
//     // <motion.div
//     //   initial={{ opacity: 0 }}
//     //   animate={{ opacity: 1 }}
//     //   transition={{ duration: 2 }}
//     //   style={{
//     //     width: 200,
//     //     height: 200,
//     //     background: "royalblue",
//     //   }}
//     // />

//     // Slide Left
//     // <motion.div
//     //   initial={{
//     //     x: -200,
//     //     opacity: 0,
//     //   }}
//     //   animate={{
//     //     x: 300,
//     //     opacity: 1,
//     //   }}
//     //   transition={{
//     //     duration: 2,
//     //   }}
//     //   style={{
//     //     width: 200,
//     //     height: 200,
//     //     background: "tomato",
//     //   }}
//     // />

//     // Scale Animation
//     // <motion.div
//     //   initial={{ scale: 0 }}
//     //   animate={{ scale: 2 }}
//     //   transition={{ duration: 3 }}
//     //   style={{
//     //     width: 200,
//     //     height: 200,
//     //     background: "purple",
//     //   }}
//     // />

//     // Hover Animation
//     // <motion.button
//     //   whileHover={{
//     //     scale: 1.1,
//     //   }}
//     //   whileTap={{
//     //     scale: 0.9,
//     //   }}
//     //   style={{
//     //     padding: "12px 24px",
//     //     border: "none",
//     //     background: "black",
//     //     color: "white",
//     //     borderRadius: "10px",
//     //   }}
//     // >
//     //   Submit
//     // </motion.button>

//     // Card
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 50,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       whileHover={{
//         scale: 1.03,
//       }}
//       transition={{
//         duration: 0.5,
//       }}
//       style={{
//         width: 300,
//         padding: 20,
//         borderRadius: 20,
//         background: "white",
//         boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
//       }}
//     >
//       <h1>Product Card</h1>

//       <p>Modern animation using Framer Motion</p>
//     </motion.div>
//   );
// };

// export default FramerMotion;

// =====================
// ANIMATE PRESENCE
// =====================
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      style={{
        padding: 40,
      }}
    >
      <button onClick={() => setShow(!show)}>Toggle</button>

      <AnimatePresence>
        {show && (
          <motion.div
            initial={{
              opacity: 0,
              y: -50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -50,
            }}
            transition={{
              duration: 0.5,
            }}
            style={{
              width: 200,
              height: 200,
              background: "royalblue",
              marginTop: 20,
              borderRadius: 20,
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
