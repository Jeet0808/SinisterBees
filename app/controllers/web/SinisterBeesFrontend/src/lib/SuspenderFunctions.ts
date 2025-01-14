// export default function withSuspense(fn) {
//     return async (...args) => {
//       let status = "s";
//       let response;
  
//       const suspender = fn(...args).then(
//         (res) => {
//           status = "success";
//           response = res;
//         },
//         (err) => {
//           status = "error";
//           response = err;
//         }
//       );
  
//       return () => {
//         if (status === "pending") {
//           return suspender;
//         } else if (status === "error") {
//           throw response;
//         } else {
//           return response;
//         }
//       };
//     };
//   }
  