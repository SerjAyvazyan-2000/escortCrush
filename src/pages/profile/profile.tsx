import './profile.scss'
import ProfileSidebar from "../../shared/profile-sidebar/profile-sidebar.tsx";
import Checkbox from "../../assets/ui/checkbox/checkbox.tsx";
import InputBlock from "../../shared/inputBlock/inputBlock.tsx";

const Profile = () => {
    return <section className='profile-section'>
        <div className='container'>
            <div className='profile-body G-flex'>
                <ProfileSidebar/>

                <div className='profile-info-body'>
                    <div className='profile-promotion G-align-center'>
                        <div className='p-promotion-icon G-flex'>
                            <img src="/promotionImg.svg" alt=""/>
                        </div>
                        <p>Get $100 on your CrushBalance — just sign up, verify your ID and make your first top-up!</p>

                        <i className='icon icon-union'></i>
                    </div>

                    <div className='profile-cnt-wrapper G-flex'>
                        <div className='profile-main-cnt'>
                            <h3 className='profile-page-title'>Fill out Advertising Profile</h3>

                            <div className='choose-category'>
                                <div className='p-category-header active G-align-center'>
                                    <div className='G-center'>
                                        <i className='icon icon-check'></i>
                                    </div>
                                    <p>Choose your category</p>
                                </div>
                                <div className='choose-category-cnt G-flex'>
                                    <div className='choose-category-items G-flex-column'>
                                        <div className='choose-category-item G-align-center'>
                                            <Checkbox active={true}/>
                                            <p>Escorts</p>
                                        </div>

                                        <div className='choose-category-item G-align-center'>
                                            <Checkbox/>
                                            <p>BDSM</p>
                                            <i className='icon icon-info'></i>
                                        </div>
                                        <div className='choose-category-item G-align-center'>
                                            <Checkbox/>
                                            <p>Stars</p>
                                            <i className='icon icon-info '></i>

                                        </div>
                                        <div className='choose-category-item G-align-center'>
                                            <Checkbox/>
                                            <p>Erotic massage</p>
                                            <i className='icon icon-info '></i>
                                        </div>

                                        <div className='choose-category-item G-align-center'>
                                            <Checkbox/>
                                            <p>Trans</p>
                                        </div>


                                    </div>

                                    <div className='c-category-info'>
                                        <p>To be listed in the Erotic Massage category, your profile description must
                                            clearly show that you belong in this category. This category means you offer
                                            erotic massage, but it does not include sexual services. If you plan to
                                            offer various sexual services, you should choose The Escorts category
                                            instead, and list erotic massage as an extra skill.</p>
                                    </div>
                                </div>
                            </div>

                            <div className='work-nickname'>
                                <div className='work-nickname-input G-align-end'>
                                    <InputBlock inputTitle={'Work Nickname*'} name={'name'} variant={'lightPeach'}/>
                                    <div className='w-nickname-edit G-center'>
                                        <i className='icon icon-edit2'></i>
                                    </div>
                                </div>

                                <p className='input-clue'>30 characters max. Keep it classy, sexy and simple</p>
                            </div>


                            <div className='p-upload-block p-block'>
                                <div className='p-category-header G-align-center'>
                                    <div className='G-center'>
                                        <i className='icon icon-check'></i>
                                    </div>
                                    <p>Upload your gallery photos</p>
                                </div>

                                <div className='upload-texts-block G-flex-column'>
                                    <p>
                                        <strong>Show Your Best Side</strong> - these are the images clients will see in
                                        your ads. Drag a
                                        photo to the first position to make it your main one. Please upload between 5
                                        and 25 photos to complete your gallery. The more photos you upload, the more
                                        eyes you’ll catch!
                                    </p>

                                    <p>
                                        <strong className='text-wrap'>Photo Rules</strong> Keep it sexy, not explicit.
                                        <span className='text-wrap'>✅ Erotic photos are welcome — but no
                                        close-up shots of genitals or porn-style content</span>
                                        ✅ All photos must be original,
                                        aesthetic, and truly represent you
                                        <span className='text-wrap'>🚫 No heavy retouching, AI images, watermarks,
                                        tags or digits, or someone else’s pics</span>
                                    </p>

                                    <p>
                                        Violating these rules can get your profile permanently suspended. We’re here to
                                        protect real models and real clients.
                                    </p>
                                </div>


                                <div className='upload-images-block '>
                                    <div className='uploaded-images G-flex'>

                                        <div className='uploaded-img-wrapper'>
                                            <div className='uploaded-img uploaded-error'>
                                                <img src="/uploadedImg.jpg" alt=""/>


                                                <div className='remove-block G-center'>
                                                    <i className='icon icon-union'></i>
                                                </div>
                                            </div>
                                            <p>Main Profile Photo</p>
                                        </div>
                                        <div className='uploaded-img-wrapper'>
                                            <div className='uploaded-img '>
                                                <img src="/uploadedImg.jpg" alt=""/>

                                                <div className='uploaded-succes'>
                                                    <i className='icon icon-check'></i>
                                                </div>

                                                <div className='remove-block G-center'>
                                                    <i className='icon icon-union'></i>
                                                </div>
                                            </div>
                                        </div>




                                        <label className='upload-img-label G-center'>
                                            <input type="file"/>
                                            <i className='icon icon-add'></i>
                                        </label>

                                    </div>

                                    <div className='upload-errors G-flex-column'>
                                        <div className='upload-error G-align-center'>
                                            <i className='icon icon-info'></i>
                                            <p>You need at least 5 photos to complete your gallery.</p>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>


                        <div className='profile-progress-bar'></div>

                    </div>
                </div>
            </div>
        </div>
    </section>
};

export default Profile

