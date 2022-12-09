import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createForm } from "../../../action/DoctorAction";
import { CREATE_FORM_RESET } from "../../../constant.js/DoctorConstant";
import Navbar from "../../../user/shared/Navbar";

const CreateForm = () => {
  const [id, setId] = useState('')
  const [title, setTitle] = useState('')
  const formCreate = useSelector((state) => state.formCreate);
  const { loading, error, success } = formCreate;


  const [addMore, setAddMore] = useState([
    {type:'',title:'',choise1:'',choise2:'',choise3:'',choise4:''},
  ])

  const [form, setFrom] = useState(false)

  let navigate = useNavigate();
  const dispatch=useDispatch()
  const nextStep = () => {
    dispatch(createForm(id,title,addMore))
    console.log(addMore,'admmore')
  };

  const handleFormChange=(event,index)=>{
    let data = [...addMore]
    data[index][event.target.name] = event.target.value;
    setAddMore(data);
    console.log(addMore,'vii')
  }

  const addMoreFields=()=>{
    let obj={type:'',
            title:'',
            choise1:'',
            choise2:'',
            choise3:'',
            choise4:''
          }
          setAddMore([...addMore,obj])
  }

  const removeFields=(index)=>{
    let data =[...addMore]   
    data.splice(index, 1)
    setAddMore(data)
  }

  useEffect(()=>{
     if(success){
      dispatch({type:CREATE_FORM_RESET})
       navigate("/userrole/:roleid/dashboard/doctor/");
     }
  },[success])
 

  return (
    <>
      <div className="dashboard__Container">
        <Navbar />
        <main>
          <div className="dashboard__Main-Content">
            {/* Replace with your content */}
            <div className="dashboard__Main-Inner-Content">
              <div>
                <div className="dashboard__Grid-Box">
                  <div className="dashboard__Grid-Cols">
                   
                      <div className="form__Box-Shadow">
                        <div className="form__Box-Space">
                        <form >
                          <div className="form__Grid--Cols-6">
                         
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="patient-id"
                                className="form__Label-Heading"
                              >
                                Select Patient
                              </label>
                              <input
                              onChange={(e)=>setId(e.target.value)}
                                type="text"
                                name="patient-id"
                                id="patient-id"
                                autoComplete="given-name"
                                className="form__Input"
                                placeholder="Please Add Patient ID"
                              />
                            </div>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="form-title"
                                className="form__Label-Heading"
                              >
                                Form Title
                              </label>
                              <input
                              onChange={(e)=>setTitle(e.target.value)}

                                type="text"
                                name="form-title"
                                id="form-title"
                                autoComplete="given-name"
                                className="form__Input"
                              />
                            </div>
                            <div className="form__Cols--Span-6 form__Gap-1">
                              <button
                                type="submit"
                                className="form__Btn-Green"
                              >
                                Create Form
                              </button>
                            </div>
                          </div>
                          </form>


                          {addMore.map((form,index)=>(
                            <>
                            <form >
                         <div className="form__Grid--Cols-6" key={index}>
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="type"
                                className="form__Label-Heading"
                              >
                                Question Type
                              </label>
                   
                              <select
                                id="type"
                                name="type"
                                autoComplete="question-type-name"
                                className="form__Select"
                                value={form.type}
                                onChange={(event)=>handleFormChange(event,index)}
                              >
                                <option>Select Question Type</option>
                                <option value='radio'>Radio Type</option>
                                <option value='checkbox'>Checkbox Type</option>
                                <option value='textArea'>Text Area [Input will be text]</option>
                              </select>
                            </div>
                            <div className="form__Cols--Span-6">
                           
                            </div>
                          </div>


                          {addMore[index].type && addMore[index].type === 'radio' ? (
                            <>
                          <div className="form__Grid--Rows-none">
                            <div className="form__Cols--Span-6">
                              <label
                                htmlFor="title"
                                className="form__Label-Heading"
                              >
                                Question Title
                              </label>
                              <input
                                type="text"
                                name="title"
                                id="title"
                                value={form.title}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-6 gap-6">
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="choise1"
                                className="form__Label-Heading"
                              >
                                Question choices
                              </label>
                              <input
                                type="text"
                                name="choise1"
                                id="choise1"
                                value={form.choise1}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="choise2"
                                className="form__Label-Heading"
                              >
                                Question choises
                              </label>
                              <input
                                type="text"
                                name="choise2"
                                value={form.choise2}
                                id="choise2"
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="choise3"
                                className="form__Label-Heading"
                              >
                                Question choises
                              </label>
                              <input
                                type="text"
                                name="choise3"
                                id="choise3"
                                value={form.choise3}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="question-choise-4"
                                className="form__Label-Heading"
                              >
                                Question choises
                              </label>
                              <input
                                type="text"
                                name="choise4"
                                id="choise4"
                                value={form.choise4}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                          </div>
                          </>
                         ):addMore[index].type && addMore[index].type === 'checkbox' ? (
                          <>
                          <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="title"
                              className="form__Label-Heading"
                            >
                              Question Title
                            </label>
                            <input
                              type="text"
                              name="title"
                              id="title"
                              value={form.title}
                              autoComplete="given-name"
                              className="form__Input"
                              onChange={(event)=>handleFormChange(event,index)}
                            />
                          </div>
                        </div>
                        <div className="grid grid-cols-6 gap-6">
                          <div className="form__Cols--Span-3">
                            <label
                              htmlFor="choise1"
                              className="form__Label-Heading"
                            >
                              Question choises
                            </label>
                            <input
                              type="text"
                              name="choise1"
                              id="choise1"
                              value={form.choise1}
                              autoComplete="given-name"
                              className="form__Input"
                              onChange={(event)=>handleFormChange(event,index)}
                            />
                          </div>
                          <div className="form__Cols--Span-3">
                            <label
                              htmlFor="choise2"
                              className="form__Label-Heading"
                            >
                              Question choises
                            </label>
                            <input
                              type="text"
                              name="choise2"
                              value={form.choise2}
                              id="choise2"
                              autoComplete="given-name"
                              className="form__Input"
                              onChange={(event)=>handleFormChange(event,index)}
                            />
                          </div>
                          <div className="form__Cols--Span-3">
                            <label
                              htmlFor="choise3"
                              className="form__Label-Heading"
                            >
                              Question choises
                            </label>
                            <input
                              type="text"
                              name="choise3"
                              id="choise3"
                              value={form.choise3}
                              autoComplete="given-name"
                              className="form__Input"
                              onChange={(event)=>handleFormChange(event,index)}
                            />
                          </div>
                          <div className="form__Cols--Span-3">
                            <label
                              htmlFor="question-choise-4"
                              className="form__Label-Heading"
                            >
                              Question choises
                            </label>
                            <input
                              type="text"
                              name="choise4"
                              id="choise4"
                              value={form.choise4}
                              autoComplete="given-name"
                              className="form__Input"
                              onChange={(event)=>handleFormChange(event,index)}
                            />
                          </div>
                        </div>
                        </>
                         ):addMore[index].type && addMore[index].type === 'textArea' ? (
                          <div className="form__Grid--Rows-none">
                          <div className="form__Cols--Span-6">
                            <label
                              htmlFor="title"
                              className="form__Label-Heading"
                            >
                              Text
                            </label>
                            <input
                              type="text"
                              name="title"
                              id="title"
                              value={form.title}
                              autoComplete="given-name"
                              className="form__Input"
                              onChange={(event)=>handleFormChange(event,index)}
                            />
                          </div>
                        </div>
                         ):
                         '' }
                          </form>
                          {index!=0 && ( <button onClick={()=>removeFields(index)}>Remove fields</button>)}
                         
                          </>
                          ))}

                        </div>
                        <div className="form__Btn-Bg">
                          <button
                            onClick={nextStep}
                            type="submit"
                            className="form__Btn-Submit"
                          >
                            Save
                          </button>
                        </div>
                      </div>
                    {/* </form> */}
                    
                    <button onClick={addMoreFields} type="submit" className="form__Btn-Green">Add More Questions</button>
                                                                                               
                  </div>
                </div>
              </div>
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
};

export default CreateForm;
