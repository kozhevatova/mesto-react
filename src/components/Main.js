import { useEffect, useState } from 'react';
import api from '../utils/api';
import Card from './Card';

const Main = (props) => {
  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState(null);

  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([
      api.getUserInfo(),
      api.getInitialCards()
    ])
      .then((values) => {
        const [userData, initialCards] = values;
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(initialCards);
      }).catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar" style={{ background: `center/cover url(${userAvatar}) no-repeat` }}>
          <button className="profile__edit-avatar-button"
            onClick={props.onEditAvatar}></button>
        </div>
        <div className="profile__info">
          <div className="profile__title">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button"
              aria-label="Редактировать профиль." onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button"
          aria-label="Добавить фотографию." onClick={props.onAddPlace}></button>
      </section>

      <div>
        <ul className="elements"> {
          cards.map((card) => {
            return (
              <Card card={card} onCardClick={props.onCardClick} />
            );
          })
        }
        </ul>
      </div>
    </main>
  );
}

export default Main;