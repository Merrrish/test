import { formatQuantity } from '@/utils/format';

type PropertyDetailsProps = {
  details: {
    privateroom: number;
    breakfast: number;
    guests: number;
    beds: number;
  };
};

function PropertyDetails({
  details: { privateroom, breakfast, guests, beds },
}: PropertyDetailsProps) {
  return (
    <p className='text-md font-light '>
      <span>{formatQuantity(privateroom, 'privateroom')} &middot; </span>
      <span>{formatQuantity(breakfast, 'bath')} &middot; </span>
      <span>{formatQuantity(guests, 'guest')} &middot; </span>
      <span>{formatQuantity(beds, 'bed')}</span>
    </p>
  );
}
export default PropertyDetails;