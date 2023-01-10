import React from 'react';
import { useEffect } from 'react';
import { FiEdit } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { activateDtChart, activateForm, deactivateDtChart, deactivateForm, getAllDietChart } from '../../../action/AdminAction';
import { getForms } from '../../../action/PatientAction';
import  LoadingBox  from '../../../Components/LoadingBox';
import  MessageBox  from '../../../Components/MessageBox';
import { ACTIVATE_DTCHART_RESET, ACTIVATE_FORM_RESET, DEACTIVATE_DTCHART_RESET, DEACTIVATE_FORM_RESET } from '../../../constant.js/AdminConstant';




const Charts = () => {
 
  const dispatch = useDispatch()
  const getFomrsList=useSelector((state=>state.patientFormList))
  const {loading,error,forms}=getFomrsList
  const deitChartList=useSelector((state)=>state.deitChartList)
  const {loading:loadingDiet,error:errorDiet,dietchart}=deitChartList

  const activateFormVariables=useSelector((state)=>state.activateform)
  const {loading:loadingFormAc,error:errorFormAc,success:successFormAc}=activateFormVariables
  const deactivateFormVariables=useSelector((state)=>state.deactivateform)
  const {loading:loadingFormDe,error:errorFormDe,success:successFormDe}=deactivateFormVariables


  const activateDtChartVariables=useSelector((state)=>state.activateform)
  const {loading:loadingChartAc,error:errorChartAc,success:successChartAc}=activateDtChartVariables
  const deactivateDtChartVariables=useSelector((state)=>state.deactivateform)
  const {loading:loadingChartDe,error:errorChartDe,success:successChartDe}=deactivateDtChartVariables

  useEffect(()=>{
    dispatch(getForms('admin'))
    dispatch(getAllDietChart())
    if(successFormAc){
      dispatch({type:ACTIVATE_FORM_RESET})
    }
    if(successFormDe){
      dispatch({type:DEACTIVATE_FORM_RESET})
    }
    if(successChartAc){
      dispatch({type:ACTIVATE_DTCHART_RESET})
    }
    if(successChartDe){
      dispatch({type:DEACTIVATE_DTCHART_RESET})
    }
  },[successFormAc,successFormDe,successChartAc,successChartDe])

  const deActivateForms=(id)=>{
    Swal.fire({
      title: 'Do you want to deactivet forms?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          dispatch(deactivateForm(id))
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const activateForms=(id)=>{
    Swal.fire({
      title: 'Do you want to activate forms?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          dispatch(activateForm(id))
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }

  const deActivateDietCharts=(id)=>{
    Swal.fire({
      title: 'Do you want to deactivet diet Chart?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          dispatch(deactivateDtChart(id))
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
  const acttivateDietCharts=(id)=>{
    Swal.fire({
      title: 'Do you want to activate diet chart?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
          dispatch(activateDtChart(id))
        // Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }
 

  return (
    <>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Form Name
              </th>
              <th className="table__Head--Text">
                Created By
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          {loading ? <LoadingBox></LoadingBox>:
          error ? <MessageBox>{error}</MessageBox>:
          forms.map((frm,index)=>(
            <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
              {index + 1}

              </td>
              <td className="table__Body--Row_Data">
               {frm.question_title}
              </td>
              <td className="table__Body--Row_Data">
                Dr. D.S.N.Rao
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                 <option value={frm.active}>{frm.status}</option>  
                 {frm.status === 'Active' ? (
                   <option onClick={()=>deActivateForms(frm._id)}>De-Active</option>

                 ):frm.status === 'De-Active' ? (
                  <option onClick={()=>activateForms(frm._id)}>Active</option>
                 ):                
                 ''}
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" />
              </td>
            </tr>
          </tbody>
          ))}
        
        </table>
      </div>
      <div className="my-10">
        <table className="table__Container">
          <thead className="table__Head">
            <tr>
              <th className="table__Head--Text">
                Sl No.
              </th>
              <th className="table__Head--Text">
                Diet Chart Name
              </th>
              <th className="table__Head--Text">
                Created By
              </th>
              <th className="table__Head--Text">
                Created Date
              </th>
              <th className="table__Head--Text">
                Access
              </th>
              <th className="table__Head--Text">
                Actions
              </th>
            </tr>
          </thead>
          {loadingDiet ? <LoadingBox></LoadingBox>:
          errorDiet ? <MessageBox>{error}</MessageBox>:
          dietchart && dietchart.map((dt,index)=>(
          <tbody>
            <tr className="table__Body--Row">
              <td className="table__Body--Row_Data">
                {index + 1}
              </td>
              <td className="table__Body--Row_Data">
                Burn Calories
              </td>
              <td className="table__Body--Row_Data">
                Dr. Suha
              </td>
              <td className="table__Body--Row_Data">
                11-10-2022
              </td>
              <td className="table__Body--Row_Data">
                <select
                  id="status"
                  name="status"
                  autoComplete="status-name"
                  className="form__Select"
                >
                  <option>{dt.status}</option>
                  {dt.status === 'Active' ? (
                   <option onClick={()=>deActivateDietCharts(dt._id)}>De-Active</option>

                 ):dt.status === 'De-Active' ? (
                  <option onClick={()=>acttivateDietCharts(dt._id)}>Active</option>
                 ):                
                 ''}
                </select>
              </td>
              <td className="table__Body--Row_Data">
                <FiEdit className="table__Body--Status_Icons" />
              </td>
            </tr>
          </tbody>
          ))}
        </table>
      </div>
    </>
  )
}

export default Charts