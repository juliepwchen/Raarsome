import React, { Component } from 'react';
import { 
    GlookoCard, 
    GlookoCardSection, 
    GlookoButton } from './common';
import { connect } from 'react-redux';
import { employeeCreate, employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeCreate extends Component {
  componentWillMount() {
    this.props.employeeUpdate({prop: 'name', value:''});
    this.props.employeeUpdate({prop: 'phone', value:''});
    this.props.employeeUpdate({prop: 'shift', value:'Monday'});
  } 
  onCreateButtonPress() {
      const { name, phone, shift } = this.props;
      this.props.employeeCreate({name, phone, shift:shift||'Monday'});
  }
  
  render() {
      //pass EmployeeForm all props passed into EmployeeCreate
      return(
          <GlookoCard>
              <EmployeeForm {...this.props} />
              <GlookoCardSection>
                  <GlookoButton onPress={this.onCreateButtonPress.bind(this)}>
                      Create
                  </GlookoButton>
              </GlookoCardSection>
          </GlookoCard>
      );
  }
}

const mapStateToProps = ({employeeForm}) => {
  const { name, phone, shift } = employeeForm;
  console.log(name, phone, shift);
  return({
      name, 
      phone, 
      shift
  });
};

export default connect(mapStateToProps, {
    employeeCreate, employeeUpdate    
})(EmployeeCreate);