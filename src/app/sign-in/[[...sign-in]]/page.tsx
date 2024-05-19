import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-screen">
      <SignIn path="/sign-in" />
    </div>
  )
}

export default SignInPage