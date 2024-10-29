import { Navigate } from "react-router-dom";

const getToken = () => {
  const token = localStorage.getItem("token");
  return token ? JSON.parse(token) : "";
};

export default function Main() {
  const tokens = getToken();
  const isEditRoute = location.pathname === "/main/editPortfolio";

  return (
    <>
      <div>
        {tokens ? (
          <div>
            {/* <Product /> */}
            {/* <SideBar ShowSidebar={ShowSidebar} viewSidebar={viewSidebar} /> */}
            <div
              className={`ml-[5rem] px-[2rem]   bg-gray-200 min-h-screen ${
                isEditRoute ? "py-[3rem] pt-[4rem]" : "py-[1.5rem]"
              }`}
            >
              {/* <Outlet context={[ShowSidebar]} /> */}
            </div>
          </div>
        ) : (
          <div>
            <Navigate to="/login" />
          </div>
        )}
      </div>
    </>
  );
}
