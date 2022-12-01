# Introduction
The main objective of this project is to be a running example of how to use React and Redux.


# Development details


To understand this project is necessary to note that we can achieve similar functionalities (in practice identical) by either using only React or by using Redux as a state container in addition of React.

The application consist of two main _components_, one is a _bank_ that holds a set ammount of money, the other is an _ATM_ that can receive and return money. The shared component is _money_ itself.

## React Only approach
The first approach uses functionalities provided by React out of the box. the functionalities used are:
- Class components
- `Uncontrolled` and `Controlled` components
- Synthetic Events
- Communication between components via props.

Although the application is not very complex, there is enough room to see how we can interact between components using props and allowing a _*child*_ component to update a _*parent*_ internal state via events. This also sheds light around where things might get harder to maintain, in terms of complexity, if the component hierarchy starts growing (i.e., functionalities start getting more details or by adding more components involved) keeping track of the source of some action handlers will become troublesome and having a state on a top level component might become impractical.


## React-Redux approach
The second approach uses [react-redux](https://react-redux.js.org/) in addition to React, this enables a different approach in some specific places, introducing the concept of a Store that holds the state of the application, any component that needs access to the state should be able to do it by using the API provided by Redux.

Redux manages the state of the application by defining a centralized **Store**, there resides the **State** of the application in one or more _slices_ that separate the state based on semantics. In order to modify the state of the application, an **Action** must be performed ()


# References

- readme -> porque de las cosas
	- referencias para leer a futuro

- explicar por que redux es util
	- que problema solucionas
	- beneficios
	- desventajas
	
