import React, { Fragment } from 'react'
import { Button, Col, Row } from 'antd'
import CourseImage from '../assets/images/course-img@3x.png'
import BoxIcon from '../assets/images/box-icon@3x.png'
import TransformImg from '../assets/images/Transform-img.png'
import MediumImg from '../assets/images/medium-img@3x.png'
import LargeImg from '../assets/images/Large-img@3x.png'
import HeartImg from '../assets/images/heart-icon@3x.png'

import { Link } from '@reach/router'

const LifeCoachClient = (props) => {
  return (
    <Fragment>
      <section className='home-section-group client-section-group'>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <h2 className='-font-bold margin-bottom-25'>Start building a Life worth LIVING.</h2>
            <div className='subtitle font-proxima-nova'>
            Wherever you happen to be in life, whatever challenges you face, we have life-changing Coaches, Programs, and other resources to help you tap into your full potential so you can start building a life worth living.
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <img src={CourseImage}/>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider client-main-section col-reverse' gutter={16}>
          <Col md={16} className='card-col -margin-right -margin-bottom'>
            <div className='below-img-section'>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <img src={BoxIcon} style={{width:'80px'}}/>
                  <h4>Behavioral Health Coaching</h4>
                  <p className='card-paragraph-text'>Certified behavioral coaches are licensed psychologists, licensed clinical social workers, and master’s level mental health professionals who work with clients to facilitate healthy and sustainable changes in behaviors so they can increase their happiness and effectiveness at work, home, study, or in social situations.
                  </p>
                  </div>
                <div className='box-container coaching-box-shadow'>
                  <img src={BoxIcon} style={{width:'80px'}}/>
                  <h4>How does it work?</h4>
                  <p className='card-paragraph-text'>Behavioral coaches use the principles of positive psychology, philosophy, motivational interviewing, and goal setting to assist clients in altering their actions, reactions, and behavioral patterns. They use their knowledge and backgrounds to provide education and coaching for many mental health concerns and help you locate mental health treatment resources as needed.
                  </p>
                </div>
              </div>
              <div className='box-container coaching-box-shadow margin-left'>
                <img src={BoxIcon} style={{width:'80px'}}/>
                <h4>What is the Science behind?</h4>
                <p className='card-paragraph-text'> Behavioral Health coaching is based on research and evidence, you and your coach will use a proven system that significantly increases your chance of implementing behavioral changes that last a lifetime. Your coaches will tap into evidence-based treatment modalities such as Dialectical Behavior Therapy (DBT), Cognitive Behavioral Therapy (CBT), ACT etc. and Mindfulness Exercises. Together, you’ll assess your issues and determine the best plan of action, which may include referrals and coordination of care with other community resources.</p>
              </div>
            </div>
          </Col>
          <Col md={6} className='card-col image-col'>
          <div className='box-container coaching-box-shadow'>
          <h4>What can I get help with?</h4>
              <p className='card-paragraph-text'>A behavioral coach can help you in many aspects of your life that affect your overall wellbeing, including:</p>
              <ul className='card-paragraph-text'>
              <li>Work-life balance</li>
              <li>Emotional support</li>
              <li>Spirituality wellness</li>
              <li>Caregiver support</li>
              <li>Anger management</li>
              <li>Substance abuse</li>
              <li>Work-life balance</li>
              <li>Emotional support</li>
              <li> Spirituality wellness</li>
              <li>Caregiver support</li>
              <li>Anger management</li>
              <li>Substance abuse</li>
              <li>Mental health and lifestyle</li>
              <li>Eating disorders</li>
              <li>Depression, anxiety, physical health problems</li>
              <li>Alcohol use</li>
              <li>Gender identity, transgender, sexuality</li>
              <li>Sex life</li>
              <li>Relationships – family, friends, children</li>
              <li>Mindfulness and meditation</li>
              <li>ADHD</li>
              <li>Bipolar disorder</li>
              <li>Cognitive behavioral therapy coaching</li>
              <li>Dialectical behavioral therapy coaching</li>
              <li>Acceptance & Commitment therapy coaching</li>
              <li>Parenting skill</li>
              <li>Personality disorder</li>
              </ul>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='box-container'>
              <h3>Are you ready to transform your life?</h3>
              <p className='paragraph-text'>You know yourself better than anyone. Sometimes the answers to your hardest questions are hidden within. Your coaching session will help you find the key to unlock the door to the realization of inner knowledge.
              </p>
              <Button className='coaching-primary-purple-btn'><Link to={'/coaching/app'}>Get Started</Link></Button>
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <div>
              <img src={TransformImg}/>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='below-img-section'>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h5><strong>DBT for Teens</strong></h5> 
                  <p className='programs-text'>
                  This programs helps to:  </p>
                  <p className='programs-text'>
                  <ul><li>Eliminate ineffective problem behaviors</li>
                  <li>Teach adolescents skills for coping with their emotions safely (e.g. without hurting themselves and without resorting to harmful substances) </li>
                  </ul> 
                  And help teens and adolescents reach the all-around goal of DBT = to live a life worth living.
                  </p>
                  <p className="card-paragraph-text">Sara Edelman</p>
                </div>
              </div>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h5>CBT for Depression</h5>
                  <p className='programs-text'> The program provides opportunities to identify current life situations that may be causing or contributing to your depression. You and your coach identify current patterns of thinking or distorted perceptions that lead to depression. You will learn: </p>
                  <p className='programs-text'>
                  <ul><li>How your actions affect your feelings and thoughts.</li>
                  <li>How you perceive yourself, other people and the world.</li>
                  </ul>
                  CBT focuses on how to improve your state of mind right now, rather than on looking back on the past.
                  </p>
                  <p className="card-paragraph-text">Maureen Grant</p>
                </div>
              </div>
              
            </div>
          </Col>
          <Col md={10} className='card-col image-col'>
            <div>
              <h3>Online Coaching</h3>
              <p className="card-paragraph-text"> How do you pursue your dreams and begin living a life you love Right Now? How do you tap into more knowledge, intuition, energy, and purpose to fuel your days and give you peaceful rest each night? Are you ready to experience healthier and happier relationships, satisfying work, and the joy of knowing you are living your best life?</p>
              <p className="card-paragraph-text">Imagine you had the latest tools from science and medicine to live with authentic vitality. What you need is an expert to get you up to speed, help you create an action plan for step by step manageable change, and compassionately inspire you to rise up to experience your best self. </p>
              <p className="card-paragraph-text">We will help you gain <span className="purpleHighlight">insight</span>, take <span className="purpleHighlight">action</span> and experience <span className="purpleHighlight">transformation</span> in your life to have more <i>Presence</i>, <i>Peace</i>, and <i>Joy</i>.</p>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex divider client-main-section remove-margin' gutter={16}>
          <Col md={24} className='card-col -margin-right -margin-bottom'>
            <div className='below-img-section'>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h5>ACT for Anxiety</h5>
                  <p className='programs-text'>Acceptance and Commitment Therapy (ACT) encourages people to embrace their thoughts and feelings rather than fighting or feeling guilty for them. </p>
                  <p className='programs-text'>The essential components of ACT include letting go of the struggle to control unwanted thoughts and feelings, being mindfully aware of the present moment, and committing to a course of action that is consistent with what you value most in life. In this way, ACT is about both acceptance and change. It is the acceptance of the thoughts and emotions that accompany a difficult but valuable act that allow you to take that action. Acceptance of your anxious thoughts and feelings allows you to focus more clearly on the present and to take the steps that move you closer to the life you truly want to live. </p>
                  <p className="card-paragraph-text">Geraldine Murphy</p>
                </div>
              </div>
              <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h5>DBT for Substance Abuse </h5>
                  <p className='programs-text'>Dialectical behavior therapy helps recovering addicts learn several skills—mindfulness, distress tolerance, interpersonal effectiveness, and emotional regulation—that are effective at helping addicted people stop using drugs and alcohol. You will learn to: </p>
                  <p className='programs-text'>
                  <ul><li>Seek out environments and peer groups that discourage drug use.   </li>
                  <li> Remove triggers such as drug paraphernalia or unhealthy relationships from your daily live.</li>
                  <li>Bolster self-esteem and confidence to stay sober through stressful periods</li>
                  </ul> 
                  In addition to these components, you will also complete homework assignments. These may include journaling the behaviors, urges and emotions they experience throughout the day.                  </p>
                  <p className="card-paragraph-text">Phil Cummins</p>
                </div>
              </div>
              <div className='flex-container'>
              <div className='box-container coaching-box-shadow'>
                <div className='flex-justify'>
                  <img src={MediumImg} width={100}/>
                  <img src={HeartImg} width={30}/>
                </div>
                <h5>Positive Psychology</h5>
                <p className='programs-text'>Positive Psychology aims to discover and promote factors, processes and strategies that allow individuals to thrive. The program delivers two foundational components: </p>
                <p className='programs-text'>
                  <ul><li>A deeper self-awareness around core needs and values.</li>
                  <li> A tangible tool or strategy to cope with everyday challenges.</li>
                  </ul> 
                  Essentially, Positive Psychology seeks to enhance quality of life and maximize well-being by identifying and building upon existing strengths, assets and resources.
                  </p>
                <p className="card-paragraph-text">Jaya Parekh</p>
              </div>
            </div>
             <div className='flex-container'>
                <div className='box-container coaching-box-shadow'>
                  <div className='flex-justify'>
                    <img src={MediumImg} width={100}/>
                    <img src={HeartImg} width={30}/>
                  </div>
                  <h5>Recovery from Eating Disorders</h5>
                  <p className='programs-text'>
                  This programs helps to:  </p>
                  <p className='programs-text'>
                  <ul><li>Clarify and work towards your recovery goals</li>
                  <li>Heal negative body image </li>
                  <li>Learn new ways to cope with difficult thoughts and feelings </li>
                  <li>Eat meals and fear foods together as you feel ready</li>
                  </ul> 
                  And learn to live with difficult emotions during recovery and beyond.
                  </p>
                  <p className="card-paragraph-text">Ian McMillan</p>
                </div>
              </div>
              </div>
            <div style={{ textAlign: 'center', marginTop: 20 }}>
              <Button className='coaching-primary-purple-btn'><Link to={'/coaching/app'}>Programs</Link></Button>
            </div>
          </Col>
        </Row>
        <Row className='card-row -margin-bottom -row-flex col-reverse' gutter={16}>
          <Col md={12} className='card-col -margin-right -margin-bottom'>
            <div className='box-container'>
              <h3>Discover the secret of living life with Passion</h3>
              <p className='font-proxima-nova'>When you live your life you want to live it to the fullest. You want to feel joy and excitement daily, and you want to keep that fire inside of you alive. </p>
              <Button className='coaching-primary-purple-btn'><Link to={'/coaching/app'}>Get Started</Link></Button>
            </div>
          </Col>
          <Col md={12} className='card-col image-col'>
            <div>
              <img src={LargeImg}/>
            </div>
          </Col>
        </Row>
      </section>
    </Fragment>
  )
}

export default LifeCoachClient
