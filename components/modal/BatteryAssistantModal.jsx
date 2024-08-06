"use client";
import React, { useEffect, useState } from "react";
import Portal from "@/components/Portal/Portal";

const BatteryAssistantModal = ({ isOpen, onClose }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    if (isOpen) {
      // Disable scrolling by setting overflow hidden on body
      document.body.style.overflow = "hidden";
    } else {
      // Enable scrolling when modal is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset the scroll style on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isClient) {
    return null;
  }

  const modalContainer = document.getElementById("modal-root"); // Ensure you have this div in your index.html

  return (
    <Portal container={modalContainer}>
      <div
        className={`${!isOpen ? "hidden" : "fixed"} inset-0 h-full w-full bg-[#4c4c4caa] z-[20000] transition-all`}
        onClick={() => onClose()}
      ></div>
      <div
        className={`bg-[#eee] absolute top-[10%] left-0 right-0 m-auto w-[80%] ${isOpen ? "h-[80%]" : "h-0"} transition-all duration-500 z-[200000] overflow-hidden rounded-10`}
      >
        sdf
      </div>
    </Portal>
  );
};

export default BatteryAssistantModal;
