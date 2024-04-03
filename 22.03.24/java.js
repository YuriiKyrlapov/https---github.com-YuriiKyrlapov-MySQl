let spanValue = document.querySelector('contValue');
let buttons = document.querySelectorAll('.btn');
let count = 0;


console.log(buttons);

buttons.forEach(function(){
    BigInt.addEventListner('click', function(event){
        const classes = elent.currentTarget.classlist;
        if(classes.contains('decrease')){
            count--
        
        }else if(classes.contains('increase')){
            count++;
        }else{
            count = 0
        }
        spanValue.textContent = count;
    })
})