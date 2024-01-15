import {Authenticator, View, Image, useTheme, Text} from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Login(props) {

  let navigate = useNavigate();

  useEffect(() => {
    console.log(props.isSignedIn)
    if (props.isSignedIn) {
        navigate('/home');
    }}, [props.isSignedIn])

  const components = {
        Header() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.small} marginTop="70px">
              <Image
                alt="My App logo"
                src="./img/logo.png"
                className='w-20'
              />
            </View>
          );
        },
    
        Footer() {
          const { tokens } = useTheme();
      
          return (
            <View textAlign="center" padding={tokens.space.small}>
              <Text color={tokens.colors.neutral[80]}>
                &copy; {new Date().getFullYear()}
              </Text>
            </View>
          );
        },
    }

    return (
      <Authenticator components={components} >
      </Authenticator>
    );

}

export default Login;