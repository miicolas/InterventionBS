 let a = 3 ;

 while (a < 9) {
     a++
     if (a===7) {
         continue
     }
     if (a===8) {
         break
     }
     console.log(a);
    
 }
 console.log("fin de la boucle");




let i = 1;

while (i <= 33) {
    if (i === 17) {
        i += 10;
    } else if (i === 28) {
        i++;
    }
    else if (i === 33) {
        console.log("réussi");
    }
    i++;
}
