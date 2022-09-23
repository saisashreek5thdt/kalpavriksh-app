// import React from "react";

// import { Container, Link, Button  } from 'react-floating-action-button'

// import Navbar from "../pages/shared/Navbar";

// const UserDashboard = () => {
//   return (
//     <>
//       {/* Dashboard Container Starts Here */}
//       <div className="dashboard__Container">
//         <Navbar />
//         <header className="header__Box">
//           <div className="header__Box--Heading">
//             <h1 className="header__Box--Heading-Primary">
//               Dashboard
//             </h1>
//           </div>
//         </header>
//         <main>
//           <div className="dashboard__Content">
//             {/* Replace with your content */}
//             <div className="dashboard__Content--Box">
//               <div className="dashboard__Content--Border" />
//               <div>
//                 {/* Floating Button Container Starts Here */}
//                 <Container>
//                     {/* Floating Item 1 */}
//                     <Link
//                       href="/userrole/:pid/enroll/personalinfo/"
//                       tooltip="Patient Enrollment Form"
//                       icon="fas fa-user-plus"
//                       text="Patient Enrollment Form"
//                       className="fab-item btn btn-link btn-lg text-white"
//                     />
//                     {/* Floating Item 2 */}
//                     <Link
//                       href="/userrole/:pid/enroll/healthinfo/"
//                       tooltip="Patient Enrollment Form"
//                       icon="fas fa-user-plus"
//                       text="Patient Enrollment Form"
//                       className="fab-item btn btn-link btn-lg text-white"
//                     />
//                     {/* Floating Item 3 */}
//                     <Link
//                       href="/userrole/:pid/enroll/"
//                       tooltip="Patient Enrollment Form"
//                       icon="fas fa-user-plus"
//                       text="Patient Enrollment Form"
//                       className="fab-item btn btn-link btn-lg text-white"
//                     />
//                     {/* Floating Button */}
//                     <Button
//                       tooltip="The big plus button!"
//                       icon="fas fa-plus"
//                       rotate={true}
//                       onClick={() => alert('Button Clicked')}
//                     />
//                 </Container>
//                 {/* Floating Button Container Ends Here */}
//               </div>
//             </div>
//             {/* /End replace */}
//           </div>
//         </main>
//       </div>
//       {/* Dashboard Container Ends Here */}
//     </>
//   );
// };

// export default UserDashboard;

import React from "react";

import Navbar from "../pages/shared/Navbar";
import FloatingButton from "../Components/Floating-Button";
import TabNav from '../Components/TabNav'

const UserDashboard = () => {
  return (
    // <>
    //   {/* Dashboard Container Starts Here */}
    //   <div className="dashboard__Container">
    //     <Navbar />
    //     <header className="header__Box">
    //       <div className="header__Box--Heading">
    //         <h1 className="header__Box--Heading-Primary">Dashboard</h1>
    //       </div>
    //     </header>
    //     <main>
    //       <div className="dashboard__Content">
    //         {/* Replace with your content */}
    //         <div className="dashboard__Content--Box">
    //           <div className="dashboard__Content--Border" />
    //         </div>
    //         {/* /End replace */}
    //       </div>
    //     </main>
    //   </div>
    //   <FloatingButton />
    //   {/* Dashboard Container Ends Here */}
    // </>
    <>
      {/* Dashboard Container Starts Here */}
      <div className="dashboard__Container">
        <Navbar />
        {/* <header className="header__Box">
          <div className="header__Box--Heading">
            <h1 className="header__Box--Heading-Primary">Dashboard</h1>
          </div>
        </header> */}
        <main>
          <div className="dashboard__Content">
            {/* Replace with your content */}
            <div className="dashboard__Content--Box">
              {/* <div className="dashboard__Content--Border" /> */}
              <TabNav />
            </div>
            
            {/* /End replace */}
          </div>
        </main>
      </div>
      <FloatingButton />
      {/* Dashboard Container Ends Here */}
    </>
  );
};

export default UserDashboard;
