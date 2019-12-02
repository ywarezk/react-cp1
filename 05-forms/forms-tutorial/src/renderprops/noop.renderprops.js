/**
 * <Noop render={() => how to draw the jsx of the son} />
 */

 import React from 'react';

 export default class Noop extends React.Component {
     render() {
         return this.props.render();
     }
 }