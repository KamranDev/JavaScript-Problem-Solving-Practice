function showName(){
   let inputName= document.querySelector('#name');
   console.log(inputName);
   let inputValue = document.querySelector('#name').value;
   console.log(inputValue);
  let headingElement=  document.querySelector('h1 span').innerHTML;
  console.log(headingElement);
  document.querySelector('h1 span').innerHTML=inputValue;
 let numberAttr= document.querySelector('#number');
 console.log(numberAttr);
 let numberValue= document.querySelector('#number').value;
 console.log(numberValue);
 alert('The message has been sent on the given number')
  
}