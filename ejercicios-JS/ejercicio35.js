/*
Enunciado Ejercicio 35:
Crea un programa que dados dos arrays de lenguajes frontend y backend
y dado un parametro que sera un array con los nombres de dos lenguajes
nos diga si son compatibles o no.
 
Solo pueden ser compatibles lenguajes front con uno de back
 
Ejemplos:
sonCompatibles(["HTML", "PHP"])   // true
sonCompatibles(["PHP", "PYTHON"]) // false
 
*/


function isCompatible(arrLenguages){

  console.log(arrLenguages);
  
  const frontEnd = ['HTML','CSS','JS', 'REACT', 'VUE', 'TYPESCRIPT', 'ELM', 'ANGULAR', 'JQUERY', 'ANGULAR', 'SWIFT'];
  const backEnd = ['PHP', 'PYTHON', 'RUBY', 'JAVA', 'C#', 'GOLANG', 'RUST', 'KOTLIN'];

  let response = false;
  //Convertir a mayúsculas el array de softwares
  const lenguages = arrLenguages.map( lenguage => {
      return lenguage.toUpperCase();
  })

  console.log(lenguages[0]);
  console.log(lenguages[1]);

  //validar si el lenguaje esta dentro de alguna de las categorias
  
  if( frontEnd.includes(lenguages[0]) && backEnd.includes(lenguages[1]) || frontEnd.includes(lenguages[1]) && backEnd.includes(lenguages[0])){
       console.log("uno es front y el otro es back")
      response = true;
  }

  return response;

}

//DEBE HABER UNO DE FRONT Y OTRO DE BACK
console.log(isCompatible(["php", "html"]));