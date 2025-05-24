/* eslint-disable no-unused-vars */
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Tag } from "primereact/tag";
import { SectionHeading } from "../Components/UI/HeadingAndPara";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setLoading } from "../redux/slice/loadingSlice";
import { getDirectUsers } from "../api/user-api";
import {
  formatDateTime,
  maskEmailAddress,
} from "../utils/additonalFunc";
import { Users, UserCheck, UserX, Mail, Calendar, Hash, User } from "lucide-react";

const DirectTeamLists = () => {
  const dispatch = useDispatch();
  const [history, setHistory] = useState([]);
  const isLoading = useSelector((state) => state.loading.isLoading);
  
  const fetchHistory = async () => {
    try {
      dispatch(setLoading(true));
      const response = await getDirectUsers();
      setHistory(response?.data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
  };
  
  useEffect(() => {
    fetchHistory();
  }, []);

  // Skeleton loading template for each column
  const skeletonTemplate = () => (
    <div className="animate-pulse">
      <div className="h-8 bg-slate-700/50 rounded-lg"></div>
    </div>
  );

  const statusBodyTemplate = (rowData) => {
    if (isLoading) return skeletonTemplate();
    return (
      <div className="flex items-center space-x-2">
        {rowData.isActive ? (
          <>
            <UserCheck className="w-4 h-4 text-emerald-400" />
            <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full text-sm font-semibold">
              Active
            </span>
          </>
        ) : (
          <>
            <UserX className="w-4 h-4 text-red-400" />
            <span className="px-3 py-1 bg-red-500/20 text-red-400 border border-red-500/30 rounded-full text-sm font-semibold">
              Inactive
            </span>
          </>
        )}
      </div>
    );
  };

  const serialNumberTemplate = (rowData, { rowIndex }) => {
    if (isLoading) return skeletonTemplate();
    return (
      <div className="flex items-center justify-center">
        <div className="w-10 h-10 bg-gradient-to-br from-slate-600 to-slate-700 rounded-lg flex items-center justify-center border border-slate-500">
          <span className="text-blue-300 font-bold text-sm">{rowIndex + 1}</span>
        </div>
      </div>
    );
  };

  const userIdTemplate = (rowData) => {
    if (isLoading) return skeletonTemplate();
    return (
      <div className="flex items-center space-x-2">
        <Hash className="w-4 h-4 text-blue-400" />
        <span className="font-mono text-slate-200 bg-slate-700/50 px-2 py-1 rounded border border-slate-600">
          {rowData.userId}
        </span>
      </div>
    );
  };

  const usernameTemplate = (rowData) => {
    if (isLoading) return skeletonTemplate();
    return (
      <div className="flex items-center space-x-3">
        <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
          <User className="w-4 h-4 text-white" />
        </div>
        <div>
          <span className="font-semibold text-slate-200">{rowData.name}</span>
        </div>
      </div>
    );
  };

  const emailTemplate = (rowData) => {
    if (isLoading) return skeletonTemplate();
    return (
      <div className="flex items-center space-x-2">
        <Mail className="w-4 h-4 text-slate-400" />
        <span className="text-slate-300">{maskEmailAddress(rowData?.email)}</span>
      </div>
    );
  };

  const dateTemplate = (rowData) => {
    if (isLoading) return skeletonTemplate();
    return (
      <div className="flex items-center space-x-2">
        <Calendar className="w-4 h-4 text-slate-400" />
        <span className="text-slate-300">{formatDateTime(rowData?.createdAt)}</span>
      </div>
    );
  };

  const activeUsers = history.filter(user => user.isActive).length;
  const inactiveUsers = history.length - activeUsers;

  // Generate skeleton data for loading state
  const skeletonData = Array(5).fill({});

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex items-center justify-center shadow-lg">
              <Users className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">Direct Team Lists</h1>
              <p className="text-slate-400 mt-1">Manage and monitor your direct team members</p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Total Members</p>
                {isLoading ? (
                  <div className="h-8 w-16 bg-slate-700/50 rounded-lg animate-pulse"></div>
                ) : (
                  <p className="text-2xl font-bold text-white">{history.length}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Active Users</p>
                {isLoading ? (
                  <div className="h-8 w-16 bg-slate-700/50 rounded-lg animate-pulse"></div>
                ) : (
                  <p className="text-2xl font-bold text-emerald-400">{activeUsers}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                <UserX className="w-5 h-5 text-red-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Inactive Users</p>
                {isLoading ? (
                  <div className="h-8 w-16 bg-slate-700/50 rounded-lg animate-pulse"></div>
                ) : (
                  <p className="text-2xl font-bold text-red-400">{inactiveUsers}</p>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/80 transition-all duration-300">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <p className="text-slate-400 text-sm">Active Rate</p>
                {isLoading ? (
                  <div className="h-8 w-16 bg-slate-700/50 rounded-lg animate-pulse"></div>
                ) : (
                  <p className="text-2xl font-bold text-purple-400">
                    {history.length ? Math.round((activeUsers / history.length) * 100) : 0}%
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Data Table */}
        <div className="bg-slate-800/60 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
          <div className="px-6 py-4 border-b border-slate-700/50 bg-slate-800/80">
            <h2 className="text-xl font-semibold text-white flex items-center space-x-2">
              <Users className="w-5 h-5 text-blue-400" />
              <span>Team Members Directory</span>
            </h2>
          </div>
          
          <div className="overflow-x-auto">
            <style jsx global>{`
              .p-datatable {
                background: transparent !important;
                border: none !important;
              }
              .p-datatable .p-datatable-thead > tr > th {
                background: rgb(51 65 85 / 0.8) !important;
                border: 1px solid rgb(71 85 105) !important;
                color: rgb(226 232 240) !important;
                font-weight: 600 !important;
                padding: 1rem !important;
              }
              .p-datatable .p-datatable-tbody > tr {
                background: rgb(30 41 59 / 0.3) !important;
                border: 1px solid rgb(71 85 105 / 0.3) !important;
                transition: all 0.3s ease !important;
              }
              .p-datatable .p-datatable-tbody > tr:hover {
                background: rgb(51 65 85 / 0.5) !important;
                transform: translateY(-1px) !important;
                box-shadow: 0 4px 20px rgba(59, 130, 246, 0.15) !important;
              }
              .p-datatable .p-datatable-tbody > tr > td {
                border: 1px solid rgb(71 85 105 / 0.3) !important;
                color: rgb(226 232 240) !important;
                padding: 1rem !important;
              }
              .p-paginator {
                background: rgb(51 65 85 / 0.8) !important;
                border: 1px solid rgb(71 85 105) !important;
                border-radius: 0 0 1rem 1rem !important;
              }
              .p-paginator .p-paginator-pages .p-paginator-page {
                background: transparent !important;
                color: rgb(226 232 240) !important;
                border: 1px solid rgb(71 85 105) !important;
                margin: 0 2px !important;
                border-radius: 0.5rem !important;
              }
              .p-paginator .p-paginator-pages .p-paginator-page:hover {
                background: rgb(59 130 246) !important;
                color: white !important;
              }
              .p-paginator .p-paginator-pages .p-paginator-page.p-highlight {
                background: rgb(59 130 246) !important;
                color: white !important;
              }
              .p-dropdown {
                background: rgb(51 65 85) !important;
                border: 1px solid rgb(71 85 105) !important;
                color: rgb(226 232 240) !important;
              }
            `}</style>
            
            <DataTable
              value={isLoading ? skeletonData : history}
              paginator
              rows={10}
              rowsPerPageOptions={[5, 10, 25]}
              filterDisplay="row"
              className="custom-team-table"
              stripedRows
            >
              <Column
                style={{ width: "10%", padding: "1rem 2rem" }}
                body={serialNumberTemplate}
                header="S.No"
                filter
                sortable
              />
              <Column 
                field="userId" 
                header="User ID" 
                style={{textWrap:"nowrap"}} 
                body={userIdTemplate}
                filter 
                sortable 
              />
              <Column 
                field="name" 
                header="Username" 
                body={usernameTemplate}
                filter 
                sortable 
              />
              <Column
                field="email"
                header="Email Address"
                filter
                body={emailTemplate}
                sortable
              />
              <Column 
                header="Status" 
                body={statusBodyTemplate} 
                filter 
                sortable 
              />
              <Column
                field="date"
                header="Join Date"
                body={dateTemplate}
                filter
                sortable
              />
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DirectTeamLists;