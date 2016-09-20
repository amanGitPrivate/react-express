import React from 'react';

class Name extends React.Component {



   // constructor(){
   //    super();
   //    this.state = {
   //       name:"aman"
   //    }
   // }

   changeNameOfParent(){
      this.props.changeMyNameFromChild(this.refs.name.value,this.props.this);
   }

   render() {
      return (
         <div>
            {this.props.nameProps}
            <div>
               <input ref = "name" onChange = {this.changeNameOfParent.bind(this)}/>
            </div>
         </div>
      );
   }
}

Name.propTypes = {
   // chnage string to other type
    name: React.PropTypes.string,
    int:React.PropTypes.number
}
export default Name;
