console.log("Hello");

var elszamol = function (meddig) {
    for (var i = 0; i <= meddig; i++) {
        console.log(i);
    }
}

elszamol(2);

function foo() {
    if (true) {
        return 6;
    }
}

console.log(foo());