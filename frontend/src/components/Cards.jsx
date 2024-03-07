import { useState } from "react"

export default function Cards({playerHand,shuffledDeck,setPlayerHand,setShuffledDeck,hoveredCard, setHoveredCard,selectedJack, setSelectedJack   }){

    const [cards,setCards]=useState([
        { id: 1, img:"../assests/1B.svg",selected: false, matches: []  },
        { id: 2, img:"../assests/2S.svg",selected: false ,matches:[2,87] },
        { id: 3, img:"../assests/3S.svg",selected: false, matches:[3,86] },
        { id: 4, img:"../assests/4S.svg",selected: false, matches: [4,85] },
        { id: 5, img:"../assests/5S.svg",selected: false, matches: [5,84]  },
        { id: 6, img:"../assests/6S.svg",selected: false, matches: [6,83]  },
        { id: 7, img:"../assests/7S.svg",selected: false, matches: [7,82]  },
        { id: 8, img:"../assests/8S.svg",selected: false, matches: [8, 72]  },
        { id: 9, img:"../assests/9S.svg",selected: false, matches: [9,62]  },
        { id: 10, img:"../assests/1B.svg",selected: false, matches: [] },
        { id: 11, img:"../assests/6C.svg",selected: false, matches: [11,33] },
        { id: 12, img:"../assests/5C.svg",selected: false, matches: [12,34] },
        { id: 13, img:"../assests/4C.svg",selected: false, matches: [13,35]  },
        { id: 14, img:"../assests/3C.svg",selected: false, matches: [14,36]  },
        { id: 15, img:"../assests/2C.svg",selected: false, matches: [15,37]  },
        { id: 16, img:"../assests/AH.svg",selected: false, matches: [16,47]  },
        { id: 17, img:"../assests/KH.svg",selected: false, matches: [17,57]  },
        { id: 18, img:"../assests/QH.svg",selected: false, matches: [18,67]  },
        { id: 19, img:"../assests/TH.svg",selected: false, matches: [19,66]  },
        { id: 20, img:"../assests/TS.svg",selected: false, matches: [20,52] },
        { id: 21, img:"../assests/7C.svg",selected: false, matches: [21,43] },
        { id: 22, img:"../assests/AS.svg",selected: false, matches: [22,50]  },
        { id: 23, img:"../assests/2D.svg",selected: false, matches: [23,60] },
        { id: 24, img:"../assests/3D.svg",selected: false, matches: [24,70] },
        { id: 25, img:"../assests/4D.svg",selected: false, matches: [25,80] },
        { id: 26, img:"../assests/5D.svg",selected: false, matches: [26,90] },
        { id: 27, img:"../assests/6D.svg",selected: false, matches: [27,99] },
        { id: 28, img:"../assests/7D.svg",selected: false, matches: [28,98] },
        { id: 29, img:"../assests/9H.svg",selected: false, matches: [29,65] },
        { id: 30, img:"../assests/QS.svg",selected: false, matches: [30,42] },
        { id: 31, img:"../assests/8C.svg",selected: false, matches: [31,53]  },
        { id: 32, img:"../assests/KS.svg",selected: false, matches: [32,40]  },
        { id: 33, img:"../assests/6C.svg",selected: false, matches: [11,33]  },
        { id: 34, img:"../assests/5C.svg",selected: false, matches: [12,34]  },
        { id: 35, img:"../assests/4C.svg",selected: false, matches: [13,35] },
        { id: 36, img:"../assests/3C.svg",selected: false, matches: [14,36] },
        { id: 37, img:"../assests/2C.svg",selected: false, matches: [15,37] },
        { id: 38, img:"../assests/8D.svg",selected: false, matches: [38,97]  },
        { id: 39, img:"../assests/8H.svg",selected: false, matches: [39,64] },
        { id: 40, img:"../assests/KS.svg",selected: false, matches: [32,40]},
        { id: 41, img:"../assests/9C.svg",selected: false, matches: [41,63] },
        { id: 42, img:"../assests/QS.svg",selected: false, matches: [30,42] },
        { id: 43, img:"../assests/7C.svg",selected: false, matches: [21,43]  },
        { id: 44, img:"../assests/6H.svg",selected: false, matches: [44,59]  },
        { id: 45, img:"../assests/5H.svg",selected: false, matches: [45,69] },
        { id: 46, img:"../assests/4H.svg",selected: false, matches: [46,79]  },
        { id: 47, img:"../assests/AH.svg",selected: false, matches: [16,47] },
        { id: 48, img:"../assests/9D.svg",selected: false, matches: [48,96]  },
        { id: 49, img:"../assests/7H.svg",selected: false, matches: [49,54] },
        { id: 50, img:"../assests/AS.svg",selected: false, matches: [22,50] },
        { id: 51, img:"../assests/TC.svg",selected: false, matches: [51,73]  },
        { id: 52, img:"../assests/TS.svg",selected: false, matches: [20,52]  },
        { id: 53, img:"../assests/8C.svg",selected: false, matches: [31,53]  },
        { id: 54, img:"../assests/7H.svg",selected: false, matches: [49,54] },
        { id: 55, img:"../assests/2H.svg",selected: false, matches: [55,88] },
        { id: 56, img:"../assests/3H.svg",selected: false, matches: [56,89]  },
        { id: 57, img:"../assests/KH.svg",selected: false, matches: [17,57]  },
        { id: 58, img:"../assests/TD.svg",selected: false, matches: [58,95]  },
        { id: 59, img:"../assests/6H.svg",selected: false, matches: [44,59] },
        { id: 60, img:"../assests/2D.svg",selected: false, matches: [23,60] },
        { id: 61, img:"../assests/QC.svg",selected: false, matches: [61,74]  },
        { id: 62, img:"../assests/9S.svg",selected: false, matches: [9,62]  },
        { id: 63, img:"../assests/9C.svg",selected: false, matches: [41,63]  },
        { id: 64, img:"../assests/8H.svg",selected: false, matches: [39,64]  },
        { id: 65, img:"../assests/9H.svg",selected: false, matches: [29,65] },
        { id: 66, img:"../assests/TH.svg",selected: false, matches: [19,66]  },
        { id: 67, img:"../assests/QH.svg",selected: false, matches: [18,67] },
        { id: 68, img:"../assests/QD.svg",selected: false, matches: [68,94]  },
        { id: 69, img:"../assests/5H.svg",selected: false, matches: [45,69] },
        { id: 70, img:"../assests/3D.svg",selected: false, matches: [24,70] },
        { id: 71, img:"../assests/KC.svg",selected: false, matches: [71,75]  },
        { id: 72, img:"../assests/8S.svg",selected: false, matches: [8, 72]  },
        { id: 73, img:"../assests/TC.svg",selected: false, matches: [51,73] },
        { id: 74, img:"../assests/QC.svg",selected: false, matches: [61,74]  },
        { id: 75, img:"../assests/KC.svg",selected: false, matches: [71,75]  },
        { id: 76, img:"../assests/AC.svg",selected: false, matches: [76,81]  },
        { id: 77, img:"../assests/AD.svg",selected: false, matches: [77,92]  },
        { id: 78, img:"../assests/KD.svg",selected: false, matches: [78,93]  },
        { id: 79, img:"../assests/4H.svg",selected: false, matches: [46,79]},
        { id: 80, img:"../assests/4D.svg",selected: false, matches: [25,80]  },
        { id: 81, img:"../assests/AC.svg",selected: false, matches: [76,81]  },
        { id: 82, img:"../assests/7S.svg",selected: false, matches: [7,82] },
        { id: 83, img:"../assests/6S.svg",selected: false, matches: [6,83]  },
        { id: 84, img:"../assests/5S.svg",selected: false, matches: [5,84]  },
        { id: 85, img:"../assests/4S.svg",selected: false, matches: [4,85] },
        { id: 86, img:"../assests/3S.svg",selected: false, matches: [3,86]  },
        { id: 87, img:"../assests/2S.svg",selected: false, matches: [2,87]  },
        { id: 88, img:"../assests/2H.svg",selected: false, matches: [55,88] },
        { id: 89, img:"../assests/3H.svg",selected: false, matches: [56,89] },
        { id: 90, img:"../assests/5D.svg",selected: false, matches: [26,90] },
        { id: 91, img:"../assests/1B.svg",selected: false, matches: [] },
        { id: 92, img:"../assests/AD.svg",selected: false, matches: [77,92] },
        { id: 93, img:"../assests/KD.svg",selected: false, matches: [78,93] },
        { id: 94, img:"../assests/QD.svg",selected: false, matches: [68,94] },
        { id: 95, img:"../assests/TD.svg",selected: false, matches: [58,95] },
        { id: 96, img:"../assests/9D.svg",selected: false, matches: [48,96]  },
        { id: 97, img:"../assests/8D.svg",selected: false, matches: [38,97] },
        { id: 98, img:"../assests/7D.svg",selected: false, matches: [28,98] },
        { id: 99, img:"../assests/6D.svg",selected: false, matches: [27,99] },
        { id: 100, img:"../assests/1B.svg",selected: false, matches: [] },  
    ])
      
    function handleClick(cardId, playerHand, setPlayerHand, shuffledDeck, setShuffledDeck, setCards,selectedJack, setSelectedJack  ) {
        console.log(selectedJack)
        const cornerCards = [1, 10, 91, 100]; // IDs of corner cards
        if (selectedJack === 'TwoEyed') {
            if (!cornerCards.includes(cardId)) {
                setCards(currentCards => currentCards.map(card => 
                    card.id === cardId ? { ...card, selected: true } : card
                ));
          
            // Find and remove the first "TwoEyed" jack from the player's hand
            const indexOfTwoEyedJack = playerHand.findIndex(card => card.id >= 101 && card.id <= 104);
            if (indexOfTwoEyedJack !== -1) {
              const newPlayerHand = [...playerHand];
              newPlayerHand.splice(indexOfTwoEyedJack, 1); // Remove the "TwoEyed" jack from the player's hand
              
              // Optionally, add a new card from the shuffled deck to the player's hand
              if (shuffledDeck.length > 0) {
                const newCard = shuffledDeck[0];
                newPlayerHand.push(newCard); // Add the new card to the player's hand
                setShuffledDeck(currentDeck => currentDeck.slice(1)); // Remove the new card from the shuffled deck
              }
          
              setPlayerHand(newPlayerHand); // Update the player's hand
            }
          
            setSelectedJack(null); // Reset the selectedJack state
        }
            else{
                alert('Invalid move! You cannot place a token on corner cards with a TwoEyed Jack.');
            }
        }
        else if (selectedJack === 'OneEyed') {

           // Only allow removing a token if the card already has one (selected)
            if (cards.some(card => card.id === cardId && card.selected && !cornerCards.includes(cardId))) {
                // Set the card's selected state to false to remove the token
                setCards(currentCards => currentCards.map(card =>
                    card.id === cardId ? { ...card, selected: false } : card
                ));

            // Find and remove the first "OneEyed" jack from the player's hand
            const indexOfOneEyedJack = playerHand.findIndex(card => card.id >= 105 && card.id <= 108);
            if (indexOfOneEyedJack !== -1) {
            const newPlayerHand = [...playerHand];
            newPlayerHand.splice(indexOfOneEyedJack, 1); // Remove the "OneEyed" jack from the player's hand
            
            // Optionally, add a new card from the shuffled deck to the player's hand
            if (shuffledDeck.length > 0) {
                const newCard = shuffledDeck[0];
                newPlayerHand.push(newCard); // Add the new card to the player's hand
                setShuffledDeck(currentDeck => currentDeck.slice(1)); // Remove the new card from the shuffled deck
            }

            setPlayerHand(newPlayerHand); // Update the player's hand
            }

            setSelectedJack(null); // Reset the selectedJack state
        }
        else {
            alert('Invalid move! You cannot remove a token from corner cards or unselected cards with a OneEyed Jack.');
        }
    }
        else{
        const isInPlayerHand = playerHand.some(card => card.id === cardId || card.matches.includes(cardId));
        const isCardSelected = cards.some(card => card.id === cardId && card.selected);
      
        if (isInPlayerHand && !isCardSelected) {
          // Mark the card as selected on the board
          setCards(currentCards => currentCards.map(card =>
            card.id === cardId ? { ...card, selected: true } : card
          ));
          
          // Find the card in the player's hand that matches the clicked card
          const cardToRemove = playerHand.find(card => card.id === cardId || card.matches.includes(cardId));
          
          // Remove the card from the player's hand and add a new one from the shuffled deck
          setPlayerHand(currentHand => {
            const newHand = currentHand.filter(card => card.id !== cardToRemove.id);
            const newCard = shuffledDeck[0];
            return shuffledDeck.length > 0 ? [...newHand, newCard] : newHand;
            });
                  
            setShuffledDeck(currentDeck => currentDeck.slice(1));
          
          
        } else if (!isInPlayerHand) {
          alert('Invalid move! You do not have this card in your hand.');
        } else if (isCardSelected) {
          alert('Invalid move! This card has already been placed.');
        }
      }
    }
      
    return (
        <div className="inner-container">
             {cards.map((card) => (
               <div key={card.id} className={`card ${hoveredCard.includes(card.id) ? 'highlighted' : ''}`} 
               onClick={() => handleClick(card.id, playerHand, setPlayerHand, shuffledDeck, setShuffledDeck,setCards,selectedJack, setSelectedJack)}>
                   {card.img && <img src={card.img} alt={`Card ${card.id}`} />} 
                   {card.selected && <div className="poker-chip2"></div>}
                </div>
            ))}
        </div>
    )
    }