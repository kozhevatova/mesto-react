import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

const EditAvatarPopup = ({isOpen, onClose, onUpdateAvatar, isLoading}) => {
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value
    })
  }
  return (
    <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonTitle={isLoading ? 
      "Сохранение..." : "Сохранить"} isOpen={isOpen} onClose={onClose} onSubmit={handleSubmit}>
      <input type="url" className="popup__input popup__description" name="avatarUrl"
        placeholder="Ссылка на аватар" required id="url-input" ref={inputRef}/>
      <span className="popup__input-error" id="url-input-error"></span>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;