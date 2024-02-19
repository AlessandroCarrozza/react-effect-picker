import ProgressBar from "./ProgressBar";
import { useEffect } from "react";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }) {
  // NEVER DO IT
  // useEffect(() => {
  //   const fetchData = async () => {};
  //   fetchData();
  // }, [fetchData]);

  useEffect(() => {
    console.log("time started");
    const timer = setTimeout(() => {
      onConfirm();
    }, TIMER);
    return () => {
      console.log("clear");
      clearTimeout(timer);
    };
  }, []);

  return (
    <div id="delete-confirmation">
      <h2>Are you sure?</h2>
      <p>Do you really want to remove this place?</p>
      <div id="confirmation-actions">
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
      <ProgressBar timer={TIMER} />
    </div>
  );
}
