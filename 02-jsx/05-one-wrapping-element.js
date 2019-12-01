/**
 * there should be one element in jsx wrapping the rest
 */

 // wrong
 // React.createElement('')
 const div = (
     <div>
         hello world
     </div>
     <h1>wat?</h1>
 );

 // right
 const div = (
    <div>
        <div>
           hello world
       </div>
       <h1>wat?</h1>
    </div>
    
);

const options = (
    <React.Fragment>
        <option>TEL AVIV</option>
        <option>TEL AVIV</option>
        <option>TEL AVIV</option>
        <option>TEL AVIV</option>
    </React.Fragment>
    
)

const options = (
    <>
        <option>TEL AVIV</option>
        <option>TEL AVIV</option>
        <option>TEL AVIV</option>
        <option>TEL AVIV</option>
    </>
)