import PopupWithForm from "./PopupWithForm";

const PopupImage = () => {
    return (
        <div className="popup popup_type_zoomed-image">
          <div className="popup__form popup__form_type_zoomed-image">
            <img src="#" alt="Фотография." className="popup__image" />
            <p className="popup__name popup__name_place_zoomed-image"></p>
            <button className="popup__close-button" type="reset"></button>
          </div>
        </div>
    );
}

export default PopupImage;