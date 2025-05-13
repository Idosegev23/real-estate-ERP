import React from 'react';
import { FaCheck, FaShieldAlt, FaUserClock, FaTools, FaChartLine } from 'react-icons/fa';

interface FeatureBoxProps {
  number: number;
  title: string;
  Icon: React.ElementType;
  className?: string;
}

const FeatureBox: React.FC<FeatureBoxProps> = ({ number, title, Icon, className = '' }) => {
  return (
    <div className={`relative p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${className}`}>
      <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-10 rounded-full"></div>
      <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-indigo-500 to-purple-600 opacity-10 rounded-full"></div>
      
      <div className="relative z-10">
        <div className="text-sm font-mono text-gray-400 dark:text-gray-500 mb-2">{`<${number}>`}</div>
        <div className="flex items-center mb-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg text-white ml-3">
            <Icon className="text-xl" />
          </div>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
      </div>
    </div>
  );
};

const FeatureBoxes: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
      <FeatureBox 
        number={1}
        title="שירות מקצועי"
        Icon={FaUserClock}
        className="border-t-4 border-blue-500"
      />
      <FeatureBox 
        number={2}
        title="כיסוי מקיף"
        Icon={FaShieldAlt}
        className="border-t-4 border-indigo-500"
      />
      <FeatureBox 
        number={3}
        title="צמיחה עסקית"
        Icon={FaChartLine}
        className="border-t-4 border-purple-500"
      />
    </div>
  );
};

export default FeatureBoxes; 