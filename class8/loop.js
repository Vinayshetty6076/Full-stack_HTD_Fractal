//For loop
/*
for(initilization; condition; update){
 --- body of loop ---
}

step 1: initilization;
step 2: Checks condition - true/false
Step 3: if condition is true then execute the code inside body of loop
Step 4: update
Step 5: Go to step 2;
*/

for(let i=1; i<5; i++){
    if(i === 3)
        continue;
    if(i === 4)
        break;
    console.log(i);
}

// while loop
let x = 10;
while(x>=1){
    console.log(x);
    x--;
}

// do while
let y = 1;
do{
    console.log(y);
    y++;
}while(y<1)

    /*
     ===
     ==
     !=
     !==

     Compare
     <
     <=
     >
     >=

    */