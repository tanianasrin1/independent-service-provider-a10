import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='container'>
            <h2 className='blogs-title mt-4'>This is Blogs page</h2>
            <div>
                <ul>
                 <li><h6>Difference between authorization and authentication:</h6></li>
                </ul>
                <p>Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. The first step is to confirm the identity of a passenger to make sure they are who they say they are. Once a passenger’s identity has been determined, the second step is verifying any special services the passenger has access to, whether it’s flying first-class or visiting the VIP lounge.  In the digital world, authentication and authorization accomplish these same goals. Authentication is used to verify that users really are who they represent themselves to be. Once this has been confirmed, authorization is then used to grant the user permission to access different levels of information and perform specific functions, depending on the rules established for different types of  users.</p>
            </div>
            <div>
                <ul>
                 <li><h6>Why are you using firebase? What other options do you have to implement authentication?</h6></li>
                </ul>
                <p>Firebase Analytics gives  undeniable insight into user behavior. You can use this knowledge to make informed decisions about how to market your app better and to reach out to the audiences that you want to target. The unique features it offers also allows you to analyze the performance of your campaigns across organic and paid channels to understand which methods are most effective in regards to the specific users that you want to reach. That's why i am using Firebase.</p>
                <p>There many options have to implement Authentication without Firebase such as:</p>
                <ol>
                    <li>Parse</li>
                    <li>Back4App</li>
                    <li>AWS Amplify</li>
                    <li>Kuzzle</li>
                    <li>Couchbase etc.</li>
                </ol>
            </div>

            <div>
                <ul>
                 <li><h6>What other services does firebase provide other than authentication</h6></li>
                </ul>
                <p>There are many services which firebase provides without authentication,most useful of them are:</p>
                <ol>
                    <li>Cloud Messaging: Deliver and receive messages in a more reliable way across platforms</li>
                    <li>Hosting: Deliver web content faster</li>
                    <li>Remote Configuration: Customize your app on the go</li>
                    <li>Test Lab: Test in the lab instead of on your users</li>
                    <li>Crash Reporting: Keep your app stable</li>
                    <li>Realtime Database: Store and sync app data in real time</li>
                    <li>Storage: File storing made easy etc.</li>
                </ol>
            </div>
           
        </div>
    );
};

export default Blogs;