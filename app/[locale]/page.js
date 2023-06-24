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
        <main className='bg-inherit w-full p-4 border'>

          {/* Title */}
          <h1 className='text-center text-6xl my-4'>
            {dictionary.Home.welcome}
          </h1>

          {/* Subtitle */}
          <h2 className='text-center text-2xl my-8'>
            {dictionary.Home.intro}
          </h2>

          {/* Section1 -- Custom */}
          <div className='flex h-52 w-full justify-center my-8'>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <h3 className='text-4xl'>
                {dictionary.Home.customTitle}
              </h3>
            </div>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <p className='text-2xl p-4'>
                {dictionary.Home.customContent}
              </p>
            </div>
          </div>

          {/* Section2 -- Beautiful */}
          <div className='flex h-52 w-full justify-center my-8'>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <p className='text-2xl p-4'>
                {dictionary.Home.beautyContent}
              </p>
            </div>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <h3 className='text-4xl'>
                {dictionary.Home.beautyTitle}
              </h3>
            </div>
          </div>

          {/* Section3 -- powerful */}
          <div className='flex h-52 w-full justify-center my-8'>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <h3 className='text-4xl'>
                {dictionary.Home.powerTitle}
              </h3>
            </div>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <p className='text-2xl p-4'>
                {dictionary.Home.powerContent}
              </p>
            </div>
          </div>

          {/* Section4 -- versatile */}
          <div className='flex h-52 w-full justify-center my-8'>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <p className='text-2xl p-4'>
                {dictionary.Home.versContent}
              </p>
            </div>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <h3 className='text-4xl'>
                {dictionary.Home.versTitle}
              </h3>
            </div>
          </div>

          {/* Section5 -- detailed */}
          <div className='flex h-52 w-full justify-center my-8'>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <h3 className='text-4xl'>
                {dictionary.Home.detailTitle}
              </h3>
            </div>
            <div className='border flex w-1/3 justify-evenly items-center'>
              <p className='text-2xl p-4'>
                {dictionary.Home.detailContent}
              </p>
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