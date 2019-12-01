import React from 'react';
import ReactDOM from 'react-dom';

// <h1><b><u>hello world with underline</u></b></h1>

// JSX
// const h1 = React.createElement(
//     'h1', 
//     null, 
//     React.createElement(
//         'b', 
//         null, 
//         React.createElement(
//             'u', 
//             null, 
//             'hello world'
//         )
//     )
// );

const h1 = (
    <h1>
        <b>
            <u>hello world with underline</u>
        </b>
    </h1>
)

// function H1() {
//     return (
//         <h1>
//             <b>
//                 <u>hello world with underline</u>
//             </b>
//         </h1>
//     )
// }

const H1 = () => {
    return (
        <h1>
            <b>
                <u>hello world with underline</u>
            </b>
        </h1>
    )
}

const Header = () => { ... }

const Footer = () => { ... }

const Login = () => { ... }

const App = () = {
    return (
        <Header />
        <Login />
        <Footer />
    )
}

const div = document.getElementById('container');



ReactDOM.render(<App />, div);

