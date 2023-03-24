let string = "";   // input ki string
let buttons = document.querySelectorAll('.button');    // jinki class button h sabko select krlega ye

Array.from(buttons).forEach((output)=>{
    output.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = ""
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target)
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;

        }
        
    })
    
})