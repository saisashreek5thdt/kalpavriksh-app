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
import { AppointmentInfo, AppointmentGrid } from "../../../Data/Data_Info";
import { updateSampleSection } from "../../shared/SampleBase";
import { getAppointments } from "../../../action/PatientAction";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";

const DocAppointmentTable = () => {
  const appointmentCreate=useSelector(state=>state.appointmentCreate)
  const {success}=appointmentCreate
  const appointmentList=useSelector(state=>state.appointmentList)
  const {loading,error,appointment}=appointmentList
  const dispatch=useDispatch()
  useEffect(() => {
    updateSampleSection();
    dispatch(getAppointments())

  },[]);
  if(appointment){
    console.log(appointment);
  }

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  return (
    <>
      <div className="py-16 bg-white rounded-3xl">
        {loading ? <LoadingBox></LoadingBox>:
        error ? <MessageBox></MessageBox>:(
          <GridComponent
          // dataSource={AppointmentInfo}
          dataSource={appointment}
          enableHover={false}
          allowPaging
          pageSettings={{ pageCount: 10 }}
          selectionSettings={selectionsettings}
          toolbar={toolbarOptions}
          editSettings={editing}
          allowSorting
        >
          <ColumnsDirective>
            {AppointmentGrid.map((item, index) => (
              <ColumnDirective  key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]} />
        </GridComponent>
        )}
      
      </div>
    </>
  );
};

export default DocAppointmentTable;
