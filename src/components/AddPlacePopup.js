import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { popupName, popupDescription } from '../utils/constants';

const AddPlacePopup = ({isOpen, onClose, onAddPlace}) => {
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const handleInputChange = (e) => {
    switch(e.target.name) {
      case popupName: setName(e.target.value);
        break;
      case popupDescription: setLink(e.target.value);
        break;
    }
  }

  const handleAddPlaceSubmit = (e) => {
    e.preventDefault();
    onAddPlace({
      name,
      link
    });
  }
  return (
    <PopupWithForm name="add-form" title="Новое место" buttonTitle="Создать"
      isOpen={isOpen} onClose={onClose} onSubmit={handleAddPlaceSubmit}>
      <input type="text" className="popup__input popup__name" name="popupName"
        placeholder="Название" required id="title-input" minLength="2" maxLength="30"
        value={name} onChange={handleInputChange} />
      <span className="popup__input-error" id="title-input-error"></span>
      <input type="url" className="popup__input popup__description" name="popupDescription"
        placeholder="Ссылка на картинку" required id="url-input" value={link} 
        onChange={handleInputChange} />
      <span className="popup__input-error" id="url-input-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;