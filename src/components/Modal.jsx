import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";

function Modal({ open, children, onClose }) {
  const dialog = useRef();
  //dialog.current.showModal()
  useEffect(() => {
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]); //theres propblem because we have dependecies here. depedeincies are simply prop or state values that are used inside of this eseEffect hook fn, fnn,contextValue that depeds on or use State or props are also dependencies
  //so any value that causes the component fn to execute again insde this effect hook is a dependency
  //setting dependcy to open breaking code?? because i was passing it via prop to the Dialog Component. Needed to remove it
  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById("modal")
  );
}

export default Modal;
