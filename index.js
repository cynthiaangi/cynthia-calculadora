var decimal = 0;
var binario = 0;
var octal = 0;
var hexa = 0;

function converter() {
        
    decimal = Number (input_decimal.value);     
    octal = decimal.toString(8);        
    hexa = decimal.toString(16).toUpperCase(); 
    binario = decimal.toString(2);    

    document.getElementById("rec_oct_dec").innerHTML = ` ${octal}`;
    document.getElementById("rec_hex_dec").innerHTML = ` ${hexa}`;
    document.getElementById("rec_bin_dec").innerHTML = ` ${binario}`;

}

function converterOctal() {

    octal = input_octal.value;
    decimal = parseInt(octal, 8);
    hexa = decimal.toString(16).toUpperCase();
    binario = decimal.toString(2);

    document.getElementById("rec_dec_oct").innerHTML = ` ${decimal}`;
    document.getElementById("rec_hex_oct").innerHTML = ` ${hexa}`;
    document.getElementById("rec_bin_oct").innerHTML = ` ${binario}`;

}

function converterHexa() {

    hexa = input_hexa.value;
    decimal = parseInt(hexa, 16);
    octal = decimal.toString(8);
    binario = decimal.toString(2);

    document.getElementById("rec_oct_hex").innerHTML = ` ${octal}`;
    document.getElementById("rec_dec_hex").innerHTML = ` ${decimal}`;
    document.getElementById("rec_bin_hex").innerHTML = ` ${binario}`;

}

function converterBin() {
    
    binario = input_bin.value;
    decimal = parseInt(binario, 2);
    hexa = decimal.toString(16).toUpperCase();
    octal = decimal.toString(8);

    document.getElementById("rec_oct_bin").innerHTML = ` ${octal}`;
    document.getElementById("rec_dec_bin").innerHTML = ` ${decimal}`;
    document.getElementById("rec_hex_bin").innerHTML = ` ${hexa}`;

}
