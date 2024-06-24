import React from 'react';

const Flatfile = () => {
  return (
    <div className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
            <h2 className="text-base font-semibold uppercase tracking-wide text-indigo-600">
                Finch
            </h2>
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                Flatfile
            </p>
            <p className="mt-4 mb-16 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Flatfile is available for users that prefer to receive data from HRIS and payroll systems via an Excel file (rather than JSON) in the format below. Learn more about <a className='text-indigo-600' href="https://support.tryfinch.com/hc/en-us/articles/27234380939412-How-to-enable-Flatfile" target="_blank">Flatfile</a>.
            </p>
            </div>
            <div style={{ overflow: 'auto', height: '500px', width: '100%', padding: '10px', border: '4px solid #3f4ae7', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <iframe
                src="https://docs.google.com/spreadsheets/d/1hPhiZh2fXzQNBCJzAGiDcHFUtWtCAfg-/edit#gid=905622665"
                width="100%"
                height="100%"
                frameBorder="0"
                style={{ border: 'none' }}
            ></iframe>
            </div>
            <hr style={{ margin: '40px 0', border: '0', borderTop: '2px solid #e0e0e0' }} />
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl text-center pb-7">
               How does Flatfile work?
            </p>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
            <p className="mt-4 mb-16 max-w-2xl text-xl text-gray-500 lg:mx-auto pr-1">
            Watch a quick demo of Flatfile here, or jump to <a className='text-indigo-600' href="https://support.tryfinch.com/hc/en-us/articles/27234380939412-How-to-enable-Flatfile" target="_blank">"How to set up Flatfile"</a> to get started.
            </p>
            <iframe
                src="https://www.loom.com/embed/f446cb38cee74e88a374d65f315dfbda?sid=a5015165-c63d-4474-bd85-9ac8a2e8731e"
                frameBorder="0"
                allowFullScreen
                style={{ width: '100%', height: '400px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}
            ></iframe>
            </div>
        </div>
    </div>
  );
};

export default Flatfile