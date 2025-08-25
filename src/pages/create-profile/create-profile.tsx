import './create-profile.scss'
import InputBlock from "../../shared/inputBlock/inputBlock.tsx";
import WhyChooseUs from "../../shared/whyChooseUs/whyChooseUs.tsx";
import {useState} from "react";
import {NavLink} from "react-router-dom";


const CreateProfile = () => {



    const [currentStep, setCurrentStep] = useState(1)





    const handleStep1 = (e: React.MouseEvent) => {
        e.preventDefault()
        setCurrentStep(1)
    }

    const handleStep2 = () => {
        setCurrentStep(2)
    }

    return <section className='create-profile-section  first-section last-section'>
        <div className='container'>

            <div className='create-profile-body G-flex'>

                <div className='create-profile-column'>


                    {currentStep === 1  &&

                        <div className='profile-column-left'>
                            <div className='client-model-tabs G-align-center'>
                                <button>I am a client</button>
                                <button className='active'>I am a model</button>
                            </div>

                            <form className='create-profile-form' action="">
                                <h3 className='form-title'>Create profile</h3>


                                <div className='p-form-inputs G-flex-column'>
                                    <InputBlock variant={"white"} inputTitle={'Work Nickname'} name={'name'} tags={true}/>
                                    <InputBlock variant={"white"}  inputTitle={'Email address'} name={'email'} tags={false}/>

                                </div>

                                <div className='form-actions G-flex-column'>
                                    <div className='form-agree G-align-center'>
                                        <div className='form-agree-icon'></div>
                                        <p>I’m over 18, I agree to the terms, and I’m here for real connections</p>
                                    </div>

                                    <button onClick={handleStep2} className='btn-reef-gradient'>Create profile</button>

                                </div>


                            </form>
                        </div>
                    }

                    {currentStep === 2 &&
                        <div className='profile-column-left'>
                            <div className='client-model-tabs G-align-center'>
                                <button>I am a client</button>
                                <button className='active'>I am a model</button>
                            </div>

                            <form className='create-form-step2 G-flex-column' action="">


                                <div className='p-form-inputs G-flex-column'>
                                    <InputBlock variant={'white'} inputTitle={'Enter the code sent to your email'} name={'email'}
                                                tags={false}/>
                                </div>

                                <p className='p-form-tag'>No code yet? Check your inbox (and spam), or <NavLink to="/">resend a new
                                    confirmation code</NavLink></p>


                                <button onClick={(e)=>e.preventDefault()}  className='btn-reef-gradient'>Become our model</button>


                            </form>

                        </div>

                    }


                    {currentStep === 2 &&
                        <div className='profile-column-left another-way G-flex-column'>
                            <div className='another-way-tag G-align-start'>
                                <i className='icon icon-info'></i>
                                <p>
                                    Sometimes your email provider gets a little jealous and blocks messages from
                                    Escortcrush 💌 Let’s try a different address!
                                </p>
                            </div>

                            <button onClick={handleStep1} className='another-way-btn'>Sign up with a different email address</button>
                        </div>

                    }


                    <div className='p-promotion G-align-center'>
                        <div className='promotion-img G-center'>
                            <img src="/promotionImg.svg" alt=""/>
                        </div>
                        <p>Get $100 on your CrushBalance — just sign up, verify your ID and make your first top-up!</p>
                    </div>


                </div>


                <div className='create-profile-column'>
                    <WhyChooseUs/>
                </div>

            </div>
        </div>

    </section>
};

export default CreateProfile;