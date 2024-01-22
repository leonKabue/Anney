import {Authenticator, View, Image, useTheme, Text, Flex} from '@aws-amplify/ui-react';
import { useNavigateAction } from "../ui-components/utils.js"
import { useEffect } from 'react';

function Login(props) {

  const navigateListing = useNavigateAction({ type: "url", url: "/listings" });
  const navigateHome = useNavigateAction({ type: "url", url: "/home" });

  useEffect(() => {
    if (props.isSignedIn) {
        navigateListing();
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