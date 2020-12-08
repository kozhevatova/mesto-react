import { useContext, useEffect, useState } from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import api from '../utils/api';
import Card from './Card';

const Main = ({cards, onEditProfile, onAddPlace, onEditAvatar, 
    onCardClick, onCardLike, onCardDelete}) => {
  const currentUser = useContext(CurrentUserContext);
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ background: `center/cover url(${currentUser.avatar}) no-repeat` }}>
          <button className="profile__edit-avatar-button"
            onClick={onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button className="profile__edit-button" type="button"
              aria-label="Редактировать профиль." onClick={onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" type="button"
          aria-label="Добавить фотографию." onClick={onAddPlace}></button>
      </section>

      <div>
        <ul className="elements"> {
          cards.map((card) => {
            return (
              <li className="element" key={card._id}>
                <Card card={card} onCardClick={onCardClick} onCardLike={onCardLike} 
                  onCardDelete={onCardDelete}/>
              </li>
            );
          })
        }
        </ul>
      </div>
    </main>
  );
}

export default Main;