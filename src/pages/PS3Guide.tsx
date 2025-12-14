const PS3Guide = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          PS3 HEN Активация - Гайд
        </h1>
        
        {/* PDF Viewer */}
        <div className="mb-8 bg-white rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src="/PS3_Система_Активация_Гайд.pdf"
            className="w-full h-[70vh] border-0"
            title="PS3 Activation Guide PDF"
          />
        </div>

        {/* Video Player */}
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-2xl p-4">
          <h2 className="text-2xl font-semibold mb-4">Видео инструкция</h2>
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
