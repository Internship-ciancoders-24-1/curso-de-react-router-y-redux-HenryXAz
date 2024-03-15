## React redux

Es una librería que permite manejar el estado de mejor manera. Se basa en la arquitectura flux propuesta por Facebook.

Redux se caracteriza por tener los siguientes tres principios:

1. Una única fuente de verdad:
La aplicación debe tener un único store y es la única fuente de información.
2. El estado es de solo lectura:
La única forma de modificar el estado es emitiendo una acción.

3. Los cambios se realizan con funciones puras:
Los cambios se realizan con funciones puras que toman el estado anterior, una acción y devuelve un nuevo estado con las modificaciones pertinentes.