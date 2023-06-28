import Footer from './components/Footer';
import Header from './components/Header';
import { getDictionary } from '../../get-dictionary';
import Features from './components/Features';
import Services from './components/Services';


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

          <Features dictionary={dictionary}/>
          <Services />
          
        </main>
      </>
  )
}

/*
custom --> tailored for you
light/dark mode --> automatic detection & toggle option
responsive --> Beautiful design for both mobile & desktop
internationalization --> get your message accross
SEO --> Be visible
Other features --> 
    Self-Manageble --> Admin access to edit parts of the website without downtime
    DB integration --> SQL, mongodb, json db
    ecommerce integration 
    google ads integration
    google analytics integration
    API integration
Other Services --> 
    Hosting
    Domain Purchase
    Copywrite
    Image Licencing
    Maintenance
    Analytics report <-- DELETED
*/