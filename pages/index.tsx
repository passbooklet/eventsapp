import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from "next/router";
import Newdeals from '@/components/newdeals/Newdeals';


export default function Home() {
  const router = useRouter();


  const loginpage = () => {
    router.push('/Login')
  }
  const signpage = async () => {
    router.push('/Signup')
  }
 
  return (
    <>
      <Head>
        <title>Wolf-Events</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/sneaker.png" />
      </Head>
      <main>
        <Container fluid>
          <Row className={styles.colorgray}>
            <Col xs={12} md={6} lg={6}>
              <br /><br />
              <h1 >Welcome</h1>
              <div>
                <br/>
                <div className={styles.loader}>
                  <div className={styles.scanner}>

                    <h1>Create Events with WOLF EVENTS</h1>
                  </div>
                </div>
                <br/>
                <p className={styles.hcentre}>Eventbrite is a popular hosting site that allows users to create and join events. With a user-friendly interface, Eventbrite enables event organizers to easily set up and manage events of all types and sizes, from local meetups to large-scale conferences. Attendees can easily browse and register for events,
                  purchase tickets, and receive event updates and reminders.
                 .</p>
                 <button onClick={signpage} className={styles.button} >Sign up</button>
                 <button onClick={loginpage} className={styles.button} >Login</button>
              </div>
            </Col>
            <Col xs={12} md={12} lg={6}>
    <Image src="/index1.jpg" alt="home img" height={2000}  width={1000} layout="responsive"/>
            </Col>
          </Row>
        
        </Container>
        <Newdeals/>
      </main>
    </>
  )
}
