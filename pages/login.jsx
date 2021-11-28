import Link from "next/link";
const Login = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/3"></div>
      <div className="w-1/3">
        <h1 className="text-3xl mb-4 text-center border-b py-1 text-center">
          Login
        </h1>
        <form className="flex flex-col items-start text-black">
          <input
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 rounded w-full mb-2 outline-none"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            className="p-2 rounded w-full mb-2 outline-none"
          />
          <p className="py-1 text-sm text-white">
            Don't have an account?{" "}
            <Link href="/register">
              <a className="text-blue-500 hover:text-blue-600 hover:underline">
                Create One
              </a>
            </Link>
          </p>
          <Link href="/">
            <input
              type="submit"
              value="Login"
              className="bg-blue-700 hover:bg-blue-500 focus:bg-gray-500 px-3 py-2 rounded"
            />
          </Link>
        </form>
      </div>
      <div className="w-1/3"></div>
    </div>
  );
};

export default Login;
