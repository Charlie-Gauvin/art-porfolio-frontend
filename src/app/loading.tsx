import paint from '../../public/assets/.svg';
import Image from 'next/image';

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center bg-background1">
      <div className="text-7xl text-text1">
      <Image
      src={paint}
      width={75}
      height={75}
      alt='Paint loader'
      className='animate-pulse'/>
      </div>
    </div>
  );
}