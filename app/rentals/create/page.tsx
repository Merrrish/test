import FormInput from '@/components/form/FormInput';
import FormContainer from '@/components/form/FormContainer';
import { createPropertyAction } from '@/utils/actions';
import { SubmitButton } from '@/components/form/Buttons';
import PriceInput from '@/components/form/PriceInput';
import CategoriesInput from '@/components/form/CategoriesInput';
import TextAreaInput from '@/components/form/TextAreaInput';
import CountriesInput from '@/components/form/CountriesInput';
import ImageInput from '@/components/form/ImageInput';
import CounterInput from '@/components/form/CounterInput';
import AmenitiesInput from '@/components/form/AmenitiesInput';

// Helper function to generate time slots
const generateTimeSlots = () => {
  const timeSlots = [];
  for (let i = 0; i < 24; i++) {
    const hour = i < 10 ? `0${i}` : i;
    timeSlots.push(`${hour}:00`);
  }
  return timeSlots;
};

function CreatePropertyPage() {
  return (
    <section>
      <h1 className='text-2xl font-semibold mb-8 capitalize'>
        create property
      </h1>
      <div className='border p-8 rounded'>
        <h3 className='text-lg mb-4 font-medium'>General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className='grid md:grid-cols-2 gap-8 mb-4'>
            <FormInput
              name='name'
              type='text'
              label='Name (20 limit)'
              defaultValue='Name of property'
            />
            <FormInput
              name='tagline'
              type='text'
              label='Tagline (20 limit)'
              defaultValue='Town of property'
            />
            <FormInput
              name='address'
              type='text'
              label='Address (20 limit)'
              defaultValue='Address of property'
            />
            <FormInput
              name='host'
              type='text'
              label='Host (20 limit)'
              defaultValue='Host of property'
            />
            {/* price */}
            <PriceInput />
            {/* categories */}
            <CategoriesInput />
          </div>
          
          {/* Text area / description */}
          <TextAreaInput
            name='description'
            labelText='Description (10 - 500 words)'
          />
          
          <div className='grid sm:grid-cols-2 gap-8 mt-4'>
            <CountriesInput />
            <ImageInput />
          </div>
          
          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Accommodation Details
          </h3>
          <CounterInput detail='guests' />
          <CounterInput detail='privateroom' />
          <CounterInput detail='beds' />
          <CounterInput detail='breakfast' />
          
          {/* Estimated Time of Arrival Field */}
          <h3 className='text-lg mt-8 mb-4 font-medium'>
            Estimated Time of Arrival (ETA)
          </h3>
          <div className='mb-4'>
            <label htmlFor='eta' className='block text-sm font-medium text-gray-700'>
              Estimated Arrival Time (24-hour clock)
            </label>
            <select
              id='eta'
              name='eta'
              className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
            >
              {generateTimeSlots().map((timeSlot) => (
                <option key={timeSlot} value={timeSlot}>
                  {timeSlot}
                </option>
              ))}
            </select>
          </div>

          <h3 className='text-lg mt-10 mb-6 font-medium'>Amenities</h3>
          <AmenitiesInput />
          
          <SubmitButton text='create rental' className='mt-12' />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
