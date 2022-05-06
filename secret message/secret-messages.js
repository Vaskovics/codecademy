
//Object for arrays of data
const messagesData = {
    season: ["Spring", "Summer", "Autumn", "Winter"],
    event: ["fall in love", "married", "lose the job", "change the job", "travel to the Spaine", "travel to the USA", "travel to the Australia"],
    item: ["a phone", "a laptop", "a car", "an ice cream", "a chocolate", "a house"],
};

const randomIndex = num => Math.floor(Math.random()*num);

const randomMessage = () =>{
    let randSeasIndex = randomIndex(messagesData.season.length);
    let randEventIndex = randomIndex(messagesData.event.length);
    let randItemIndex = randomIndex(messagesData.item.length);
    console.log(`This ${messagesData.season[randSeasIndex]} you will ${messagesData.event[randEventIndex]} and buy ${messagesData.item[randItemIndex]}. `);
};


randomMessage();