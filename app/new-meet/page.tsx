'use client';


import NewMeetupForm from '../../components/meetups/NewMeetupForm';

import Layout from  "../../components/layout/Layout";

const newmeet=()=>{
    const onAddMeetup=(data)=>{
        console.log(data)
    }

return(
    <Layout>
        <NewMeetupForm  onAddMeetup={onAddMeetup}/>
    </Layout>
)

}
export default newmeet;