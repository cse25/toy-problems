process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    var a = [];
    var primaryDiag = 0;
    var secondaryDiag = 0;
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }
    var primary = a.map(function(item, index) {
        return item[index]
    }).reduce(function(a,b) {
       return a + b;
    })

    var secondary = a.reverse().map(function(item, index) {
      return item[index]
    }).reverse().reduce(function(a,b) {
      return a + b;
    });

    var solution = Math.abs(primary - secondary)
    console.log(solution);
}
