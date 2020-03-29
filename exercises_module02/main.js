//1.1 
import ClasseUsuario from './function';
ClasseUsuario.info();

// 1.2

import {idade} from './function';
console.log(idade);

// 1.3
import usuario, {idade as IdadeUsuario} from './function';
console.log(usuario);
console.log(IdadeUsuario);