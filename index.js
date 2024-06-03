let value = document.querySelector('textarea#texta')
let button = document.querySelector('button')
let result = document.querySelector('section.result')
let element = document.createElement('p')

button.addEventListener("click", function(){
    let program;
    program = value.value.split(" ");
    result.appendChild(element)
    let ret = calculate(program);
    element.innerText = ret;
});

function calculate(program){
    let stack = [];
    for(let i of program){
        //console.log("token", i);
        
        switch(i){
            case 'NEG':
                return stack = -stack[0];
                //console.log('cambiar el signo')
                //break;
            case 'ADD':
                let num1 = stack.pop();
                let num2 = stack.pop();
                stack.push(num1 + num2);
                break;

            case 'SUB':
                let num3 = stack.pop();       
                let num4 = stack.pop();
                stack.push(num4 - num3);
                break;
                
            case 'MULT':
                let num5 = stack.pop();
                let num6 =stack.pop();
                stack.push(num5*=num6);
                break;

            case 'DIV':
                let num7 = stack.pop();
                let num8 = stack.pop();
                stack.push(num8/=num7);
                break;

            case 'RET':
                return stack;
                break;

            case '':
                continue;

            default:
                stack.push(parseFloat(i));
                break;
        }
    }
    console.log(stack);
    return("stack", stack[0]);
    }
