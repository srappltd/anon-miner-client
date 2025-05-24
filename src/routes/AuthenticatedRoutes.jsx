import { Route, Routes } from "react-router-dom";
import { AuthenticatedRoutes } from "../context/Routes";
import AuthLayout from "../layouts/AuthLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Rewards from "../pages/Rewards";
import Leaderboard from "../pages/Leaderboard";
import WalletPage from "../pages/WalletPage";
import Settingspage from "../pages/Settingspage";
import { getCurrentUser } from "../utils/additonalFunc";
import ViewMarketTables from "../pages/ViewMarketTables";
import MarketDetailPage from "../pages/MarketDetailPage";
import Tradings from "../pages/TradingPage";
import DirectTeamLists from "../pages/DirectTeamLists";
import MiningProducts from "../pages/MiningProducts";

const AuthenticatedRoutesComponent = () => {
  const role = getCurrentUser()?.role;
//   console.log(role);

  return (
    <>
      {role === "admin" ? (
        <Routes>
          {/* Admin Routes */}
          <Route path="*" element={<AuthLayout inner={<Dashboard />} className="admin" />} />
          <Route
            path={AuthenticatedRoutes.ADMIN_DASHBOARD}
            element={<AuthLayout inner={<Dashboard />} className="admin" />}
          />
          {/* Add more admin routes here */}
        </Routes>
      ) : (
        <Routes>
          {/* User Routes */}
          <Route
            path={AuthenticatedRoutes.DASHBOARD}
            element={<AuthLayout inner={<Dashboard />} />}
          />
             <Route
            path={AuthenticatedRoutes.MARKET}
            element={<AuthLayout inner={<ViewMarketTables />} />}
          />
             <Route
            path={AuthenticatedRoutes.MARKET_DETAIL}
            element={<AuthLayout inner={< MarketDetailPage/>} />}
          />
          <Route
            path={AuthenticatedRoutes.PROFILE}
            element={<AuthLayout inner={<Profile />} />}
          />
          <Route
            path={AuthenticatedRoutes.REWARDS}
            element={<AuthLayout inner={<Rewards />} />}
          />
          <Route
            path={AuthenticatedRoutes.LEADERBOARD}
            element={<AuthLayout inner={<Leaderboard />} />}
          />
          <Route
            path={AuthenticatedRoutes.WALLET}
            element={<AuthLayout inner={<WalletPage />} />}
          />
              <Route
            path={AuthenticatedRoutes.MY_TEAM}
            element={<AuthLayout inner={<DirectTeamLists />} />}
          />
            <Route
            path={AuthenticatedRoutes.OUR_MINERS}
            element={
              <AuthLayout inner={<MiningProducts />} />
            }
            />
          <Route
            path={AuthenticatedRoutes.SETTINGS}
            element={<AuthLayout inner={<Settingspage />} />}
          />
             <Route
            path={AuthenticatedRoutes.TRADING}
            element={<AuthLayout inner={<Tradings />} />}
          />
          {/* Default route - redirect to dashboard */}
          <Route path="*" element={<AuthLayout inner={<Dashboard />} />} />
        </Routes>
      )}
    </>
  );
};

export default AuthenticatedRoutesComponent; 