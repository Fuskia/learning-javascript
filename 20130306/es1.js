var n = 10;
var i,j;
var riga="";

for(i=1; i<=n; i++){
	for(j=1; j<=n; j++) {
		riga += j*i + "\t";
	}
	riga +="\n";
}
console.log(riga);


