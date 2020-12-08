const PopupWithForm = (props) => {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen && 'popup_opened'}`}>
      <form className={`popup__form popup__form_type_${props.name}`} method="POST" name={props.name} onSubmit={props.onSubmit}>
        <button className="popup__close-button" type="reset"
          aria-label="Закрыть форму." onClick={props.onClose}></button>
        <h3 className="popup__title">{props.title}</h3>
        {props.children}
        <button type="submit" className="popup__save-button popup__button "
          >{props.buttonTitle}</button>
      </form>
    </div>
  );
}

export default PopupWithForm;