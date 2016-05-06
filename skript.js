var prvotnaMatrika; //primarna matrika sudokuta
var matrika; //resen sudoku
var inicializirano = false;

function resetSudokuPanel() {
    brezpogojnoPrebarvajCelotnoPloscoOkvir("grey");
    brezpogojnoPrebarvajCelotnoPloscoPolje("white")
    var polje;
    var okvir;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            polje = document.getElementById("P" + i + "_" + j);
            okvir = document.getElementById("O" + i + "_" + j)
            polje.value = "";
            polje.disabled = false;
            polje.style.backgroundColor = "white";
            okvir.style.backgroundColor = "grey";
        }
    }
}



function prebarvajCelotnoPloscoOkvir(barva) {
    var okvir;
    var polje;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            okvir = document.getElementById("O" + i + "_" + j);
            polje = document.getElementById("P" + i + "_" + j);
            if (polje.style.background == "white") {
                okvir.style.backgroundColor = barva;
            }
        }
    }
}

function prebarvajCelotnoPloscoPolje(barva) {
    var okvir;
    var polje;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            okvir = document.getElementById("O" + i + "_" + j);
            polje = document.getElementById("P" + i + "_" + j);
            if (polje.style.background == "white" || polje.value == "") {
                polje.style.backgroundColor = barva;
            }
        }
    }
}

function brezpogojnoPrebarvajCelotnoPloscoOkvir(barva) {
    var okvir;
    var polje;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            okvir = document.getElementById("O" + i + "_" + j);
            okvir.style.backgroundColor = barva;
        }
    }
}

function brezpogojnoPrebarvajCelotnoPloscoPolje(barva) {
    var okvir;
    var polje;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            polje = document.getElementById("P" + i + "_" + j);
            polje.style.backgroundColor = barva;
        }
    }
}

function ustvariMatriko() {
    var matrika = [];
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            element = document.getElementById("P" + i + "_" + j);
            if (element.value == "") {
                matrika.push(0);
            } else {
                matrika.push(element.value);
            }
        }
    }
    return matrika;
}

function poudariPoljaPrimarneMatrike(matrika) {
    var element;
    //var okvir;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            element = document.getElementById("P" + i + "_" + j);
            okvir = document.getElementById("O" + i + "_" + j);
            if (element.value == 1 || element.value == 2 || element.value == 3 || element.value == 4 || element.value == 5 || element.value == 6 || element.value == 7 || element.value == 8 || element.value == 9) {
                element.style.backgroundColor = "#B1B4B5";
                //element.style.opacity="0.7";
                //okvir.style.backgroundColor="gr";
            }
        }
    }
    return true;
}

function preveriVeljavnostSudokuja() {
    var stevecPraznihPolj = 0
    var element;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            element = document.getElementById("P" + i + "_" + j);
            if (element.value == "") {
                stevecPraznihPolj++;
            }
            if (element.value == "" || element.value == 1 || element.value == 2 || element.value == 3 || element.value == 4 || element.value == 5 || element.value == 6 || element.value == 7 || element.value == 8 || element.value == 9) {

            } else {
                return false;
            }
        }
    }
    if (stevecPraznihPolj == 81) { // nikjer ni nič vpisano
        return false;
    }
    return true;
}

function izpisiMatriko(matrika) {
    var niz = "";
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            niz = niz + matrika[i * 9 + j] + " ";
        }
        niz += "\n";
    }
    console.log(niz);
}

function pocasnoIzginjanje(sporocilo) { // sprejme DOM objekt in povzroči njegovo počasno izginjanje
    sporocilo.style.opacity = "1.0";
    setInterval(function() {
        if (sporocilo.style.opacity < "0.4") {
            sporocilo.style.display = "none";
            sporocilo.style.opacity = "1.0";
            clearInterval();
        }
        sporocilo.style.opacity = sporocilo.style.opacity - "0.01";

    }, 100);
}

function start() {
    prebarvajCelotnoPloscoOkvir("grey");
    prebarvajCelotnoPloscoPolje("white");
    if (preveriVeljavnostSudokuja()) {
        matrika = ustvariMatriko(); // resen sudoku
        prvotnaMatrika = ustvariMatriko(); // zacetno stanje
        poudariPoljaPrimarneMatrike(matrika);
        zakleniPolja();
        inicializirano = true;
    } else {
        var polje;
        var okvir;
        var message = document.getElementById("message-block");
        message.style.display = "block";
        message.innerHTML = "<span> Sudoku ni veljaven! </span>";
        message.style.backgroundColor = "red";
        message.style.opacity = "1.0";
        pocasnoIzginjanje(message);


        for (var i = 0; i < 9; i++) {
            for (var j = 0; j < 9; j++) {
                polje = document.getElementById("P" + i + "_" + j);
                okvir = document.getElementById("O" + i + "_" + j)
                polje.style.backgroundColor = "white";
                okvir.style.backgroundColor = "grey";
            }
        }
        inicializirano = false;
    }

}

function zakleniPolja() {
    var polje;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (prvotnaMatrika[i * 9 + j] > 0) {
                polje = document.getElementById("P" + i + "_" + j);
                polje.disabled = true;
            }

        }
    }
}

// Solve sudoku -----------------------RECURSION------------------------

function resiSudoku(stVrstice, stStolpca) {

    if (stVrstice == 9) {
        return true;
    }
    if (matrika[stVrstice * 9 + stStolpca] == 0) {
        for (var i = 1; i <= 9; i++) {
            if (preveriVrstico(stVrstice, i) && preveriStolpec(stStolpca, i) && preveriKvadrat(stVrstice, stStolpca, i)) {
                matrika[stVrstice * 9 + stStolpca] = i;
                //console.log(izpisiMatriko(matrika));
                if (stStolpca == 8) { // ce je na robu skoci v novo vrstico
                    if (resiSudoku(stVrstice + 1, 0)) {
                        return true;
                    } else {
                        matrika[stVrstice * 9 + stStolpca] = 0;
                    }
                } else {
                    if (resiSudoku(stVrstice, stStolpca + 1)) {
                        return true;
                    } else {
                        matrika[stVrstice * 9 + stStolpca] = 0;
                    }
                }
            } //poiskusi dodati else
        }
    } else {
        if (stStolpca == 8) { // ce je na robu skoci v novo vrstico
            if (resiSudoku(stVrstice + 1, 0)) {
                return true;
            }
        } else {
            if (resiSudoku(stVrstice, stStolpca + 1)) {
                return true;
            }
        }
    }

    return false;

}

function preveriVrstico(stVrstice, stevilo) {
    var stevec = 0;
    for (var j = 0; j < 9; j++) {
        if (matrika[stVrstice * 9 + j] == stevilo) {
            stevec++;
        }
    }
    if (stevec == 0) {
        return true;
    }
    return false;

}

function preveriStolpec(stStolpca, stevilo) {
    var stevec = 0;
    for (var i = 0; i < 9; i++) {
        if (matrika[i * 9 + stStolpca] == stevilo) {
            stevec++;
        }
    }
    if (stevec == 0) {
        return true;
    }
    return false;
}

function preveriKvadrat(stVrstice, stStolpca, stevilo) {
    var x = Math.floor(stStolpca / 3) * 3;
    var y = Math.floor(stVrstice / 3) * 3;
    var stevec = 0;
    for (var i = y; i < y + 3; i++) {
        for (var j = x; j < x + 3; j++) {
            if (matrika[i * 9 + j] == stevilo) {
                stevec++;
            }
        }
    }
    if (stevec == 0) {
        return true;
    }
    return false;
}

function vpisiMatrikoVGUI() {
    var polje;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            polje = document.getElementById("P" + i + "_" + j);
            polje.value = matrika[i * 9 + j];
        }
    }
}

function solveSudoku() {
	
	
    if (!inicializirano) {
        var message = document.getElementById("message-block");
        message.style.display = "block";
        message.innerHTML = "<span> NAPAKA! Sudoku ni bil inicializiran. Prosim pritisnite gumb <b>Start</b>. </span>";
        message.style.backgroundColor = "red";
        message.style.opacity = "1.0";
        pocasnoIzginjanje(message);
        return;
    }
    resiSudoku(0, 0);
    vpisiMatrikoVGUI();
    //console.log(izpisiMatriko(matrika));
}

function check() {

    if (!inicializirano) {
        var message = document.getElementById("message-block");
        message.style.display = "block";
        message.innerHTML = "<span> NAPAKA! Sudoku ni bil inicializiran. Prosim pritisnite gumb <b>Start</b>. </span>";
        message.style.backgroundColor = "red";
        message.style.opacity = "1.0";
        pocasnoIzginjanje(message);
        return;
    }

    resiSudoku(0, 0);

    var polje;
    var okvir;
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            polje = document.getElementById("P" + i + "_" + j);
            okvir = document.getElementById("O" + i + "_" + j);
            if (polje.value == matrika[i * 9 + j] && prvotnaMatrika[i * 9 + j] == 0) { // obarvaj zeleno samo 
                polje.style.backgroundColor = "green";
            }
            if (polje.value != matrika[i * 9 + j] && prvotnaMatrika[i * 9 + j] == 0) { // obarvaj zeleno samo 
                polje.style.backgroundColor = "#FF2626";
            }
        }
    }
}

function izrisiPlosco() {

    var niz = "<table id=\"tabela\" border=\"1\" >";

    for (var i = 0; i < 9; i++) {
        if (i == 3 || i == 6) {
            niz += "<tr style=\"border-bottom: solid;\">";
        } else {
            niz += "<tr>";
        }

        for (var j = 0; j < 9; j++) { // posamezno polje ima id stVrstice_stStolpca
            if ((j == 2 || j == 5) && (i == 2 || i == 5)) {
                niz += "<td class=\"polje\" id=\"O" + i + "_" + j + "\"  style=\"background-color:grey; border-right: solid;border-bottom: solid;\"> <input id=\"P" + i + "_" + j + "\" maxlength=\"1\" style=\"color:#323233; width:46px; height:46px; background-color:white; text-align:center; font-size:20px; font-weight:bold; \"type=\"text\"></td>";
            } else {
                if (j == 2 || j == 5) {
                    niz += "<td class=\"polje\" id=\"O" + i + "_" + j + "\"  style=\"background-color:grey; border-right: solid;\"> <input id=\"P" + i + "_" + j + "\" maxlength=\"1\" style=\" color:#323233; width:46px; height:46px; background-color:white; text-align:center; font-size:20px; font-weight:bold; \"type=\"text\"></td>";
                } else {
                    if (i == 2 || i == 5) {
                        niz += "<td class=\"polje\" id=\"O" + i + "_" + j + "\"  style=\"background-color:grey; border-bottom: solid;\"> <input id=\"P" + i + "_" + j + "\" maxlength=\"1\" style=\" color:#323233; width:46px; height:46px; background-color:white; text-align:center; font-size:20px; font-weight:bold; \"type=\"text\"></td>";
                    } else {
                        niz += "<td class=\"polje\" id=\"O" + i + "_" + j + "\"  style=\"background-color:grey; \"> <input id=\"P" + i + "_" + j + "\" maxlength=\"1\" style=\" color:#323233; width:46px; height:46px; background-color:white; text-align:center; font-size:20px; font-weight:bold;\"type=\"text\"></td>";
                    }
                    // id=\"P"+i+"_"+j+"\"  -- TO JE ZA NOTRANJI DEL - polje
                }
            }
        }
        niz += "</tr>";
    }
    niz = niz + "</table>";
    console.log(niz);
    return niz;
}