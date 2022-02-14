import "./App.css";

function App(props) {
  
  return (
     
        <div className="card">
          <h2 className="head">{props.name}</h2>
          <div className="img">👨</div>
          <div className="body">
            <p>ID   : {props.id}</p>
            <p>City : {props.city}</p>
            <p>Age  : {props.age}</p>
          </div>
          <button className="btn">Read More</button>
          <footer>Proud to be Indian</footer>
        </div>
    
  )
  
};

export default App;