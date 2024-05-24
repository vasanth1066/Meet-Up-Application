import Layout from '@/components/layout/Layout';
import MeetUpDetails from '../../components/meetups/MeetUpDetails';


const DisplayMeetupDetails=()=>{
    return(
        <Layout>
        <MeetUpDetails  title="First MeetUp"
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AR0_HpWq1FgbKUsLiYUJm2QcQIfdU4C0Qw&s"
        address="SomeWhere Under The Earth"></MeetUpDetails>
        </Layout>

      
    )
}

export default DisplayMeetupDetails;