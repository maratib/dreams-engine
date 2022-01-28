import React, { useState } from "react";
import AccordionItem from "@/components/Global/AccordionItem";
import { IConnectAccordion } from "@/interfaces";

const Accordion: React.FC = () => {
  let [accordions, setAccordions] = useState<IConnectAccordion[]>([
    {
      label: "Mexico City",
      address: "Cda. Reforma 142 Tlacopac, Álvaro Obregón, CDMX.",
      phoneNumber: "+52 55 6383 3222",
      emailAddress: "lab@deamsengine.io",
      isActive: false,
      hasBottomLine: true,
      accordionInnerID: "1"
    },
    {
      label: "Aguascalientes, Mex.",
      address: "Cda. Reforma 142 Tlacopac, Álvaro Obregón, CDMX.",
      phoneNumber: "+52 55 6383 3222",
      emailAddress: "lab@deamsengine.io",
      isActive: false,
      hasBottomLine: true,
      accordionInnerID: "2"
    },
    {
      label: "Valencia, Spain.",
      address: "Cda. Reforma 142 Tlacopac, Álvaro Obregón, CDMX.",
      phoneNumber: "+52 55 6383 3222",
      emailAddress: "lab@deamsengine.io",
      isActive: false,
      hasBottomLine: false,
      accordionInnerID: "3"
    },
  ]);

  const activateTab = (index: number) => {
    let updatedAccordions = [...accordions];
    updatedAccordions.forEach(
      (accordion: IConnectAccordion) => (accordion.isActive = false)
    );
    updatedAccordions[index].isActive = true;
    setAccordions((accordions = updatedAccordions));
  };

  const renderAccordions = accordions.map(
    (accordion: IConnectAccordion, index: number) => {
      return (
        <React.Fragment key={index}>
          <AccordionItem
            label={accordion.label}
            address={accordion.address}
            phoneNumber={accordion.phoneNumber}
            emailAddress={accordion.emailAddress}
            isActive={accordion.isActive}
            hasBottomLine={accordion.hasBottomLine}
            onHeaderClick={() => activateTab(index)}
            accordionInnerID={accordion.accordionInnerID}
          />
        </React.Fragment>
      );
    }
  );

  return (
    <div className="accordions" role="tablist">
      {renderAccordions}
    </div>
  );
};

export default Accordion;
