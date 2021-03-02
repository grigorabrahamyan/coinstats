import "./App.css";
import { useEffect, useState, useCallback, useRef, useMemo } from "react";
import FirstPage from "./components/FirstPage";
import OnePage from "./components/OnePage";
import { sendRequest } from "./api/reuest";

const count = 20;

function App() {
  const [data, setData] = useState([]);
  const [limit, setLimit] = useState(count);
  const [currensy, setCurrensy] = useState("USD");
  const [changeState, setChangeState] = useState(true);
  const [menuTabs, setMenuTabs] = useState("all");
  const [isPage, setIsPage] = useState(null);

  const pageObserver = useRef(null);
  const lastTicketRef = useCallback((node) => {
    setTimeout(() => {
      if (pageObserver.current) pageObserver.current.disconnect();
      pageObserver.current = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setLimit((state) => state + count);
        }
      });
      if (node) {
        pageObserver.current.observe(node);
      }
    }, 0);
  }, []);

  const favoritesObj = useMemo(() => {
    const data = JSON.parse(localStorage.getItem("ids"));
    return data ? data : [];
  }, [changeState]);

  const currectData = useMemo(() => {
    if (menuTabs === "all") {
      return data;
    } else {
      let result = { ...favoritesObj };
      return Object.values(result).sort((a, b) => a.num - b.num);
    }
  }, [menuTabs, data, favoritesObj]);

  useEffect(() => {
    const controller = new AbortController();
    const abort = { signal: controller.signal };

    (async () => {
      const { coins } = await sendRequest(
        `v1/coins?skip=${limit - count}&limit=${count}&currency=${currensy}`,
        abort
      );
      const arr = [...data, ...coins];
      setData(arr);
    })();

    return () => controller.abort();
  }, [limit, currensy]);

  const handleAddFavorites = (e, id, obj, index) => {
    const data = JSON.parse(localStorage.getItem("ids"));
    obj.num = index;
    if (data) {
      data[id] ? delete data[id] : (data[id] = obj);
      localStorage.setItem("ids", JSON.stringify(data));
    } else {
      const newObj = {};
      newObj[id] = obj;
      localStorage.setItem("ids", JSON.stringify(newObj));
    }
    setChangeState((state) => !state);
    e.stopPropagation();
  };

  const handleChagePage = (obj) => {
    setIsPage(obj);
  };

  const component = isPage ? (
    <OnePage isPage={isPage} />
  ) : (
    <FirstPage
      menuTabs={menuTabs}
      setMenuTabs={setMenuTabs}
      currectData={currectData}
      lastTicketRef={lastTicketRef}
      handleAddFavorites={handleAddFavorites}
      favoritesObj={favoritesObj}
      handleChagePage={handleChagePage}
    />
  );

  return (
    <div className="wrapper__project">
      <div className="container">
        <header></header>
        <section className="project__middle">
          <div className="project__title">
            <h1
              className={!isPage ? "" : "cursor"}
              onClick={() => handleChagePage(null)}
            >
              Crypto Tracker
            </h1>
          </div>
          {component}
        </section>
      </div>
    </div>
  );
}

export default App;
