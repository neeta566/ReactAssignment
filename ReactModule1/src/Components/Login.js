import React from "react";

function Login() {
    return React.createElement('form',
        {id:'loginForm'},
        React.createElement('input',
            {type:'text',id:'username',name:'username',value:'Username',className:'box'}
        ),
    
    React.createElement('input',{type:'text',id:'passwird',name:'password',value:'Password',className:'box'}
            ),
            React.createElement('button',{className:'btn'},'submit')
     );   

}
export default Login;



