import React from "react";
import styles from "./InputTask.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {addTask, changeInputValue, TaskManagerSlice} from "../../redux/Slices/TaskManagerSlice";
import { AnimatePresence, motion } from "framer-motion";

const InputTask: React.FC = () => {
  const dispatch = useDispatch();
  const value = useSelector((state: RootState) => state.TaskManagerSlice.inputValue);

  const addTaskClick = () => {
    dispatch(addTask());
    dispatch(changeInputValue(""));
  };

  const keyDownInput = (e: any) => {
    if (e.key === "Enter") {
      addTaskClick();
    }
  };

  return (
    <div className={styles.inputWrap}>
      <input
        type="text"
        className={styles.input}
        placeholder={"Whats need to be done?"}
        onChange={(e) => dispatch(changeInputValue(e.target.value))}
        value={value}
        onKeyDown={(e) => keyDownInput(e)}
      ></input>
      <AnimatePresence>
        {value.length > 0 ? (
          <motion.button
            key={"enterBtn"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.5, }}
            className={styles.addButton}
            onClick={addTaskClick}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              width={20}
              height={20}
              viewBox="0 0 251.882 251.882"
            >
              <g>
                <path
                  fill={"#00bb18"}
                  d="M215.037,36.846c-49.129-49.128-129.063-49.128-178.191,0c-49.127,49.127-49.127,129.063,0,178.19   c24.564,24.564,56.83,36.846,89.096,36.846s64.531-12.282,89.096-36.846C264.164,165.909,264.164,85.973,215.037,36.846z    M49.574,202.309c-42.109-42.109-42.109-110.626,0-152.735c21.055-21.054,48.711-31.582,76.367-31.582s55.313,10.527,76.367,31.582   c42.109,42.109,42.109,110.626,0,152.735C160.199,244.417,91.683,244.417,49.574,202.309z"
                />
                <path
                  fill={"#00BB18FF"}
                  d="M194.823,116.941h-59.882V57.059c0-4.971-4.029-9-9-9s-9,4.029-9,9v59.882H57.059c-4.971,0-9,4.029-9,9s4.029,9,9,9h59.882   v59.882c0,4.971,4.029,9,9,9s9-4.029,9-9v-59.882h59.882c4.971,0,9-4.029,9-9S199.794,116.941,194.823,116.941z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </motion.button>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default InputTask;
