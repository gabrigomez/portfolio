import React from 'react';
import { ReactNode } from "react";
import { ContactMolecule } from "../Molecules/ContactMolecule";

interface Contact {
  children: ReactNode,
  icon: React.ReactNode,
  href?: string,
};

interface ContactListInfoProps {
  contactList: Array<Contact>
};

export const ContactListInfo = ({contactList} : ContactListInfoProps) => {
  return (
    <div className='flex flex-col items-center justify-evenly ml-15'>
      {contactList.map((contact) => {
        return (
          <ContactMolecule
            key={contactList.indexOf(contact)}
            children={contact.children} 
            icon={contact.icon}
            href={contact.href ? contact.href : ''}
          />
        )
      })}
    </div>
  )
}