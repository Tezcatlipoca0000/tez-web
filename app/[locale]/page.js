import Footer from './components/Footer';
import Header from './components/Header';
import { getDictionary } from '../../get-dictionary';
import Features from './components/Features';
import Services from './components/Services';
import Prices from './components/Prices';
import FAQ from './components/FAQ';
import Demos from './components/Demos';


export default async function Home({params}) {
  const dictionary = await getDictionary(params.locale);
  return (
      <>
        <Header messages={dictionary} />
        <main className='bg-inherit flex flex-col justify-center items-center'>

          {/* Title */}
          <h1 className='text-center text-6xl my-4'>
            {dictionary.Home.welcome}
          </h1>

          {/* Subtitle */}
          <h2 className='text-center text-2xl my-8 w-11/12'>
            {dictionary.Home.intro}
          </h2>

          <Features dictionary={dictionary} />
          <Services dictionary={dictionary} />
          <Prices dictionary={dictionary} />
          <FAQ dictionary={dictionary} />
          <Demos dictionary={dictionary} />
          
        </main>
      </>
  )
}
