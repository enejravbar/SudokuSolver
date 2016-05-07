#include <stdio.h>
#include <stdbool.h>

void izpisiTabelo();
void napolniMatriko();
bool resiSudoku(int stVrstice, int stStolpca);
bool preveriVrstico(int stVrstice,int stevilo);
bool preveriStolpec(int stStolpca,int stevilo);
bool preveriKvadrat(int stVrstice,int stStolpca,int stevilo);

int matrika[9][9];



void napolniMatriko(){
	for(int i=0; i<9; i++){
		for(int j=0; j<9;j++){
			scanf("%d",&matrika[i][j]);
		}
	}
}

bool resiSudoku(int stVrstice, int stStolpca){
	if(stVrstice==9){
		return true;
	}
		if(matrika[stVrstice][stStolpca]==0){
			for(int i=1; i<=9;i++){
					if(preveriVrstico(stVrstice,i) && preveriStolpec(stStolpca,i) && preveriKvadrat(stVrstice,stStolpca,i))
					{	
						matrika[stVrstice][stStolpca]=i;
						
						if(stStolpca==8){	
												// ce je na robu skoci v novo vrstico
							if(resiSudoku(stVrstice+1, 0))
								return true;
							matrika[stVrstice][stStolpca]=0;

						}else{
							if(resiSudoku(stVrstice, stStolpca+1))
								return true;
							matrika[stVrstice][stStolpca]=0;
						}
				/*if ( resiSudoku( stVrstice + ( stStolpca + 1 ) / 9, ( stStolpca + 1 ) % 9 ) )
					return true;

				matrika[ stVrstice ][ stStolpca ] = 0;*/




					}	//poiskusi dodati else
			}
		}else{
			if(stStolpca==8){							// ce je na robu skoci v novo vrstico
				if(resiSudoku(stVrstice+1, 0)){
					return true;
				}
			}else{
				if(resiSudoku(stVrstice, stStolpca+1)){
					return true;
				}
			}
				/*if ( resiSudoku( stVrstice + ( stStolpca + 1 ) / 9, ( stStolpca + 1 ) % 9 ) )
					return true;*/
		}
	
	return false;

}

bool preveriVrstico(int stVrstice, int stevilo){
	int stevec=0;
	for(int j=0; j<9; j++){
		if(matrika[stVrstice][j]==stevilo){
			stevec++;
		}
	}
	if(stevec==0){return true;}
	return false;

}

bool preveriStolpec(int stStolpca,int stevilo){
	int stevec=0;
	for(int i=0; i<9; i++){
		if(matrika[i][stStolpca]==stevilo){
			stevec++;
		}
	}
	if(stevec==0){return true;}
	return false;
}

bool preveriKvadrat(int stVrstice, int stStolpca,int stevilo){
	int x=(stStolpca/3)*3;
	int y=(stVrstice/3)*3;

	for(int i=x; i<x+3;i++){
		for(int j=y; j<y+3;j++){
			if(matrika[j][i]==stevilo){
				return false;
			}
		}
	}
	return true;
}
void izpisiTabelo(){
	printf("\n");
	printf("\n");
	for(int i=0; i<9; i++){
		for(int j=0; j<9;j++){
			printf(" %c",matrika[i][j]==0?' ':'0'+matrika[i][j]);
		}
		printf("\n");
	}
}

int main(){
	napolniMatriko();
	resiSudoku(0,0);
	izpisiTabelo();
}