import React from 'react';

const Settings = () => {
  return (
    <div className="page-wrapper p-4">
      <div className="content container mx-auto">
        {/* Page Header */}
        <div className="page-header mb-4">
          <div className="row">
            <div className="col-sm-12">
              <h3 className="page-title text-2xl font-semibold mb-2">General Settings</h3>
              <ul className="breadcrumb flex text-sm text-gray-600">
                <li className="breadcrumb-item"><a href="index.html" className="text-blue-500 hover:text-blue-700">Dashboard/</a></li>
                <li className="breadcrumb-item"><a href="javascript:void(0)" className="text-blue-500 hover:text-blue-700">Settings</a></li>
                <li className="breadcrumb-item active text-gray-500">/General Settings</li>
              </ul>
            </div>
          </div>
        </div>
        {/* /Page Header */}

        <div className="row">
          <div className="col-12">
            {/* General */}
            <div className="card bg-white shadow-md rounded-lg">
              <div className="card-header border-b p-4">
                <h4 className="card-title text-xl font-medium">General</h4>
              </div>
              <div className="card-body p-4">
                <form action="#">
                  <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Website Name</label>
                    <input 
                      type="text" 
                      className="form-control w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Website Logo</label>
                    <input 
                      type="file" 
                      className="form-control w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <small className="text-gray-500">Recommended image size is <b>150px x 150px</b></small>
                  </div>
                  <div className="form-group mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-2">Favicon</label>
                    <input 
                      type="file" 
                      className="form-control w-full border border-gray-300 rounded-lg py-2 px-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <small className="text-gray-500">Recommended image size is <b>16px x 16px</b> or <b>32px x 32px</b></small><br />
                    <small className="text-gray-500">Accepted formats: only png and ico</small>
                  </div>
                </form>
              </div>
            </div>
            {/* /General */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
