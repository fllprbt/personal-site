import { generateRandomNumber } from "./number";

export const isHuman = () => {
  const operands = Array.from({ length: 2 }).map((_) => generateRandomNumber());
  const answer = prompt(`${operands.join(" + ")} = ?`, "");

  return answer === `${operands.reduce((acc, v) => acc + v, 0)}`;
};
