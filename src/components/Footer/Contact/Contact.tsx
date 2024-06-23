import "./Contact.css";

export const Contact = () => {
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };

    return (
        <div className="contact" id="contact">
            <div className="title">
                <h1><i className="fa-regular fa-envelope"></i></h1>
                <h2>contact</h2>
            </div>
            <div className="contact-form">
                <form action="submit" method="post" onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input required={true} type="text" name="name" className="input" placeholder="Nom"/>
                        <label className="user-label"><i className="fa-regular fa-user"></i></label>
                    </div>
                    <div className="input-group">
                        <input required={true} type="email" name="email" className="input" placeholder="E-mail"/>
                        <label className="user-label"><i className="fa-regular fa-envelope"></i></label>
                    </div>
                    <div className="input-group">
                        <textarea required={true} name="message" autoComplete="off" className="input" placeholder="Message"/>
                        <label className="user-label"><i className="fa-regular fa-message"></i></label>
                    </div>
                    <div className="input-group">
                        <button type="submit">
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        height="24"
                                    >
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path
                                            fill="currentColor"
                                            d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c-.529-.176-.832.12-.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Envoyer</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default Contact;