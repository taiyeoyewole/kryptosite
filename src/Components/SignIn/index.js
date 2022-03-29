import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './SignInElements'

const SignIn = () => {
  return (
    <>
    <Container>
        <FormWrap>
            <Icon to='/'>dolla</Icon>
            <FormContent>
                <Form action='#'>
                    <FormH1> Sign In to your account</FormH1>
                    <FormLabel htmlFor='email'> Email</FormLabel>
                    <FormInput type='email' required/>
                    <FormLabel htmlFor='password'> Password</FormLabel>
                    <FormInput type='password' required/>
                    <FormButton type='submit' > Continue</FormButton>
                    <Text> Forgot Password?</Text>
                </Form>
            </FormContent>
        </FormWrap>
    </Container>
    
    
    </>
  )
}

export default SignIn