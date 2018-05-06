/* 

1) Create a Component - View, pass 'props' to Action Creator functions
2) Create an Action Creator function in action 
 ({props}) => { return {type, payload} } or (dispatch)=>{} function
3) Create a Reducer in reducer
({state, action})=> return {...state, ...} 
- with updated states using action.payload
4) Create a 'state name' associated with returned states from Reducer
5) Create mapStateToProps in Component file - pass in 'state name'
- (state) => return { props }
6) Bind Action Creator functions to Components call back functions
- onPress={this.onButtonPress.bind(this)
- this.props.loginUser({ email, password });

*/