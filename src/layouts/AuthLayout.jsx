import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
import { useEffect, useState } from 'react';

const AuthLayout = ({ inner, className }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
        <main className={`flex-1 overflow-y-auto scrollbar-hide p-6 ${className || ''}`}>
          {inner}
        </main>
      </div>
    </div>
  );
};

export default AuthLayout; 