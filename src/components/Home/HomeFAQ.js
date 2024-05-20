import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
export const HomeFAQ = () => {
  return (
    <>
    <div className="home-faq">
        <div className="container">   
            <div className="row"> 
                <div className="col-lg-12">
                    <h4 className='heading center-heading'>Frequently asked questions</h4>
                </div>

                <div className="col-lg-12">               
                    <Accordion defaultActiveKey="0" className='faq-accord'>
                        <Accordion.Item eventKey="0">
                          <Accordion.Header>Is it possible to get the same Driver-Partner assigned for all my trips?</Accordion.Header>
                            <Accordion.Body>
                            The Driver-Partners for each trip are allocated on the basis of a lot of factors including shift timings, ride timings, their vicinity to the location, and more. Hence, the allocation of the same Driver-Partner for each ride isn’t feasible.
                            </Accordion.Body>
                          </Accordion.Item>

                          <Accordion.Item eventKey="1">
                              <Accordion.Header>How can I share my ride details with anyone?</Accordion.Header>
                              <Accordion.Body>
                            The Driver-Partners for each trip are allocated on the basis of a lot of factors including shift timings, ride timings, their vicinity to the location, and more. Hence, the allocation of the same Driver-Partner for each ride isn’t feasible.
                              </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="2">
                              <Accordion.Header>How can I share my carbon savings with the world?</Accordion.Header>
                              <Accordion.Body>
                            The Driver-Partners for each trip are allocated on the basis of a lot of factors including shift timings, ride timings, their vicinity to the location, and more. Hence, the allocation of the same Driver-Partner for each ride isn’t feasible.
                              </Accordion.Body>
                            </Accordion.Item>
                
                            <Accordion.Item eventKey="3">
                              <Accordion.Header>How can I use referrals?</Accordion.Header>
                              <Accordion.Body>
                            The Driver-Partners for each trip are allocated on the basis of a lot of factors including shift timings, ride timings, their vicinity to the location, and more. Hence, the allocation of the same Driver-Partner for each ride isn’t feasible.
                              </Accordion.Body>
                            </Accordion.Item>
                            
                            <Accordion.Item eventKey="4">
                              <Accordion.Header>What is the space capacity inside CABI Cars?</Accordion.Header>
                              <Accordion.Body>
                            The Driver-Partners for each trip are allocated on the basis of a lot of factors including shift timings, ride timings, their vicinity to the location, and more. Hence, the allocation of the same Driver-Partner for each ride isn’t feasible.
                              </Accordion.Body>
                          </Accordion.Item>
                    </Accordion>              
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
