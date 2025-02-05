import toastr from "toastr";
import { signup } from "../aip/user";
import footer from "../components/footer";
import header from "../components/header";
import "toastr/build/toastr.min.css";
// eslint-disable-next-line import/order
import $ from "jquery";
// eslint-disable-next-line import/order
import validate from "jquery-validation";
import headerTop from "../components/headerTop";

const Signup = {
    print() {
        return /* html */ `
        <div class = "bg-[url('https://res.cloudinary.com/dinhlcph18273/image/upload/v1645244628/nam_van_chi_2_n5a79k.jpg')]">
        <div class="max-w-7xl mx-auto"> 
        <div class="text-white">
          ${headerTop.print()}
          ${header.print()}
        </div>
          <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 ">
            <div class="max-w-md w-full space-y-8 border p-10 rounded-lg bg-white">
              <div>
                <img class="mx-auto h-12 w-auto" src="http://mauweb.monamedia.net/happytrade/wp-content/uploads/2019/05/mona.png" alt="Workflow">
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  Sign up to your account
                </h2>
              </div>
              <form class="mt-8 space-y-6" action="" method="POST" id = "formSingup">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                  <label for="password" class="sr-only">UserName</label>
                  <input id="username" name="username" type="text" autocomplete="current-password"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="UserName">
                  </div>
                  <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input id="email" name="email" type="email" autocomplete="email"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address">
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input id="password" name="password" type="password" autocomplete="current-password"  class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password">
                  </div>
                </div>
          
                <div class="flex items-center justify-between">

          
                  <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>
          
                <div>
                  <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <!-- Heroicon name: solid/lock-closed -->
                      <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                      </svg>
                    </span>
                    Sign up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ${footer.print()}
      </div>
        
    `;
    },
    afterRender() {
        $("#formSingup").validate({
            rules: {
                username: "required",
                email: {
                    required: true,
                    email: true,
                },
                password: {
                    required: true,
                    minlength: 6,
                },
            },
            messages: {
                username: "Vui lòng điền Username",
                email: {
                    required: "Vui lòng nhập tiêu đề bài viết",
                    email: "Email chưa đúng định dạng",
                },
                password: {
                    required: "Vui lòng nhập PassWord",
                    minlength: "PassWord phải lớn hơn 6 kí tự",
                },
            },
            submitHandler() {
                async function signupForm() {
                    try {
                        signup({
                            username: document.querySelector("#username").value,
                            email: document.querySelector("#email").value,
                            password: document.querySelector("#password").value,
                        });
                        toastr.success("Đăng ký thành công chờ chút để đăng nhập!");
                        setTimeout(() => {
                            document.location.href = "#/signin";
                        }, 3000);
                    } catch (error) {
                        toastr.error("Đăng ký thất bại!");
                    }
                }
                signupForm();
            },
        });
    },
};

export default Signup;