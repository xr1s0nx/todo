import React from "react";
import styles from "./Footer.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import {
  changeFilter,
  clearCompleted,
} from "../../redux/Slices/TaskManagerSlice";

const Footer = () => {
  const items = useSelector((state: RootState) => state.TaskManagerSlice.tasks);
  const [itemsLeft, setItemsLeft] = React.useState(0);
  const filterBtns = ["All", "Active", "Completed"];
  const activeFilter = useSelector(
    (state: RootState) => state.TaskManagerSlice.nowFilter
  );

  React.useEffect(() => {
    let count = 0;
    items.map((item) => {
      if (!item.completed) {
        count++;
      }
    });
    setItemsLeft(count);
  }, [items]);

  const dispatch = useDispatch();

  return (
    <div className={styles.footer}>
      <p className={styles.itemsLeft}>
        {itemsLeft} item{itemsLeft !== 1 ? "s" : ""} left
      </p>
      <div className={styles.filters}>
        {filterBtns.map((item) => {
          return (
            <button
              onClick={() => dispatch(changeFilter(item.toLowerCase()))}
              className={
                activeFilter === item.toLowerCase()
                  ? `${styles.filter} ${styles.active}`
                  : styles.filter
              }
            >
              {item}
            </button>
          );
        })}
      </div>
      <button
        onClick={() => dispatch(clearCompleted())}
        className={styles.clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
