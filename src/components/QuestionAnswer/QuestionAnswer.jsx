import React from 'react';
import './QuestionAnswer.css';
const QuestionAnswer = () => {
    return (
        <div className='question-container'>
            <h1>Question & Answer:</h1>
            <div className='q-container'>
                <h2>Question-1: What is the difference between props vs state?</h2>
                <p>
                    Props are used to pass data from a parent component to a child component. They are read-only, meaning that the child component cannot modify them. State, on the other hand, is used to store data within a component. It can be modified using the useState method, and when the state changes, the component will re-render.In summary, props are used to send data from a higher-level component to a lower-level component in the component tree.
                </p>
            </div>
            <div className='q-container'>
                <h2>Question-2: How does useState work?</h2>
                <p>
                    useState is a React hook that allows you to add state to functional components.
                    When we call useState, it returns an array with two items: the current state value and a function to update that state value.We can call the update function to update the state, and React will automatically re-render the component with the updated state.In short, useState works by adding state to functional components and providing a way to update that state.
                </p>
            </div>
            <div className='q-container'>
                <h2>Question-3: What is the purpose of useEffect other than fetching data?</h2>
                <p>
                    useEffect is used to run side effects in functional components.
                    Ex: <br />
                    1. Changing the title of the page.<br />
                    2. Adding event listeners. <br />
                    3. Clean up effects when the component unmounts. <br />
                    4. Setting up timers, async tasks. <br />
                    5. We can use useEffect to read from or write to local storage when component mounts or updates.
                </p>
            </div>
            <div className='q-container'>
                <h2>Question-4: How Does React work?</h2>
                <p>
                    React is a JavaScript library used for building user interfaces. It works by creating and managing a virtual representation of the user interface, which React then uses to efficiently render updates to the actual DOM. When changes occur in the application, React updates the virtual DOM and intelligently determines what changes need to be made to the actual DOM. This helps to minimize the amount of manipulation required and leads to improved performance.
                </p>
            </div>
        </div >
    );
};

export default QuestionAnswer;