import React from "react";

export default function LoginPage() {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-purple-200 flex justify-center items-center">
        <img src="/nen_login.jpg" alt="Ảnh" width={1000} height={1500}/>
      </div>

      <div className="w-1/2 flex justify-center items-center bg-white">
        <div className="w-96 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Đăng nhập</h2>

          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-3 hover:bg-gray-100">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5 mr-2" />
            Đăng nhập bằng Google
          </button>
          <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-3 hover:bg-gray-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b9/2023_Facebook_icon.svg" alt="Facebook" className="w-5 h-5 mr-2" />
            Đăng nhập bằng Facebook
          </button>
          {/* <button className="w-full flex items-center justify-center border border-gray-300 py-2 rounded-lg mb-5 hover:bg-gray-100">
            <img src="https://vi.wikipedia.org/wiki/T%E1%BA%ADp_tin:Apple_logo_hollow.svg" alt="Apple" className="w-5 h-5 mr-2" />
            Đăng nhập bằng Apple
          </button> */}

          <div className="text-gray-500 mb-3">Email:</div>

          <input
            type="email"
            placeholder="Nhập email hoặc tên người dùng"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="text-gray-500 mb-3">Mật khẩu:</div>
          <input
            type="password"
            placeholder="Nhập mật khẩu"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="text-right mb-4">
            <a href="#" className="text-blue-500 text-sm hover:underline">
              Quên mật khẩu
            </a>
          </div>

          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">
            Đăng nhập
          </button>

          <p className="text-xs text-center text-gray-500 mt-4">
            Bằng cách nhấp Đăng nhập, bạn chấp nhận{" "}
            <a href="#" className="underline">Điều khoản dịch vụ</a> và{" "}
            <a href="#" className="underline">Chính sách quyền riêng tư</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
