function fibonacci(i){
var a=0;
var b=1;
var somma;

if (i==1)
	somma = 1;
else {
	for (j=1;j<i;j++){
		somma = a+b;
		a = b;
		b = somma;
	}
}
return somma;
}
