var previousInput = 'e';
var x = 0;
var o = 0;
var data = new Array(3);
data[0] = new Array(3);
data[1] = new Array(3);
data[2] = new Array(3);
var flag = 0;
function showWinner(row,col) {
    if (data[row][col] == 'X')
        document.getElementById('winner').innerHTML = 'Player 1 Won!!'
    else if (data[row][col] == 'O')
        document.getElementById('winner').innerHTML = 'Player 2 Won!!'
    flag = 1;
}
function changeSymbol(id) {
    if (x + o < 9 && flag == 0) {
        var row = parseInt(id.substr(0, 1))
        var col = parseInt(id.substr(1, 1))
        if (previousInput == 'e' && data[row][col] == null) {
            document.getElementById(id).innerHTML = 'X'
            previousInput = 'X'
            data[row][col] = 'X'
            x++
        }
        else if (previousInput == 'O' && data[row][col] == null) {
            document.getElementById(id).innerHTML = 'X'
            previousInput = 'X'
            data[row][col] = 'X'
            x++
        }
        else if (previousInput == 'X' && data[row][col] == null) {
            document.getElementById(id).innerHTML = 'O'
            previousInput = 'O'
            data[row][col] = 'O'
            o++
        }
        if (x >= 3 || o >= 3) {
            for (var i = 0; i < 3; i++) {   //row wise
                if (data[i][0] != null && data[i][0] == data[i][1] && data[i][1] == data[i][2]) {
                    showWinner(i,0)
                    break;
                }
                if (data[0][i] != null && data[0][i] == data[1][i] && data[1][i] == data[2][i]) {
                    showWinner(0,i)
                    break;
                }
            }
            if (flag == 0) {
                if (data[0][0] != null && data[0][0] == data[1][1] && data[1][1] == data[2][2]) {
                    showWinner(0,0)
                }
                else if (data[0][2] != null && data[0][2] == data[1][1] && data[1][1] == data[2][0]) {
                    showWinner(0,2)
                }
            }
        }
    }
    if(x+o>=9 && flag == 0){
        document.getElementById('winner').innerHTML = 'Match Draw';
    }
}
function Clear() {
    document.getElementById('00').innerHTML = '&nbsp';
    document.getElementById('01').innerHTML = '&nbsp';
    document.getElementById('02').innerHTML = '&nbsp';
    document.getElementById('10').innerHTML = '&nbsp';
    document.getElementById('11').innerHTML = '&nbsp';
    document.getElementById('12').innerHTML = '&nbsp';
    document.getElementById('20').innerHTML = '&nbsp';
    document.getElementById('21').innerHTML = '&nbsp';
    document.getElementById('22').innerHTML = '&nbsp';
    document.getElementById('winner').innerHTML = '';
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++)
            data[i][j] = null;
    }
    previousInput = 'e';
    x = 0;
    o = 0;
    flag = 0;
}