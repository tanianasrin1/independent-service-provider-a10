import React from 'react';
import './AboutMe.css';
import profile from '../../../images/image/m.jpg';

const AboutMe = () => {
    return (
        <div className='container'>
            <h1 className='about-title mt-4'>About Me:</h1>
            <div className='text-center profile-cart mt-5'>
                
                <img className='profile' width={150} src={profile} alt="" />
                <br />
                <br />
                Name: Tania Nasrin Eva
                <br />
                <strong>Future Goals:</strong> <p>At this stage setting goals is not hard but setting goals that make me feel motivated to achieve them is that is hard. The next step in my career which I think about- </p>
                <ol>
                    <li>Developing my personal brand: Developing my own brand helps me to have opportunities and tech companies reaching out of me. </li>
                    <li>Find best team : Technical talent alone doesn’t offer satisfaction within a team and other qualities are needed. Finding the best team that has the same professional goals as is essential in achieving  goals.Need to have chemistry, trust, conflict resolution and communication to achieve my goals</li>
                    <li>Learn a new technology: Learning new technologies can keep me aware of recent trends in technology and increase my skill set. </li>
                    <li>Improve soft skills: A developer need to have strong programming and coding skills but it's also important to have strong soft skills to advance in the workplace. Soft skills can be things like:

                                 <ul>
                                      <li>Communication </li>
                                      <li>Problem-solving</li>
                                      <li>Creativity</li>
                                      <li>Adaptability</li>
                                      <li>Work ethic</li>
                                      <li>Time management</li>

                               </ul>

                    </li>
                    <li>Get a master's degree: A master's degree is an advanced degree in a specialty subject. A master's degree shows my additional expertise.</li>
                    <li>Increase professional network: A developer can increase their professional network by meeting other people in their field.By  attending conferences, organize meetings and use social media help to build this network.</li>
                    <li>Complete a coding project: A coding project can be new software or a new section of code that improves to understanding my abilities.</li>
                    <li>Complete a system design:It can be good demonstration of my skills and understanding of the components of an efficient system.</li>
                    <li>Become an expert in a domain: This can be a specific software, a programming language or a type of technology. As an expert, it may become a sought-after professional which is consult on projects or work for companies to develop interesting projects based on expertise. </li>
                    <li>Give a presentation: Giving a presentation can help a me to increase  notoriety. Giving presentations is a good way to show a developer's expertise and network with people who positively impact in career.</li>
                </ol>

            </div>
        </div>
    );
};

export default AboutMe;