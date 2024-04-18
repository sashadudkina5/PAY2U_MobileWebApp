import React, { useEffect, useState } from "react";
import ServiceIncludesStyles from "./serviceIncludes.module.scss";
import {
  getPopularImages,
  getExclusiveImages,
} from "../../../../redux_services/selectors";
import { useAppSelector } from "../../../../utils/hooks";
import { formatDescription } from "../../../../utils/formats";

interface ServiceIncludesProps {
  includesDescription: string;
}

function ServiceIncludes({ includesDescription }: ServiceIncludesProps) {
  const popular = useAppSelector(getPopularImages);
  const exclusive = useAppSelector(getExclusiveImages);

  const [formattedDescription, setFormattedDescription] = useState("");

  useEffect(() => {
    if (includesDescription) {
      const formatted = formatDescription(includesDescription);
      setFormattedDescription(formatted);
    }
  }, [includesDescription]);

  const [isExpanded, setIsExpanded] = useState(false);

  function toggleDescription() {
    setIsExpanded(!isExpanded);
  }

  return (
    <section className={ServiceIncludesStyles.serviceIncludesWrapper}>
      <h2 className={ServiceIncludesStyles.includesTitle}>Сервис включает</h2>
      <div>
        <h3 className={ServiceIncludesStyles.typeIncludesTitle}>Эксклюзивы</h3>
        <ul className={ServiceIncludesStyles.includesList}>
          {exclusive
            ? exclusive.map((poster) => {
                return (
                  <li
                    className={ServiceIncludesStyles.includesItem}
                    key={poster.id}
                  >
                    <img alt={poster.image} src={poster.image} />
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <div>
        <h3 className={ServiceIncludesStyles.typeIncludesTitle}>Популярное</h3>
        <ul className={ServiceIncludesStyles.includesList}>
          {popular
            ? popular.map((poster) => {
                return (
                  <li
                    className={ServiceIncludesStyles.includesItem}
                    key={poster.id}
                  >
                    <img alt={poster.image} src={poster.image} />
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <div>
        <h3 className={ServiceIncludesStyles.typeIncludesTitle}>Описание</h3>

        <div
          className={`${ServiceIncludesStyles.serviceInfo} ${
            isExpanded ? ServiceIncludesStyles.expanded : ""
          }`}
          dangerouslySetInnerHTML={{ __html: formattedDescription }}
        />
        <button
          type="button"
          className={ServiceIncludesStyles.showMoreButton}
          onClick={toggleDescription}
        >
          {isExpanded ? null : "Развернуть полное описание"}
        </button>
      </div>
    </section>
  );
}

export default ServiceIncludes;
