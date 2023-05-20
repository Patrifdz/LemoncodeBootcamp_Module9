import {datosServidorCharacter, datosServidorLocation} from "./data-business";

const createCharacterRow = (character) => {
    const element = document.createElement("div");
    const avatar = createAvatar(character);
    element.appendChild(avatar);
    const link = createRowText(character);
    element.appendChild(link);
    element.className = "character-row";
    element.id = character.id;
    return element;
};

const createAvatar = (character) => {
    const element = document.createElement("img");
    element.width = 150;
    element.className = "thumbnail";
    element.src = character.image;
    return element;
};

const createRowText = (character) => {
    const element = document.createElement("span");
    element.append(character.name);
    return element;
};

const createAvatarDetail = (character) => {
    const element = document.createElement("img");
    element.width = 400;
    element.src = character.image;
    return element;
};

const showCharacter = (character) => {
    console.log("character", character);
    const characterDetail = document.getElementById("character-detail");
    const locationTitle = document.createElement("h3");
    locationTitle.append("LOCATION DATES");
    characterDetail.innerHTML = "";
    characterDetail.appendChild(createAvatarDetail(character));
    characterDetail.appendChild(createParagraph("Name: " + character.name));
    characterDetail.appendChild(createParagraph("Status: " + character.status));
    characterDetail.appendChild(createParagraph("Species: "+ character.species));
    // Aquí se llama a los datos de "location"
    characterDetail.appendChild(locationTitle);
    datosServidorLocation(character.location.url).then(data => {
        characterDetail.appendChild(createParagraph("Name: " + data.name));
        characterDetail.appendChild(createParagraph("Dimension: " + data.dimension));
    }).catch(() => {
        characterDetail.appendChild(createParagraph("Name: " + "no info"));
        characterDetail.appendChild(createParagraph("Dimension: " + "no info"));
    })
};
   
const createParagraph = (text) => {
    const element = document.createElement("p");
    element.append(text);
    return element;
};

export { createCharacterRow, showCharacter };
   
