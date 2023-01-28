import Head from "next/head";
import Image from "next/image";
export default function verificationDetails() {
	return (
		<>
			<Head>
				<title>Verification Details | Ecell </title>
				<meta
					name="description"
					content="Generated by Verification Details | Ecell "
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="overflow-hidden">
				<section className="text-gray-800 body-font test">
					<div className="container mx-auto ">
						<div className="w-full flex flex-wrap h-screen">
							<Image
								alt="Background-img"
								className="w-[45%] object-cover object-center"
								src="/registration-bg.png"
								width={200}
								height={200}
							></Image>
							<Image
								alt="Background-img"
								className="absolute left-[277px] top-[32px]"
								src="/launchpad-vertical.png"
								width={430}
								height={430}
							></Image>
							<div className="w-1/2 pt-20 flex flex-col items-center mx-auto">
								<div className="flex flex-col gap-12 w-9/12">
									<div className="sign-up-title text-left font-PTSans text-2xl">
										Verification details
									</div>
								</div>
								<div className="w-9/12 border-b-2 border-b-[#686868]">
									<form
										action="#"
										method="POST"
										className="font-PTSans"
									>
										<div className="w-full ">
											<div className="py-5 ">
												<div className="grid grid-cols-6 gap-6">
													<div className="col-span-12 sm:col-span-6">
														<label
															htmlFor="first-name"
															className="block text-sm font-medium text-gray-700"
														>
															Aadhaar Details
															<sup>*</sup>
														</label>
														<input
															type="text"
															name="aadhar-details"
															id="aadhar-details"
															autoComplete="given-name"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
															placeholder="Aadhar Details"
														/>
													</div>

													<div className="col-span-12 sm:col-span-6">
														<label
															htmlFor="last-name"
															className="block text-sm font-medium text-gray-700"
														>
															Startup Name
															<sup>*</sup>
														</label>
														<input
															type="text"
															name="startup-name"
															id="startup-name"
															autoComplete="given-name"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
															placeholder="Place of work"
														/>
													</div>

													<div className="col-span-12 sm:col-span-6">
														<label
															htmlFor="email-address"
															className="block text-sm font-medium text-gray-700"
														>
															No. of Team members
															present
															<sup>*</sup>
														</label>
														<input
															type="text"
															name="team-members"
															id="team-members"
															autoComplete="team"
															className="mt-1 block w-full rounded-md border-[1px] font-md px-2 py-1 border-[#7E8488] shadow-sm focus:border-gray-700 focus:ring-gray-700 sm:text-sm outline-none"
															placeholder="Total Number on site"
														/>
													</div>
												</div>
											</div>
											<div className="bg-gray-50 py-3 flex justify-between mb-36">
												<a
													href="#"
													className="text-[#400E60] hover:underline "
												>
													Back to registration
												</a>
												<button
													type="submit"
													className="inline-flex justify-center rounded-md border border-transparent bg-[#400E60] py-2 px-4 text-sm text-white shadow-sm hover:bg-[#501078] focus:outline-none focus:ring-2 focus:ring-[#501078] focus:ring-offset-2 "
												>
													Confirm
												</button>
											</div>
										</div>
									</form>
								</div>
								<div className="flex justify-between items-center mt-4 w-9/12">
									<span className="">
										English (United States)
									</span>
									<div className="w-5/12 flex justify-between items-center">
										<a
											href="#"
											className="text-[#400E60] hover:underline "
										>
											Help
										</a>
										<a
											href="#"
											className="text-[#400E60] hover:underline "
										>
											Privacy
										</a>
										<a
											href="#"
											className="text-[#400E60] hover:underline "
										>
											Terms
										</a>
									</div>
								</div>
								<div className="flex justify-end w-9/12 mt-8 items-center gap-5">
									Organised by
									<Image
										width={30}
										height={30}
										alt={"E-cell"}
										src={"/logo.png"}
									></Image>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>
		</>
	);
}
