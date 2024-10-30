import style from "./style.module.css";
import mainStyle from "@/style/index.module.css";
import { Link } from "react-router-dom";
import image from "@/assets/sadrobot.jpg";

const Error404 = () => {
  return (
    <section>
      <div className={mainStyle["container"]}>
        <div className={style["not-found-block"]}>
          <div className={style["not-found-text"]}>
            <h2>Error 404</h2>
            <h4>Oops! we can't find that page</h4>
            <span>
              The requested URL was not found go back to
              <Link to="/"> Home page</Link>
            </span>
          </div>
          <div className={style["not-found-img"]}>
            <img src={image} alt="sad-robot" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Error404;
