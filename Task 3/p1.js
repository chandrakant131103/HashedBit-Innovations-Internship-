const states = ["Andhra Pradesh", "Bihar", "Goa", "Odisha", "Uttar Pradesh", "Rajasthan", "Kerala"];

const noVowelStates = states.filter(state => !/^[AEIOUaeiou]/.test(state));
console.log(noVowelStates); 
// Output: [ 'Bihar', 'Goa', 'Rajasthan', 'Kerala' ]    