var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function Suma() {
    var par = 0;
    var impar = 0;
    for(const value of a) {
        if (value % 2 === 0){
            par = par + value;
        } else {
            impar = impar + value;
        }
    }
    console.log("Suma de pares: "+par);
    console.log("Suma de impares: "+impar);
}
Suma();