const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

const idades = usuarios.map(function({idade}){
    return idade;
});
console.log(idades);
//OU
const ages = usuarios.map(usuarios => usuarios.idade);
console.log(ages)

const maiores = usuarios.filter(function({idade, empresa}){
    return (idade > 18 && empresa === "Rocketseat"); 
});
console.log(maiores);
//OU
const olders = usuarios.filter(
    usuario => usuario.empresa === 'Rocketseat' && usuario.idade >= 18
);
console.log(olders);

const google = usuarios.find(function(empresa){
    return empresa === 'Goggle';
});
console.log(google);
//OU
const empresas = usuarios.find(usuario => usuario.empresa === "Goggle");
console.log(empresas);

const soma = usuarios.filter(function({idade}){
    return (idade * 2) < 50 ;
});
console.log(soma);
//OU
const calculo = usuarios
    .map(usuario =>({...usuario, idade: usuario.idade * 2 }))
    .filter(usuario => usuario.idade <= 50);
console.log(calculo);