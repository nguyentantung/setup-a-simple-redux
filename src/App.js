import logo from "./logo.svg";
import "./App.css";
import "./redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { addStudent } from "./redux/actions";
import { v4 as uuidv4 } from "uuid";
import { learnClassSelector } from "./redux/selectors";
function App() {
  const dispatch = useDispatch();
  const handleAddStudent = () => {
    const student = {
      id: uuidv4(),
      name: "nguyen van tao",
      year: "2000",
    };
    dispatch(addStudent(student));
  };
  const learnclass = useSelector(learnClassSelector);
  console.log(learnclass);
  return (
    <div className="App">
      <p>Add student: nguyen van teo, year:2000</p>
      <button onClick={handleAddStudent}>Add student</button>
      <ul>
        {learnclass.map((student) => {
          return <li key={student.id}>{student.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
