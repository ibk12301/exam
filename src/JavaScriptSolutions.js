// 1............sring
// 2............boolean
// 3............
    function odd (x){
        let arr= []
        for(let i=0; i<=x; i++){
            if(i%2==1){
                arr.push(i);
            }
        }
        return arr
    }
    odd(20);
// 4.............
        const student={
            name : "John doe",
            age : 30,
            gender : "male",
            nationality : "Korean",
            NumberOfLanguages : 3,
            favoriteMusic :["I shot the Sheriff", "Kokonbilo", "It’s a man’s world"]
        }
// 5..........module



//..................................................................................................................//
//..................................................................................................................//
//..................................................................................................................//
//....................................Mid-Term-Exam.................................................................//
//..................................................................................................................//
//..................................................................................................................//
//..................................................................................................................//

// 1..........................................................
    function palindrom (x){
        for(let i=0; i<x.length; i++){
            if(x[i]!=x[x.length-i-1]){
            return false
            }else {
            }
        }
        return true
    }
console.log(palindrom('malm'));
console.log(palindrom('malam'));
console.log(palindrom('car'));

// 2..............................................................

        const car= {
            doors :2,
            tryres :4 ,
            rearSeats:2, 
            windshield:1,
            sideMirrors:2
        }
        // 2i...
        function carSideMirrorChecker (a){
        return a.sideMirrors
        }
        carSideMirrorChecker (car)

 // 3..............................................................
        function average (a){
            let sum=0
            let count=0
        for(let i=0; i<a.length; i++){
            sum= sum+a[i];
            count++
        }
        let avg = sum/count
        return avg
        }

        console.log(average ([4,8,20,80,75,40]))