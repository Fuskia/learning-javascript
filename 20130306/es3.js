var n = 10;
var i,j;
var riga="";

for(i=1; i<=n; i++){
	for(j=1; j<=n; j++) {
		if(i==j && j!=10)
			riga += 1 + ",\t";
		if(i==j && j==10) 	
			riga += 1 + "\t";
		if(i!=j && j!=10)
			riga += 0 + ",\t";
		if(i!=j && j==10)
			riga += 0 + "\t";
	}
	riga +="\n";
}
console.log(riga);
