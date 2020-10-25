
var numero = prompt();
var array = numero.split('');
var cont = 8;
var cont2 = 9;
var resultado = 0;
var resultado2 = 0;
var multiplicador = 2;
var multiplicador2 = 2;
var dividido;
var dividido2;
var resto;
var resto2;

function digitos(array){
while(cont != -1){
    resultado =(array[cont]*multiplicador) + resultado;
    cont = cont -1;
    multiplicador = multiplicador +1;
    dividido = parseInt(resultado / 11);
    resto = resultado % 11;
}

document.write("resto"+resto);

if (resto < 2){
    array.push(0);
}else{
    array.push(11 - resto);
}
    while(cont2 != -1){
        resultado2 =(array[cont2]*multiplicador2) + resultado2;
        cont2 = cont2 -1;
        multiplicador2 = multiplicador2 +1;
        dividido2 = parseInt(resultado2 / 11);
        resto2 = resultado2 % 11;
    }
    if (resto2 < 2){
        array.push(0);
    }else{
        array.push(11 - resto2);
    }
    array = array.join('');
    document.write(" "+array+" ");
}
if (resto < 2){
    verificador = 0;
    if(array[9] == verificador){
        document.write("cpf valido");   
    }else("cpf invalido");
}
/*if (resto < 2 == 0 || resto >= 2 == 11 - resto == array[8]){
    document.write("cpf valido")
}else{"cpf invalido"}*/

digitos(array);


