/**
 * you can place in jsx javascript expression in {}
 * <h1>{js expression}</h1>
 */

 const h1 = (
     <h1 id={'hello-' + Math.random()}>
        { Math.random() }    
     </h1>
 )

 //ask yourself
 // is the js in tags or in attributes / properties 

 // if js in attribute
 // i can place whatever the attribute expects

 // if js between tags

 // 1. falsey / true

 // 2. string / number

 // 3. React Element / Component

 const div = (
     <h1>
         {
             <span>hello</span>
         }
         {
             <Hello />
         }
     </h1>
 )

 // 4. Array
const list = [
    false,
    undefined,
    'hello',
    10,
    <h1>hello</h1>
]

const ul = (
    <ul>
        {
            list
        }

        {/* {
            false
        }
        {
            undefined
        } */}
    </ul>
)


// if example
Math.random()

const div = (
    <h1>
        {
            // if (Math.random() > 0.5) {
            //     return 'greater'
            // } else {
            //     return 'lower'
            // }
        }

        {
            Math.random() > 0.5 ? 'greater' : 'lower'
        }

        {
            Math.random() > 0.5 ? 'greater' : null
        }

        {
            Math.random() > 0.5 && 'greater'
        }

        {
            Math.random() > 0.5 || 'lower'
        }

        {
            (function() {
                if (Math.random() > 0.5) {
                    return 'greater';
                } else {
                    return 'lower';
                }
            })()
        }
    </h1>
)

// for

const todoList = [
    'Walk Piglet',
    'Walk Sweetness',
    'Play with Sweetness'
];

// => [<li>walk with piglet</li> ...]

// todoList.forEach
// Array.prototype.map

const ul = (
    <ul>
        {
            todoList.map((todoStr) => {
                return (
                    <li>
                        {todoStr}
                    </li>
                )
            })
        }

        {
            todoList.map( todoStr => <li>{todoStr}</li> )
        }

        {
            (() => {

                const result = [];
                for(let item of todoList) {
                    result.push(<li>{item}</li>);
                }
                return result;

            })()
        }
    </ul>
)