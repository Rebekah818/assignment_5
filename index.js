// #1 

function myChance (){
    let count = 0; 
    return function() {
        count +=1
        if (count <=5) {
            console.log('Congrats you earn the chance!');
        }else {
        console.log ('Sorry you missed the chance')
        }
    }
};

const myClosure = myChance();

for (let i = 0; i < 5; i++) {
    myClosure();
};

// #2
