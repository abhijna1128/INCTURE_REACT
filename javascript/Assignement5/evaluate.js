// function evaluate(s,variables,values){
//     function sqrt(){
//         if(values<0)
//             return -1;
//         else{
//             return Math.sqrt(values);
//         }
//     }
//     if(s!=0 && variables.length==values.length){
//         for(let i=0;i<variables.length;i++){
//             values[i]=variables[i].map(NUMBER);
//             return sqrt(values[i]);
//         }
//         t j=0;j<s.length;s++){
//             if(s[j]==)for(le
//         }
//     }
// }
// // console.log(evaluate('sqrt(a - b) + c',' ["a", "b", "c"] ' ,'[9, 4, 3]'));
// // console.log(evaluate('sqrt(a - b) + c',' ["a", "b", "c"] ' ,'[9, 4, 3]'));
// // console.log(evaluate('sqrt(a - b) + c',' ["a", "b", "c"] ' ,'[9, 4, 3]'));
// console.log(evaluate('sqrt(a)',' ["a"] ' ,'[16]'));

// function eval(num){
//     return Math.sqrt(num)
// }
// console.log(eval(16));


function evaluate(expression, variables, values) {
    if (!expression || variables.length !== values.length) return -1;

    
    for (let i = 0; i < variables.length; i++) {
        const variable = variables[i];
        const value = values[i];

       
        expression = expression.split(variable).join(value);
    }

    
    expression = expression.split("sqrt").join("Math.sqrt");

    
    const checkSqrt = expression.match(/Math\.sqrt\(([^()]+)\)/g);
    if (checkSqrt) {
        for (let i = 0; i < checkSqrt.length; i++) {
            const inner = checkSqrt[i].slice(10, -1); 
            const val = eval(inner);
            if (val < 0) return -1;
        }
    }
    try {
        const result = eval(expression);
        return Math.round(result * 100) / 100;
    } catch (e) {
        return -1;
    }
}
console.log(evaluate('sqrt(a - b) + c',' ["a", "b", "c"] ' ,'[9, 4, 3]'));
