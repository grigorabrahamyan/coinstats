import Favorites from "../assets/img/thumbs-up-solid.jsx";

function FirstPage({menuTabs, setMenuTabs, currectData = [], lastTicketRef, handleAddFavorites, favoritesObj, handleChagePage}) {
  return (
    <>
      <div className="project__menu-wrapper">
        <span
          className={menuTabs === "all" ? "underline" : ""}
          onClick={() => setMenuTabs("all")}
        >
          ALL
        </span>
        <span
          className={menuTabs === "favorites" ? "underline" : ""}
          onClick={() => setMenuTabs("favorites")}
        >
          FAVORITES
        </span>
      </div>
      <div className="project__middleWrapper">
        <div className="project__rows">
          <div className="project__item"></div>
          <div className="project__item">
            <p>NAME</p>
          </div>
          <div className="project__item">
            <p>24H CHANGE</p>
          </div>
          <div className="project__item">
            <p>PRICE</p>
          </div>
          <div className="project__item">
            <p>PRICE IN BTC</p>
          </div>
          <div className="project__item">
            <p>MARKET CAP</p>
          </div>
          <div className="project__item">
            <p>VOLUME 24H</p>
          </div>
        </div>
        {currectData.map((item, index) => {
          return (
            <div
              ref={lastTicketRef}
              key={index}
              className="project__rows no_cancel"
              onClick={() => handleChagePage(item)}
            >
              <div className="project__item">
                <div
                  onClick={(e) =>
                    handleAddFavorites(e, item.id, item, index + 1)
                  }
                  className="project__item-favorites"
                >
                  <p>{menuTabs === "all" ? index + 1 : item.num}</p>
                  <Favorites className={favoritesObj[item.id] ? "red" : ""} />
                </div>
              </div>
              <div className="project__item">
                <div className="project__itemGroup">
                  <img src={item.icon} alt="img" />
                  <p>{item.name}</p>
                  <p className="project__itemGroupAfter itemGroupAfter">
                    {item.symbol}
                  </p>
                </div>
              </div>
              <div
                className={`project__item ${
                  item.priceChange1d < 0 ? "red" : "green"
                }`}
              >
                <p>{item.priceChange1d}</p>
              </div>
              <div className="project__item">
                <p>${item.totalSupply}</p>
              </div>
              <div className="project__item">
                <p>{item.rank}</p>
              </div>
              <div className="project__item">
                <p>{item.marketCap}</p>
              </div>
              <div className="project__item">
                <p>{item.volume}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default FirstPage;
