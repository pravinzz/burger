import React from 'react'
import './Home.scss'
import { Card, Col, Row, Space, Input } from 'antd';
import { TrophyOutlined, SettingOutlined, UnlockOutlined, DashboardOutlined, BookOutlined, FieldTimeOutlined } from '@ant-design/icons';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

import Navbar from '../../components/Navbar/Navbar'
import moouuy from '../images/moouuy.jpg'

const Home = () => {


  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },

    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }

      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className='main-container'>
      <Navbar />


      <div className='container-one'>
        <br />
        <br />
        <br />
        {/* <Row>
          <Col span={1}></Col>
          <Col span={7}>  <Card className='card1' hoverable style={{ marginTop: 16, height: 120 }}>
            <h1 className='logo'>achievement</h1>
            <TrophyOutlined className='icon-align'/>
            <h3>INNOVATIVE PRODUCTS</h3>
            </Card></Col>
          <Col span={1}></Col>
          <Col span={7}><Card className='card1' hoverable style={{ marginTop: 16, height: 120 }}></Card></Col>
          <Col span={1}></Col>
          <Col span={7}><Card className='card1' hoverable style={{ marginTop: 16, height: 120 }}></Card></Col>
        </Row> */}

        <Card className='card1' hoverable style={{ marginTop: 16, height: 120 }}>
          {/* <h5>ENQUIRY</h5> */}
          <h4>NAME</h4>

          <Input placeholder='Enter your Name' className='input-align' />

          <br />
          <br />

          <h4>EMAIL</h4>

          <Input placeholder='Email id' className='input-align' />

          <br />
          <br />

          <h4>MOBILE NO</h4>

          <Input placeholder='Mobile no' className='input-align' />


          <Row>
            <Col span={8}> 
               <Upload {...props} >
              <Button className='upload-align' icon={<UploadOutlined />}>Click to Upload</Button>
            </Upload></Col>
            <Col span={5}></Col>
            <Col span={2}>
              <Button type='primary' className='btn-align'>
                SUBMIT ENQUIRY
              </Button>
            </Col>
          </Row>
        </Card>

        <h3 className='content-align'>
          "CREATING AN USER FRIENDLY WEB BASED 
          APPLICATIONS AND MOBILE APPLICATION "   
        </h3>
        {/* <Card className='card1' hoverable style={{ marginTop: 16, height: 120 }}>

          <Row>
            <Col span={6}>
              <div>
                <h1 className='logo'>achievement</h1>
                <Space>
                  <TrophyOutlined className='icon-align' /><h2>INNOVATIVE PRODUCTS</h2>
                </Space>


                <p>Developing future tech products that innovates the future with <br />
                  quality and having user-friendly products is our CDN's Mission.
                </p>

              </div>


              <div>
                <Space>
                  <SettingOutlined className='icon-align' /> <h2>INTERNET OF THINGS (IOT)</h2>
                </Space>

                <p>Furtim technologies primary goal is to combine the hardware with the
                  software. Cyberdude products is integrated with Internet of Things (IoT).</p>


              </div></Col>
            <Col span={2}></Col>
            <Col span={6}>
              <h1 className='logo'>DESIGNS</h1>
              <div>
                <Space>
                  <UnlockOutlined className='icon-align' /> <h2>DESIGN AND DEVELOPMENT</h2>
                </Space>

                <p>We love designing creative stuffs and we have expertise in developing Light weight Web and Mobile Applications .</p>
              </div>


              <div>
                <Space>
                  <DashboardOutlined className='icon-align' /> <h2>(SAAS) APPS WITH AI</h2>
                </Space>

                <p>With SAAS applications, we automate business workflows integrating with Advanced Artificial
                  Intellegence to automate the industries to predict the future endeavors.</p>
              </div>


            </Col>
            <Col span={1}></Col>
            <Col span={6}>
              <h1 className='logo'>APPLICIATIONS</h1>
              <div>
                <Space>
                  <BookOutlined className='icon-align' /> <h2>MOBILE APP DEVELOPMENT</h2>
                </Space>

                <p>Get a Mobile App which is the glue for all other digital industries to use when approaching convergence.</p>
              </div>


              <div>
                <Space>
                  <FieldTimeOutlined className='icon-align' />  <h2>OUR 24X7 SUPPORT</h2>
                </Space>


                <p>We provide support regarding product, sales, enquiry and premium support towards our products. Find customer centered atmosphere in CyberDude for 24x7.</p>
              </div>
            </Col>
          </Row>





        </Card> */}










      </div>
    </div>
  )
}

export default Home
