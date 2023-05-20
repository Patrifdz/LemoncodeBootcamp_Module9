import "./styles.css";

import {datosServidorCharacter, datosServidorLista, datosServidorLocation} from "./data-business";
import { createCharacterRow, showCharacter } from "./utils";
 
datosServidorLista().then(data => {
    for (let item of data.results) {
        const row = createCharacterRow(item);
        row.addEventListener("click", () => handleClick(row.id));
        document.getElementById("root").appendChild(row); 
    }
}).catch(() => {
    document.getElementById("root").innerHTML= "Your request has failed...";
})

function handleClick(characterId) {
    datosServidorCharacter(characterId).then( data => {
        const character = data;
        showCharacter(character)
    })
};
