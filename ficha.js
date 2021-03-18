





function cadastro(){
	
var pedido=document.querySelector('#pedido').value;
var item=document.querySelector('#item').value;
var lote=document.querySelector('#lote').value;
var ficha=document.querySelector('#ficha').value;
var cliente=document.querySelector('#cliente').value;
var cidade=document.querySelector('#cidade').value;
var modelo=document.querySelector('#modelo').value;
var cor1=document.querySelector('#cor1').value;
var cor2=document.querySelector('#cor2').value;
var cor3=document.querySelector('#cor3').value;
var cor4=document.querySelector('#cor4').value;
var cor5=document.querySelector('#cor5').value;
var corPalmilha=document.querySelector('#corPalmilha').value;
var corSalto=document.querySelector('#corSalto').value;
var forro=document.querySelector('#forro').value;
var taloneira=document.querySelector('#taloneira').value;
var arte=document.querySelector('#arte').value;
var silkada=document.querySelector('#silkada').value;
var queimada=document.querySelector('#queimada').value;
var etiqueta=document.querySelector('#etiqueta').value;
var colorgrafic=document.querySelector('#colorgrafic').value;
var tresd=document.querySelector('#tresd').value;
var refSalto=document.querySelector('#refSalto').value;
var refSola=document.querySelector('#refSola').value;
var refPalmilha=document.querySelector('#refPalmilha').value;
var corSola=document.querySelector('#corSola').value;
var obs=document.querySelector('#obs').value;
var n33=document.querySelector('#n33').value;
var n34=document.querySelector('#n34').value;
var n35=document.querySelector('#n35').value;
var n36=document.querySelector('#n36').value;
var n37=document.querySelector('#n37').value;
var n38=document.querySelector('#n38').value;
var n39=document.querySelector('#n39').value;
var n40=document.querySelector('#n40').value;

/*==================================================*/
/*=================  CORTE  =========================*/
/*===================================================*/
/*******************   IMPRESSÃO  ***********************************/
	
/***********   LINHA 1  ***************************************/
	var t1=document.querySelector('#t1').innerHTML="CORTE";

	var f1=document.querySelector("#f1");
	var p=document.createElement("p");
	p.textContent="PEDIDO : "+pedido;
	f1.appendChild(p);
	
	var f1=document.querySelector("#f1");
	var p=document.createElement("p");
	p.textContent="ITEM : "+item;
	f1.appendChild(p);

	var f1=document.querySelector("#f1");
	var p=document.createElement("p");
	p.textContent="LOTE : "+lote;
	f1.appendChild(p);

	var f1=document.querySelector("#f1");
	var p=document.createElement("p");
	p.textContent="FICHA : "+ficha;
	f1.appendChild(p);

/*************   LINHA  2 ****************************************/
	var f2=document.querySelector('#f2');
	var p=document.createElement("p");
	p.textContent="CLIENTE : "+cliente;
	f2.appendChild(p);

	var f2=document.querySelector('#f2');
	var p=document.createElement("p");
	p.textContent="CIDADE : "+cidade;
	f2.appendChild(p);
/*************  LINHA  3  ***************************************/
	var f3=document.querySelector('#f3');
	var p=document.createElement("p");
	p.textContent="MODELO : "+modelo;
	f3.appendChild(p);
/**************  LINHA  4  *****************************************/
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.textContent="COR 1 : "+cor1;
	f4.appendChild(p);
	
	if(cor2==""){
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.style.display="none;"
	
	}else{
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.textContent="COR 2 : "+cor2;
	f4.appendChild(p);
}
	if(cor3==""){
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.textContent="COR 3 : "+cor3;
	f4.appendChild(p);	
	}
	if(cor4==""){
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.textContent="COR 4 : "+cor4;
	f4.appendChild(p);
}
	if(cor5==""){
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.textContent="COR 5 : "+cor5;
	f4.appendChild(p);
	}
/*************  LINHA  5  *********************************/
	var f5=document.querySelector("#f5");
	var p=document.createElement("p");
	p.textContent="PALMILHA : "+corPalmilha;
	f5.appendChild(p);

	var f5=document.querySelector("#f5");
	var p=document.createElement("p");
	p.textContent="SALTO : "+corSalto;
	f5.appendChild(p);

	var f5=document.querySelector("#f5");
	var p=document.createElement("p");
	p.textContent="FORRO : "+forro;
	f5.appendChild(p);

	var f5=document.querySelector("#f5");
	var p=document.createElement("p");
	p.textContent="TALONEIRA : "+taloneira;
	f5.appendChild(p);

/*********************  LINHA  6  ***************************************/
	
	var f6=document.querySelector("#f6");
	var p=document.createElement("p");
	p.textContent="ARTE DA TALONEIRA : "+arte;
	f6.appendChild(p);

	if(document.querySelector('#silkada').checked){
	var f6=document.querySelector("#f6");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+silkada;
	f6.appendChild(p);
	}
	if(document.querySelector('#queimada').checked){
	var f6=document.querySelector("#f6");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+queimada;
	f6.appendChild(p);
	}
	if(document.querySelector('#etiqueta').checked){
	var f6=document.querySelector("#f6");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+etiqueta;
	f6.appendChild(p);
	}
	if(document.querySelector('#colorgrafic').checked){
	var f6=document.querySelector("#f6");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+colorgrafic;
	f6.appendChild(p);
	}
	if(document.querySelector('#tresd').checked){
	var f6=document.querySelector("#f6");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+tresd;
	f6.appendChild(p);
	}

/******************   LINHA  7  *****************************/

	var f7=document.querySelector("#f7");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DO SALTO : "+refSalto;
	f7.appendChild(p);


	var f7=document.querySelector("#f7");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA SOLA : "+refSola;
	f7.appendChild(p);

	var f7=document.querySelector("#f7");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA PALMILHA : "+refPalmilha;
	f7.appendChild(p);

/**********************  LINHA  8  ******************************/
	var f7=document.querySelector("#f7");
	var p=document.createElement("p");
	p.textContent="COR DA SOLA : "+corSola;
	f7.appendChild(p);
	

/**********************  LINHA  9  ******************************/

	var f9=document.querySelector("#f9");
	var p=document.createElement("p");
	p.textContent="OBSERVAÇÕES : "+obs;
	f9.appendChild(p);

/********************  LINHA  10  ********************************/


	// NUMERO 33
	var fa=document.querySelector('#fa');
	var p=document.createElement("p");
	p.textContent="33";
	fa.appendChild(p);

	var fa=document.querySelector('#fa');
	var p=document.createElement("p");
	p.textContent=n33;
	fa.appendChild(p);
	
	// NUMERO 34

	var fb=document.querySelector('#fb');
	var p=document.createElement("p");
	p.textContent="34";
	fb.appendChild(p);

	var fb=document.querySelector('#fb');
	var p=document.createElement("p");
	p.textContent=n34;
	fb.appendChild(p);

	//NUMERO 35

	var fc=document.querySelector('#fc');
	var p=document.createElement("p");
	p.textContent="35";
	fc.appendChild(p);

	var fc=document.querySelector('#fc');
	var p=document.createElement("p");
	p.textContent=n35;
	fc.appendChild(p);

	//NUMERO 36

	var fd=document.querySelector('#fd');
	var p=document.createElement("p");
	p.textContent="36";
	fd.appendChild(p);

	var fd=document.querySelector('#fd');
	var p=document.createElement("p");
	p.textContent=n36;
	fd.appendChild(p);

	// NUMERO 37

	var fe=document.querySelector('#fe');
	var p=document.createElement("p");
	p.textContent="37";
	fe.appendChild(p);

	var fe=document.querySelector('#fe');
	var p=document.createElement("p");
	p.textContent=n37;
	fe.appendChild(p);

	// NUMERO 38

	var ff=document.querySelector('#ff');
	var p=document.createElement("p");
	p.textContent="38";
	ff.appendChild(p);

	var ff=document.querySelector('#ff');
	var p=document.createElement("p");
	p.textContent=n38;
	ff.appendChild(p);

	// NUMERO 39

	var fg=document.querySelector('#fg');
	var p=document.createElement("p");
	p.textContent="39";
	fg.appendChild(p);

	var fg=document.querySelector('#fg');
	var p=document.createElement("p");
	p.textContent=n39;
	fg.appendChild(p);

	// NUMERO 40

	var fh=document.querySelector('#fh');
	var p=document.createElement("p");
	p.textContent="40";
	fh.appendChild(p);

	var fh=document.querySelector('#fh');
	var p=document.createElement("p");
	p.textContent=n40;
	fh.appendChild(p);

	// TOTAL

	
	var total= Number(n33)+Number(n34)+Number(n35)+Number(n36)+
			Number(n37)+Number(n38)+Number(n39)+Number(n40);
	

		var fi= document.querySelector("#fi");	
		var p= document.createElement("p");
		p.textContent="TOTAL";			
		fi.appendChild(p);	
		
		var fi= document.querySelector("#fi");	
		var p= document.createElement("p");
		p.textContent=total;			
		fi.appendChild(p);

/*==================================================*/
/*=================  FORRO  =========================*/
/*===================================================*/

var t2=document.querySelector('#t2').innerHTML="FORRO";

	var f1b=document.querySelector("#f1b");
	var p=document.createElement("p");
	p.textContent="PEDIDO : "+pedido;
	f1b.appendChild(p);
	
	var f1b=document.querySelector("#f1b");
	var p=document.createElement("p");
	p.textContent="ITEM : "+item;
	f1b.appendChild(p);

	var f1b=document.querySelector("#f1b");
	var p=document.createElement("p");
	p.textContent="LOTE : "+lote;
	f1b.appendChild(p);

	var f1b=document.querySelector("#f1b");
	var p=document.createElement("p");
	p.textContent="FICHA : "+ficha;
	f1b.appendChild(p);

/*************   LINHA  2 ****************************************/
	var f2b=document.querySelector('#f2b');
	var p=document.createElement("p");
	p.textContent="CLIENTE : "+cliente;
	f2b.appendChild(p);

	var f2b=document.querySelector('#f2b');
	var p=document.createElement("p");
	p.textContent="CIDADE : "+cidade;
	f2b.appendChild(p);
/*************  LINHA  3  ***************************************/
	var f3b=document.querySelector('#f3b');
	var p=document.createElement("p");
	p.textContent="MODELO : "+modelo;
	f3b.appendChild(p);
/**************  LINHA  4  *****************************************/
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.textContent="COR 1 : "+cor1;
	f4b.appendChild(p);
	
	if(cor2==""){
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.style.display="none;"
	
	}else{
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.textContent="COR 2 : "+cor2;
	f4b.appendChild(p);
}
	if(cor3==""){
	var f4=document.querySelector("#f4");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.textContent="COR 3 : "+cor3;
	f4b.appendChild(p);	
	}
	if(cor4==""){
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.textContent="COR 4 : "+cor4;
	f4b.appendChild(p);
}
	if(cor5==""){
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4b=document.querySelector("#f4b");
	var p=document.createElement("p");
	p.textContent="COR 5 : "+cor5;
	f4b.appendChild(p);
	}
/*************  LINHA  5  *********************************/
	var f5b=document.querySelector("#f5b");
	var p=document.createElement("p");
	p.textContent="PALMILHA : "+corPalmilha;
	f5b.appendChild(p);

	var f5b=document.querySelector("#f5b");
	var p=document.createElement("p");
	p.textContent="SALTO : "+corSalto;
	f5b.appendChild(p);

	var f5b=document.querySelector("#f5b");
	var p=document.createElement("p");
	p.textContent="FORRO : "+forro;
	f5b.appendChild(p);

	var f5b=document.querySelector("#f5b");
	var p=document.createElement("p");
	p.textContent="TALONEIRA : "+taloneira;
	f5b.appendChild(p);

/*********************  LINHA  6  ***************************************/
	
	var f6b=document.querySelector("#f6b");
	var p=document.createElement("p");
	p.textContent="ARTE DA TALONEIRA : "+arte;
	f6b.appendChild(p);

	if(document.querySelector('#silkada').checked){
	var f6b=document.querySelector("#f6b");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+silkada;
	f6b.appendChild(p);
	}
	if(document.querySelector('#queimada').checked){
	var f6b=document.querySelector("#f6b");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+queimada;
	f6b.appendChild(p);
	}
	if(document.querySelector('#etiqueta').checked){
	var f6b=document.querySelector("#f6b");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+etiqueta;
	f6b.appendChild(p);
	}
	if(document.querySelector('#colorgrafic').checked){
	var f6b=document.querySelector("#f6b");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+colorgrafic;
	f6b.appendChild(p);
	}
	if(document.querySelector('#tresd').checked){
	var f6b=document.querySelector("#f6b");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+tresd;
	f6b.appendChild(p);
	}

/******************   LINHA  7  *****************************/

	var f7b=document.querySelector("#f7b");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DO SALTO : "+refSalto;
	f7b.appendChild(p);


	var f7b=document.querySelector("#f7b");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA SOLA : "+refSola;
	f7b.appendChild(p);

	var f7b=document.querySelector("#f7b");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA PALMILHA : "+refPalmilha;
	f7b.appendChild(p);

/**********************  LINHA  8  ******************************/
	var f7b=document.querySelector("#f7b");
	var p=document.createElement("p");
	p.textContent="COR DA SOLA : "+corSola;
	f7b.appendChild(p);
	

/**********************  LINHA  9  ******************************/

	var f9b=document.querySelector("#f9b");
	var p=document.createElement("p");
	p.textContent="OBSERVAÇÕES : "+obs;
	f9b.appendChild(p);

/********************  LINHA  10  ********************************/
/*******************   IMPRESSÃO  ***********************************/

	// NUMERO 33b
	var fab=document.querySelector('#fab');
	var p=document.createElement("p");
	p.textContent="33";
	fab.appendChild(p);

	var fab=document.querySelector('#fab');
	var p=document.createElement("p");
	p.textContent=n33;
	fab.appendChild(p);
	
	// NUMERO 34

	var fbb=document.querySelector('#fbb');
	var p=document.createElement("p");
	p.textContent="34";
	fbb.appendChild(p);

	var fbb=document.querySelector('#fbb');
	var p=document.createElement("p");
	p.textContent=n34;
	fbb.appendChild(p);

	//NUMERO 35

	var fcb=document.querySelector('#fcb');
	var p=document.createElement("p");
	p.textContent="35";
	fcb.appendChild(p);

	var fcb=document.querySelector('#fcb');
	var p=document.createElement("p");
	p.textContent=n35;
	fcb.appendChild(p);

	//NUMERO 36

	var fdb=document.querySelector('#fdb');
	var p=document.createElement("p");
	p.textContent="36";
	fdb.appendChild(p);

	var fdb=document.querySelector('#fdb');
	var p=document.createElement("p");
	p.textContent=n36;
	fdb.appendChild(p);

	// NUMERO 37

	var feb=document.querySelector('#feb');
	var p=document.createElement("p");
	p.textContent="37";
	feb.appendChild(p);

	var feb=document.querySelector('#feb');
	var p=document.createElement("p");
	p.textContent=n37;
	feb.appendChild(p);

	// NUMERO 38

	var ffb=document.querySelector('#ffb');
	var p=document.createElement("p");
	p.textContent="38";
	ffb.appendChild(p);

	var ffb=document.querySelector('#ffb');
	var p=document.createElement("p");
	p.textContent=n38;
	ffb.appendChild(p);

	// NUMERO 39

	var fgb=document.querySelector('#fgb');
	var p=document.createElement("p");
	p.textContent="39";
	fgb.appendChild(p);

	var fgb=document.querySelector('#fgb');
	var p=document.createElement("p");
	p.textContent=n39;
	fgb.appendChild(p);

	// NUMERO 40

	var fhb=document.querySelector('#fhb');
	var p=document.createElement("p");
	p.textContent="40";
	fhb.appendChild(p);

	var fhb=document.querySelector('#fhb');
	var p=document.createElement("p");
	p.textContent=n40;
	fhb.appendChild(p);

	// TOTAL

	
	var total= Number(n33)+Number(n34)+Number(n35)+Number(n36)+
			Number(n37)+Number(n38)+Number(n39)+Number(n40);
	

		var fib= document.querySelector("#fib");	
		var p= document.createElement("p");
		p.textContent="TOTAL";			
		fib.appendChild(p);	
		
		var fib= document.querySelector("#fib");	
		var p= document.createElement("p");
		p.textContent=total;			
		fib.appendChild(p);

		/****************************************************************************** */
		/***********************   PALMILHA ******************************************** */
		/*********************************************************************************** */

		var t3=document.querySelector('#t3').innerHTML="PALMILHA";

	var f1c=document.querySelector("#f1c");
	var p=document.createElement("p");
	p.textContent="PEDIDO : "+pedido;
	f1c.appendChild(p);
	
	var f1c=document.querySelector("#f1c");
	var p=document.createElement("p");
	p.textContent="ITEM : "+item;
	f1c.appendChild(p);

	var f1c=document.querySelector("#f1c");
	var p=document.createElement("p");
	p.textContent="LOTE : "+lote;
	f1c.appendChild(p);

	var f1c=document.querySelector("#f1c");
	var p=document.createElement("p");
	p.textContent="FICHA : "+ficha;
	f1c.appendChild(p);

/*************   LINHA  2 ****************************************/
	var f2c=document.querySelector('#f2c');
	var p=document.createElement("p");
	p.textContent="CLIENTE : "+cliente;
	f2c.appendChild(p);

	var f2c=document.querySelector('#f2c');
	var p=document.createElement("p");
	p.textContent="CIDADE : "+cidade;
	f2c.appendChild(p);
/*************  LINHA  3  ***************************************/
	var f3c=document.querySelector('#f3c');
	var p=document.createElement("p");
	p.textContent="MODELO : "+modelo;
	f3c.appendChild(p);
/**************  LINHA  4  *****************************************/
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.textContent="COR 1 : "+cor1;
	f4c.appendChild(p);
	
	if(cor2==""){
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.style.display="none;"
	
	}else{
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.textContent="COR 2 : "+cor2;
	f4c.appendChild(p);
}
	if(cor3==""){
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.textContent="COR 3 : "+cor3;
	f4c.appendChild(p);	
	}
	if(cor4==""){
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.textContent="COR 4 : "+cor4;
	f4c.appendChild(p);
}
	if(cor5==""){
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4c=document.querySelector("#f4c");
	var p=document.createElement("p");
	p.textContent="COR 5 : "+cor5;
	f4c.appendChild(p);
	}
/*************  LINHA  5  *********************************/
	var f5c=document.querySelector("#f5c");
	var p=document.createElement("p");
	p.textContent="PALMILHA : "+corPalmilha;
	f5c.appendChild(p);

	var f5c=document.querySelector("#f5c");
	var p=document.createElement("p");
	p.textContent="SALTO : "+corSalto;
	f5c.appendChild(p);

	var f5c=document.querySelector("#f5c");
	var p=document.createElement("p");
	p.textContent="FORRO : "+forro;
	f5c.appendChild(p);

	var f5c=document.querySelector("#f5c");
	var p=document.createElement("p");
	p.textContent="TALONEIRA : "+taloneira;
	f5c.appendChild(p);

/*********************  LINHA  6  ***************************************/
	
	var f6c=document.querySelector("#f6c");
	var p=document.createElement("p");
	p.textContent="ARTE DA TALONEIRA : "+arte;
	f6c.appendChild(p);

	if(document.querySelector('#silkada').checked){
	var f6c=document.querySelector("#f6c");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+silkada;
	f6c.appendChild(p);
	}
	if(document.querySelector('#queimada').checked){
	var f6c=document.querySelector("#f6c");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+queimada;
	f6c.appendChild(p);
	}
	if(document.querySelector('#etiqueta').checked){
	var f6c=document.querySelector("#f6c");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+etiqueta;
	f6c.appendChild(p);
	}
	if(document.querySelector('#colorgrafic').checked){
	var f6c=document.querySelector("#f6c");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+colorgrafic;
	f6c.appendChild(p);
	}
	if(document.querySelector('#tresd').checked){
	var f6c=document.querySelector("#f6c");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+tresd;
	f6c.appendChild(p);
	}

/******************   LINHA  7  *****************************/

	var f7c=document.querySelector("#f7c");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DO SALTO : "+refSalto;
	f7c.appendChild(p);


	var f7c=document.querySelector("#f7c");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA SOLA : "+refSola;
	f7c.appendChild(p);

	var f7c=document.querySelector("#f7c");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA PALMILHA : "+refPalmilha;
	f7c.appendChild(p);

/**********************  LINHA  8  ******************************/
	var f7c=document.querySelector("#f7c");
	var p=document.createElement("p");
	p.textContent="COR DA SOLA : "+corSola;
	f7c.appendChild(p);
	

/**********************  LINHA  9  ******************************/

	var f9c=document.querySelector("#f9c");
	var p=document.createElement("p");
	p.textContent="OBSERVAÇÕES : "+obs;
	f9c.appendChild(p);

/********************  LINHA  10  ********************************/
/*******************   IMPRESSÃO  ***********************************/

	// NUMERO 33b
	var fac=document.querySelector('#fac');
	var p=document.createElement("p");
	p.textContent="33";
	fac.appendChild(p);

	var fac=document.querySelector('#fac');
	var p=document.createElement("p");
	p.textContent=n33;
	fac.appendChild(p);
	
	// NUMERO 34

	var fbc=document.querySelector('#fbc');
	var p=document.createElement("p");
	p.textContent="34";
	fbc.appendChild(p);

	var fbc=document.querySelector('#fbc');
	var p=document.createElement("p");
	p.textContent=n34;
	fbc.appendChild(p);

	//NUMERO 35

	var fcc=document.querySelector('#fcc');
	var p=document.createElement("p");
	p.textContent="35";
	fcc.appendChild(p);

	var fcc=document.querySelector('#fcc');
	var p=document.createElement("p");
	p.textContent=n35;
	fcc.appendChild(p);

	//NUMERO 36

	var fdc=document.querySelector('#fdc');
	var p=document.createElement("p");
	p.textContent="36";
	fdc.appendChild(p);

	var fdc=document.querySelector('#fdc');
	var p=document.createElement("p");
	p.textContent=n36;
	fdc.appendChild(p);

	// NUMERO 37

	var fec=document.querySelector('#fec');
	var p=document.createElement("p");
	p.textContent="37";
	fec.appendChild(p);

	var fec=document.querySelector('#fec');
	var p=document.createElement("p");
	p.textContent=n37;
	fec.appendChild(p);

	// NUMERO 38

	var ffc=document.querySelector('#ffc');
	var p=document.createElement("p");
	p.textContent="38";
	ffc.appendChild(p);

	var ffc=document.querySelector('#ffc');
	var p=document.createElement("p");
	p.textContent=n38;
	ffc.appendChild(p);

	// NUMERO 39

	var fgc=document.querySelector('#fgc');
	var p=document.createElement("p");
	p.textContent="39";
	fgc.appendChild(p);

	var fgc=document.querySelector('#fgc');
	var p=document.createElement("p");
	p.textContent=n39;
	fgc.appendChild(p);

	// NUMERO 40

	var fhc=document.querySelector('#fhc');
	var p=document.createElement("p");
	p.textContent="40";
	fhc.appendChild(p);

	var fhc=document.querySelector('#fhc');
	var p=document.createElement("p");
	p.textContent=n40;
	fhc.appendChild(p);

	// TOTAL

	
	var total= Number(n33)+Number(n34)+Number(n35)+Number(n36)+
			Number(n37)+Number(n38)+Number(n39)+Number(n40);
	

		var fic= document.querySelector("#fic");	
		var p= document.createElement("p");
		p.textContent="TOTAL";			
		fic.appendChild(p);	
		
		var fic= document.querySelector("#fic");	
		var p= document.createElement("p");
		p.textContent=total;			
		fic.appendChild(p);


/***************************************************************************************************************************/
/****************   SALTO  ************************************************************************************************/
/***************************************************************************************************************************/

	var t4=document.querySelector('#t4').innerHTML="SALTO";

	var f1d=document.querySelector("#f1d");
	var p=document.createElement("p");
	p.textContent="PEDIDO : "+pedido;
	f1d.appendChild(p);
	
	var f1d=document.querySelector("#f1d");
	var p=document.createElement("p");
	p.textContent="ITEM : "+item;
	f1d.appendChild(p);

	var f1d=document.querySelector("#f1d");
	var p=document.createElement("p");
	p.textContent="LOTE : "+lote;
	f1d.appendChild(p);

	var f1d=document.querySelector("#f1d");
	var p=document.createElement("p");
	p.textContent="FICHA : "+ficha;
	f1d.appendChild(p);

/*************   LINHA  2 ****************************************/
	var f2d=document.querySelector('#f2d');
	var p=document.createElement("p");
	p.textContent="CLIENTE : "+cliente;
	f2d.appendChild(p);

	var f2d=document.querySelector('#f2d');
	var p=document.createElement("p");
	p.textContent="CIDADE : "+cidade;
	f2d.appendChild(p);
/*************  LINHA  3  ***************************************/
	var f3d=document.querySelector('#f3d');
	var p=document.createElement("p");
	p.textContent="MODELO : "+modelo;
	f3d.appendChild(p);
/**************  LINHA  4  *****************************************/
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.textContent="COR 1 : "+cor1;
	f4d.appendChild(p);
	
	if(cor2==""){
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.style.display="none;"
	
	}else{
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.textContent="COR 2 : "+cor2;
	f4d.appendChild(p);
}
	if(cor3==""){
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.textContent="COR 3 : "+cor3;
	f4d.appendChild(p);	
	}
	if(cor4==""){
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.textContent="COR 4 : "+cor4;
	f4d.appendChild(p);
}
	if(cor5==""){
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.style.display="none;"
	}else{
	var f4d=document.querySelector("#f4d");
	var p=document.createElement("p");
	p.textContent="COR 5 : "+cor5;
	f4d.appendChild(p);
	}
/*************  LINHA  5  *********************************/
	var f5d=document.querySelector("#f5d");
	var p=document.createElement("p");
	p.textContent="PALMILHA : "+corPalmilha;
	f5d.appendChild(p);

	var f5d=document.querySelector("#f5d");
	var p=document.createElement("p");
	p.textContent="SALTO : "+corSalto;
	f5d.appendChild(p);

	var f5d=document.querySelector("#f5d");
	var p=document.createElement("p");
	p.textContent="FORRO : "+forro;
	f5d.appendChild(p);

	var f5d=document.querySelector("#f5d");
	var p=document.createElement("p");
	p.textContent="TALONEIRA : "+taloneira;
	f5d.appendChild(p);

/*********************  LINHA  6  ***************************************/
	
	var f6d=document.querySelector("#f6d");
	var p=document.createElement("p");
	p.textContent="ARTE DA TALONEIRA : "+arte;
	f6d.appendChild(p);

	if(document.querySelector('#silkada').checked){
	var f6d=document.querySelector("#f6d");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+silkada;
	f6d.appendChild(p);
	}
	if(document.querySelector('#queimada').checked){
	var f6d=document.querySelector("#f6d");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+queimada;
	f6d.appendChild(p);
	}
	if(document.querySelector('#etiqueta').checked){
	var f6d=document.querySelector("#f6d");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+etiqueta;
	f6d.appendChild(p);
	}
	if(document.querySelector('#colorgrafic').checked){
	var f6d=document.querySelector("#f6d");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+colorgrafic;
	f6d.appendChild(p);
	}
	if(document.querySelector('#tresd').checked){
	var f6d=document.querySelector("#f6d");
	var p=document.createElement("p");
	p.textContent="TIPO DA ARTE : "+tresd;
	f6d.appendChild(p);
	}

/******************   LINHA  7  *****************************/

	var f7d=document.querySelector("#f7d");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DO SALTO : "+refSalto;
	f7d.appendChild(p);


	var f7d=document.querySelector("#f7d");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA SOLA : "+refSola;
	f7d.appendChild(p);

	var f7d=document.querySelector("#f7d");
	var p=document.createElement("p");
	p.textContent="REFERENCIA DA PALMILHA : "+refPalmilha;
	f7d.appendChild(p);

/**********************  LINHA  8  ******************************/
	var f7d=document.querySelector("#f7d");
	var p=document.createElement("p");
	p.textContent="COR DA SOLA : "+corSola;
	f7d.appendChild(p);
	

/**********************  LINHA  9  ******************************/

	var f9d=document.querySelector("#f9d");
	var p=document.createElement("p");
	p.textContent="OBSERVAÇÕES : "+obs;
	f9d.appendChild(p);

/********************  LINHA  10  ********************************/
/*******************   IMPRESSÃO  ***********************************/

	// NUMERO 33b
	var fad=document.querySelector('#fad');
	var p=document.createElement("p");
	p.textContent="33";
	fad.appendChild(p);

	var fad=document.querySelector('#fad');
	var p=document.createElement("p");
	p.textContent=n33;
	fad.appendChild(p);
	
	// NUMERO 34

	var fbd=document.querySelector('#fbd');
	var p=document.createElement("p");
	p.textContent="34";
	fbd.appendChild(p);

	var fbd=document.querySelector('#fbd');
	var p=document.createElement("p");
	p.textContent=n34;
	fbd.appendChild(p);

	//NUMERO 35

	var fcd=document.querySelector('#fcd');
	var p=document.createElement("p");
	p.textContent="35";
	fcd.appendChild(p);

	var fcd=document.querySelector('#fcd');
	var p=document.createElement("p");
	p.textContent=n35;
	fcd.appendChild(p);

	//NUMERO 36

	var fdd=document.querySelector('#fdd');
	var p=document.createElement("p");
	p.textContent="36";
	fdd.appendChild(p);

	var fdd=document.querySelector('#fdd');
	var p=document.createElement("p");
	p.textContent=n36;
	fdd.appendChild(p);

	// NUMERO 37

	var fed=document.querySelector('#fed');
	var p=document.createElement("p");
	p.textContent="37";
	fed.appendChild(p);

	var fed=document.querySelector('#fed');
	var p=document.createElement("p");
	p.textContent=n37;
	fed.appendChild(p);

	// NUMERO 38

	var ffd=document.querySelector('#ffd');
	var p=document.createElement("p");
	p.textContent="38";
	ffd.appendChild(p);

	var ffd=document.querySelector('#ffd');
	var p=document.createElement("p");
	p.textContent=n38;
	ffd.appendChild(p);

	// NUMERO 39

	var fgd=document.querySelector('#fgd');
	var p=document.createElement("p");
	p.textContent="39";
	fgd.appendChild(p);

	var fgd=document.querySelector('#fgd');
	var p=document.createElement("p");
	p.textContent=n39;
	fgd.appendChild(p);

	// NUMERO 40

	var fhd=document.querySelector('#fhd');
	var p=document.createElement("p");
	p.textContent="40";
	fhd.appendChild(p);

	var fhd=document.querySelector('#fhd');
	var p=document.createElement("p");
	p.textContent=n40;
	fhd.appendChild(p);



	// TOTAL

	
	var total= Number(n33)+Number(n34)+Number(n35)+Number(n36)+
			Number(n37)+Number(n38)+Number(n39)+Number(n40);
	

		var fid= document.querySelector("#fid");	
		var p= document.createElement("p");
		p.textContent="TOTAL";			
		fid.appendChild(p);	
		
		var fid= document.querySelector("#fid");	
		var p= document.createElement("p");
		p.textContent=total;			
		fid.appendChild(p);

/**********  TALONEIRA  ******************************************************************** */

var t5=document.querySelector('#t5').innerHTML="TALONEIRA";

var f1e=document.querySelector("#f1e");
var p=document.createElement("p");
p.textContent="PEDIDO : "+pedido;
f1e.appendChild(p);

var f1e=document.querySelector("#f1e");
var p=document.createElement("p");
p.textContent="ITEM : "+item;
f1e.appendChild(p);

var f1e=document.querySelector("#f1e");
var p=document.createElement("p");
p.textContent="LOTE : "+lote;
f1e.appendChild(p);

var f1e=document.querySelector("#f1e");
var p=document.createElement("p");
p.textContent="FICHA : "+ficha;
f1e.appendChild(p);

/*************   LINHA  2 ****************************************/
var f2e=document.querySelector('#f2e');
var p=document.createElement("p");
p.textContent="CLIENTE : "+cliente;
f2e.appendChild(p);

var f2e=document.querySelector('#f2e');
var p=document.createElement("p");
p.textContent="CIDADE : "+cidade;
f2e.appendChild(p);
/*************  LINHA  3  ***************************************/
var f3e=document.querySelector('#f3e');
var p=document.createElement("p");
p.textContent="MODELO : "+modelo;
f3e.appendChild(p);
/**************  LINHA  4  *****************************************/
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.textContent="COR 1 : "+cor1;
f4e.appendChild(p);

if(cor2==""){
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.style.display="none;"

}else{
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.textContent="COR 2 : "+cor2;
f4e.appendChild(p);
}
if(cor3==""){
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.style.display="none;"
}else{
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.textContent="COR 3 : "+cor3;
f4e.appendChild(p);	
}
if(cor4==""){
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.style.display="none;"
}else{
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.textContent="COR 4 : "+cor4;
f4e.appendChild(p);
}
if(cor5==""){
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.style.display="none;"
}else{
var f4e=document.querySelector("#f4e");
var p=document.createElement("p");
p.textContent="COR 5 : "+cor5;
f4e.appendChild(p);
}
/*************  LINHA  5  *********************************/
var f5e=document.querySelector("#f5e");
var p=document.createElement("p");
p.textContent="PALMILHA : "+corPalmilha;
f5e.appendChild(p);

var fed=document.querySelector("#f5e");
var p=document.createElement("p");
p.textContent="SALTO : "+corSalto;
f5e.appendChild(p);

var f5e=document.querySelector("#f5e");
var p=document.createElement("p");
p.textContent="FORRO : "+forro;
f5e.appendChild(p);

var f5e=document.querySelector("#f5e");
var p=document.createElement("p");
p.textContent="TALONEIRA : "+taloneira;
f5e.appendChild(p);

/*********************  LINHA  6  ***************************************/

var f6e=document.querySelector("#f6e");
var p=document.createElement("p");
p.textContent="ARTE DA TALONEIRA : "+arte;
f6e.appendChild(p);

if(document.querySelector('#silkada').checked){
var f6e=document.querySelector("#f6e");
var p=document.createElement("p");
p.textContent="TIPO DA ARTE : "+silkada;
f6e.appendChild(p);
}
if(document.querySelector('#queimada').checked){
var f6e=document.querySelector("#f6e");
var p=document.createElement("p");
p.textContent="TIPO DA ARTE : "+queimada;
f6e.appendChild(p);
}
if(document.querySelector('#etiqueta').checked){
var f6e=document.querySelector("#f6e");
var p=document.createElement("p");
p.textContent="TIPO DA ARTE : "+etiqueta;
f6e.appendChild(p);
}
if(document.querySelector('#colorgrafic').checked){
var f6e=document.querySelector("#f6e");
var p=document.createElement("p");
p.textContent="TIPO DA ARTE : "+colorgrafic;
f6e.appendChild(p);
}
if(document.querySelector('#tresd').checked){
var f6e=document.querySelector("#f6e");
var p=document.createElement("p");
p.textContent="TIPO DA ARTE : "+tresd;
f6e.appendChild(p);
}

/******************   LINHA  7  *****************************/

var f7e=document.querySelector("#f7e");
var p=document.createElement("p");
p.textContent="REFERENCIA DO SALTO : "+refSalto;
f7e.appendChild(p);


var f7e=document.querySelector("#f7e");
var p=document.createElement("p");
p.textContent="REFERENCIA DA SOLA : "+refSola;
f7e.appendChild(p);

var f7e=document.querySelector("#f7e");
var p=document.createElement("p");
p.textContent="REFERENCIA DA PALMILHA : "+refPalmilha;
f7e.appendChild(p);

/**********************  LINHA  8  ******************************/
var f7e=document.querySelector("#f7e");
var p=document.createElement("p");
p.textContent="COR DA SOLA : "+corSola;
f7e.appendChild(p);


/**********************  LINHA  9  ******************************/

var f9e=document.querySelector("#f9e");
var p=document.createElement("p");
p.textContent="OBSERVAÇÕES : "+obs;
f9e.appendChild(p);

/********************  LINHA  10  ********************************/
/*******************   IMPRESSÃO  ***********************************/
// NUMERO 33b
var fae=document.querySelector('#fae');
var p=document.createElement("p");
p.textContent="33";
fae.appendChild(p);

var fae=document.querySelector('#fae');
var p=document.createElement("p");
p.textContent=n33;
fae.appendChild(p);

// NUMERO 34

var fbe=document.querySelector('#fbe');
var p=document.createElement("p");
p.textContent="34";
fbe.appendChild(p);

var fbe=document.querySelector('#fbe');
var p=document.createElement("p");
p.textContent=n34;
fbe.appendChild(p);

//NUMERO 35

var fce=document.querySelector('#fce');
var p=document.createElement("p");
p.textContent="35";
fce.appendChild(p);

var fce=document.querySelector('#fce');
var p=document.createElement("p");
p.textContent=n35;
fce.appendChild(p);

//NUMERO 36

var fde=document.querySelector('#fde');
var p=document.createElement("p");
p.textContent="36";
fde.appendChild(p);

var fde=document.querySelector('#fde');
var p=document.createElement("p");
p.textContent=n36;
fde.appendChild(p);

// NUMERO 37

var fee=document.querySelector('#fee');
var p=document.createElement("p");
p.textContent="37";
fee.appendChild(p);

var fee=document.querySelector('#fee');
var p=document.createElement("p");
p.textContent=n37;
fee.appendChild(p);

// NUMERO 38

var ffe=document.querySelector('#ffe');
var p=document.createElement("p");
p.textContent="38";
ffe.appendChild(p);

var ffe=document.querySelector('#ffe');
var p=document.createElement("p");
p.textContent=n38;
ffe.appendChild(p);

// NUMERO 39

var fge=document.querySelector('#fge');
var p=document.createElement("p");
p.textContent="39";
fge.appendChild(p);

var fge=document.querySelector('#fge');
var p=document.createElement("p");
p.textContent=n39;
fge.appendChild(p);

// NUMERO 40

var fhe=document.querySelector('#fhe');
var p=document.createElement("p");
p.textContent="40";
fhe.appendChild(p);

var fhe=document.querySelector('#fhe');
var p=document.createElement("p");
p.textContent=n40;
fhe.appendChild(p);

// TOTAL

	
var total= Number(n33)+Number(n34)+Number(n35)+Number(n36)+
Number(n37)+Number(n38)+Number(n39)+Number(n40);


var fie= document.querySelector("#fie");	
var p= document.createElement("p");
p.textContent="TOTAL";			
fie.appendChild(p);	

var fie= document.querySelector("#fie");	
var p= document.createElement("p");
p.textContent=total;			
fie.appendChild(p);


		


};
	
	








	document.querySelector('#cadastrar').addEventListener('click',cadastro);

	



	function imprimir(){
		var restalrarPagina=document.body.innerHTML;
		var conteudoDaImpressao=document.getElementById("imp").innerHTML;
		document.body.innerHTML=conteudoDaImpressao;
		window.print();
		document.body.innerHTML = restalrarPagina;

	
}


document.querySelector('#imprimir').addEventListener('click',imprimir);

