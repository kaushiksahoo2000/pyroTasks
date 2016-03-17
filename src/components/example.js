// import React, { Component } from 'react'
// import {connect} from 'react-redux'
//
// /**
//  *  Link is from the router and can link to internal routes
//  *  eg: <Link to="/home"></Link>
//  */
// import {Link} from 'react-router'
//
// /**
//  * Import actions here
//  */
//
// class /* Component Name */ extends Component {
//   componentWillMount() {
//     /**
//      *  This code will run when the component mounts (is displayed)
//      *  For more on component life-cycle methods see:
//      *  https://facebook.github.io/react/docs/component-specs.html
//      */
//
//     /**
//      * In order to use router params, reference this.props.params.<identifier>
//      */
//   }
//
//   /* The method that React uses to convert JSX to HTML */
//   render() {
//     return (
//       <div>
//         {/* Important: React components can only have one top-level element */}
//       </div>
//     )
//   }
// }
//
// /* connect() will combine Redux state properties with props */
// export default connect((state)=>{
//   return {
//     /**
//      * this object will be concat'd with props
//      * eg: posts: state.posts.all
//      */
//   }
// },
// /* connect()'s second param is an object with all the action creators' */
// { /* actionName (see actions/index.js) */ })(/* Component Name */)
