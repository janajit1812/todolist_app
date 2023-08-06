import { useState, useEffect } from 'react';
import Footer from './my_components/Footer';
import Header from './my_components/Header';
import Todo from './my_components/Todo';
import Addtodo from './my_components/Addtodo';
import Home from './my_components/Home';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  const title = "MyTodoList"

  let initTodo;

  if (localStorage.getItem("todo") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todo"));
  }

  const onDelete = (todos) => {
    setTodo(todo.filter((t) => {
      return t !== todos
    }))
    // localStorage.setItem("todo",JSON.stringify(todo));
  }

  // const [todo, setTodo] = useState([
  //   {
  //     sno : 1,
  //     title : "Todo-1",
  //     desc : "Have to go to market to buy some apple."
  //   },
  //   {
  //     sno : 2,
  //     title : "Todo-2",
  //     desc : "Have to go to market to buy some mango."
  //   },
  //   {
  //     sno : 3,
  //     title : "Todo-3",
  //     desc : "Have to go to market to buy some orange."
  //   }
  // ])

  const newTodo = (title, desc) => {
    let sno;
    if (todo.length === 0)
      sno = 0
    else
      sno = todo[todo.length - 1].sno + 1;
    const newSetOfTodos = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log(newSetOfTodos);
    setTodo([...todo, newSetOfTodos]);
    // localStorage.setItem("todo",JSON.stringify(todo));

  }
  const [todo, setTodo] = useState(initTodo);

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo));
  }, [todo])



  return (
    <>
      {/* <Header title={title}/>
    <Home/>
    <Addtodo addtodo={newTodo}/>
    <Todo todos={todo} onDelete={onDelete}/>
    <Footer/> */}

      <BrowserRouter>
      <Header title={title}/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addtodo" element={<Addtodo addtodo={newTodo} />} />
        <Route path="/Todo" element={<Todo todos={todo} onDelete={onDelete} />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>
  );
}

export default App;


