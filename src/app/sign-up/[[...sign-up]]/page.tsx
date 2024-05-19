import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SignUpPage