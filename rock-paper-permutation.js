// Rock Paper Permutation
// Given a number of rounds n, return all the possible rock-paper-scissors play possibilities for that number of rounds.

// Examples
// roundCount: 1
// [ "r", "p", "s" ]
// roundCount: 2
// [ "rr", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss" ]
// roundCount: 0
// [ ]

function rockPaperPermutation(roundCount) {
    var results = [];
    var options = ['r','p','s'];
    if (roundCount) {
        var recurse = function(combo) {
            if (combo.length === roundCount) {
                results.push(combo);
                return;
            }
            for (var i = 0; i < options.length; i++) {
                recurse(combo + options[i]);
            }
        }
        recurse('');
    }
    return results;
};
