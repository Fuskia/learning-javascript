var n = 10;
var i,j;
var riga="";

for(i=1; i<=n; i++){
	for(j=1; j<=n; j++) {
		if(j==10)
			riga += j*i + "\t";
		else
			riga += j*i + ",\t";
	}
	riga +="\n";
}
console.log(riga);
