import Main from './Main';
import Footer from './components/Footer';
import Example from './components/Example';
import Header from './components/Header';
import { getDictionary } from '../../get-dictionary';


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
          
          <div className='flex flex-col justify-center items-center w-11/12'>
            {/* Section1 -- Custom */}
            <div className='homeSection'>
              <div className='homeSectionBlock'>
                <h3 className='text-4xl'>
                  {dictionary.Home.customTitle}
                </h3>
              </div>
              <div className='homeSectionBlock'>
                <p className='text-2xl p-4 text-center'>
                  {dictionary.Home.customContent}
                </p>
              </div>
            </div>

            {/* Section2 -- Beautiful */}
            <div className='homeSection'>
              <div className='homeSectionBlock'>
                <p className='text-2xl p-4 text-center'>
                  {dictionary.Home.beautyContent}
                </p>
              </div>
              <div className='homeSectionBlock'>
                <h3 className='text-4xl'>
                  {dictionary.Home.beautyTitle}
                </h3>
              </div>
            </div>

            {/* Section3 -- powerful */}
            <div className='homeSection'>
              <div className='homeSectionBlock'>
                <h3 className='text-4xl'>
                  {dictionary.Home.powerTitle}
                </h3>
              </div>
              <div className='homeSectionBlock'>
                <p className='text-2xl p-4 text-center'>
                  {dictionary.Home.powerContent}
                </p>
              </div>
            </div>

            {/* Section4 -- versatile */}
            <div className='homeSection'>
              <div className='homeSectionBlock'>
                <p className='text-2xl p-4 text-center'>
                  {dictionary.Home.versContent}
                </p>
              </div>
              <div className='homeSectionBlock'>
                <h3 className='text-4xl'>
                  {dictionary.Home.versTitle}
                </h3>
              </div>
            </div>

            {/* Section5 -- detailed */}
            <div className='homeSection'>
              <div className='homeSectionBlock'>
                <h3 className='text-4xl'>
                  {dictionary.Home.detailTitle}
                </h3>
              </div>
              <div className='homeSectionBlock'>
                <p className='text-2xl p-4 text-center'>
                  {dictionary.Home.detailContent}
                </p>
              </div>
            </div>
          </div>

        </main>
      </>
  )
}


/* 
custom  --> any design
Beautiful --> theme mang.
Powerful --> SEO
Versatile --> i18nt
Detailed --> special attn
*/

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
    Analytics report
*/