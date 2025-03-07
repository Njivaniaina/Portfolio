// import emailjs from '@emailjs/browser';
//
import { useForm, ValidationError } from "@formspree/react";

const Contact: React.FC = () => {
  // const form = useRef();

  /*const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ggqnmta', 'template_voltgpa', form.current, {
        publicKey: '23f1sHieB3bzGJ7kz',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };*/

  const [state, handleSubmit] = useForm("mrbpzlkd");
  if (state.succeeded) {
    return (
      <div className=" flex items-center justify-center w-full ">
        <h1 className="text-white font-bold text-[35px]">Thank you!</h1>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#0A0A0A] mt-[50px] pt-[20px] pb-[50px] flex justify-center items-center">
      <div className="bg-[#363636] px-[20px] sm:px-[50px] py-[20px] w-full max-w-[400px] rounded-[10px]">
        <form onSubmit={handleSubmit} className="w-full h-full">
          <h2 className="text-neutral-300 text-[1.25rem] font-bold">
            Contact me
          </h2>
          <h1 className="text-white font-bold text-[2rem] sm:text-[2.5rem]">
            More information
          </h1>

          {
            /*
          <div className="flex flex-col">
            <label htmlFor="user" className="text-[#A7A5A5] text-[1.125rem] py-[5px]">
              Name:
            </label>
            <input
              type="text"
              name="user"
              id="user"
              className="border-white border-[1px] bg-neutral-500 h-[35px] text-white placeholder:text-white text-[1rem] px-[5px]"
              placeholder="Your name...."
            />
                     </div>*/
          }

          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="text-[#A7A5A5] text-[1.125rem] py-[5px]"
            >
              E-mail:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-white border-[1px] bg-neutral-500 h-[35px] text-white placeholder:text-white text-[1rem] px-[5px]"
              placeholder="exemple@gmail.com"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {
            /*
          <div className="flex flex-col">
            <label htmlFor="subject" className="text-[#A7A5A5] text-[1.125rem] py-[5px]">
              Subject:
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              className="border-white border-[1px] bg-neutral-500 h-[35px] text-white placeholder:text-white text-[1rem] px-[5px]"
              placeholder="Title ..."
            />
          </div>*/
          }

          <div className="flex flex-col">
            <label
              htmlFor="text"
              className="text-[#A7A5A5] text-[1.125rem] py-[5px]"
            >
              Message:
            </label>
            <textarea
              name="message"
              id="text"
              className="border-white border-[1px] bg-neutral-500 min-h-[155px] text-white placeholder:text-white text-[1rem] px-[5px]"
              placeholder="Type here ...."
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <button
            type="submit"
            // value="Send"
            disabled={state.submitting}
            className="text-center py-[5px] mt-[20px] w-full h-[48px] border-white border-[1px] rounded-[24px] cursor-pointer hover:bg-neutral-500 text-white"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
