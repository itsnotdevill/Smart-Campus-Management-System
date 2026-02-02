import { useState } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import { Download, Calendar } from 'lucide-react';

const QRCodeGenerator = () => {
    const [subject, setSubject] = useState('Advance Java');
    const [section, setSection] = useState('A');
    const [date, setDate] = useState('2024-03-14');
    const [qrValue, setQrValue] = useState('WQ0036HQ');

    const handleGenerate = () => {
        const value = `${subject}-${section}-${date}-${Math.random().toString(36).substring(7)}`;
        setQrValue(value);
    };

    const downloadQR = () => {
        const canvas = document.getElementById('qr-code-canvas');
        if (canvas) {
            const pngUrl = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
            let downloadLink = document.createElement("a");
            downloadLink.href = pngUrl;
            downloadLink.download = `QR-${subject}-${date}.png`;
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
        }
    }

    return (
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col md:flex-row items-center justify-between">
            <div className="flex-1 w-full md:mr-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">Subject</label>
                    <div className="relative">
                        <select
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            className="w-full p-3 bg-gray-50 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none"
                        >
                            <option>Advance Java</option>
                            <option>Data Structures</option>
                            <option>Web Development</option>
                        </select>
                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">Section</label>
                    <div className="relative">
                        <select
                            value={section}
                            onChange={(e) => setSection(e.target.value)}
                            className="w-full p-3 bg-gray-50 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-100 appearance-none"
                        >
                            <option>A</option>
                            <option>B</option>
                            <option>C</option>
                        </select>
                        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <label className="text-xs text-gray-400 mb-1">Date</label>
                    <div className="relative">
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full p-3 bg-gray-50 rounded-xl text-gray-700 font-medium focus:outline-none focus:ring-2 focus:ring-blue-100"
                        />
                    </div>
                </div>

                <div className="md:col-span-1 mt-2">
                    <button
                        onClick={handleGenerate}
                        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                    >
                        Generate QR Code
                    </button>
                </div>
            </div>

            <div className="flex flex-col items-center mt-6 md:mt-0">
                <div className="p-2 bg-white rounded-xl shadow-md border border-gray-100 mb-2">
                    <QRCodeCanvas id="qr-code-canvas" value={qrValue} size={100} level={"H"} />
                </div>
                <p className="text-xs text-gray-400 font-mono mb-2">{qrValue}</p>
                <button
                    onClick={downloadQR}
                    className="flex items-center text-blue-600 text-sm font-medium hover:text-blue-800"
                >
                    <Download size={14} className="mr-1" /> Download PDF
                </button>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
