r//1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}



//2. RAW TEXT STRINGS

const storyText='It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised insertx weighs 300 pounds, and it was a hot day.';
const insertx=['Willy the Goblin','Big Daddy','Father Christmas'];
const inserty=['the soup kitchen','Disneyland','the White House'];
const insertz=['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

















randomize.addEventListener('click', result);

function result() {

    var newStory=storyText

    let xItem =randomValueFromArray(insertx);
    let yItem =randomValueFromArray(inserty);
    let zItem =randomValueFromArray(insertz);

    newStory=newStory.replace('insertx',xItem);
    newStory=newStory.replace('inserty',yItem);
    newStory=newStory.replace('insertz',zItem);

  if(customName.value !== '') {
    let name = customName.value;
    newStory=newStory.replace('Bob', name)

  }

  if(document.getElementById("uk").checked) {
    let weight = Math.round(300) + 'stone';
    let temperature =  Math.round(94) + 'centigrate';

    newStory= newStory.replace('94 farenheit', temperature);
    newStory= newStory.replace('300 farenheit', weight);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}