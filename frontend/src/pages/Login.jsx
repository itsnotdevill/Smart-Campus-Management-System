import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Lock, Mail, ArrowRight, CheckCircle } from 'lucide-react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const { data } = await axios.post('http://localhost:5000/api/users/login', { email, password });

            // Save token
            localStorage.setItem('token', data.token);
            localStorage.setItem('userInfo', JSON.stringify(data));

            // Redirect based on role
            if (data.role === 'admin') navigate('/admin/dashboard');
            else if (data.role === 'staff') navigate('/staff/dashboard');
            else if (data.role === 'faculty') navigate('/faculty/dashboard');
            else if (data.role === 'student') navigate('/student/dashboard');
            else navigate('/'); // Fallback

        } catch (err) {
            const message = err.response?.data?.message || 'Login failed. Please check your credentials.';
            setError(message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen w-full flex overflow-hidden bg-white">
            {/* Left Side - Image & Branding */}
            <div className="hidden lg:flex w-1/2 relative bg-gray-900 justify-center items-center overflow-hidden">
                <div className="absolute inset-0 opacity-40">
                    <img
                        src="https://images.unsplash.com/photo-1541339907198-e021fc9d4511?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Campus"
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent"></div>

                <div className="relative z-10 p-12 text-white max-w-lg">
                    <div className="mb-6 flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-blue-500/30">
                            C
                        </div>
                        <span className="text-3xl font-bold tracking-tight">campus<span className="text-blue-400">.</span></span>
                    </div>
                    <h1 className="text-5xl font-bold leading-tight mb-6">Manage your university <br /> <span className="text-blue-400">efficiently.</span></h1>
                    <p className="text-lg text-gray-300 leading-relaxed mb-8">
                        Streamline attendance, grades, and campus logistics with our next-generation management system. Designed for the modern academic world.
                    </p>
                    <div className="flex items-center space-x-4 text-sm font-medium text-gray-400">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-900 bg-gray-700 overflow-hidden">
                                    <img src={`https://randomuser.me/api/portraits/men/${i * 10}.jpg`} alt="User" />
                                </div>
                            ))}
                        </div>
                        <p>Trusted by 50+ Universities</p>
                    </div>
                </div>
            </div>

            {/* Right Side - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-white relative">
                <div className="max-w-md w-full">
                    <div className="text-center mb-10 lg:text-left">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                        <p className="text-gray-500">Please enter your details to sign in.</p>
                    </div>

                    {error && (
                        <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-100 flex items-center text-red-600 text-sm">
                            <span className="mr-2">⚠️</span> {error}
                        </div>
                    )}

                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label className="text-sm font-semibold text-gray-700 mb-2 block">Email Address</label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all font-medium placeholder-gray-400"
                                    placeholder="admin@campus.com"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex justify-between items-center mb-2">
                                <label className="text-sm font-semibold text-gray-700 block">Password</label>
                                <a href="#" className="text-sm text-blue-600 font-semibold hover:text-blue-700">Forgot password?</a>
                            </div>
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={20} />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:bg-white transition-all font-medium placeholder-gray-400"
                                    placeholder="••••••••"
                                    required
                                />
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 rounded-xl text-white font-bold text-lg shadow-lg shadow-blue-200 transition-all flex items-center justify-center ${loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-300 transform hover:-translate-y-0.5'
                                }`}
                        >
                            {loading ? (
                                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                            ) : (
                                <>Sign in <ArrowRight className="ml-2" size={20} /></>
                            )}
                        </button>
                    </form>

                    <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                        <p className="text-gray-400 text-sm mb-4">Don't have an account?</p>
                        <button className="text-gray-800 font-bold hover:text-blue-600 transition-colors">Create an account</button>
                    </div>

                    {/* Pre-filled credentials helper - Styled nicely */}
                    <div className="mt-6 p-4 bg-blue-50/50 rounded-xl border border-blue-50">
                        <p className="text-xs font-bold text-blue-800 uppercase tracking-wider mb-2">Quick Access (Demo)</p>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                            <span className="font-mono bg-white px-2 py-1 rounded border border-blue-100">admin@campus.com</span>
                            <span className="font-mono bg-white px-2 py-1 rounded border border-blue-100">123456</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
