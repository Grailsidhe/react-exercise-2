import './App.css';
import Card from './components/Card.js';


function App() {
  return (
    <div className="wrapper">
      <h1>Members</h1>
      <Card image='https://i.postimg.cc/WzjN6Wf3/img1.png'
        fName='John'
        lName='Doe'
        gender='male'
        height='1.78'
        birth='Tue July 14 1992'/>

      <Card image='https://i.postimg.cc/SRryZ6wG/img2.png'
        fName='Obrien'
        lName='Delores'
        gender='female'
        height='1.72'
        birth='Tue May 11 1993'/>
    </div>
  );
}

export default App;