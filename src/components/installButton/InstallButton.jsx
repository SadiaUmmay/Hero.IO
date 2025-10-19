import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const InstallButton = () => {
  const apps = useLoaderData();     // সমস্ত apps data
  const { appId } = useParams();    // current app id
  const appIdNum = parseInt(appId);

  const app = apps.find(a => a.id === appIdNum); // single app
  const [installed, setInstalled] = useState(false);

  if (!app) return null;

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <>
      <button
        onClick={handleInstall}
        disabled={installed}
        className={`w-40 py-2 rounded-md font-semibold mt-6 text-white ${
          installed
            ? 'bg-orange-400 cursor-not-allowed'
            : 'bg-green-500 hover:bg-green-600'
        }`}
      >
        {installed ? 'Installed' : `Install Now (${app.size} MB)`}
      </button>

      {/* Toast container */}
      <Toaster position="top-middle" reverseOrder={false} />
    </>
  );
};

export default InstallButton;
