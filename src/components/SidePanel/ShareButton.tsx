import { useState } from "react";
import { Share } from "../Symbols/Share";
import qrcodeImg from "../../images/qrcode.png";

export const ShareButton = () => {
  const [isShareModalVisible, setIsShareModalVisible] = useState(false);

  const share = () => {
    navigator.clipboard.writeText("https://kuritany.github.io/noch-mal");
  };

  return (
    <>
      <button
        className="resset-button"
        onClick={() => setIsShareModalVisible(true)}
      >
        <Share />
      </button>
      {isShareModalVisible && (
        <div className="overlay">
          <div className="modal">
            <div className="modal-title">
              <span className="link" onClick={() => share()}>Copy Link</span>
              <svg
                fill="white"
                stroke="white"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
                strokeWidth="1"
                className="modal-close"
                onClick={() => setIsShareModalVisible(false)}
              >
                <path d="M 16.5,21 12,15.634613 7.5,21 3,16.5 8.3653858,12 3,7.5 7.5,3 12,8.3653852 16.5,3 21,7.5 15.634614,12 21,16.5 Z" />
              </svg>
            </div>
            <div className="img-container">
              <img src={qrcodeImg} alt="QR Code?" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
