# Answers

1.  What is React JS and what problems does it try and solve?

        React JS is a UI library that helps make developers' lives easier by making it painless to create interactive UIs.
        -
        React solves the problem of providing a smooth experience for our users, as well as those developing applications.

1.  What does it mean to _think_ in react?

        To _think_ in react means to think in component structures and unilateral data flow. It also means to build the application one step at a time, identifying where the state should live, figuring what components you want to build, etc.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

        A Class/Stateful component is as described: a component that holds state. A Functional/Presentational component is also as described: a component that displays whatever is given.

        A class component needs to be extended from React.Component. A functional component can be made regularly.

        A class component holds the state and methods that are going to be passed down. A functional component takes in state and methods as the primary data it reads.

        A class component holds state and methods. A functional component takes in props.
        -
        A functional component is used in composing multiple DOM elements. A class component is able to use the React team's Component Lifecycle methods, which give us more control into how our components work.

1.  Describe state.

        State is like data. You store data within the state, and then you access the state whenever you need to create, read, update, or delete (CRUD) the data.
        -
        State is the data that our components will have access to.

1.  Describe props.

        Props is the property of the state being passed down. You read the props to find out what data has been passed down in order to use it.
        -
        Props is the state that is passed around.