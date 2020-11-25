const Main = () => {
    const handleEditAvatarClick = () => {
        console.log(document);
        document.querySelector('.popup_type_edit-avatar').
            classList.add('popup_opened');
    }

    const handleEditProfileClick = () => {
        document.querySelector('.popup_type_edit-form').
            classList.add('popup_opened');
    }

    const handleAddPlaceClick = () => {
        document.querySelector('.popup_type_add-form').
            classList.add('popup_opened');
    }

    return(
        <main className="content">
          <section className="profile">
            <div className="profile__avatar">
              <button className="profile__edit-avatar-button"
                onClick={handleEditAvatarClick}></button>
            </div>
            <div className="profile__info">
              <div className="profile__title">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-button" type="button" 
                    aria-label="Редактировать профиль." onClick={handleEditProfileClick}></button>
              </div>
              <p className="profile__subtitle">Исследователь океана</p>
            </div>
            <button className="profile__add-button" type="button" 
                aria-label="Добавить фотографию." onClick={handleAddPlaceClick}></button>
          </section>

          <div>
            <ul className="elements">
            </ul>
          </div>
        </main>
    );
}

export default Main;