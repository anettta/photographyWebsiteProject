import React, {useState} from 'react';
import tips from '../components/data';
import Title from './Title';
import { FaChevronLeft, FaChevronRight, FaQuoteRight} from 'react-icons/fa';

const Services = () => {
    const [index, setIndex] = useState(0);
    const {source, text} = tips[index];

    const checkNumber = (number) => {
        if (number > tips.length-1) {
            return 0;
        } 
        if (number < 0) {
            return tips.length-1;
        }
        return number;
    }

    const nextTip = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            return checkNumber(newIndex);
        });
    };

    const prevTip = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            return checkNumber(newIndex);
        });
    };
    const random = () => {
        let random = Math.floor(Math.random() * tips.length);
        if (random === index){
            random = index + 1;
        }

        setIndex(checkNumber(random));

    }

    return (
        <section className="quotesSection">
              <Title title="#LeaveNoTrace" />
            <div className="quotes">
              
              <article>
                      <FaQuoteRight id="quote"/>
                         <quote id="text">{text}</quote>
                            <caption id="source">{source}</caption>

                         <div className="button-container">
                               <button className="prev-btn" onClick={prevTip}>
                                     <FaChevronLeft />
                               </button>
                               <button className="next-btn"onClick={nextTip}>
                                     <FaChevronRight />
                               </button>
                              
                           </div>
                           <button className="random-btn" onClick={random}>surprise me</button>
    
     </article> 
            
            </div>
        </section>
    )


}

export default Services;