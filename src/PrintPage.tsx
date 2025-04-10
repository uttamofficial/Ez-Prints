import React, { useState } from 'react';
import { Upload, Trash2, ShoppingCart, FileText } from 'lucide-react';
import Footer from './components/Footer';

interface UploadedFile {
  name: string;
  size: number;
}

function PrintPage() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [orientation, setOrientation] = useState('Portrait');
  const [colorOption, setColorOption] = useState('Black & White');
  const [bindingOption, setBindingOption] = useState('Normal Spiral Binding');
  const [instructions, setInstructions] = useState('');

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList) {
      const newFiles = Array.from(fileList).map(file => ({
        name: file.name,
        size: file.size / (1024 * 1024), // Convert to MB
      }));
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <FileText className="h-8 w-8 text-blue-600" />
              
            </div>
            <div className="flex items-center space-x-4">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-blue-600 cursor-pointer" />
              <div className="h-8 w-8 rounded-full bg-gray-200"></div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Upload PDFs</h2>

              <div className="border-2 border-dashed border-gray-300 rounded-lg p-12 text-center">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  multiple
                  accept=".pdf"
                  onChange={handleFileUpload}
                />
                <label
                  htmlFor="file-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="mx-auto h-16 w-16 text-black" />
                  <p className="mt-4 text-lg text-gray-600">
                    Drag and drop your PDFs here, or <span className="text-red-600 underline">click to browse</span>
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Maximum file size: 50MB per file
                  </p>
                </label>
              </div>

              {/* File List */}
              {files.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-md font-medium text-gray-700 mb-3">Uploaded Files</h3>
                  <div className="space-y-3">
                    {files.map((file, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between bg-gray-50 p-4 rounded-lg shadow-sm"
                      >
                        <div className="flex items-center">
                          <FileText className="h-6 w-6 text-gray-400 mr-3" />
                          <span className="text-sm font-medium text-gray-800">{file.name}</span>
                          <span className="ml-4 text-sm text-gray-500">
                            {file.size.toFixed(1)} MB
                          </span>
                        </div>
                        <button
                          onClick={() => removeFile(index)}
                          className="text-gray-400 hover:text-red-500"
                        >
                          <Trash2 className="h-6 w-6" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          

          {/* Settings Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Customize Print Settings</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Page Orientation
                  </label>
                  <select
                    value={orientation}
                    onChange={(e) => setOrientation(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Portrait</option>
                    <option>Landscape</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Color Option
                  </label>
                  <select
                    value={colorOption}
                    onChange={(e) => setColorOption(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Black & White</option>
                    <option>Full Color</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Binding Options
                  </label>
                  <select
                    value={bindingOption}
                    onChange={(e) => setBindingOption(e.target.value)}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option>Normal Spiral Binding</option>
                    <option>Premium Hardcover</option>
                    <option>Soft Cover</option>
                    <option>No Binding</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Instructions
                  </label>
                  <textarea
                    value={instructions}
                    onChange={(e) => setInstructions(e.target.value)}
                    rows={4}
                    className="w-full border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Add any special instructions here..."
                  />
                </div>

                <button
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default PrintPage;
