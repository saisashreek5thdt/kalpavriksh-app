import React from "react";
import {
  TabComponent,
  TabItemDirective,
  TabItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import PatientNav from "./PatientNav";
import PatienPrescriptionsInfo from "../../pages/form-validations/patient/PatienPrescriptionsInfo";
import PatientAppointmentInfo from "../../pages/form-validations/patient/PatientAppointmentInfo";
import PatientObservation from "../../pages/form-validations/patient/PatientObservation";
import PatientUploadDietChart from "../../pages/form-validations/patient/PatientUploadDietChart";

import PatientFooter from "./PatientFooter";

export default class PatientPrescription extends React.Component {
  constructor() {
    super(...arguments);
    this.headerText = [
      { text: "Latest Presciptions" },
      { text: "Appointments" },
      { text: "Personal Observations" },
    ];
  }
  content0() {
    return (
      <div className="py-5">
        <PatienPrescriptionsInfo />
        <PatientUploadDietChart />
      </div>
    );
  }
  content1() {
    return (
      <div className="py-3">
        <PatientAppointmentInfo />
      </div>
    );
  }
  content2() {
    return (
      <div className="py-3">
        <PatientObservation />
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
        <PatientFooter />
      </>
    );
  }
}
