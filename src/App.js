import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="page__container">
        <header className="header">
            <div className="header__logo"></div>
        </header>

        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <button className="profile__edit-avatar-button"></button>
                </div>
                <div className="profile__info">
                    <div className="profile__title">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" type="button" aria-label="Редактировать профиль."></button>
                    </div>
                    <p className="profile__subtitle">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить фотографию."></button>
            </section>

            <div>
                <ul className="elements">
                </ul>
            </div>
        </main>

        <footer className="footer">
            <p className="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>

        <div className="popup popup_type_edit-form">
            <form className="popup__form" method="POST" name="editForm">
                {/* <button className="popup__close-button" type="reset" 
                    aria-label="Закрыть форму редактирования."></button>
                <h3 className="popup__title">Редактировать профиль</h3>
                <input type="text" className="popup__input popup__name" name="popupName" 
                    placeholder="Имя" required id="name-input" minlength="2" maxlength="40">
                <span className="popup__input-error" id="name-input-error"></span>
                <input type="text" className="popup__input popup__description" name="popupDescription" 
                    placeholder="О себе" required id="description-input" minlength="2" maxlength="200">
                <span className="popup__input-error" id="description-input-error"></span>
                <button disabled type="submit" className="popup__save-button popup__button popup__button_disabled">Сохранить</button> */}
            </form>
        </div>

        <div className="popup popup_type_add-form">
            {/* <form className="popup__form" method="POST" name="addForm">
                <button className="popup__close-button" type="reset"
                    aria-label="Закрыть форму добавления фотографий."></button>
                <h3 className="popup__title">Новое место</h3>
                <input type="text" className="popup__input popup__name" name="popupName" 
                    placeholder="Название" required id="title-input" minlength="2" maxlength="30">
                <span className="popup__input-error" id="title-input-error"></span>
                <input type="url" className="popup__input popup__description" name="popupDescription" 
                    placeholder="Ссылка на картинку" required id="url-input">
                <span className="popup__input-error" id="url-input-error"></span>
                <button type="submit" className="popup__save-button popup__button popup__button_disabled">Создать</button>
            </form> */}
        </div>

        <div className="popup popup_type_zoomed-image">
            {/* <div className="popup__form popup__form_type_zoomed-image">
                <img src="#" alt="Фотография." className="popup__image">
                <p className="popup__name popup__name_place_zoomed-image"></p>
                <button className="popup__close-button" type="reset"></button>
            </div> */}
        </div>

        <div className="popup popup_type_delete-confirm">
            <form className="popup__form popup__form_type_delete-confirm" name="deleteConfirmForm">
                <button className="popup__close-button" type="reset" 
                    aria-label="Закрыть форму подтверждения удаления."></button>
                <h3 className="popup__title">Вы уверены?</h3>
                <button type="submit" className="popup__save-button popup__button">Да</button>
            </form>
        </div>

        <div className="popup popup_type_edit-avatar-form">
            {/* <form className="popup__form popup__form_type_edit-avatar" name="editAvatarForm">
                <button className="popup__close-button" type="reset"
                    aria-label="Закрыть форму редактирования аватара."></button>
                <h3 className="popup__title">Обновить аватар</h3>
                <input type="url" className="popup__input popup__description" name="avatarUrl" 
                    placeholder="Ссылка на аватар" required id="url-input">
                <span className="popup__input-error" id="url-input-error"></span>
                <button type="submit" className="popup__save-button popup__button popup__button_disabled">Сохранить</button>
            </form> */}
        </div>
    </div>
  );
}

export default App;
