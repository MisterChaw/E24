// Sample for loop
const numArray = [5, -3, 10, 6, 30, 12, 80, 3, 23];
let max = numArray[0];

for(let i = 1; i < numArray.length; i++){
    if(numArray[i] > max){
        max = numArray[i];
    };
};


// Addition function with loop
function addition(numArr){
    let sum = numArr[0];
    for(let i = 1; i < numArr.length ; i++){
        sum += numArr[i]
    }
    return sum;
};

// Exercise 23 code
function renderDiv(){
    // render the div multiple times
    for(i = 1; i < 4; i++){
        cardClass = "card mb-2";
        switch(i){
            case 1:
                cardClass += " bg-primary";
                unitLabel = "Grams";
                unitAbrev = "gm"
                break;
            case 2:
                cardClass += " bg-success";
                unitLabel = "Kilogram";
                unitAbrev = "kg"
                break;
            case 3:
                cardClass += " bg-danger";
                unitLabel = "Ounces";
                unitAbrev = "oz"
                break;
            default:
                cardClass = "";
        };
        document.write(`
            <div class="${cardClass}">
                <div class="card-body">
                    <h4>${unitLabel}</h4>
                    <div id="${unitAbrev}Output">Output</div>
                </div>
            </div>
        `);
    };
    // compute the units
    // hide the div result
    $('#result').hide('drop', {direction: 'down'}, 'slow');
    // creat event listener to show hidden div
    $('#lbsInput').keyup(
        function(e){
            let lbs = $(this).val();
            $('#result').show('fold', 1000);
            $('#gmOutput').text(lbs/0.00220462);
            $('#kgOutput').text(lbs/2.20462);
            $('#ozOutput').text(lbs*16);
        }
    );
};

