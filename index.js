//Algoritimo de campanhas de saúde, casais e doação de sangue.

var sexo, idade, estado_civil,
  sexo = prompt ("Informe o seu sexo");
  
// Estrutura de condição com entrada de dados  
if (sexo == 'f'){
  idade = prompt ("Informe a sua idade");
} 
  if (idade >= 16) {
    alert ("Venha participar da nossa campanha de saúde!");
  } else if (sexo == 'm'){
    estado_civil = prompt ("Informe o seu estado cívil");
      if (estado_civil == "casado"){
        alert ("Venha participar da nossa campanha para casais.");
      } else {
        alert ("Venha participar da nossa campanha de doação de sangue.");
    }  
}