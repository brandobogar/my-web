import { useState } from "react";
import Layout from "../../../../Components/features/layout/layout";

import {
  faPenToSquare,
  faXmarkCircle,
  faFloppyDisk,
  faTrashCan,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
      <Layout pagetitle={"Todo App"} desc={"brando website features"}>
        <div className="flex flex-col items-center justify-start h-full w-screen mt-40 ">
          <h1 className="text-4xl font-semibold text-myblack">Todo App</h1>
          <form
            onSubmit={handleFormSubmit}
            className="flex flex-row gap-4 m-10 w-1/2 phone:flex-col  phone:w-full phone:px-10"
          >
            <input
              type="text"
              placeholder="Enter a new todo"
              onChange={handleInputChange}
              value={newTodo}
              className="px-2 py-1 placeholder-slate-300 text-slate-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
            />
            <button
              type="submit"
              className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none   ease-linear transition-all duration-150"
            >
              SUBMIT
            </button>
          </form>
          <div className="flex flex-col w-1/2 h-full justify-start phone:w-full phone:px-10">
            <ul>
              {todos.map((todo, index) => (
                <li
                  key={index}
                  className="flex flex-row justify-around w-full text-xl mb-6 text-myblack"
                >
                  <div className="w-3/4">{todo}</div>
                  <div className="w-1/4 flex flex-row items-end justify-end gap-5 ">
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
            <div className="justify-center items-center flex overflow-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline ">
              <div className="relative w-3/5 my-6 mx-auto phone:w-full phone:mx-4  ">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none h-48">
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-3xl font-semibold text-myblack">
                      Edit
                    </h3>
                  </div>
                  <div className=" text-xl flex justify-center items-center w-full h-full">
                    <form
                      onSubmit={handleTodoUpdate}
                      className="flex flex-col w-full p-4 phone:flex-col"
                    >
                      <input
                        type="text"
                        value={newTodo}
                        onChange={handleInputChange}
                        placeholder="Edit todo"
                        className="px-2 py-1 placeholder-slate-300 text-slate-600 bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-3/4 phone:h-10"
                      />
                      <div className="flex flex-row w-1/4 items-center mt-5 gap-10 phone:justify-start phone:mt-2 phone:gap-5 ">
                        <button
                          className="bg-green-500 text-white active:bg-pink-600 font-bold uppercase  px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-2 flex-row text-xs"
                          type="submit"
                        >
                          <i>
                            <FontAwesomeIcon icon={faFloppyDisk} />
                          </i>{" "}
                          Save
                        </button>
                        <button
                          className="bg-red-500 text-white active:bg-pink-600 font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 flex gap-2 flex-row"
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
