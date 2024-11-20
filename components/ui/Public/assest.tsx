import Image from 'next/image';
import autism from '@/components/ui/Public/Screenshot 2024-11-08 224803.png';
import food from '@/public/Screenshot 2024-11-08 224803.png';

const Assets = () => {
  return (
    <div>
      <Image src={autism} alt="Autism" width={500} height={300} />
      <Image src={food} alt="Food" width={500} height={300} />
    </div>
  );
}

export {Assets} ;