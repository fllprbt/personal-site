"use client";

import { isHuman } from "@/utils/antiBot";
import { useCallback } from "react";
import styles from "./EmailLink.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const getMailDispatcher = (email: string) => {
  return isHuman()
    ? (window.location.href = `mailto: ${email}`)
    : alert("Sorry, that's not correct.");
};

export const EmailLink: React.FC<{ email: string }> = (props) => {
  const handleSendMail = useCallback(
    () => getMailDispatcher(props.email),
    [props.email]
  );

  return (
    <a onClick={handleSendMail} className={styles.icon}>
      <FontAwesomeIcon icon={faEnvelope} />
    </a>
  );
};
