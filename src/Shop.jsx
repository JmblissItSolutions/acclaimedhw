import React, { useRef, useEffect, useState } from "react";
import { Helmet } from "react-helmet";

const Shop =()=>{
  // const cards = [
  //   {
  //     cardName: 'card1', options: [{ radioName: 'card1-radio1', selected: true },
  //     { radioName: 'card1-radio2', selected: false }]
  //   },
  //   {
  //     cardName: 'card2', options: [{ radioName: 'card2-radio1', selected: true },
  //     { radioName: 'card2-radio2', selected: false }]
  //   }
  // ];
  
  // const OnInputChange = ({ target }) => {
  //   const {d, setCards } = useState([])
  //   const nexState = cards.map(card => {
  //     if (card.cardName !== target.name) return card;
  //     return {
  //       ...card,
  //       options: card.options.map(opt => {
  //         const checked = opt.radioName === target.value;
  //         return {
  //           ...opt,
  //           selected: checked
  //         }
  //       })
  //     }
  //   });
  //   setCards(nexState)
  // }
  //   return (
  //     <div>
  //       {
  //         cards.length < 1 ? "Loading..." :
  //           <div>
  //             {cards.map((card, idx) => (
  //               <ul>
  //                 {card.cardName}
  //                 {
  //                   card.options.map((lo, idx) => {
  //                     return <input
  //                       key={idx}
  //                       type="radio"
  //                       name={card.cardName}
  //                       value={lo.radioName}
  //                       checked={!!lo.selected}
  //                       onChange={OnInputChange}
  //                     />

  //                   })
  //                 }
  //               </ul>
  //             ))
  //             }
  //           </div>
  //       }

  //     </div>
  //   );
}
export default Shop;