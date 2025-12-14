const PS3Guide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-3 sm:px-4 py-4 sm:py-8 max-w-7xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-8 text-center">
          PS3 HEN Активация - Гайд
        </h1>
        
        {/* PDF Viewer */}
        <div className="mb-6 sm:mb-8 bg-white rounded-lg overflow-hidden shadow-2xl">
          {/* Mobile: Button to open PDF in new tab */}
          <a
            href="/PS3_Система_Активация_Гайд.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 text-center"
          >
            📄 Открыть PDF в новой вкладке
          </a>
          {/* PDF Iframe - responsive height */}
          <iframe
            src="/PS3_Система_Активация_Гайд.pdf#view=FitH"
            className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[75vh] border-0"
            title="PS3 Activation Guide PDF"
          />
        </div>

        {/* Video Player */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl p-3 sm:p-4">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">Видео инструкция</h2>
          <video
            controls
            className="w-full rounded-lg"
            preload="metadata"
          >
            <source src="/Как_активировать_HEN_на_PS3.mp4" type="video/mp4" />
            Ваш браузер не поддерживает видео тег.
          </video>
        </div>
      </div>
    </div>
  );
};

export default PS3Guide;
