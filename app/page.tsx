import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="m-20">
      <div className="flex flex-col lg:flex-row items-center bg-[#2B2929] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-slate-800 text-white space-y-5">
          <h1 className="text-5xl font-bold">
            Welcome to FileStore
            <br/>
            <br/>
            Storing everything for you and your business needs
          </h1>

          <p className="pb-20">
            Enhance your personal storage with Dropbox, 
            offering a simple and efficient way to upload, access and mangage files from anywhere.
          </p>

          <Link href={"/dashboard"} className="flex cursor-pointer p-5 w-fit bg-blue-500">
           Try it for free!
           <ArrowRight className="ml-10"/>
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-100 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
            src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/overview/lp-header-graphite200-1920x1080.mp4"
            type="video/mp4"
            />
            Your browser does not support video tag
          </video>
        </div>

      </div>


      <p className="text-center font-bold text-xl pt-5"> Disclaimer </p>
      <p className="text-center font-light p-2">
        This application is made by Rahul Gite for Learning and education purpose only.
        please feel free to connect with him for any suggestions or inputs.
         Contact Details:
         Email: rahulgite.works@gmail.com
         
      </p>
    </main>
  );
}
