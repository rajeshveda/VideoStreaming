import React from 'react';
import { AmplifyAuthContainer, AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { onAuthUIStateChange } from '@aws-amplify/ui-components';

const Login = (props) => {

     React.useEffect(() => {
        return onAuthUIStateChange((nextAuthState, authData) => {
            props.setAuthState(nextAuthState);
            props.setUser(authData);
        });
    }, []);

   return (
        <AmplifyAuthContainer>
            <AmplifyAuthenticator />
        </AmplifyAuthContainer>
    );
  return (
    <div>Login is not ready yet</div>
  );
}

export default Login;
