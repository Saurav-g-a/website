import React from 'react'
import Header from '../common/header'
import Banner from '../assets/images/Group12.png'
import Mask from '../assets/images/Warranty.svg'
import lifecycle from '../assets/images/CompleteLifecycleManagement.png'
import Dealer from '../assets/images/DealerClaimsManagement.png'
import Dealer1 from '../assets/images/ManufacturerClaimsProcessing.png'
import Dealer2 from '../assets/images/SupplierRecoveryOptimization.png'
import Business from '../assets/images/MinimizeWarrantyDisputes.png'
import Business1 from '../assets/images/AccelerateClaimApprovals.png'
import Business2 from '../assets/images/SeamlessAPIIntegration.png'
import Business3 from '../assets/images/ReduceOperationalComplexity.png'
import Business4 from '../assets/images/OptimizeFinancialRecovery.png'
import Business5 from '../assets/images/EnhanceDealerCollaboration.png'
import Business6 from '../assets/images/ImproveData-DrivenDecisionMaking.png'
import Footer from '../common/footer'
import CustomAccordion from '../common/accordion'
function Home() {

    const accordionItems = [
        {
            title: "What is a warranty management platform, and how does it help?   ",
            content:
                "A warranty management platform automates and streamlines the process of handling product warranties, claims, and recoveries. It helps businesses reduce operational costs, improve efficiency, and deliver a seamless experience for both customers and dealers.",
        },
        {
            title: "How does your platform handle warranty claims?",
            content:
                "Our platform simplifies the entire claims process by automating validations, tracking claim statuses in real-time, and ensuring faster resolutions. It’s designed to reduce errors and ensure every claim is processed accurately and efficiently.",
        },
        {
            title: "Can I use the platform to track returns and recoveries?",
            content:
                "Absolutely! The platform supports returns and recovery workflows by providing tools to manage product returns, validate claims, and optimize recovery processes, helping you save time and minimize losses.",
        },
        {
            title: "How does API integration work with the platform?",
            content:
                "API integration ensures seamless connectivity between your existing systems and our platform. It allows data matching for warranty claims, product details, and customer records to ensure accurate and efficient operations.",
        },
        {
            title: "Is the platform scalable for my growing business?",
            content:
                "Yes! Our solution is built to scale with your business. Whether you’re expanding to new markets or managing increasing claims volume, the platform adapts to your needs with ease.",
        },
        {
            title: "How does the platform improve supplier recovery?",
            content:
                "The platform includes a dedicated supplier portal that helps validate parts and labor claims, track recovery processes, and provide clear visibility into supplier reimbursements.",
        },
        {
            title: "What kind of insights can I get from the platform?",
            content:
                "Our platform provides robust analytics and reporting tools to help you identify trends, improve product quality, and make informed decisions about warranty policies and operations.",
        },
        {
            title: "Can the platform help me eliminate fraudulent claims?",
            content:
                "Yes, the platform uses advanced validation checks to detect and prevent fraudulent claims, safeguarding your business from unnecessary financial losses.",
        },
        {
            title: " Does the platform support dealer and customer collaboration?",
            content:
                "Absolutely! The platform bridges the gap between manufacturers, dealers, and customers, ensuring smooth communication and collaboration at every stage of the warranty lifecycle.",
        },
        {
            title: "How quickly can I implement the platform?",
            content:
                "Implementation is fast and hassle-free. Our team works closely with you to ensure the platform integrates seamlessly with your existing systems, so you can start seeing benefits right away.",
        },
    ];

    return (
        <div className='bg-[#002025] bg-headerBackground bg-contain bg-no-repeat'>
            <Header />
            <div className='grid grid-cols-12 gap-0 pb-8'>
                <div className='col-span-3'></div>
                <div className='col-span-6 pt-5'>
                    <h1 className='text-center text-white text-[55px] leading-none	Brockmann'><span className='text-[#00FFFC]'>Transform</span> Your <span className='text-[#00FFFC]'>Business</span> with Advanced <span className='text-[#00FFFC]'>Warranty</span> <span className='text-[#00FFFC]'>  SaaS Solutions </span></h1>
                    <p className='text-white text-xl text-center py-5 Gilroy'>Effortless Warranty Management Tailored for Growth</p>
                    <div className='grid grid-cols-12 gap-3'>
                        <div className='col-span-4 border-r pr-3'>
                            <p className='text-right text-lg leading-1 Gilroy text-white'>Empowered by InsureTech and Built for Compliance</p>
                        </div>
                        <div className='col-span-8 flex self-center Gilroy'>
                            <p className='text-[#95AAAD]'>Optimize your warranty operations with our smart and scalable software, designed to enhance efficiency, reduce costs, and deliver exceptional customer experiences.</p>
                        </div>
                    </div>
                    <div className='text-center py-5'>
                        <button className="bg-[#8BC542] Gilroy uppercase py-4 px-6 rounded-md text-white font-medium">Book A Demo</button>
                    </div>
                    <img src={Banner} />
                </div>
                <div className='col-span-3'></div>
            </div>

            <div className='py-12'>
                <h1 className='text-white text-center text-3xl leading-none Brockmann'><span className='text-[#00FFFC]'> All-in-One </span> Warranty <br /> Management Platform</h1>
                <div className='grid grid-cols-12 gap-0'>
                    <div className='col-span-3'></div>
                    <div className='col-span-6'>
                        <p className='text-white text-center text-xl py-4 Brockmann'>Simplify, Automate, and Transform Your Warranty Operations
                        </p>
                        <p className='text-[#00FFFC] text-center Gilroy'>Revolutionize Warranty Workflows with a Single Platform </p>
                        <p className='text-[#95AAAD] text-center Gilroy text-[15px]'>Connect every part of your warranty ecosystem—manufacturers, distributors, dealers, suppliers, and service providers—to deliver seamless, frustration-free experiences for customers.</p>
                    </div>
                    <div className='col-span-3'></div>
                </div>
                <div className='grid grid-cols-12 gap-4 py-5 px-8'>
                    <div className='col-span-4'>
                        <div className='flex '>
                            <img src={Mask} className='pr-3 self-start' />
                            <p className='text-white Gilroy font-[500]'>Streamline claims, registrations, and <br /> service plans with ease.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='flex '>
                            <img src={Mask} className='pr-3 self-start' />
                            <p className='text-white Gilroy font-[500]'>Automate key processes to eliminate <br /> inefficiencies and reduce operational costs.</p>
                        </div>
                    </div>
                    <div className='col-span-4'>
                        <div className='flex '>
                            <img src={Mask} className='pr-3 self-start' />
                            <p className='text-white Gilroy font-[500]'>Support dealer services with a robust, <br /> all-in-one solution built for scalability.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='py-8 text-center'>
                <h1 className='text-white text-2xl Brockmann'>Complete Lifecycle Management</h1>
                <p className='text-[#95AAAD] Gilroy text-base'>Our platform brings together every stage of the warranty process to maximize efficiency and deliver value:</p>
                <img src={lifecycle} className='mx-auto px-16 py-8' />
            </div>

            <div className='py-8'>
                <h1 className='text-3xl Brockmann text-white text-center'>Comprehensive Warranty <br /> Lifecycle Solutions</h1>
                <p className='text-[#95AAAD] text-lg text-center Gilroy py-6'>Streamlined processes for every stage of the warranty journey, tailored for efficiency and accuracy.</p>
                <div className='grid grid-cols-12 gap-4 py-5 px-8'>
                    <div className='col-span-4 text-white'>
                        <img src={Dealer} />
                        <h1 className='pt-2 Brockmann'>Dealer Claims Management</h1>
                        <p className='py-2 text-[#95AAAD] Gilroy pr-12'>Empower dealers to submit and track
                            claims efficiently with complete transparency and accuracy.</p>
                        <div className='border-l border-[#8BC542] pl-3 Gilroy pr-16'>
                            <h1 className='flex'><img src={Mask} className='pr-2' /> Warranty Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Simplify in/out-of-warranty checks for quick resolutions.</p>
                            <h1 className='flex'><img src={Mask} className='pr-2' /> Parts and Labor Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Ensure accuracy in service costs and component validation.</p>
                            <h1 className='flex'><img src={Mask} className='pr-2' /> Real-Time Claim Status</h1>
                            <p className='text-[#95AAAD]'>Provide full visibility to keep stakeholders informed.</p>
                        </div>
                    </div>
                    <div className='col-span-4 text-white'>
                        <img src={Dealer1} />
                        <h1 className='pt-2 Brockmann'>Manufacturer Claims Processing</h1>
                        <p className='py-2 text-[#95AAAD] Gilroy pr-12'>Enable manufacturers to automate and adjudicate claims faster, improving decision-making and reducing delays.</p>
                        <div className='border-l border-[#8BC542] pl-3 Gilroy pr-16'>
                            <h1 className='flex'><img src={Mask} className='pr-2' /> Warranty Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Verify eligibility quickly and accurately.</p>
                            <h1 className='flex'><img src={Mask} className='pr-2' />Streamlined Part Returns</h1>
                            <p className='text-[#95AAAD] pb-3'>Simplify tracking and recovery of returned parts.</p>
                            <h1 className='flex'><img src={Mask} className='pr-2' />Full Transparency</h1>
                            <p className='text-[#95AAAD]'>Offer clear claim insights and status updates for smoother operations.</p>
                        </div>
                    </div>
                    <div className='col-span-4 text-white'>
                        <img src={Dealer2} />
                        <h1 className='pt-2 Brockmann'>Supplier Recovery Optimization</h1>
                        <p className='py-2 text-[#95AAAD] Gilroy pr-24'>Provide suppliers with a dedicated portal to manage cost recovery efficiently and effectively.</p>
                        <div className='border-l border-[#8BC542] pl-3 Gilroy pr-16'>
                            <h1 className='flex'><img src={Mask} className='pr-2' /> Cost Recovery Tracking</h1>
                            <p className='text-[#95AAAD] pb-3'>Streamline processes for supplier reimbursement.</p>
                            <h1 className='flex'><img src={Mask} className='pr-2' /> Parts and Labor Validation</h1>
                            <p className='text-[#95AAAD] pb-3'>Confirm valid claims for accurate recovery.</p>
                            <h1 className='flex'><img src={Mask} className='pr-2' />Claim Visibility</h1>
                            <p className='text-[#95AAAD]'>Maintain transparency across the claim lifecycle.</p>
                        </div>
                    </div>
                </div>
                <p className='text-center text-[#95AAAD] py-4 Gilroy'>Unlock efficiency and accuracy at every stage of the warranty lifecycle with tailored solutions for dealers, manufacturers, and suppliers.</p>
            </div>

            <div className='py-8'>
                <h1 className='text-[#95AAAD] Brockmann text-3xl text-center'>Business Benefits Of <span className='text-[#00FFFC]'> CodeWarranty </span></h1>
                <p className='text-[#95AAAD] text-center Gilroy py-6'>Transforming warranty management through automation, analytics, and seamless integration.</p>
                <div className='grid grid-cols-12 gap-4 text-white px-8'>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business} className='py-4' />
                            <h1 className='Brockmann text-xl'>Minimize Warranty Disputes</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Leverage advanced claim validation processes to reduce conflicts and ensure smoother warranty claim handling.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2' /> Detect and prevent invalid claims automatically.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2 self-center' /> Build trust with accurate and fair claim management across all stakeholders.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business1} className='py-4' />
                            <h1 className='Brockmann text-xl'>Accelerate Claim Approvals</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Cut down processing times with real-time claim tracking and automated workflows.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2' /> Speed up warranty claims through precise validation.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2' /> Enhance customer satisfaction with faster service resolutions.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business2} className='py-4' />
                            <h1 className='Brockmann text-xl'>Seamless API Integration</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Integrate with existing CRM, ERP, and dealer management systems for a unified warranty management ecosystem.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2 self-start' /> Synchronize customer, product, and claim data seamlessly across platforms.</h1>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2' /> Eliminate redundant data entry and improve operational efficiency.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2 self-start' /> Enable real-time updates and consistent information across all connected systems.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business3} className='py-4' />
                            <h1 className='Brockmann text-xl'>Reduce Operational Complexity</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Simplify the management of dealers, servicers, and customers with centralized operations.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2' /> Consolidate warranty data across all stakeholders in one platform.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2' />Use bulk uploads and automation to reduce administrative workload.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business4} className='py-4' />
                            <h1 className='Brockmann text-xl'>Optimize Financial Recovery</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Maximize supplier recovery rates with precise claim validation and real-time tracking.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2' /> Monitor cost recoveries and reimbursement processes.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2' /> Prevent financial losses with rigorous validation protocols.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business5} className='py-4' />
                            <h1 className='Brockmann text-xl'>Enhance Dealer Collaboration</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Strengthen partnerships with tools tailored for dealer management.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2' /> Provide custom price books and clear visibility into claims and contracts.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2' /> Foster smooth communication to build trust and long-term partnerships.</h1>
                        </div>
                    </div>
                    <div className='col-span-6 h-full'>
                        <div className='border border-[#104649] p-8 rounded-lg h-full'>
                            <img src={Business6} className='py-4' />
                            <h1 className='Brockmann text-xl'>Improve Data-Driven Decision Making</h1>
                            <p className='text-[#95AAAD] Gilroy py-4 pr-8'>Access powerful analytics and reporting tools to make smarter business decisions.</p>
                            <h1 className='flex Gilroy pb-3'> <img src={Mask} className='pr-2 self-start' /> Analyze trends in claims, sales, and operations to identify opportunities for improvement.</h1>
                            <h1 className='flex Gilroy'> <img src={Mask} className='pr-2' /> Use actionable insights to optimize warranty policies and product quality.</h1>
                        </div>
                    </div>

                </div>
            </div>

            <div className='py-8'>
                <h1 className='text-3xl Brockmann text-[#00FFFC] text-center mb-8'>Frequently Asked Questions</h1>
                <div className='px-16'>
                    <CustomAccordion items={accordionItems} />
                </div>
            </div>

            <div className='py-8'>
                <h1 className='text-3xl Brockmann text-white text-center'>We Deliver Across Diverse <br /> Verticals and Industries</h1>
                <p className='text-[#00FFFC] text-lg text-center Gilroy py-4'>Custom Solutions Built to Meet Your Business Needs</p>
                <p className='text-[#95AAAD] w-2/3 mx-auto text-base text-center Gilroy '>At CodeWarranty, we pride ourselves on creating innovative warranty management solutions tailored to a wide array of industries. Our flexible platform and expertise empower businesses to achieve efficiency,

                    scalability, and customer satisfaction, no matter the vertical.</p>

            </div>


            <div>
                <div className='flex bg-[#04292B] justify-center text-white p-12 mx-8'>
                    <div className='w-[50%]'>
                        <h1 className='Gilroy text-3xl text-[#95AAAD]'>Your <span className='text-white'> warranty <br /> transformation begins now. </span> <br />  Let us simplify, automate, and <br /> elevate your operations.</h1>
                    </div>
                    <p className='self-center Gilroy text-[#95AAAD] w-1/2 text-right'>Let me know if you'd like any further adjustments!</p>
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default Home