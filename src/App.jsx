import { useState } from 'react';
import './App.css';
import people from './data';

// icons
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

function App() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];

    const nextPerson = () => {
        if (index < people.length - 1) {
            setIndex(index + 1);
        } else {
            setIndex(0);
        }
    };
    const prevPerson = () => {
        if (index > 0) {
            setIndex(index - 1);
        } else {
            setIndex(people.length - 1);
        }
    };

    const randomPerson = () => {
      const random = Math.floor(Math.random() * people.length);
      setIndex(random)
    }
    return (
        <main className='flex justify-center items-center h-screen'>
            <article className='w-[90vw] max-w-[900px] text-center mx-auto rounded-lg shadow-lg'>
                <div className='flex justify-center items-center'>
                    <div className='relative'>
                        <img
                            src={image}
                            alt={name}
                            className='rounded-[50%] h-[150px] w-[150px] object-cover my-9 shadow-xl shadow-green-400
                        hover:shadow-blue-500'
                        />
                        <span className='absolute top-9 left-0 bg-green-500 text-white h-[40px] w-[40px] rounded-full flex justify-center items-center'>
                            <FaQuoteRight />
                        </span>
                    </div>
                </div>

                <div>
                    <h2 className='capitalize text-2xl mb-3'>{name}</h2>
                    <h4 className='uppercase mb-3 text-green-500'>{job}</h4>
                    <p className='w-[85%] mx-auto leading-loose'>{text}</p>
                </div>
                <div className='flex justify-center my-3 gap-3'>
                    <button
                        className='text-2xl py-7 text-green-500'
                        onClick={prevPerson}
                    >
                        <FaChevronLeft />
                    </button>
                    <button
                        className='text-2xl py-7 text-green-500'
                        onClick={nextPerson}
                    >
                        <FaChevronRight />
                    </button>
                </div>
                <button className=' shadow-inner shadow-green-500 rounded-md mb-4 px-4 py-1 bg-green-200 text-green-700' onClick={randomPerson}>Suprise Me</button>
            </article>
        </main>
    );
}

export default App;
