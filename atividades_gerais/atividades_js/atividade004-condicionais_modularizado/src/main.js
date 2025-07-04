
import { calcularParImpar } from './modulos/calcular-par-ou-impar.js';
import { calcularMaiorMenor } from './modulos/comparar-tres-numeros.js';
import { verificarVelocidade } from './modulos/verificar-velocidade.js';
import { calcularAumento } from './modulos/calcular-aumento-salarial.js';
import { calcularAnoBissexto } from './modulos/verificar-ano-bissexto.js';
import { calcularPrecoPassagem } from './modulos/calcular-preco-passagem.js';
import { verificarTriangulo } from './modulos/verificar-formacao-triangulo.js';
import { calcularEquacao } from './modulos/resolver-equacao-bhaskara.js';


document.addEventListener('DOMContentLoaded', () => {
  calcularParImpar();
  calcularMaiorMenor();
  verificarVelocidade();
  calcularAumento();
  calcularAnoBissexto();
  calcularPrecoPassagem();
  verificarTriangulo();
  calcularEquacao();
});