function izrisiPlosco(){

	var niz="<table id=\"tabela\" border=\"1\" >";

	for(var i=0; i<9; i++){
		if(i==3 || i==6){
			niz += "<tr style=\"border-bottom: solid;\">";
		}
		else{
			niz += "<tr>";
		}

		for(var j=0; j<9; j++){			// posamezno polje ima id stVrstice_stStolpca
			if((j==2 || j==5) && (i==2 || i==5)){
				niz += "<td class=\"polje\" id=\"O"+i+"_"+j+"\"  style=\"background-color:grey; border-right: solid;border-bottom: solid;\"> <input id=\"P"+i+"_"+j+"\" maxlength=\"1\" style=\" width:35px; height:35px; text-align:center; font-size:20px; font-weight:bold; \"type=\"text\"></td>";
			}else{
				if(j==2 || j==5){
					niz += "<td class=\"polje\" id=\"O"+i+"_"+j+"\"  style=\"background-color:grey; border-right: solid;\"> <input id=\"P"+i+"_"+j+"\" maxlength=\"1\" style=\" width:35px; height:35px; text-align:center; font-size:20px; font-weight:bold; \"type=\"text\"></td>";
				}else{
					if(i==2 || i==5){
						niz += "<td class=\"polje\" id=\"O"+i+"_"+j+"\"  style=\"background-color:grey; border-bottom: solid;\"> <input id=\"P"+i+"_"+j+"\" maxlength=\"1\" style=\" width:35px; height:35px; text-align:center; font-size:20px; font-weight:bold; \"type=\"text\"></td>";
					}else{
						niz += "<td class=\"polje\" id=\"O"+i+"_"+j+"\"  style=\"background-color:grey; \"> <input id=\"P"+i+"_"+j+"\" maxlength=\"1\" style=\" width:35px; height:35px; text-align:center; font-size:20px; font-weight:bold;\"type=\"text\"></td>";
					}
								// id=\"P"+i+"_"+j+"\"  -- TO JE ZA NOTRANJI DEL - polje
				}		
			}	
		}
		niz += "</tr>";
	}
	niz=niz+"</table>";
	//console.log(niz);
	
	return niz;
}

function resetSudokuPanel(){
	for(var i=0; i<9; i++){
		for(var j=0; j<9; j++){
			document.getElementById("P"+i+"_"+j).value="";
		}
	}
}
