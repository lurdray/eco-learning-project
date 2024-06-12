import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="px-5 md:px-20 bg-white">
      <div className="flex flex-col md:flex-row justify-between py-5">
        <div className="max-w-lg space-y-6">
        <Link href="/" className="font-bold text-lg">
        <Image
          src="/logo.svg"
          alt="logo"
          className="max-w-[180px] w-full"
          width={1000}
          height={1000}
        />
      </Link>
          <p className="text-sm max-w-xs">Be the first to receive all the recent updates, articles, and valuable materials.</p>
          <form action="" className="flex flex-col md:flex-row gap-5">
            <input type="email" placeholder="Email Address" className="max-w-[14em] p-3 border rounded" />
            <button className="text-sm bg-custom-lime p-2 px-5 rounded text-white">
              Register
            </button>
          </form>
        </div>

        <div className="space-y-4 tex-sm text-gray-600">
          <h4 className="text-gray-400">Company</h4>
          <p>About</p>
          <p>Security</p>
          <p>Blog</p>
          <p>Careers <span className="text-custom-lime bg-gray-200 rounded-full p-2 text-xs">{"We're"} Hiring</span></p>
          <p>Senior Champions</p>
          <p>Junior Adventurers</p>
          <p>Senior Champions</p>
          <p>Junior Adventurers</p>
          <p>Senior Champions</p>
        </div>

        <div className="space-y-4 tex-sm text-gray-600">
          <h4 className="text-gray-400">Customer Support</h4>
          <p>Mass Payments</p>
          <p>Debit Card</p>
          <p>Assets</p>
          <p>FAQ</p>
        </div>

        <div className="space-y-4 tex-sm text-gray-600">
          <h4 className="text-gray-400">Industry Solutions</h4>
          <p>Financial Service</p>
          <p>Fashion & Beauty</p>
          <p>Agriculture</p>
          <p>Manufacturing</p>
          <p>Education</p>
          <p>Energy & Environment</p>
        </div>
      </div>

      <hr className="my-5" />

      <section className="py-5 pb-10 flex flex-col md:flex-row justify-between text-xs text-gray-600">
        <div className="flex flex-col md:flex-row gap-5">
          <p>Terms of Service</p>
          <p>Privacy Policy</p>
          <p>Security</p>
          <p>Sitemap</p>
        </div>
        <p>© 2024 Eco-Learning. All rights reserved.</p>
      </section>
    </footer>
  );
};
export default Footer;
