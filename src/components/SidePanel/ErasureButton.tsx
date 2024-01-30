import { useState } from "react";
import { useScoreContext } from "../../hooks/checkboxContext";
import { Erasure } from "../Symbols/Erasure";
import { Modal } from "./Modal";

export const ErasureButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const {
    mainGridDispatch,
    jokerBoxesDispatch,
    colorBoxesMarkedDispatch,
    letterHeaderBoxesDispatch,
    letterScoreingBoxesDispatch,
  } = useScoreContext();

  const resset = () => {
    mainGridDispatch({ type: "resset" });
    jokerBoxesDispatch({ type: "resset" });
    colorBoxesMarkedDispatch({ type: "resset" });
    letterHeaderBoxesDispatch({ type: "resset" });
    letterScoreingBoxesDispatch({ type: "resset" });
  };

  return (
    <>
      <button className="resset-button" onClick={() => setIsModalVisible(true)}>
        <Erasure />
      </button>
      {isModalVisible && (
        <div className="overlay">
          <div className="modal" style={{ width: "225px", height: "auto" }}>
            <div
              className="modal-title"
              style={{
                marginBottom: "20px",
              }}
            >
              <span className="modal-title-text">Clear sheet?</span>
            </div>
            <div className="modal-actions">
              <button
                className="modal-button"
                onClick={() => setIsModalVisible(false)}
              >
                No
              </button>
              <button
                className="modal-button"
                onClick={() => {
                  resset();
                  setIsModalVisible(false);
                }}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
