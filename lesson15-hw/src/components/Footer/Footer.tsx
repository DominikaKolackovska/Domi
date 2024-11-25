import { SVGProps } from "react";

export const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-900">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-8 lg:px-8">
        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-xs leading-5 text-gray-400 text-center">
            &copy; 2024 Name of Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};