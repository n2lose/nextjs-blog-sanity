import Link from 'next/link'
import { AiFillMail } from 'react-icons/ai'
import { FaLinkedin, FaFacebook, FaGit } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'
import imageContact from '../public/assets/domenico-loia.jpg'
import Image from 'next/image'


type FooterProps = {
    siteAuthor: string;
    siteTitle: string;
  };

const Footer:React.FC<FooterProps> = ({siteAuthor, siteTitle}) => {
  return (
    <div  id='contact' className="w-full lg-h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h3 className="text-xl tracking-widest uppercase text-[#56515e]">
          {siteTitle}
        </h3>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image src={imageContact} alt="" />
              </div>
              <div>
                <h2 className="py-2">{siteAuthor}</h2>
                <p>Front-End developer</p>
                <p className="py-4">
                  I am available for freelancer or full-time positions. Contact me and lets talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect with me</p>
                <div className="flex items-center justify-between py-4">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300">
                    <FaLinkedin size={24} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300">
                    <FaFacebook size={24} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#f1502f] hover:scale-125 ease-in duration-300">
                    <FaGit size={24} />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:text-[#0e76a8] hover:scale-125 ease-in duration-300">
                    <AiFillMail size={24} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid: md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="resize-none border-2 rounded-lg p-3 border-gray-300"
                    rows={10}
                  />
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/" className="uppercase">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className='m-auto text-[#5651e5]' size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
