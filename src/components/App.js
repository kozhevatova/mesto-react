import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfileFormOpen, setIsEditProfileFormOpen] = useState(false);
  const [isAddPlaceFormOpen, setIsAddPlaceFormOpen] = useState(false);
  const [isEditAvatarFormOpen, setIsEditAvatarFormOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  const handleEditAvatarClick = () => {
    setIsEditAvatarFormOpen(true);
  }

  const handleEditProfileClick = () => {
    setIsEditProfileFormOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlaceFormOpen(true);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  const closeAllPopups = () => {
    setIsEditAvatarFormOpen(false);
    setIsEditProfileFormOpen(false);
    setIsAddPlaceFormOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page__container">
      <PopupWithForm name="edit-form" title="Редактировать профиль" buttonTitle="Сохранить"
        isOpen={isEditProfileFormOpen} onClose={closeAllPopups}>
        <input type="text" className="popup__input popup__name" name="popupName"
          placeholder="Имя" required id="name-input" minLength="2" maxLength="40" />
        <span className="popup__input-error" id="name-input-error"></span>
        <input type="text" className="popup__input popup__description" name="popupDescription"
          placeholder="О себе" required id="description-input" minLength="2" maxLength="200" />
        <span className="popup__input-error" id="description-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="add-form" title="Новое место" buttonTitle="Создать"
        isOpen={isAddPlaceFormOpen} onClose={closeAllPopups}>
        <input type="text" className="popup__input popup__name" name="popupName"
          placeholder="Название" required id="title-input" minLength="2" maxLength="30" />
        <span className="popup__input-error" id="title-input-error"></span>
        <input type="url" className="popup__input popup__description" name="popupDescription"
          placeholder="Ссылка на картинку" required id="url-input" />
        <span className="popup__input-error" id="url-input-error"></span>
      </PopupWithForm>

      <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonTitle="Да"
        isOpen={false} onClose={closeAllPopups} />

      <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonTitle="Сохранить"
        isOpen={isEditAvatarFormOpen} onClose={closeAllPopups}>
        <input type="url" className="popup__input popup__description" name="avatarUrl"
          placeholder="Ссылка на аватар" required id="url-input" />
        <span className="popup__input-error" id="url-input-error"></span>
      </PopupWithForm>

      <ImagePopup card={selectedCard} onClose={closeAllPopups} />

      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
      <Footer />

    </div>
  );
}

export default App;
