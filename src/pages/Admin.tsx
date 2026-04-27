import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LayoutDashboard, FileEdit, BarChart, Settings, Save, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';
import { useContent } from '@/context/ContentContext';
import { 
  BarChart as ReBarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  AreaChart,
  Area
} from 'recharts';

const data = [
  { name: 'Mon', visits: 400 },
  { name: 'Tue', visits: 300 },
  { name: 'Wed', visits: 600 },
  { name: 'Thu', visits: 800 },
  { name: 'Fri', visits: 500 },
  { name: 'Sat', visits: 200 },
  { name: 'Sun', visits: 300 },
];

export const Admin = () => {
  const { t } = useTranslation();
  const { content, updateContent } = useContent();
  const [activeTab, setActiveTab] = useState<'analytics' | 'content' | 'settings'>('analytics');
  const [editForm, setEditForm] = useState(content);

  const handleSave = () => {
    updateContent(editForm);
    alert('Content updated successfully!');
  };

  return (
    <div className="pt-24 pb-12 min-h-screen bg-[#050505]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-2">
            <button
              onClick={() => setActiveTab('analytics')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'analytics' ? 'bg-navy-800 text-white' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <BarChart size={20} />
              <span className="font-medium">Analytics</span>
            </button>
            <button
              onClick={() => setActiveTab('content')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'content' ? 'bg-navy-800 text-white' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <FileEdit size={20} />
              <span className="font-medium">CMS</span>
            </button>
            <button
              onClick={() => setActiveTab('settings')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'settings' ? 'bg-navy-800 text-white' : 'text-gray-400 hover:bg-white/5'
              }`}
            >
              <Settings size={20} />
              <span className="font-medium">Settings</span>
            </button>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="glass-card p-8">
              {activeTab === 'analytics' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Visitor Analytics</h2>
                    <button className="p-2 text-gray-400 hover:text-white">
                      <RefreshCw size={18} />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-gray-400 text-sm mb-2">Total Visits</div>
                      <div className="text-3xl font-bold">12,482</div>
                      <div className="text-green-400 text-xs mt-2">+12.5% from last week</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-gray-400 text-sm mb-2">Avg. Session</div>
                      <div className="text-3xl font-bold">4m 32s</div>
                      <div className="text-navy-400 text-xs mt-2">Stable</div>
                    </div>
                    <div className="p-6 bg-white/5 rounded-2xl border border-white/5">
                      <div className="text-gray-400 text-sm mb-2">Conversion</div>
                      <div className="text-3xl font-bold">3.2%</div>
                      <div className="text-red-400 text-xs mt-2">-0.5% from last week</div>
                    </div>
                  </div>

                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data}>
                        <defs>
                          <linearGradient id="colorVisits" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#1a237e" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#1a237e" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" vertical={false} />
                        <XAxis dataKey="name" stroke="#666" fontSize={12} />
                        <YAxis stroke="#666" fontSize={12} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#111', border: '1px solid #333', borderRadius: '8px' }}
                          itemStyle={{ color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="visits" stroke="#3f51b5" fillOpacity={1} fill="url(#colorVisits)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {activeTab === 'content' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Content Management</h2>
                    <button
                      onClick={handleSave}
                      className="flex items-center space-x-2 px-4 py-2 bg-navy-800 hover:bg-navy-700 rounded-lg transition-all"
                    >
                      <Save size={18} />
                      <span>Save Changes</span>
                    </button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Hero Title</label>
                      <input
                        type="text"
                        value={editForm.hero.title}
                        onChange={(e) => setEditForm({ ...editForm, hero: { ...editForm.hero, title: e.target.value } })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-navy-500 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-2">Hero Subtitle</label>
                      <textarea
                        rows={3}
                        value={editForm.hero.subtitle}
                        onChange={(e) => setEditForm({ ...editForm, hero: { ...editForm.hero, subtitle: e.target.value } })}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-navy-500 transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-8"
                >
                  <h2 className="text-2xl font-bold">Global Settings</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Theme Colors</h3>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-black border border-white/20" />
                        <span className="text-sm text-gray-400">Primary: Black (#000000)</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 rounded-lg bg-[#1a237e]" />
                        <span className="text-sm text-gray-400">Accent: Navy Blue (#1A237E)</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-bold">Localization</h3>
                      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
                        <span>Default Language</span>
                        <select className="bg-black border border-white/10 rounded px-2 py-1">
                          <option>Korean (KR)</option>
                          <option>English (EN)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
