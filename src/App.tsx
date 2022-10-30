import React from "react";
import "./App.module.scss";
import styles from "./App.module.scss";
import InputTask from "./Components/InputTask/InputTask";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import TaskItem from "./Components/TaskItem/TaskItem";
import { motion } from "framer-motion";
import Footer from "./Components/Footer/Footer";

function App() {
  const tasks = useSelector((state: RootState) => state.TaskManagerSlice.tasks);
  const filter = useSelector(
    (state: RootState) => state.TaskManagerSlice.nowFilter
  );

  return (
    <div className={styles.App}>
      <div className={styles.container}>
        <motion.div
          initial={{ x: "-50%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className={styles.ToDo}
        >
          <h1 className={styles.logo}>todos</h1>
          <div className={styles.wrap}>
            <InputTask />
            <div className={styles.tasksList}>
              {tasks.map((item) => {
                if (filter === "active") {
                  return !item.completed ? (
                    <TaskItem
                      key={item.id}
                      text={item.text}
                      completed={item.completed}
                      id={item.id}
                    />
                  ) : null;
                } else if (filter === "completed") {
                  return item.completed ? (
                    <TaskItem
                      key={item.id}
                      text={item.text}
                      completed={item.completed}
                      id={item.id}
                    />
                  ) : null;
                } else {
                  return (
                    <TaskItem
                      key={item.id}
                      text={item.text}
                      completed={item.completed}
                      id={item.id}
                    />
                  );
                }
              })}
            </div>
            <Footer />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default App;
