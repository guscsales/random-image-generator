import RandomImage from '@/components/random-image';
import getRandomImageData from '@/services/get-random-image-data';
import { faker } from '@faker-js/faker';

export default async function Home() {
  const initialImageData = await getRandomImageData({
    word: faker.animal.dog(),
  });

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-24">
      <h1 className="text-4xl font-bold">Random Image App</h1>

      <RandomImage initialImageData={initialImageData} />
    </main>
  );
}
