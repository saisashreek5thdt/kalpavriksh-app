import React, { useEffect } from "react";
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Selection,
  Inject,
  Edit,
  Toolbar,
  Sort,
  Filter,
} from "@syncfusion/ej2-react-grids";
import { ObservedInfo, ObservationGrid } from "../../../Data/Data_Info";
import { updateSampleSection } from "../../shared/SampleBase";

const PatientObservedTable = () => {
  useEffect(() => {
    updateSampleSection();
  });

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <>
      <div className="py-16 bg-white rounded-3xl">
        <GridComponent
          dataSource={ObservedInfo}
          enableHover={false}
          allowPaging
          pageSettings={{ pageCount: 10 }}
          selectionSettings={selectionsettings}
          toolbar={toolbarOptions}
          editSettings={editing}
          allowSorting
        >
          <ColumnsDirective>
            {ObservationGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]} />
        </GridComponent>
      </div>
    </>
  );
};

export default PatientObservedTable;
