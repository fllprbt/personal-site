import {
  IconName,
  IconProp,
  findIconDefinition,
} from "@fortawesome/fontawesome-svg-core";
import { KeyTextField } from "@prismicio/client";

export const verifyFAIconName = (name: KeyTextField, fallback: IconProp) => {
  return (
    findIconDefinition({ prefix: "fab", iconName: name as IconName }) ||
    findIconDefinition({ prefix: "fas", iconName: name as IconName }) ||
    fallback
  );
};
