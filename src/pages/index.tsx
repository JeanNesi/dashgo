import { Flex, Button, Stack, FormLabel, FormControl } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { Input } from '../components/form/input'

type SignInFormData = {
  email: string
  password: string
}

export default function SingIn() {
  const { register, handleSubmit, formState } = useForm()

  const {errors} = formState
  
  const handleSignIn: SubmitHandler<SignInFormData> = (valeus) => {
    console.log(valeus)
  }

  return (
    <Flex 
        w='98vw' 
        h='97vh' 
        align='center' 
        justify='center'
    >
    <Flex
        as='form'
        width='100%' 
        maxWidth={360}
        bg="gray.800"
        p='8'
        borderRadius={8}
        flexDir='column'
        onSubmit={handleSubmit(handleSignIn)}
      >

    <Stack spacing='4'>
      <Input
        name="email"
        label="Email"
        type="email"
        error={errors.email}
        {...register('email', 
        {required: "Email obrigatório"} 
        )}
      />
      <Input
        name="password"
        label="Senha"
        type="password"
        error={errors.password}
        {...register('password',
        {required: "Senha obrigatória"} 
        )}
      />
    </Stack>
    
    <Button
        type='submit'
        mt='6'
        colorScheme='pink'
        border='none'
        size="lg"
        isLoading={formState.isSubmitting}
      >Entrar
    </Button>
      </Flex>
    </Flex>
  )
}
