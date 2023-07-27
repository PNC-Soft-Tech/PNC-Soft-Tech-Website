const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white">
			<div className="container mx-auto py-10 px-4 md:px-8">
				<div className="flex flex-wrap justify-between items-center">
					<div className="w-full md:w-1/4 mb-8 md:mb-0">
						<h3 className="text-lg font-bold">PNC Soft Tech</h3>
						<p className="text-sm mt-2">
							PNC Soft Tech is dedicated to providing innovative solutions for
							businesses worldwide.
						</p>
					</div>
					<div className="w-full md:w-1/4 mb-8 md:mb-0">
						<h4 className="text-base font-bold">Contact Us</h4>
						<p className="text-sm mt-2">Email: info@youritcompany.com</p>
						<p className="text-sm">Phone: +1 123-456-7890</p>
					</div>
					<div className="w-full md:w-1/4 mb-8 md:mb-0">
						<h4 className="text-base font-bold">Follow Us</h4>
						<div className="flex mt-2">
							<a
								href="#"
								className="text-white hover:text-blue-400 transition duration-300 mr-4"
							>
								Facebook
							</a>
							<a
								href="#"
								className="text-white hover:text-blue-400 transition duration-300 mr-4"
							>
								Twitter
							</a>
							<a
								href="#"
								className="text-white hover:text-blue-400 transition duration-300"
							>
								LinkedIn
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-gray-800 py-4">
				<div className="container mx-auto px-4 md:px-8 text-center">
					<p className="text-sm text-white">
						© {new Date().getFullYear()} Your IT Company. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
