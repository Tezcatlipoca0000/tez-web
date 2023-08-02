import Footer from './components/Footer';
import Header from './components/Header';
import { getDictionary } from '../../get-dictionary';
import Features from './components/Features';
import Prices from './components/Prices';
import FAQ from './components/FAQ';
import Demos from './components/Demos';
import Contact from './components/Contact';

export default async function Home({params}) {
  const dictionary = await getDictionary(params.locale);
  const showDemos = process.env.DEMOS;
  return (
      <>
        <Header messages={dictionary} />
        <main className='bg-inherit flex flex-col justify-center items-center'>

          {/* Title */}
          <h1 className='text-center text-6xl my-14'>
            {dictionary.Home.welcome}
          </h1>

          {/* Subtitle */}
          {/*<h2 className='text-center text-2xl my-14 w-11/12'>
            subtitle
            {dictionary.Home.intro}
          </h2>*/}

          <Features dictionary={dictionary} />
          <Prices dictionary={dictionary} />
          <FAQ dictionary={dictionary} />
          {showDemos && <Demos dictionary={dictionary} />}
          <Contact dictionary={dictionary} />
          
        </main>
        <Footer dictionary={dictionary} />
      </>
  )
}

// TODO
// Create a Context manager for the Prices component to share the state with the Contact component
// Example:

/*
import React, { createContext, useContext } from 'react';

const MyContext = React.createContext(null);

const MyComponent = () => {
  const [state, setState] = useState(null);

  return (
    <MyContext.Provider value={state}>
      <OtherComponent />
      <AnotherComponent />
    </MyContext.Provider>
  );
};

const OtherComponent = () => {
  const { state } = useContext(MyContext);

  // Do something with the state.
};

const AnotherComponent = () => {
  const { state } = useContext(MyContext);

  // Do something with the state.
};

export default MyComponent;

*/