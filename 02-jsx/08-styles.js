/**
 * in html
 * <div style="background-color: red; font-size: 16px">hello</div>
 * 
 * in jsx
 * <div style={ {'backgroundColor': 'red'} } >
 */

 // styles will get an object with camel case and not kabab case

 const div = <div style={ {backgroundColor: 'red', fontSize: '16px'} } ></div>

 