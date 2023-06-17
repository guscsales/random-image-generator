type GetRandomImageURLParams = {
  word: string;
};

export default async function getRandomImageData({
  word,
}: GetRandomImageURLParams) {
  const response = await fetch(
    `https://loremflickr.com/g/320/240/${word.split(' ').join(',')}`
  );
  const data = await response.blob();
  const imageData = Buffer.from(await data.arrayBuffer());

  return `data:${data.type};base64,${imageData.toString('base64')}`;
}
