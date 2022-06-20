import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    let tasks = Array.from(this.props.taskList);
  }

  render() {
    return (
      <ul>
        {Array.from(this.props.taskList).map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }
}

// function Overview(props) {
//   let tasks = Array.from(props.taskList);
//   return (
//     <div>
//       <ul>
//         {tasks.map((task) => (
//           <li>task.taskDesc</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default Overview;
