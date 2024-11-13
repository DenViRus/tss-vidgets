import { Logo } from "@interfaces/logo.interface";
import React from "react";

import logosData from "./logos.constants";
import useStyles from "./logos.styles";

const Logos: React.FC = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <ul className={classes.list}>
        {logosData.map((logo: Logo, index: number) => {
          const dynamicClassName = `logo-${logo.alt.replace(/\s/g, '-').toLowerCase()}-${index + 1}`;
          return (
            <li className={classes.item} key={index}>
              <a
                className={classes.link}
                href={logo.href}
                rel="noopener noreferrer"
                target="_blank"
              >
                <img
                  className={`${classes[dynamicClassName as keyof typeof classes]}`}
                  src={logo.src} alt={logo.alt} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Logos;