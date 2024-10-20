import React from "react";
import { Card } from "../Atoms/Cards";
import { ExpList } from "./ExpList";

import adeptly from "../../assets/adeptly.jpeg";
import tracklift from "../../assets/Tracklift.jpeg";
import uticket from "../../assets/uticket.png";
import stone from "../../assets/stone.jpg";

import { ExpMolecule } from "../Molecules/ExpMolecule";
import { i18n } from "../../translate/i18n";

const expList = [
  {
    description: "Software engineer",
    expTime: i18n.t("exp.expTime.expStoneTime"),
    href: "https://www.linkedin.com/company/stone-co/",
    src: stone,
    title: "Stone",
  },
  {
    description: "Front-end developer",
    expTime: i18n.t("exp.expTime.expUticketTime"),
    href: "https://www.linkedin.com/company/uticket/",
    src: uticket,
    title: "Uticket",
  },
  {
    description: "Front-end developer/Quality Assurance",
    expTime: "Ago 2021 - Jan 2023",
    href: "https://www.linkedin.com/company/adeptly/",
    src: adeptly,
    title: "Adeptly",
  },
  {
    description: "Front-end developer",
    expTime: "Jun 2021 - Ago 2021",
    href: "https://www.linkedin.com/company/tracklift/",
    src: tracklift,
    title: "Tracklift",
  },
];

export const Exp = () => {
  return (
    <section
      className="flex w-full justify-center bg-gray-300 dark:bg-primaryBg"
      id="exp"
    >
      <Card.Root className="flex flex-col w-full items-center p-4 md:w-full md:p-16 rounded-2xl text-primary dark:text-white">
        <ExpMolecule />
        <ExpList exps={expList} />
      </Card.Root>
    </section>
  );
};
