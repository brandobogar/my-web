import { useState } from "react";
import Layout from "../../../../Components/features/layout/layout";
import MyHead from "../../../../Components/features/head/MyHead";
import {
  faPenToSquare,
  faXmarkCircle,
  faFloppyDisk,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UI from "../../../../Components/ui/UI";

export default function Index() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editTodo, setEditTodo] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  const handleTodoDelete = (todo) => {
    setTodos(todos.filter((t) => t !== todo));
  };

  const handleTodoEdit = (todo) => {
    setEditTodo(todo);
    setShowModal(true);
  };
  const handleModalClose = () => {
    setShowModal(false);
    setEditTodo("");
    setNewTodo("");
  };

  const handleTodoUpdate = (e) => {
    e.preventDefault();
    const updatedTodos = todos.map((todo) =>
      todo === editTodo ? newTodo : todo
    );
    setTodos(updatedTodos);
    handleModalClose();
  };

  return (
    <>
      <Layout>
        <MyHead
          pageTitle={"Todo App"}
          desc={"brando website features"}
          keyword={"todoapp, nextjs, portfolio website"}
          author={"Brando Margendy Bogar"}
        />
        <div className="flex flex-col items-center justify-start w-screen h-full mt-40 ">
          <h1 className="text-4xl font-semibold text-myblack">Todo App</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-row w-1/2 gap-4 m-10 phone:flex-col phone:w-full phone:px-10"
          >
            <input
              type="text"
              placeholder="Enter a new todo"
              onChange={handleInputChange}
              value={newTodo}
              className="w-full px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
            />
            <UI.Button type={"submit"} title={"SUBMIT"} />
          </form>
          <div className="flex flex-col justify-start w-1/2 h-full phone:w-full phone:px-10">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex flex-row justify-around w-full mb-6 text-xl text-myblack"
                >
                  <div className="w-3/4">{todo}</div>
                  <div className="flex flex-row items-end justify-end w-1/4 gap-5 ">
                    <button onClick={() => handleTodoEdit(todo)}>
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button onClick={() => handleTodoDelete(todo)}>
                      <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {showModal ? (
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden overflow-y-auto outline-none focus:outline ">
              <div className="relative w-3/5 mx-auto my-6 phone:w-full phone:mx-4 ">
                <div className="relative flex flex-col w-full h-48 bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-b border-solid rounded-t border-slate-200">
                    <h3 className="text-3xl font-semibold text-myblack">
                      Edit
                    </h3>
                  </div>
                  <div className="flex items-center justify-center w-full h-full text-xl ">
                    <form
                      onSubmit={handleTodoUpdate}
                      className="flex flex-col w-full p-4 phone:flex-col"
                    >
                      <input
                        type="text"
                        value={newTodo}
                        onChange={handleInputChange}
                        placeholder="Edit todo"
                        className="w-3/4 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring phone:h-10"
                      />
                      <div className="flex flex-row items-center w-1/4 gap-10 mt-5 phone:justify-start phone:mt-2 phone:gap-5 ">
                        <button
                          className="flex flex-row gap-2 px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-green-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
                          type="submit"
                        >
                          <i>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                          </i>{" "}
                          Save
                        </button>
                        <button
                          className="flex flex-row gap-2 px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear bg-red-500 rounded shadow outline-none active:bg-pink-600 hover:shadow-md focus:outline-none"
                          onClick={handleModalClose}
                        >
                          <i>
                            <FontAwesomeIcon icon={faXmarkCircle} />
                          </i>{" "}
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </Layout>
    </>
  );
}
