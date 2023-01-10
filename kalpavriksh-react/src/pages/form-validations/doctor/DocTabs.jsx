import React from "react";
import {
    TabComponent,
    TabItemDirective,
    TabItemsDirective,
  } from "@syncfusion/ej2-react-navigations";

import DocAppointment from "./DocAppointment";
import DocPatients from "./DocPatients";
import ChatBox from "../../shared/ChatBox";
import DoctorVisitor from "./DoctorVisitor";

export default class DoctorTabs extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Appointments" },
      { text: "My Patients" },
      // { text: "Chat" },
    ];
  }

  content0() {
    return <div className="py-5"><DocAppointment /></div>;
  }
  content1() {
    return <div className="py-3"><DoctorVisitor /></div>;
  }
  // content2() {
  //   return <div className="py-3"><ChatBox /></div>;
  // }

  render() {
    return (
      <>
        <TabComponent heightAdjustMode="Auto">
          <TabItemsDirective>
            <TabItemDirective
              header={this.headerText[0]}
              content={this.content0}
            />
            <TabItemDirective
              header={this.headerText[1]}
              content={this.content1}
            />
            {/* <TabItemDirective
              header={this.headerText[2]}
              content={this.content2}
            /> */}
          </TabItemsDirective>
        </TabComponent>
      </>
    );
  }
}
