const Presentation = () => {
  const presentationUrl = `${import.meta.env.BASE_URL}presentation/index.html`;

  return (
    <div className="h-screen w-full bg-white">
      <iframe
        title="AI Presentation"
        src={presentationUrl}
        className="h-full w-full border-0"
      />
    </div>
  );
};

export default Presentation;
