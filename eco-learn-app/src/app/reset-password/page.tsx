import Image from "next/image"
import Link from "next/link"
import resetPasswordPic from "@/assets/reset-password.svg"
const ResetPassword = () => {
  return (
    <div className=" p-20 flex justify-center gap-16">
      <div className="w-full max-w-lg">
        <h2 className="text-3xl font-bold">Welcome Back</h2>
        <p>Continue Learning with EcoLearning</p>
        <form action="" className=" space-y-5 mt-5 text-sm">
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="text"
              className="w-full p-2 border rounded"
              name="email"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="text"
              className="w-full p-2 border rounded"
              name="password"
              placeholder="Password must be at least 8 characters"
            />
          </div>
          <Link href="/reset-password" className="text-sm w-fit block text-gray-600 text-right ml-auto mt-4">
            Forgot Password?
          </Link>
          <div>
            <button
              type="submit"
              className="bg-custom-lime w-full text-white p-3 rounded"
            >
              Sign in
            </button>

            <div className="flex justify-between items-center mt-6">
              <hr className="h-[0.1em] w-[30%] ml-auto bg-slate-300" />
              <p className="text-center mx-5">or</p>
              <hr className="h-[0.1em] w-[30%] mr-auto bg-slate-300" />
            </div>
          </div>

          <button
            type="button"
            className="bg-white w-full text-custom-lime p-3 rounded border border-custom-lime"
          >
            Sign in with Google
          </button>
        </form>

        <p className="text-sm mt-5">
          New to Eco-learning?{" "}
          <Link href="/register" className="text-custom-lime">
            Register
          </Link>
        </p>
      </div>
      <div>
        <Image
          src={resetPasswordPic.src}
          alt="Hero Frame"
          className="max-w-lg"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}
export default ResetPassword