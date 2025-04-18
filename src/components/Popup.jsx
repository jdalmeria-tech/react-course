function Popup ({ spanTitle }) {
  function confirmHandler() {
    console.log('confirm button clicked');
  }

  function cancelHandler() {
    console.log('cancel button clicked');
  }

  return(
    <>
      <div className="popup">
        <span>{ spanTitle }</span>
        <div className="popup__btns">
          <button className="popup__btn" onClick={() => confirmHandler()}>Confirm</button>
          <button className="popup__btn popup__btn--cancel" onClick={() => cancelHandler()}>Cancel</button>
        </div>
      </div>
      <div className="backdrop"></div>
    </>
  )
}

export default Popup