import mainStyle from "@/style/index.module.css";

import style from "@/components/Footer/style.module.css";

import React from "react";

const footer: React.FC = () => {
  return (
    <footer>
      <div className={mainStyle["container"]}>
        <div className={style["main-footer"]}>
          <div>
            <a href="">Privacy</a>
          </div>
          <div>
            <span>©2024 Onri inc: All rights reserved </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
