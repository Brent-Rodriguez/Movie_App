import './App.css';

const Person = (props) => {
  return(
    <>
      <h1>First Name: {props.f_Name}</h1>
      <h1>Last Name: {props.l_Name}</h1>
      <h2>Age: {props.age} </h2>
    </>
  )
}

const App = () => {

  const name = "John"
 
  return (
    <div className="App">
     <Person 
       f_Name={'James'}
       l_Name={'Towne'}
       age={35} />
    </div>
  );
}

export default App;
