import React, { useState, useEffect } from 'react';
// import '../App.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupImage from './PopupImage';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import Spinner from './Spinner';
import ConfirmDeletePopup from './ConfirmDeletePopup';

function App() {
  //#region стейты
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(null);

  //стейты для открытия/закрытия попапов
  const [isEditProfileFormOpen, setIsEditProfileFormOpen] = useState(false);
  const [isAddPlaceFormOpen, setIsAddPlaceFormOpen] = useState(false);
  const [isEditAvatarFormOpen, setIsEditAvatarFormOpen] = useState(false);
  const [isConfirmDeleteFormOpen, setIsConfirmDeleteFormOpen] = useState(false);
  //#endregion

  //#region эффекты
  //получение данных о пользователе с сервера и присвоение этих данных контексту

  useEffect(() => {
    setIsLoading(true);
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then((values) => {
        const [userInfo, initialCards] = values;
        setCurrentUser(userInfo);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  //#endregion

  //#region обработчики событий
  //добавление карточки
  const handleAddPlace = (newPlace) => {
    setIsLoading(true);
    api.addNewCard(newPlace.name, newPlace.link)
      .then((newPlace) => {
        setCards([newPlace, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  //лайк
  const handleCardLike = (card) => {
    //определение есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    //отправка запроса в API и получение обновленных данных карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        //формирование нового массива на основе имеющегося, 
        //поставляя в него новую карточку
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  }

  //удаление карточки
  const handleCardDelete = (card) => {
    setIsLoading(true);
    api.deleteCard(card._id)
      .then(() => {
        const newCards = cards.filter((c) => c._id !== card._id);
        setCards(newCards);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleDeleteButtonClick = (card) => {
    setIsConfirmDeleteFormOpen(true);
    setCardToDelete(card);
  }

  //обработчик открытия попапа редактирования аватара
  const handleEditAvatarClick = () => {
    setIsEditAvatarFormOpen(true);
  }

  //обработчик открытия попапа редактирования профиля
  const handleEditProfileClick = () => {
    setIsEditProfileFormOpen(true);
  }

  //обработчик открытия попапа добавления карточки
  const handleAddPlaceClick = () => {
    setIsAddPlaceFormOpen(true);
  }

  //обработчик открытия попапа с картинкой
  const handleCardClick = (card) => {
    setSelectedCard(card);
  }

  //закрытие всех попапов
  const closeAllPopups = () => {
    setIsEditAvatarFormOpen(false);
    setIsEditProfileFormOpen(false);
    setIsAddPlaceFormOpen(false);
    setIsConfirmDeleteFormOpen(false);
    setSelectedCard(null);
  }

  //обработчик обновления инфы пользователя
  const handleUpdateUser = (info) => {
    setIsLoading(true);
    api.setUserInfo(info.name, info.about)
      .then((info) => {
        setCurrentUser(info);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }

  //обработчик обновления аватара
  const handleUpdateAvatar = (newAvatar) => {
    setIsLoading(true);
    api.editAvatar(newAvatar.avatar)
      .then((newAvatar) => {
        setCurrentUser(newAvatar);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      })
  }
  //#endregion

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <AddPlacePopup isOpen={isAddPlaceFormOpen} onClose={closeAllPopups}
          onAddPlace={handleAddPlace} isLoading={isLoading} />

        {/* <PopupWithForm name="delete-confirm" title="Вы уверены?" buttonTitle="Да"
          isOpen={false} onClose={closeAllPopups} /> */}

        <ConfirmDeletePopup isOpen={isConfirmDeleteFormOpen} onClose={closeAllPopups}
          onCardDelete={handleCardDelete} isLoading={isLoading} card={cardToDelete} />

        <EditAvatarPopup isOpen={isEditAvatarFormOpen} onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar} isLoading={isLoading} />

        <EditProfilePopup isOpen={isEditProfileFormOpen} onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser} isLoading={isLoading} />

        <PopupImage card={selectedCard} onClose={closeAllPopups} />

        <Header />
        <Main cards={cards} onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}
          onCardLike={handleCardLike} onCardDelete={handleDeleteButtonClick} isLoading={isLoading} />
        <Footer />

      </div>
    </CurrentUserContext.Provider>

  );
}

export default App;
