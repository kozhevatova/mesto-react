import React from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupImage from './PopupImage';

function App() {
  return (
    <div className="page">
      <div className="page__container">
        <PopupWithForm name="edit-form" title="Редактировать профиль" buttonTitle="Сохранить" isOpen={true}>
          <input type="text" className="popup__input popup__name" name="popupName"
            placeholder="Имя" required id="name-input" minLength="2" maxLength="40" />
          <span className="popup__input-error" id="name-input-error"></span>
          <input type="text" className="popup__input popup__description" name="popupDescription"
            placeholder="О себе" required id="description-input" minLength="2" maxLength="200" />
          <span className="popup__input-error" id="description-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="add-form" title="Новое место" buttonTitle="Создать" isOpen={false}>
          <input type="text" className="popup__input popup__name" name="popupName"
            placeholder="Название" required id="title-input" minLength="2" maxLength="30" />
          <span className="popup__input-error" id="title-input-error"></span>
          <input type="url" className="popup__input popup__description" name="popupDescription"
            placeholder="Ссылка на картинку" required id="url-input" />
          <span className="popup__input-error" id="url-input-error"></span>
        </PopupWithForm>

        <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonTitle="Да" isOpen={false} />
        
        <PopupWithForm name="edit-avatar" title="Обновить аватар" buttonTitle="Сохранить" isOpen={true}>
          <input type="url" className="popup__input popup__description" name="avatarUrl"
            placeholder="Ссылка на аватар" required id="url-input" />
          <span className="popup__input-error" id="url-input-error"></span>
        </PopupWithForm>

        <PopupImage />

        <Header />
        <Main />
        <Footer />

      </div>

    </div>
  );
}

export default App;
