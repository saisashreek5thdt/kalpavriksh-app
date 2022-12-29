import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import FloatingForm from "../../pages/shared/Floating-Form";
import PatientNav from "./PatientNav";
import PatientFooter from "./PatientFooter";
import { Form1 } from "../../pages/shared/MultiForms";

export default class PatientDataTab extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Daily Forms" },
      { text: "Weekly Forms" },
      { text: "Bi-Weekly Forms" },
    ];
  }
  content0() {
    return (
      <div className="py-5">
        <Form1 />
      </div>
    );
  }
  content1() {
    return (
      <div className="py-3">
        <Form1 />
      </div>
    );
  }
  content2() {
    return (
      <div className="py-3">
        <Form1 />
      </div>
    );
  }

  render() {
    return (
      <>
        <div className="dashboard__Container">
          <PatientNav />
          <main>
            <div className="dashboard__Main-Content">
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
                  <TabItemDirective
                    header={this.headerText[2]}
                    content={this.content2}
                  />
                </TabItemsDirective>
              </TabComponent>
            </div>
          </main>
        </div>
        <FloatingForm />
        <PatientFooter />
      </>
    );
  }
}
