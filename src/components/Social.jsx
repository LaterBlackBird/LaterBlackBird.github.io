import React from "react";

const SocialShare = [
  {
    iconName: "GitHub",
    link: "https://github.com/LaterBlackBird",
  },
  { iconName: "LinkedIn", link: "https://www.linkedin.com/in/seth-holland/" },
  {
    iconName: "AngelList",
    link: "https://angel.co/u/seth-holland",
  },
];
const Social = () => {
  return (
    <div className="share">
      <span>Share:</span>
      <ul className="social">
        {SocialShare.map((val, i) => (
          <li key={i}>
            <a href={`${val.link}`} target="_blank" rel="noreferrer">
              <img
                className="svg"
                src={`/img/svg/social/${val.iconName}.svg`}
                alt="social"
              ></img>
            </a>
          </li>
        ))}
      </ul>

      {/* END social */}
    </div>
  );
};

export default Social;
