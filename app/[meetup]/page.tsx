import { notFound } from 'next/navigation';
import Layout from '@/components/layout/Layout';
import MeetUpDetails from '../../components/meetups/MeetUpDetails';


async function fetchMeetupData(meetupId) {

  if (meetupId === 'm3') {
    return null;
  }

  return {
   
    id: meetupId,
    title:"First MeetUp",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AR0_HpWq1FgbKUsLiYUJm2QcQIfdU4C0Qw&s",
    address:"SomeWhere Under The Earth",
  };
}

const DisplayMeetupDetails = async ({ params }) => {
  const { meetupId } = params;
  const meetupData = await fetchMeetupData(meetupId);

  if (!meetupData) {
    notFound();
  }

  return (
    <Layout>
      <MeetUpDetails 
        title={meetupData.title}
        image={meetupData.image}
        address={meetupData.address}
        description={meetupData.description}
      />
    </Layout>
  );
};

export async function generateStaticParams() {
  return [
    { meetupId: 'm1' },
    { meetupId: 'm2' },
   
  ];
}

export default DisplayMeetupDetails;
