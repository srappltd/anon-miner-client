import { Award } from 'lucide-react';
import { getUserInfo } from '../api/user-api';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthenticatedRoutes } from '../context/Routes';


const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();


  async function GetUserInfo() {
    const res =  await getUserInfo();
    setUser(res)
   
  }
useEffect(()=>{
  GetUserInfo();
},[])

  const handleStartMining = () => {
    navigate(AuthenticatedRoutes.MARKET);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-gray-800 shadow mb-6">
        <div className="flex items-center justify-between px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Welcome ... {user?.data?.name}</h1>
          <div className="flex items-center">
            <button 
              onClick={handleStartMining}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
            >
              <span className="mr-2">+</span>
              <span>Start Mining</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* Welcome Card */}
      <div className="bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
        <div className="flex justify-between">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-4">Start Mining Today!</h2>
            <p className="mb-6 text-gray-300">Join our mining pool and start earning rewards<br />Check out our mining guide for beginners</p>
            <div className="space-x-4">
              <button 
                onClick={handleStartMining}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                Start Mining
              </button>

              <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
                Mining Guide
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="w-32 h-32 bg-gray-700 rounded-full flex items-center justify-center">
              <Award size={64} className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Grid */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Hash Rate</h3>
          <p className="text-3xl font-bold text-blue-500">0 H/s</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Total Mined</h3>
          <p className="text-3xl font-bold text-blue-500">0.00 XMR</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">Active Workers</h3>
          <p className="text-3xl font-bold text-blue-500">0</p>
        </div>
      </div> */}

      {/* Help Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-xl shadow-md col-span-1 md:col-span-2">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Join our community and get support from experienced miners
          </p>
          <div className="flex space-x-4 mb-6">
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-gray-300">DC</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-gray-300">TG</span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
              <span className="text-gray-300">GH</span>
            </div>
          </div>
          <div className="flex space-x-4">
            <button className="border border-gray-700 bg-gray-900 text-white px-4 py-2 rounded-md flex items-center">
              Join Discord <span className="ml-2">🎮</span>
            </button>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
              Documentation
            </button>
          </div>
        </div>
        
        <div className="bg-gray-800 p-6 rounded-xl shadow-md">
          <h2 className="font-bold text-2xl mb-4">
            <span className="text-blue-500">F</span><samp className='text-white'>requently</samp><br />
            <span className="text-blue-500">A</span><samp className='text-white'>sked</samp><br />
            <span className="text-blue-500">Q</span><samp className='text-white'>uestions</samp>
          </h2>
          <div className="space-y-3 mt-6">
            <div className="border-b pb-2 border-gray-700">
              <a href="#" className="text-gray-300 hover:text-blue-500">Getting Started</a>
            </div>
            <div className="border-b pb-2 border-gray-700">
              <a href="#" className="text-gray-300 hover:text-blue-500">Mining Setup</a>
            </div>
            <div className="border-b pb-2 border-gray-700">
              <a href="#" className="text-gray-300 hover:text-blue-500">Rewards</a>
            </div>
            <div className="border-b pb-2 border-gray-700">
              <a href="#" className="text-gray-300 hover:text-blue-500">Troubleshooting</a>
            </div>
            <div className="border-b pb-2 border-gray-700">
              <a href="#" className="text-gray-300 hover:text-blue-500">Security</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard; 