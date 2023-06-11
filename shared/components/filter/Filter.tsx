import { useEffect, useState } from "react";
import Image from "next/image";

import Show from "shared/components/show/Show";
import {
  checkboxClasses,
  checkboxClick,
} from "shared/components/filter/utils/filter.utils";

import s from "shared/components/filter/Filter.module.scss";

interface IFilterProps {
  specification: string[] | null;
  setFilter: (value: string[] | null) => void;
}

const Filter = ({ specification, setFilter }: IFilterProps) => {
  const [expanded, setExpanded] = useState(false);
  const [checked, setChecked] = useState<string[]>([]);

  useEffect(() => {
    if (checked.length) {
      setFilter(checked);
      return;
    }
    setFilter(null);
  }, [checked, setFilter]);

  const expandedClassName = expanded ? `${s.options} ${s.active}` : s.options;

  return (
    <div className={s.filter} tabIndex={2} onBlur={() => setExpanded(false)}>
      <div
        className={s.button}
        onClick={() => {
          setExpanded(!expanded);
        }}
      >
        <span>{"Фільтр"}</span>
        <Image src="/Filter.svg" alt="Filter logo" height={24} width={24} />
      </div>
      <div className={expandedClassName}>
        <Show condition={!!specification}>
          {specification?.sort().map((option) => (
            <div
              key={option}
              className={s.option}
              onClick={() =>
                checkboxClick({ option, checked, expanded, setChecked })
              }
            >
              <span className={checkboxClasses({ option, checked, s })} />
              <p>{option.charAt(0).toUpperCase() + option.slice(1)}</p>
            </div>
          ))}
        </Show>
      </div>
    </div>
  );
};

export default Filter;
