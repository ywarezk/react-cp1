/**
 * if there is a command in js then jsx cannot have the same command
 */

 // <h1 class="hello"></h1>

 // wrong
//  const h1 = (<h1 class="hello">hello</h1>)

 // right
 const h1 = (<h1 className="hello">hello</h1>)

 const login = (
     <form>
        {/* Wrong */}
        {/* <label for="my-email">Email</label> */}
        <label htmlFor="my-email">Email</label>
        <input type="email" name="mail" id="my-email" />
     </form>
 )