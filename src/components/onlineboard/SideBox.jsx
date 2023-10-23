import React from "react";
import "./SideBox.css";

const SideBox = () => {
  const handleClick = () => {
    window.open(
      "https://apps.apple.com/us/app/3dforartist/id1671400210",
      "_blank"
    );
  };

  return (
    <div className="side-box" onClick={handleClick}>
      <img
        src={`${process.env.PUBLIC_URL}/img/3dforartist_icon.png`}
        alt="Dungeon Icon"
      />
      <div>
        <br />
        3d 헤드 모델들을 사용해서 그림을 공부하자!
      </div>
      <div>
        <br />
        3dforartist Appstore로 이동하기
      </div>
    </div>
  );
};

export default SideBox;
