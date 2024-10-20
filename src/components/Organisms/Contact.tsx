import React from "react";
import { ImageAtom } from "../Atoms/ImageAtom";
import { TitleAtom } from "../Atoms/TitleAtom";
import { ContactListInfo } from "./ContactListInfo";
import { i18n } from "../../translate/i18n";
import { Envelope, GithubLogo, LinkedinLogo, UserList } from "phosphor-react";

import TrackVisibility from "react-on-screen";
import coding from "../../assets/coding.gif";

const contactList = [
  {
    icon: <Envelope className="text-4xl group-hover:scale-125 duration-300" />,
    children: "gabrigomez15@gmail.com",
  },
  {
    icon: (
      <LinkedinLogo className="text-4xl group-hover:scale-125 duration-300" />
    ),
    children: "LinkedIn",
    href: "https://www.linkedin.com/in/gabrielgomes93/",
  },
  {
    icon: (
      <GithubLogo className="text-4xl group-hover:scale-125 duration-300" />
    ),
    children: "Github",
    href: "https://github.com/gabrigomez",
  },
  {
    icon: <UserList className="text-4xl group-hover:scale-125 duration-300" />,
    children: i18n.t("contact.fields"),
    href: "https://drive.google.com/file/d/1kSjdbgHWzxKmwDrTSV97sOGUPiOhCjVB/view",
  },
];

export const Contact = () => {
  return (
    <section
      className="flex w-full justify-center mb-4 text-white dark:text-black"
      id="contact"
    >
      <TrackVisibility className="flex w-full justify-center">
        {({ isVisible }) => (
          <div
            className={
              isVisible ? "animate__animated animate__fadeIn w-full" : "none"
            }
          >
            <div className="flex flex-col md:flex-row justify-center bg-black dark:bg-slate-50 rounded-lg p-2 mx-10 md:p-10 md:mx-14">
              <ImageAtom
                className="w-44 h-44 mb-4 md:h-72 md:w-72 lg:mr-5 border-2 rounded-full"
                src={coding}
              />
              <div className="flex flex-col items-center justify-evenly ml-15">
                <TitleAtom
                  className="text-4xl mb-4 font-bold"
                  children={i18n.t("contact.description")}
                />
                <div className="flex flex-col sm:w-2/4">
                  <ContactListInfo contactList={contactList} />
                </div>
              </div>
            </div>
          </div>
        )}
      </TrackVisibility>
    </section>
  );
};
