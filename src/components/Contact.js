// import React, { Component } from 'react';

// class Contact extends Component {
//   render() {
    
//     return (
//       <div id="contact">
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
//         <br></br>
    
//         <div class="row">
//           <div class="col-lg-4"></div>
//           <div class="col-lg-6">
//             <p class="contactText">
//                To contact Rt tile by phone, 
//               please call (408) 892-6965
//             </p>
//           </div>
         
//         </div>
//       </div>
   
//     );
//   }
// }

// export default Contact;



import React, { Component } from 'react';

class Contact extends Component {
  render() {
    const styles = {
      fontFamily: "Georgia",
      fontSize: 28,
      textAlign: "center",
    }
    return (
      <div id="contact">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div class="row">
          <div class="col-lg-2"></div>
          <p id="contactText" className="col-lg-8" style={styles}>
            Please call: (408) 892-6965 <br />
            Email: rttile@mail.com
          </p>

          <div class="col-lg-2"></div>
        </div>
      
      </div>
   
    );
  }
}

export default Contact;