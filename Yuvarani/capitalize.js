let str = "good morning have a nice day";


function add(x,y){
    return x+y;
}

function add_values(z){
    let a = 10;
    let b= 11;
    return z(a,b);
}

let g = add_values(add);

let k = add_values((x,y)=>{
    return x+y;
})






function capital_letter(str) 
{
    
   let  str_arr = str.split(" ");
   
    let i = 0;

    for ( x = str_arr.length; i < x; i++) {
       
        str_arr[i] = str_arr[i][0].toUpperCase() + str_arr[i].slice(1);
     
    }

   let output = str_arr.map((item)=>{
    // return item + "_r";
      return item[0].toUpperCase() + item.slice(1);
   })
   console.log(" result = ",output)



    return str_arr.join(" ");
}

console.log(capital_letter(str)); 
