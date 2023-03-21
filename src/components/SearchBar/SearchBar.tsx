import React, { useState } from "react";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  const [input, setInput] = useState<string>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    console.log(input)
  }

  return (
    <input
    type="text"
    placeholder="Search"
    onChange={handleInput}
    className={styles.searchBar}
    />
  )
}

export default SearchBar;


// const GET_COLOR = gql`
// `


//  function getColor() {
//         axios({
//             'method': 'POST',
//             'url': '/api/graphql',
//             'data': {
//                 'query': `
//                     query Query{
//                       getColor {
//                         hex
//                       }
//                     }
//                 `
//             }
//         }).then((_res) => {
//             setRes(JSON.stringify(_res.data))
//         }).catch((e) => console.log(e))
//     }

//     function getRGBColor() {
//       axios({
//         method: "POST",
//         url: "/api/graphql",
//         data: {
//           query: `
//                     query Query{
//                       getRGBColor {
//                         hex
//                       }
//                     }
//                 `,
//         },
//       })
//         .then((_res) => {
//           setRes(JSON.stringify(_res.data));
//         })
//         .catch((e) => console.log(e));
//     }
