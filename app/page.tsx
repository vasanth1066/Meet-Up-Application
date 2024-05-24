
import MeetupList from "../components/meetups/MeetupList";
import Layout from "../components/layout/Layout"

export default function Home() {
  const dummydata=[{
    id:"1",
    title:"First MeetUp",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AR0_HpWq1FgbKUsLiYUJm2QcQIfdU4C0Qw&s",
    address:"SomeWhere Under The Earth",
  },{
    id:"2",
    title:"Second MeetUp",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-AR0_HpWq1FgbKUsLiYUJm2QcQIfdU4C0Qw&s",
    address:"SomeWhere Under The Earth",
  }]
  return (
    <Layout>
      <MeetupList meetups={dummydata}/>
    </Layout>
    
  );
}
