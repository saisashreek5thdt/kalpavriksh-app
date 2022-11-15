import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../../user/shared/Navbar";

const CreateForm = () => {

  const [addMore, setAddMore] = useState([
    {type:'',title:'',choice1:'',choice2:'',choice3:'',choice4:''},
    
    
  ])
  let navigate = useNavigate();
  const nextStep = () => {
    // navigate("/userrole/:roleid/dashboard/doctor/");
    console.log(addMore,'admmore')
  };

  const handleFormChange=(event,index)=>{
    let data = [...addMore]
    data[index][event.target.name] = event.target.value;
    setAddMore(data);
    // console.log(addMore)

  }

  const addMoreFields=()=>{
    let obj={type:'',
            title:'',
            choice1:'',
            choice2:'',
            choice3:'',
            choice4:''
          }
          setAddMore([...addMore,obj])
          // console.log(...addMore,obj);
  }

  const removeFields=(index)=>{
    let data =[...addMore]   
    data.splice(index, 1)
    setAddMore(data)
  }

  const questionSubmit=()=>{
    
  }

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
                                htmlFor="choice1"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="choice1"
                                id="choice1"
                                value={form.choice1}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="choice2"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="choice2"
                                value={form.choice2}
                                id="choice2"
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="choice3"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="choice3"
                                id="choice3"
                                value={form.choice3}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                            <div className="form__Cols--Span-3">
                              <label
                                htmlFor="question-choice-4"
                                className="form__Label-Heading"
                              >
                                Question Choices
                              </label>
                              <input
                                type="text"
                                name="choice4"
                                id="choice4"
                                value={form.choice4}
                                autoComplete="given-name"
                                className="form__Input"
                                onChange={(event)=>handleFormChange(event,index)}
                              />
                            </div>
                          </div>
                         
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
