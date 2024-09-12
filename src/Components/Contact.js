import { MDBBtn, MDBCard, MDBIcon } from "mdb-react-ui-kit";
import "./css-components/contact.css";

function Contact() {
    return (
        <div className="new_home_web">
            <div className="responsive-container-block big-container">
                <img
                    className="imgBG"
                    src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/aw65.png"
                />
                <div className="responsive-container-block textContainer">
                    <div className="topHead">
                        <p className="text-blk heading">
                            Get in
                             <span className="orangeText"> touch</span>
                        </p>
                        <div className="orangeLine" id="w-c-s-bgc_p-2-dm-id"></div>
                    </div>
                    <p className="text-blk subHeading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna al iqua.
                    </p>
                </div>
                <div className="responsive-container-block container">
                    <div
                        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-7 wk-ipadp-10 line"
                        id="i69b"
                    >
                        <form className="form-box">
                            <div className="container-block form-wrapper">
                                <div className="responsive-container-block">
                                    <div className="left4">
                                        <div
                                            className="responsive-cell-block wk-ipadp-6 wk-tab-12 wk-mobile-12 wk-desk-6"
                                            id="i10mt-2"
                                        >
                                          <input type='text' className="input" placeholder='First Name'  required/>
                                        </div>
                                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                        <input type='text' className="input" placeholder='Last Name'  required/>
                                        </div>
                                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12">
                                            <input type="email" required
                                                className="input"
                                          
                                                placeholder="Email Address"
                                            />
                                        </div>
                                        <div className="responsive-cell-block wk-desk-6 wk-ipadp-6 wk-tab-12 wk-mobile-12 lastPhone">
                                            <input type="text" className="input"  placeholder=" Your Subject"
                                            />
                                        </div>
                                    </div>
                                    <div
                                        className="responsive-cell-block wk-tab-12 wk-mobile-12 wk-desk-12 wk-ipadp-12"
                                        id="i634i-2"
                                    >
                                        <textarea className="textinput" placeholder="Message" defaultValue={""}
                                        />
                                    </div>
                                </div>
                                <a className=" send" href="#" id="w-c-s-bgc_p-1-dm-id">
                                    Send Message
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Contact;
