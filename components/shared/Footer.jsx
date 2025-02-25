const Footer = () => {
  return (
    <div className="flex items-center justify-center text-white py-20 border-t border-zinc-800">
      <div className="max-w-sm mx-auto text-center flex flex-col gap-4">
        <p className="text-zinc-300 text-base font-medium">
          New UI elements added weekly. Check back to see what's new!
        </p>
        <h3 className="text-sm text-zinc-400 flex items-center justify-center gap-2">
          Made with <span className="text-red-500">❤️</span> by Sonam Tamang
        </h3>
      </div>
    </div>
  );
};

export default Footer;
