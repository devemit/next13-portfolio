import { Metadata } from 'next';
import ButtonLink from '@/components/ButtonLink';
import { paragraphone } from '@/lib/info';
import { paragraphtwo } from '@/lib/info';
import { skills } from '@/lib/info';

export const metadata: Metadata = {
  title: 'About | Mitko',
  description: 'Generated by create next app',
};

const page = () => {
  return (
    <section>
      <h1 className='text-white text-4xl'>About Me.</h1>
      <p className='text-[#E5E5E5] my-4 '>
        Hey, I'm Mitko currently working as a freelancer front-end developer.
      </p>
      <p className='text-[#E5E5E5] my-4'>
        I have almost two years of hands-on experience efficiently coding websites and
        applications using modern{' '}
        <span className='text-sky-600'>
          HTML, CSS, JavaScript, Typescript, React, NextJS, TailwindCSS.
        </span>
        Building state-of-the-art, easy to use, user-friendly websites and applications is
        truly a passion of mine.
      </p>
      <p className='text-[#E5E5E5] my-4 '>{paragraphone()}</p>
      <hr />
      <p className='text-[#E5E5E5] my-4 '>{paragraphtwo()}</p>
      <div className='flex gap-2'>
        <ButtonLink label={'Github'} href={'https://github.com/devemit'} />
        <ButtonLink
          label={'Linkedin'}
          href={'https://www.linkedin.com/in/mitko-iliev/'}
        />
      </div>
    </section>
  );
};

export default page;
