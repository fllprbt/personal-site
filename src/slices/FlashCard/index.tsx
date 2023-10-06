import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import styles from "./FlashCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useMemo } from "react";
import { verifyFAIconName } from "@/utils/content";
import { EmailLink } from "@/components/EmailLink";
import { faChainBroken as fallbackIcon } from "@fortawesome/free-solid-svg-icons";

/**
 * Props for `FlashCard`.
 */
export type FlashCardProps = SliceComponentProps<Content.FlashCardSlice>;

/**
 * Component for "FlashCard" Slices.
 */
const FlashCard = ({ slice }: FlashCardProps): JSX.Element => {
  const {
    primary: { email, title, description },
    items: linkOptions,
  } = slice;

  const IconList = useMemo(() => {
    return linkOptions.map(({ linkIconUrl, linkIconName }, i) => {
      if (!linkIconUrl) return <></>;

      return (
        <a key={i} className={styles.icon} href={linkIconUrl}>
          <FontAwesomeIcon
            icon={verifyFAIconName(linkIconName, fallbackIcon)}
          />
        </a>
      );
    });
  }, [linkOptions]);

  return (
    <div
      className={styles.card}
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={title} />
      <br />
      <PrismicRichText field={description} />
      <div className={styles.icons}>{IconList}</div>
      <div className={styles.contact}>
        {email && <EmailLink email={email} />}
      </div>
    </div>
  );
};

export default FlashCard;
