const Card = ({ card, onCardClick }) => {
    const handleClick = () => {
        onCardClick(card);
    }
    return (
        <li className="element" key={card._id}>
            <img alt={card.name} className="element__image" src={card.link} onClick={handleClick} />
            <div className="element__title">
                <h2 className="element__place-name">{card.name}</h2>
                <div className="element__like-container">
                    <button className="element__like" type="button" aria-label="Поставить лайк."></button>
                    <p className="element__like-num">{card.likes.length}</p>
                </div>
            </div>
            <button className="element__delete-button" type="button" aria-label="Удалить фото."></button>
        </li>
    );
}

export default Card;