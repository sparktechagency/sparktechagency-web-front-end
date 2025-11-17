import React from 'react';

const CareerDetails = () => {
    return (
        <div className=' md:pt-[200px] pt-[100px] '>


            <div className="container mx-auto  pb-10  font-sans text-gray-800 antialiased">
                {/* Header */}
                <div className="mb-8">
                    <p className="md:text-[32px] font-bold text-[#008000] uppercase tracking-wider">
                        Business Development
                    </p>
                    <div className="mt-2 flex md:flex-row flex-col items-start justify-between md:gap-8 gap-4">
                        <h1 className="text-3xl md:text-[48px] font-bold text-[#262626] leading-tight">
                            Business Development Executive
                        </h1>

                        {/* Custom Apply Button – exact match */}
                        <button className="px-8 py-3.5 bg-linear-to-r from-[#09320A] to-[#041504] text-white font-medium  rounded-full shadow-lg">
                            Apply for this job
                        </button>
                    </div>
                </div>

                {/* Job Meta Info */}
                <div className="flex flex-wrap md:gap-x-16 gap-x-8  gap-y-6  md:my-14 my-8 text-[#414141]">
                    <div className='md:space-y-3 space-y-2 '>
                        <p className=" font-medium">Vacancy</p>
                        <p className=" font-semibold md:text-xl text-[16px]">10+</p>
                    </div>
                    <div className='md:space-y-3 space-y-2'>
                        <p className=" font-medium">Job type</p>
                        <p className=" font-semibold md:text-xl text-[16px]">Onsite – Full time</p>
                    </div>
                    <div className='md:space-y-3 space-y-2'>
                        <p className=" font-medium">Deadline</p>
                        <p className=" font-semibold md:text-xl text-[16px]">19 Nov, 2025</p>
                    </div>
                </div>

                {/* Horizontal Separator – manual */}
                <div className="h-px bg-gray-300 md:mb-10 mb-6"></div>

                {/* Job Description */}
                <section className="md:mb-10 mb-6 text-gray-700 leading-relaxed text-justify">
                    <h2 className="lg:text-2xl text-xl font-bold text-[#121212] mb-4">Job Description</h2>
                    <p>
                        Musemind is a dynamic and rapidly expanding digital agency, committed to driving exceptional results for our clients globally. Our success relies heavily on strong,
                        mutually beneficial partnerships that expand our reach and service capabilities in key international territories. We are seeking a highly motivated and relationship-driven
                        <strong>Partner Success Executive</strong> to manage, nurture, and grow our international network of agency, referral, and technology partners.
                    </p>
                </section>

                {/* Key Responsibilities */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Key Responsibilities:</h2>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex gap-4">
                            <span className="text-[#0d973d] mt-0.5">•</span>
                            <span>Maintain a balanced weekly schedule of activities:</span>
                        </li>
                        <ul className="ml-12 space-y-1 text-gray-600">
                            <li>• 20 hrs — International Partner research (Through different AI tools, LinkedIn or other social media platforms, outreach, marketing campaign, international events etc.)</li>
                            <li>• 10 hrs — Partner support (Onboarding communication, training coordination, performance tracking, deal closing etc.)</li>
                            <li>• 4 hrs — Cross-functional collaboration (with Pre-sales, Project Management, Design, Development, etc.)</li>
                            <li>• 6 hrs — Weekly 1:1s, Skill development</li>
                            <li>• 4 hrs — Reporting and updates to the Partner Success Manager</li>
                        </ul>

                        <li className="flex gap-4">
                            <span className="text-[#0d973d] mt-0.5">•</span>
                            <span>Identify and approach potential partners in international markets through different channels in collaboration with Partner Success Manager:</span>
                        </li>
                        <ul className="ml-12 space-y-1 text-gray-600">
                            <li>• Marketing Agencies</li>
                            <li>• Development Agencies</li>
                            <li>• HR Firms</li>
                            <li>• Venture Capitalist Firms</li>
                            <li>• Different Associations</li>
                        </ul>

                        {[
                            "Establish both formal & informal communication channels with potential partners.",
                            "Ensure new partners through onboarding, NDA, agreements, documentation, and training.",
                            "Provide partners with sales kits, presentations, and case studies to make them confident in representing Musemind.",
                            "Resolve partner queries and issues promptly to maintain trust and satisfaction in timely manner.",
                            "Prepare partner proposals, agreements, and other documents.",
                            "Help evaluate partner capabilities and prepare relevant materials for selection.",
                            "Prepare and maintain sales kits, presentations, and case study materials for partner engagement.",
                            "Support the Partner Success Manager in relationship management by preparing meeting notes, performance reports, and follow-up actions.",
                            "Organize and maintain accurate partner records, contracts, and performance data.",
                            "Support deal closure activities by preparing necessary commercial documents, presentations, and coordination with internal teams.",
                            "Prepare and share weekly updates and reports for management review."
                        ].map((item, i) => (
                            <li key={i} className="flex gap-4">
                                <span className="text-[#0d973d] mt-0.5">•</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Requirements */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Requirements:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>1-2 years of experience in partner support, business development, sales operations, or a related role will be given preference. Freshers are also encouraged to apply.</li>
                        <li>Understanding of partner management processes and channel strategies.</li>
                        <li>Strong English communication skills (spoken and written) are must.</li>
                        <li>Flexible with working hours to support partners across time zones.</li>
                        <li>Self-driven, target oriented and obedient.</li>
                    </ul>
                </section>

                {/* Qualifications */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Qualifications:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Bachelor’s degree in Business, Engineering, Marketing, Sales, or related field.</li>
                        <li>Certifications or coursework in international business, partner management, or sales is a plus.</li>
                    </ul>
                </section>

                {/* Benefits */}
                <section className="mb-10">
                    <h2 className="text-xl font-bold text-gray-900 mb-4">Benefit:</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                        <li>Salary: Negotiable + Commission (Variable)</li>
                        <li>Two weekly holidays.</li>
                        <li>Full subsidized lunch and snack facilities.</li>
                        <li>Yearly salary review.</li>
                        <li>Two festival bonuses.</li>
                        <li>Professional development opportunities.</li>
                        <li>A creative and collaborative work environment.</li>
                        <li>Team hangout, participate in sports events (Table Tennis, Foosball and other indoor games).</li>
                        <li>Health insurance benefit after completion 1 year.</li>
                        <li>Long Service Benefit</li>
                    </ul>
                </section>
            </div>
        </div>
    );
};

export default CareerDetails;