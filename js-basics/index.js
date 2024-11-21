
let list=[1,2,4,6,7,9,10]
function myFunction(numbers){

   for( let i=0; i<=numbers.length;i++){
        if(numbers [i]%2==1) {
         console.log(numbers[i])
        }
   }
   
}
myFunction(list);