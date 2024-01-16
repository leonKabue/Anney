import {Authenticator, View, Image, useTheme, Text, Flex} from '@aws-amplify/ui-react';
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
                src="./logo.png"
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
      <Flex
        justifyContent="center"
        alignItems="center"
        //backgroundImage="linear-gradient(90deg, rgba(125,214,232,1), rgba(255,255,255,1))"
      >
        <Authenticator components={components} >
        </Authenticator>  
      </Flex> 
      );

}

export default Login;