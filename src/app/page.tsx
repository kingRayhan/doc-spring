import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/server";

const page = async () => {
  return (
    <div>
      <LoginLink>Sign in</LoginLink>

      <RegisterLink>Sign up</RegisterLink>
      <LogoutLink>Sign out</LogoutLink>
    </div>
  );
};

export default page;
