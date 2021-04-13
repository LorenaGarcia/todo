import React from "react";
import { useState, useEffect } from "react";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";

const Home = () => {
  const [addTask, setAddTask] = useState("");
  const [showAll, setShowAll] = useState(true);
  const [message, setMessage] = useState(null);
  const [showActive, setShowActive] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [tasks, setTasks] = useState(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : []
  );

  useEffect(() => {
    if (tasks.length !== 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleAddTask = () => {
    setTasks([...tasks, { name: addTask, check: false }]);
    setAddTask("");
  };

  const handleCheck = (temp) => {
    let data = [...tasks];
    data[temp].check = !data[temp].check;
    setTasks(data);
  };

  const handleview = (view) => {
    if (view === "all") {
      setShowAll(true);
      setShowActive(false);
      setShowCompleted(false);
    } else if (view === "active") {
      setShowAll(false);
      setShowActive(true);
      setShowCompleted(false);
    } else if (view === "completed") {
      setShowAll(false);
      setShowActive(false);
      setShowCompleted(true);
    }
  };

  const handleDeleteTask = (index) => {
    const taskDelete = [...tasks];
    taskDelete.splice(index, 1);
    setTasks(taskDelete);
    setMessage("Item removed !!!");
    setTimeout(() => {
      setMessage(null);
    }, 1000);
  };

  const handleDeleteAll = () => {
    const resultStays = tasks.filter((value) => value.check !== true);
    setTasks(resultStays);
    setMessage("All items removed !!!");

    setTimeout(() => {
      setMessage(null);
    }, 1000);
  };

  return (
    <Layout>
      <Main
        setTasks={setTasks}
        tasks={tasks}
        addTask={addTask}
        handleAddTask={handleAddTask}
        setAddTask={setAddTask}
        handleCheck={handleCheck}
        showAll={showAll}
        showActive={showActive}
        showCompleted={showCompleted}
        handleview={handleview}
        handleDeleteTask={handleDeleteTask}
        handleDeleteAll={handleDeleteAll}
        message={message}
      />
    </Layout>
  );
};

export default Home;
