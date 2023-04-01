//Defining the Affirmations Array to store a list of affirmations
let affirmations = [
    'the power to shape my life',
    'waking up healthy and alive this morning',
    'love every cell of my being',
    'creative potential is endless',
    'eat healthy and spend wisely',
    'those closest to me',
    'confidence is inspiring',
    'allow love and freedom into my life',
    'celebrate my imperfections',
    'will learn one new thing today',
    'radiate light and happniess',
    'walk away from negativity',
    'choose to focus on the sunny side of things',
    'a money magnet',
    'at peace with life'
];

//Defining the prefixes for the affirmation strings
let prefixes = ['I am grateful for ', 'I have within me ', 'My ', 'I am ','I '];

//Generating a random Affirmation String
let randomNumber = Math.round(Math.random()*affirmations.length);
let affirmationStr = affirmations[randomNumber];
let affirmationMessage ;

//Combining the prefix and affirmation string to form an Affirmation Message
if(affirmationStr.startsWith('those') || affirmationStr.startsWith('waking')){
    affirmationMessage = prefixes[0]+affirmationStr;
}else if(affirmationStr.startsWith('the power')){
    affirmationMessage = prefixes[1]+affirmationStr;
}else if(affirmationStr.startsWith('creative') || affirmationStr.startsWith('confidence')){
    affirmationMessage = prefixes[2]+affirmationStr;
}else if(affirmationStr.startsWith('a ') || affirmationStr.startsWith('at')){
    affirmationMessage = prefixes[3]+affirmationStr;
}else{
    affirmationMessage = prefixes[4]+affirmationStr;
}

//Logging the Affirmation Message to the console.
console.log(affirmationMessage);
