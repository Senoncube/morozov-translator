document.getElementById('translate').onclick = function () {
    let code = document.querySelector('textarea').value;
    let repls = [
        ['а', 'a'], ['е', 'e'],
        ['у', 'y'], ['р', 'p'],
        ['о', 'o'], ['к', 'k'],
        ['з', '3'], ['х', 'x'],
        ['с', 'c'], ['т', 't'],
        ['А', 'A'], ['К', 'K'],
        ['Е', 'E'], ['Н', 'H'],
        ['З', '3'], ['Х', 'X'],
        ['В', 'B'], ['Р', 'P'],
        ['О', 'O'], ['С', 'C'],
        ['Т', 'T'], ['І', 'l'],
        ['і', 'i']
    ];
    repls.forEach(function (repl) {
        code = code.replaceAll(repl[0], repl[1]);
    });
    document.querySelector('textarea').value = code;
}

document.getElementById('exec').onclick = function () {
    try {
        eval(document.querySelector('textarea').value);
    } catch (e) {
        alert(e);
    }

}

