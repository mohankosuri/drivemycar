 
import { FaSearch, FaCheckSquare, FaCreditCard, FaCar, FaArrowRight } from 'react-icons/fa';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Carousel } from 'react-responsive-carousel';

const HowItWorks = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center p-4">
            <h2 className="text-sm text-gray-600">Simple 4 Easy steps</h2>
            <h1 className="text-2xl font-bold text-red-500 my-2">See How it Works</h1>
            <div className="flex items-center justify-center space-x-8 my-4">
                <div className="flex flex-col items-center">
                    <FaSearch className="text-4xl" />
                    <p className="mt-2">Search</p>
                </div>
                <FaArrowRight className="text-red-500 text-2xl" />
                <div className="flex flex-col items-center">
                    <FaCheckSquare className="text-4xl" />
                    <p className="mt-2">Select</p>
                </div>
                <FaArrowRight className="text-red-500 text-2xl" />
                <div className="flex flex-col items-center">
                    <FaCreditCard className="text-4xl" />
                    <p className="mt-2">No Deposit</p>
                </div>
                <FaArrowRight className="text-red-500 text-2xl" />
                <div className="flex flex-col items-center">
                    <FaCar className="text-4xl" />
                    <p className="mt-2">Drive</p>
                </div>
            </div>
            <h2 className="text-xl font-bold text-red-500 my-4">What They’re Talking About Drive My Car</h2>
            <div className="w-full max-w-xl mx-auto">
                <Carousel
                    showThumbs={false}
                    showStatus={false}
                    infiniteLoop
                    autoPlay
                    interval={3000}
                    showArrows={true}
                >
                    <div className="flex items-center justify-center space-x-4">
                        <img
                            src="https://img.freepik.com/free-photo/smiley-businesswoman-posing-outdoors-with-arms-crossed-copy-space_23-2148767055.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1726790400&semt=ais_hybrid"
                            alt="Portrait of a woman"
                            className="rounded-md w-48 h-48 object-cover"
                        />
                        <div className="text-left">
                            <p>Booked a car for a family trip which was very comfortable and in great condition</p>
                            <p className="text-gray-400 mt-2">Lavanya, Chennai</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <img
                            src="https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.jpg?s=612x612&w=0&k=20&c=buXwOYjA_tjt2O3-kcSKqkTp2lxKWJJ_Ttx2PhYe3VM="
                            alt="Portrait of a man"
                            className="rounded-md w-48 h-48 object-cover"
                        />
                        <div className="text-left">
                            <p>The process was smooth and hassle-free, would recommend to anyone!</p>
                            <p className="text-gray-400 mt-2">Ravi, Bangalore</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                        <img
                            src="https://media.istockphoto.com/id/1163294201/photo/smiling-confident-businesswoman-posing-with-arms-folded.jpg?s=612x612&w=0&k=20&c=9SY62tujbyx46_NbVH6pYAauliGvM0ixcaEfup9y_kU="
                            alt="Portrait of a woman"
                            className="rounded-md w-48 h-48 object-cover"
                        />
                        <div className="text-left">
                            <p>Great experience and fantastic support from the team!</p>
                            <p className="text-gray-400 mt-2">Meena, Delhi</p>
                        </div>
                    </div>
                </Carousel>
            </div>
             
        </div>
    );
};

export default HowItWorks;
