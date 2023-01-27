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
import { PatientAppointmentInfo, PatientAppointmentGrid } from "../../../Data/Data_Info"
import { updateSampleSection } from "../../shared/SampleBase";
import { useDispatch, useSelector } from "react-redux";
import LoadingBox from "../../../Components/LoadingBox";
import MessageBox from "../../../Components/MessageBox";

const PatientAppointmentTable = () => {
  const dispatch = useDispatch()
  const appointmentCreate=useSelector(state=>state.appointmentCreate)
  const {success}=appointmentCreate
  const appointmentList=useSelector(state=>state.appointmentList)
  const {loading,error,appointment}=appointmentList
  useEffect(() => {
    updateSampleSection();
  });
  // if(appointment){
  //   console.log(appointment);
  // }

  const selectionsettings = { persistSelection: true };
  const toolbarOptions = ["Delete"];
  const editing = { allowDeleting: true, allowEditing: true };

  const truncate = (str, n) => {
    return str.length > n ? str.substr(0, n - 1) : str;
  };

  return (
    <>
      <div className="py-16 bg-white rounded-3xl">
        {/* <GridComponent
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
            {PatientAppointmentGrid.map((item, index) => (
              <ColumnDirective key={index} {...item} />
            ))}
          </ColumnsDirective>
          <Inject services={[Page, Selection, Edit, Toolbar, Sort, Filter]} />
        </GridComponent> */}
         {loading ? <LoadingBox></LoadingBox>:
        error ? <MessageBox></MessageBox>:(

  
        <div className="my-10">
         <table className="min-w-full table-auto table-res">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Sl No.
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Doctor Name
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Patient Name
              </th>
              <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Appointment Date
              </th>
              {/* <th className="text-lg font-bold text-gray-900 px-2 py-4">
                Actions
              </th> */}
            </tr>
          </thead>
          <tbody>
            {loading ? <LoadingBox></LoadingBox>:
            error ? <MessageBox>{error}</MessageBox>:
            appointment.length>0 ? appointment.map((ap,i)=>(

            
            <tr className="bg-white border-b" key={ap._id}>
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                {i+1}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                {ap.doctorId.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                {ap.patientId.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-base font-medium text-gray-900 text-center">
                {truncate(ap.date,11)}
              </td>
        
            </tr>
           )):
           
           <MessageBox>No Appointments</MessageBox>
           }
           
          </tbody>
        </table> 
        {/* <PatientAppointmentTable /> */}
      </div>
        )}
      </div>
    </>
  );
};

export default PatientAppointmentTable;
