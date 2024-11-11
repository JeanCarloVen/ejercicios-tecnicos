const simplificarRuta = require("./ejercicio02");

test("Comprobar si la función simplificarRuta esta definida", ()=>{
  expect(simplificarRuta).toBeDefined();
});

test("Es una ruta", ()=>{
  expect(simplificarRuta("/x/./y/../../z/")).toBe("/x/y//z");
});



