import { useRouter } from "next/navigation";

const useLogin = () => {
  const router = useRouter();

  const login = () => {
    router.push("/home");
  };

  return login;
};

export default useLogin;
